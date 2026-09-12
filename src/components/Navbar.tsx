import { useEffect, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { profile } from '../data/profile';
import ProfileAvatar from './ProfileAvatar';
import GoogleTranslateSelect from './GoogleTranslateSelect';
import NavSocialLink, { GitHubIcon, LinkedInIcon } from './NavSocialLink';

export default function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#references', label: t.nav.references },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="nav-brand notranslate" translate="no" onClick={() => setOpen(false)}>
          <ProfileAvatar className="nav-avatar" width={34} height={34} />
          <span className="nav-brand-text">
            Editor <span>Jakupi</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="/cv.html" target="_blank" rel="noopener noreferrer">
            {t.nav.cv}
          </a>
        </nav>

        <div className="nav-actions">
          <GoogleTranslateSelect />

          <div className="nav-socials">
            <NavSocialLink href={profile.github} label={t.nav.github}>
              <GitHubIcon />
            </NavSocialLink>
            <NavSocialLink href={profile.linkedin} label={t.nav.linkedin}>
              <LinkedInIcon />
            </NavSocialLink>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-label="Mobile">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="/cv.html" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          {t.nav.cv}
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          {t.nav.github}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          {t.nav.linkedin}
        </a>
      </nav>
    </header>
  );
}
