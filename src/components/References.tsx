import { useLocale } from '../i18n/LocaleContext';
import { getReferenceContext, getReferenceRole, references } from '../data/references';

export default function References() {
  const { t } = useLocale();

  return (
    <section className="section" id="references">
      <div className="container">
        <p className="section-label reveal">{t.references.label}</p>
        <h2 className="section-title reveal">{t.references.title}</h2>
        <p className="section-subtitle reveal">{t.references.subtitle}</p>

        <div className="refs-grid">
          {references.map((ref) => (
            <article key={ref.id} className="ref-card reveal">
              <h3 className="notranslate" translate="no">
                {ref.name}
              </h3>
              <p className="ref-role">{getReferenceRole(ref)}</p>
              <p className="ref-context">{getReferenceContext(ref)}</p>
              <div className="ref-footer">
                <span className="ref-langs-label">{t.references.languagesLabel}</span>
                <div className="ref-lang-chips" aria-label={t.references.languagesLabel}>
                  {ref.languages.map((lang) => (
                    <span key={lang} className="ref-lang-chip notranslate" translate="no">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
