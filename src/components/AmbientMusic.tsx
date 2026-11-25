import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';

/** Official YouTube audio (Warner / The Smiths). Playback via YouTube — we do not host the file. */
const YT_VIDEO_ID = 'siO6dkqidc4';
const TRACK = {
  title: 'There Is a Light That Never Goes Out',
  artist: 'The Smiths',
};
const SEEK_STEP = 10;

const LABELS = {
  en: {
    play: 'Play',
    pause: 'Pause',
    restart: 'Restart',
    back: '−10s',
    forward: '+10s',
    volume: 'Volume',
    hide: 'Hide',
    show: 'Music',
    tap: 'Tap for sound',
  },
  sv: {
    play: 'Spela',
    pause: 'Paus',
    restart: 'Omstart',
    back: '−10s',
    forward: '+10s',
    volume: 'Volym',
    hide: 'Dölj',
    show: 'Musik',
    tap: 'Tryck för ljud',
  },
} as const;

type YtPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getVolume: () => number;
  setVolume: (n: number) => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement | string,
        opts: {
          videoId: string;
          width?: number;
          height?: number;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (e: { target: YtPlayer }) => void;
            onStateChange?: (e: { data: number; target: YtPlayer }) => void;
            onError?: (e: { data: number }) => void;
          };
        },
      ) => YtPlayer;
      PlayerState?: { PLAYING: number; PAUSED: number; ENDED: number; CUED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYtApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true;
      document.head.appendChild(s);
    }
    // API may already be mid-load; poll briefly as fallback.
    const started = Date.now();
    const tick = () => {
      if (window.YT?.Player) {
        resolve();
        return;
      }
      if (Date.now() - started < 8000) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/**
 * Compact mini player. Browsers block unmuted autoplay, so we:
 * 1) start muted (allowed) as soon as the page loads
 * 2) unmute + ensure play on the first user gesture anywhere
 */
export default function AmbientMusic() {
  const { locale } = useLocale();
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YtPlayer | null>(null);
  const unlockedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(true);
  const [volume, setVolume] = useState(70);
  const [open, setOpen] = useState(true);
  const labels = locale === 'sv' ? LABELS.sv : LABELS.en;
  const marquee = `${TRACK.title}  ·  ${TRACK.artist}  ·  `;

  useEffect(() => {
    let cancelled = false;
    let gestureSeen = false;

    const tryUnlock = () => {
      const p = playerRef.current;
      if (!p) return false;
      try {
        p.setVolume(70);
        p.unMute();
        p.playVideo();
        unlockedRef.current = true;
        setNeedsGesture(false);
        return true;
      } catch {
        return false;
      }
    };

    const onGesture = () => {
      gestureSeen = true;
      unlockedRef.current = true;
      tryUnlock();
    };

    // Capture phase so we catch the first interaction even if something stops propagation.
    window.addEventListener('pointerdown', onGesture, true);
    window.addEventListener('touchstart', onGesture, true);
    window.addEventListener('keydown', onGesture, true);
    window.addEventListener('click', onGesture, true);

    loadYtApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT?.Player) return;

      const origin = window.location.origin;
      const player = new window.YT.Player(hostRef.current, {
        videoId: YT_VIDEO_ID,
        width: 1,
        height: 1,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: YT_VIDEO_ID,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin,
        },
        events: {
          onReady: (e) => {
            if (cancelled) return;
            playerRef.current = e.target;
            e.target.setVolume(70);
            // Muted autoplay is allowed in most browsers — primes the stream immediately.
            e.target.mute();
            try {
              e.target.playVideo();
            } catch {
              /* ignore */
            }
            setReady(true);
            // If user already gestured before the player finished loading, unlock now.
            if (gestureSeen || unlockedRef.current) tryUnlock();
          },
          onStateChange: (e) => {
            const playingCode = window.YT?.PlayerState?.PLAYING ?? 1;
            setPlaying(e.data === playingCode);
          },
        },
      });
      playerRef.current = player;
    });

    return () => {
      cancelled = true;
      window.removeEventListener('pointerdown', onGesture, true);
      window.removeEventListener('touchstart', onGesture, true);
      window.removeEventListener('keydown', onGesture, true);
      window.removeEventListener('click', onGesture, true);
      try {
        playerRef.current?.destroy();
      } catch {
        /* ignore */
      }
      playerRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    unlockedRef.current = true;
    setNeedsGesture(false);
    if (playing && !p.isMuted?.()) {
      p.pauseVideo();
      setPlaying(false);
    } else {
      p.unMute();
      p.playVideo();
    }
  };

  const restart = () => {
    const p = playerRef.current;
    if (!p) return;
    unlockedRef.current = true;
    setNeedsGesture(false);
    p.seekTo(0, true);
    p.unMute();
    p.playVideo();
  };

  const seekBy = (delta: number) => {
    const p = playerRef.current;
    if (!p) return;
    unlockedRef.current = true;
    setNeedsGesture(false);
    p.unMute();
    const now = p.getCurrentTime?.() ?? 0;
    const dur = p.getDuration?.() || Number.POSITIVE_INFINITY;
    const next = Math.max(0, Math.min(dur, now + delta));
    p.seekTo(next, true);
    p.playVideo();
  };

  const onVolume = (value: number) => {
    const p = playerRef.current;
    const next = Math.max(0, Math.min(100, value));
    setVolume(next);
    if (!p) return;
    unlockedRef.current = true;
    setNeedsGesture(false);
    p.setVolume(next);
    if (next === 0) p.mute();
    else {
      p.unMute();
      p.playVideo();
    }
  };

  return (
    <div className={`ambient-music${open ? ' ambient-music--open' : ''}`}>
      <div ref={hostRef} className="ambient-music__host" aria-hidden />
      {open ? (
        <div className="ambient-music__card" role="group" aria-label={`${TRACK.title} — ${TRACK.artist}`}>
          <label className="ambient-music__vol" title={`${labels.volume}: ${volume}`}>
            <span className="sr-only">{labels.volume}</span>
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={volume}
              disabled={!ready}
              aria-label={labels.volume}
              onChange={(e) => onVolume(Number(e.target.value))}
            />
          </label>
          <div className="ambient-music__main">
            {needsGesture ? (
              <button type="button" className="ambient-music__tap" onClick={togglePlay}>
                {labels.tap}
              </button>
            ) : (
              <div className="ambient-music__marquee" aria-hidden={!playing}>
                <div className="ambient-music__marquee-track">
                  <span>{marquee}</span>
                  <span>{marquee}</span>
                </div>
              </div>
            )}
            <div className="ambient-music__controls">
              <button
                type="button"
                className="ambient-music__btn"
                onClick={() => seekBy(-SEEK_STEP)}
                disabled={!ready}
                aria-label={labels.back}
                title={labels.back}
              >
                ⏮
              </button>
              <button
                type="button"
                className="ambient-music__btn"
                onClick={restart}
                disabled={!ready}
                aria-label={labels.restart}
                title={labels.restart}
              >
                ↺
              </button>
              <button
                type="button"
                className="ambient-music__btn ambient-music__btn--main"
                onClick={togglePlay}
                disabled={!ready}
                aria-pressed={playing && !needsGesture}
                aria-label={playing && !needsGesture ? labels.pause : labels.play}
                title={playing && !needsGesture ? labels.pause : labels.play}
              >
                {playing && !needsGesture ? '❚❚' : '▶'}
              </button>
              <button
                type="button"
                className="ambient-music__btn"
                onClick={() => seekBy(SEEK_STEP)}
                disabled={!ready}
                aria-label={labels.forward}
                title={labels.forward}
              >
                ⏭
              </button>
              <button
                type="button"
                className="ambient-music__btn ambient-music__hide"
                onClick={() => setOpen(false)}
                aria-label={labels.hide}
                title={labels.hide}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="ambient-music__fab"
          onClick={() => {
            setOpen(true);
            togglePlay();
          }}
          aria-label={labels.show}
          title={`${TRACK.title} — ${TRACK.artist}`}
        >
          ♪ {needsGesture ? labels.tap : labels.show}
        </button>
      )}
    </div>
  );
}
