import { useEffect, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { locales } from '../i18n/types';
import { profile } from '../data/profile';

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
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
        <a href="#" className="nav-brand" onClick={() => setOpen(false)}>
          Editor <span>Jakupi</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            {locales.map((item) => (
              <button
                key={item.code}
                type="button"
                className={locale === item.code ? 'active' : ''}
                onClick={() => setLocale(item.code)}
                aria-pressed={locale === item.code}
              >
                {item.code.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            className="nav-github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.github}
          </a>

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
        <a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          {t.nav.github}
        </a>
      </nav>
    </header>
  );
}
