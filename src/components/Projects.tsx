import { useMemo, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { getProjectCopy, projectImage, projects, type Project } from '../data/projects';

interface Props {
  onOpen: (project: Project) => void;
}

type Filter = 'all' | 'featured' | 'course';

export default function Projects({ onOpen }: Props) {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    if (filter === 'featured') return projects.filter((p) => p.featured);
    if (filter === 'course') return projects.filter((p) => p.category === 'course');
    return projects;
  }, [filter]);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'featured', label: t.projects.filterFeatured },
    { key: 'course', label: t.projects.filterCourse },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label reveal">{t.projects.label}</p>
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <p className="section-subtitle reveal">{t.projects.subtitle}</p>

        <div className="projects-toolbar reveal">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`filter-btn ${filter === item.key ? 'active' : ''}`}
              onClick={() => setFilter(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => {
            const copy = getProjectCopy(project, locale);
            return (
              <article
                key={project.id}
                className="project-card reveal"
                role="button"
                tabIndex={0}
                onClick={() => onOpen(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onOpen(project);
                  }
                }}
                aria-label={`Open details for ${project.title}`}
              >
                <img
                  className="project-thumb"
                  src={projectImage(project)}
                  alt=""
                  loading="lazy"
                />
                <div className="project-body">
                  <div className="project-head">
                    <h3>
                      {project.title}
                      {project.isPrivate && <span className="chip chip-private"> {t.projects.private}</span>}
                    </h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-tagline">{copy.tagline}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip chip-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>{t.projects.readMore} →</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
