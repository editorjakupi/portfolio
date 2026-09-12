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
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.downloadCv}
            </a>
            <a
              className="hero-europass-badge"
              href={europassUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {europassLabel}
            </a>
            <DiplomaQrBadge className="hero-diploma-qr" />
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
