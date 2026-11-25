import DiplomaQrBadge from './DiplomaQrBadge';
import ProfileAvatar from './ProfileAvatar';
import { europassUrlForLocale, nbiEuropass } from '../data/credentials';
import { useLocale } from '../i18n/LocaleContext';

export default function Hero() {
  const { locale, t } = useLocale();
  const europassUrl = europassUrlForLocale(locale);
  const europassLabel = nbiEuropass.timelineLabel[locale];

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
              href="/cv.html?v=20261125c"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.downloadCv}
            </a>
            <div className="hero-badges" aria-label="Credentials">
              <a
                className="hero-square-badge hero-europass-square"
                href={europassUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={europassLabel}
                aria-label={europassLabel}
              >
                <span className="hero-square-badge__label">Europass</span>
              </a>
              <DiplomaQrBadge className="hero-diploma-qr" />
              <a
                className="hero-square-badge hero-pi93-badge"
                href="https://pi93.se"
                target="_blank"
                rel="noopener noreferrer"
                title="Pi93 AB"
                aria-label="Pi93 AB"
              >
                <img src="/brand/pi93-mark.png" alt="" width={40} height={40} loading="lazy" />
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <span>
              <strong>{t.hero.location}</strong>
            </span>
            <span>·</span>
            <span>{t.hero.languages}</span>
            <span>·</span>
            <span>{t.hero.status}</span>
          </div>
        </div>
        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-photo-wrap">
            <ProfileAvatar className="hero-photo" />
            <div className="hero-photo-ring" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
