import { useMemo, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import {
  getProjectCopy,
  projectImage,
  projectInGroup,
  projectMatchesAi,
  projects,
  type AiSubFilter,
  type Project,
  type ProjectGroup,
} from '../data/projects';

interface Props {
  onOpen: (project: Project) => void;
}

type Filter = 'all' | ProjectGroup;

export default function Projects({ onOpen }: Props) {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<Filter>('all');
  const [aiSub, setAiSub] = useState<AiSubFilter>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    let list = projects.filter((p) => projectInGroup(p, filter));
    if (filter === 'ai') {
      list = list.filter((p) => projectMatchesAi(p, aiSub));
    }
    return list;
  }, [filter, aiSub]);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t.projects.filterAll },
    { key: 'own-live', label: t.projects.filterOwnLive },
    { key: 'lia', label: t.projects.filterLia },
    { key: 'group', label: t.projects.filterGroup },
    { key: 'course-material', label: t.projects.filterCourseMaterial },
    { key: 'learning', label: t.projects.filterLearning },
    { key: 'ai', label: t.projects.filterAi },
    { key: 'lang-python', label: t.projects.filterLangPython },
    { key: 'lang-csharp', label: t.projects.filterLangCsharp },
    { key: 'lang-javascript', label: t.projects.filterLangJavascript },
    { key: 'lang-java', label: t.projects.filterLangJava },
  ];

  const aiSubs: { key: AiSubFilter; label: string }[] = [
    { key: 'all', label: t.projects.filterAiAll },
    { key: 'ml', label: t.projects.filterAiMl },
    { key: 'dl', label: t.projects.filterAiDl },
    { key: 'llm', label: t.projects.filterAiLlm },
  ];

  const filterBlurb = (() => {
    if (filter === 'ai') {
      if (aiSub === 'ml') return t.projects.filterDescAiMl;
      if (aiSub === 'dl') return t.projects.filterDescAiDl;
      if (aiSub === 'llm') return t.projects.filterDescAiLlm;
      return t.projects.filterDescAi;
    }
    const map: Record<Filter, string> = {
      all: t.projects.filterDescAll,
      'own-live': t.projects.filterDescOwnLive,
      lia: t.projects.filterDescLia,
      group: t.projects.filterDescGroup,
      'course-material': t.projects.filterDescCourseMaterial,
      learning: t.projects.filterDescLearning,
      ai: t.projects.filterDescAi,
      'lang-python': t.projects.filterDescLangPython,
      'lang-csharp': t.projects.filterDescLangCsharp,
      'lang-javascript': t.projects.filterDescLangJavascript,
      'lang-java': t.projects.filterDescLangJava,
    };
    return map[filter];
  })();

  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label reveal">{t.projects.label}</p>
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <p className="section-subtitle reveal">{t.projects.subtitle}</p>

        <div className="projects-toolbar reveal" role="tablist" aria-label={t.projects.title}>
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={filter === item.key}
              className={`filter-btn ${filter === item.key ? 'active' : ''}`}
              onClick={() => {
                setFilter(item.key);
                if (item.key !== 'ai') setAiSub('all');
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {filter === 'ai' && (
          <div
            className="projects-toolbar projects-toolbar--sub reveal"
            role="tablist"
            aria-label={t.projects.filterAi}
          >
            {aiSubs.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={aiSub === item.key}
                className={`filter-btn filter-btn--sub ${aiSub === item.key ? 'active' : ''}`}
                onClick={() => setAiSub(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        <p className="projects-filter-blurb reveal">{filterBlurb}</p>

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
                  style={{
                    ...(project.bannerPosition
                      ? { objectPosition: project.bannerPosition }
                      : {}),
                    ...(project.bannerFit ? { objectFit: project.bannerFit } : {}),
                    ...(project.bannerBg ? { backgroundColor: project.bannerBg } : {}),
                  }}
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
