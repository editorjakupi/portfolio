import { aboutEducation, aboutExperience, type TimelineItem } from '../data/aboutTimeline';
import { useLocale } from '../i18n/LocaleContext';

function TimelineBlock({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div className="about-timeline">
      <h3 className="section-label">{title}</h3>
      <ol className="timeline timeline-compact">
        {items.map((item) => (
          <li key={`${item.period}-${item.title}`} className="timeline-item">
            <div className="timeline-body">
              <p className="timeline-period">{item.period}</p>
              <p className="timeline-title">{item.title}</p>
              <p className="timeline-place">{item.place}</p>
              {item.verifyUrl ? (
                <a
                  className="timeline-verify"
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.verifyLabel}
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function About() {
  const { t, locale } = useLocale();
  const experience = aboutExperience[locale];
  const education = aboutEducation[locale];

  return (
    <section className="section section-about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-main reveal">
            <header className="about-header">
              <p className="section-label">{t.about.label}</p>
              <h2 className="section-title">{t.about.title}</h2>
            </header>

            <div className="about-intro">
              <div className="about-text">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>

            <div className="about-career">
              <TimelineBlock title={t.about.timelineTitle} items={experience} />
              <TimelineBlock title={t.about.educationTitle} items={education} />
            </div>
          </div>

          <aside className="about-skills reveal reveal-delay-1">
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
          </aside>
        </div>
      </div>
    </section>
  );
}
