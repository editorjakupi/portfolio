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
          };
        },
      ) => YtPlayer;
      PlayerState?: { UNSTARTED: number; ENDED: number; PLAYING: number; PAUSED: number; BUFFERING: number; CUED: number };
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
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true;
      document.head.appendChild(s);
    }
    const started = Date.now();
    const tick = () => {
      if (window.YT?.Player) {
        resolve();
        return;
      }
      if (Date.now() - started < 10000) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/** Compact mini player with reliable play/pause and autoplay on land. */
export default function AmbientMusic() {
  const { locale } = useLocale();
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YtPlayer | null>(null);
  /** When true, user paused — do not auto-resume. */
  const userPausedRef = useRef(false);
  /** Only auto-kick play during the initial startup window. */
  const autoStartRef = useRef(true);
  const volumeRef = useRef(70);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [open, setOpen] = useState(true);
  const labels = locale === 'sv' ? LABELS.sv : LABELS.en;
  const marquee = `${TRACK.title}  ·  ${TRACK.artist}  ·  `;

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];

    const playNow = (player: YtPlayer) => {
      try {
        player.setVolume(volumeRef.current);
        if (volumeRef.current > 0) player.unMute();
        player.playVideo();
      } catch {
        /* ignore */
      }
    };

    loadYtApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT?.Player) return;

      const player = new window.YT.Player(hostRef.current, {
        videoId: YT_VIDEO_ID,
        width: 1,
        height: 1,
        playerVars: {
          autoplay: 1,
          mute: 0,
          loop: 1,
          playlist: YT_VIDEO_ID,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            if (cancelled) return;
            playerRef.current = e.target;
            setReady(true);
            userPausedRef.current = false;
            autoStartRef.current = true;
            playNow(e.target);
            // Short startup retries only — stop after a few seconds so pause stays paused.
            [150, 500, 1200].forEach((ms) => {
              timers.push(
                window.setTimeout(() => {
                  if (cancelled || userPausedRef.current || !autoStartRef.current) return;
                  if (playerRef.current) playNow(playerRef.current);
                }, ms),
              );
            });
            timers.push(
              window.setTimeout(() => {
                autoStartRef.current = false;
              }, 2500),
            );
          },
          onStateChange: (e) => {
            const PLAYING = window.YT?.PlayerState?.PLAYING ?? 1;
            const PAUSED = window.YT?.PlayerState?.PAUSED ?? 2;
            const CUED = window.YT?.PlayerState?.CUED ?? 5;
            const ENDED = window.YT?.PlayerState?.ENDED ?? 0;

            if (e.data === PLAYING) {
              setPlaying(true);
              // Once we are actually playing, end aggressive auto-start.
              autoStartRef.current = false;
              return;
            }

            if (e.data === PAUSED) {
              setPlaying(false);
              return;
            }

            // Loop / initial cue — only auto-resume if user did not pause.
            if ((e.data === CUED || e.data === ENDED) && !userPausedRef.current) {
              playNow(e.target);
            }
          },
        },
      });
      playerRef.current = player;
    });

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
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
    if (playing) {
      userPausedRef.current = true;
      autoStartRef.current = false;
      p.pauseVideo();
      setPlaying(false);
    } else {
      userPausedRef.current = false;
      try {
        p.setVolume(volumeRef.current);
        if (volumeRef.current > 0) p.unMute();
        p.playVideo();
      } catch {
        /* ignore */
      }
      setPlaying(true);
    }
  };

  const restart = () => {
    const p = playerRef.current;
    if (!p) return;
    userPausedRef.current = false;
    p.seekTo(0, true);
    try {
      p.setVolume(volumeRef.current);
      if (volumeRef.current > 0) p.unMute();
      p.playVideo();
    } catch {
      /* ignore */
    }
    setPlaying(true);
  };

  const seekBy = (delta: number) => {
    const p = playerRef.current;
    if (!p) return;
    userPausedRef.current = false;
    const now = p.getCurrentTime?.() ?? 0;
    const dur = p.getDuration?.() || Number.POSITIVE_INFINITY;
    const next = Math.max(0, Math.min(dur, now + delta));
    p.seekTo(next, true);
    try {
      p.setVolume(volumeRef.current);
      if (volumeRef.current > 0) p.unMute();
      p.playVideo();
    } catch {
      /* ignore */
    }
    setPlaying(true);
  };

  const onVolume = (value: number) => {
    const p = playerRef.current;
    const next = Math.max(0, Math.min(100, value));
    volumeRef.current = next;
    setVolume(next);
    if (!p) return;
    p.setVolume(next);
    if (next === 0) p.mute();
    else p.unMute();
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
            <div className="ambient-music__marquee">
              <div className="ambient-music__marquee-track">
                <span>{marquee}</span>
                <span>{marquee}</span>
              </div>
            </div>
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
                aria-pressed={playing}
                aria-label={playing ? labels.pause : labels.play}
                title={playing ? labels.pause : labels.play}
              >
                {playing ? '❚❚' : '▶'}
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
          onClick={() => setOpen(true)}
          aria-label={labels.show}
          title={`${TRACK.title} — ${TRACK.artist}`}
        >
          ♪ {labels.show}
        </button>
      )}
    </div>
  );
}
