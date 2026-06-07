import { useLocale } from '../i18n/LocaleContext';

export default function About() {
  const { t } = useLocale();

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text reveal">
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>

        <div className="reveal reveal-delay-1">
          <h3 className="section-label">{t.about.skillsTitle}</h3>
          <div className="skills-grid">
            {t.about.skillGroups.map((group) => (
              <article key={group.title} className="skill-group">
                <h4>{group.title}</h4>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
