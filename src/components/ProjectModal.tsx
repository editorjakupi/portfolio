import { useEffect, useRef } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { getProjectCopy, projectImage, type Project } from '../data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const { locale, t } = useLocale();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const copy = getProjectCopy(project, locale);

  useEffect(() => {
    closeBtn.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <img className="modal-image" src={projectImage(project)} alt="" />
          <button
            ref={closeBtn}
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label={t.modal.close}
          >
            ×
          </button>
        </div>

        <div className="modal-content">
          <div className="modal-meta">
            <span className="chip">{project.year}</span>
            {project.isPrivate && <span className="chip chip-private">{t.projects.private}</span>}
          </div>

          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-tagline">{copy.tagline}</p>
          <p className="modal-description">{copy.description}</p>

          <div className="modal-section">
            <h3>{t.modal.highlights}</h3>
            <ul className="modal-list">
              {copy.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>{t.modal.techStack}</h3>
            <div className="modal-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="chip chip-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.github ? (
              <a
                className="btn btn-primary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.modal.viewGithub}
              </a>
            ) : (
              <p className="modal-note">{t.modal.privateRepo}</p>
            )}
            {project.demo && (
              <a
                className="btn btn-secondary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.modal.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
