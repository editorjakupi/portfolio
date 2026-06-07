import { useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';

export default function Hero() {
  const { t } = useLocale();
  const [photoSrc, setPhotoSrc] = useState('/me.jpg');

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-title">
            {t.hero.titleLine1}
            <br />
            <em>{t.hero.titleLine2}</em>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              {t.hero.viewWork}
            </a>
            <a className="btn btn-secondary" href="#contact">
              {t.hero.getInTouch}
            </a>
            <a
              className="btn btn-secondary"
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.downloadCv}
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <strong>{t.hero.location}</strong>
            </span>
            <span>·</span>
            <span>{t.hero.status}</span>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src={photoSrc}
              onError={() => setPhotoSrc('/me.svg')}
              alt="Editor Jakupi"
              width={320}
              height={320}
            />
            <div className="hero-photo-ring" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
