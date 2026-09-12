import { useLocale } from '../i18n/LocaleContext';
import { profile } from '../data/profile';

export default function Contact() {
  const { t } = useLocale();

  const items = [
    { label: t.contact.email, href: `mailto:${profile.email}`, text: profile.email },
    { label: t.contact.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, text: profile.phone },
    { label: t.contact.linkedin, href: profile.linkedin, text: 'editorjakupi' },
    { label: t.contact.github, href: profile.github, text: 'editorjakupi' },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label reveal">{t.contact.label}</p>
        <h2 className="section-title reveal">{t.contact.title}</h2>
        <p className="section-subtitle reveal">{t.contact.subtitle}</p>

        <div className="contact-grid">
          {items.map((item) => (
            <a
              key={item.label}
              className="contact-card reveal"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span>{item.label}</span>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
