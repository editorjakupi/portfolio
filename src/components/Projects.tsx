import { useMemo, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import {
  getProjectCopy,
  GROUP_SUBFILTERS,
  projectImage,
  projectInGroup,
  projectMatchesSub,
  projects,
  type GroupSubKey,
  type Project,
  type ProjectGroup,
} from '../data/projects';

interface Props {
  onOpen: (project: Project) => void;
}

type Filter = 'all' | ProjectGroup;

function subLabel(t: ReturnType<typeof useLocale>['t'], group: Filter, key: GroupSubKey): string {
  if (key === 'all') {
    if (group === 'ai') return t.projects.filterAiAll;
    return t.projects.filterSubAll;
  }
  const map: Record<string, string | undefined> = {
    // own-live
    products: t.projects.filterSubProducts,
    data: t.projects.filterSubData,
    // lia
    swiiftly: t.projects.filterSubSwiiftly,
    podmanager: t.projects.filterSubPodmanager,
    // group
    crm: t.projects.filterSubCrm,
    dotnet: t.projects.filterSubDotnetApps,
    // course-material
    ai: t.projects.filterSubAiCourse,
    languages: t.projects.filterSubLangCourses,
    // learning / csharp lang
    testing: t.projects.filterSubTesting,
    react: t.projects.filterSubReact,
    csharp: t.projects.filterSubCsharpBasics,
    // ai
    ml: t.projects.filterAiMl,
    dl: t.projects.filterAiDl,
    llm: t.projects.filterAiLlm,
    // language frameworks / libraries
    reactlib: t.projects.filterSubReactLib,
    scikit: t.projects.filterSubScikit,
    tensorflow: t.projects.filterSubTensorflow,
    streamlit: t.projects.filterSubStreamlit,
    pandas: t.projects.filterSubPandas,
    aspnet: t.projects.filterSubAspnet,
    efcore: t.projects.filterSubEfcore,
    xunit: t.projects.filterSubXunit,
    selenium: t.projects.filterSubSelenium,
    nextjs: t.projects.filterSubNextjs,
    nodejs: t.projects.filterSubNodejs,
    typescript: t.projects.filterSubTypescript,
    // databases & docker
    postgresql: t.projects.filterSubPostgresql,
    sqlite: t.projects.filterSubSqlite,
    mongodb: t.projects.filterSubMongodb,
    docker: t.projects.filterSubDocker,
    // legacy keys still used in other sections
    live: t.projects.filterSubLive,
    course: t.projects.filterSubCourse,
    apps: t.projects.filterSubApps,
    learning: t.projects.filterSubLearning,
  };
  return map[key] ?? key;
}

function subBlurb(t: ReturnType<typeof useLocale>['t'], group: Filter, key: GroupSubKey): string | null {
  if (group === 'ai') {
    if (key === 'ml') return t.projects.filterDescAiMl;
    if (key === 'dl') return t.projects.filterDescAiDl;
    if (key === 'llm') return t.projects.filterDescAiLlm;
    return t.projects.filterDescAi;
  }
  if (key === 'all') return null;
  const map: Record<string, string | undefined> = {
    products: t.projects.filterDescSubProducts,
    data: t.projects.filterDescSubData,
    swiiftly: t.projects.filterDescSubSwiiftly,
    podmanager: t.projects.filterDescSubPodmanager,
    crm: t.projects.filterDescSubCrm,
    dotnet: t.projects.filterDescSubDotnetApps,
    ai: t.projects.filterDescSubAiCourse,
    languages: t.projects.filterDescSubLangCourses,
    testing: t.projects.filterDescSubTesting,
    react: t.projects.filterDescSubReact,
    csharp: t.projects.filterDescSubCsharpBasics,
    reactlib: t.projects.filterDescSubReactLib,
    scikit: t.projects.filterDescSubScikit,
    tensorflow: t.projects.filterDescSubTensorflow,
    streamlit: t.projects.filterDescSubStreamlit,
    pandas: t.projects.filterDescSubPandas,
    aspnet: t.projects.filterDescSubAspnet,
    efcore: t.projects.filterDescSubEfcore,
    xunit: t.projects.filterDescSubXunit,
    selenium: t.projects.filterDescSubSelenium,
    nextjs: t.projects.filterDescSubNextjs,
    nodejs: t.projects.filterDescSubNodejs,
    typescript: t.projects.filterDescSubTypescript,
    postgresql: t.projects.filterDescSubPostgresql,
    sqlite: t.projects.filterDescSubSqlite,
    mongodb: t.projects.filterDescSubMongodb,
    docker: t.projects.filterDescSubDocker,
    live: t.projects.filterDescSubLive,
    course: t.projects.filterDescSubCourse,
    apps: t.projects.filterDescSubApps,
    learning: t.projects.filterDescSubLearning,
  };
  return map[key] ?? null;
}

export default function Projects({ onOpen }: Props) {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<Filter>('all');
  const [sub, setSub] = useState<GroupSubKey>('all');

  const subFilters = useMemo(() => {
    if (filter === 'all') return [];
    return [...(GROUP_SUBFILTERS[filter] ?? [])];
  }, [filter]);

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects
      .filter((p) => projectInGroup(p, filter))
      .filter((p) => projectMatchesSub(p, filter, sub));
  }, [filter, sub]);

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
    { key: 'databases', label: t.projects.filterDatabases },
  ];

  const primaryBlurb: Record<Filter, string> = {
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
    databases: t.projects.filterDescDatabases,
  };

  const filterBlurb = subBlurb(t, filter, sub) ?? primaryBlurb[filter];

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
                setSub('all');
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {subFilters.length > 1 && (
          <div
            className="projects-toolbar projects-toolbar--sub reveal"
            role="tablist"
            aria-label={`${filters.find((f) => f.key === filter)?.label ?? ''} subsections`}
          >
            {subFilters.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={sub === item.key}
                className={`filter-btn filter-btn--sub ${sub === item.key ? 'active' : ''}`}
                onClick={() => setSub(item.key)}
              >
                {subLabel(t, filter, item.key)}
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
