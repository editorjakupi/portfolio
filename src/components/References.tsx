import { useLocale } from '../i18n/LocaleContext';
import { references } from '../data/references';

export default function References() {
  const { locale, t } = useLocale();

  return (
    <section className="section" id="references">
      <div className="container">
        <p className="section-label reveal">{t.references.label}</p>
        <h2 className="section-title reveal">{t.references.title}</h2>
        <p className="section-subtitle reveal">{t.references.subtitle}</p>

        <div className="refs-grid">
          {references.map((ref) => (
            <article key={ref.id} className="ref-card reveal">
              <h3>{ref.name}</h3>
              <p className="ref-role">{ref.role[locale]}</p>
              <p className="ref-context">{ref.context[locale]}</p>
              <p className="ref-langs">{ref.languages}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
