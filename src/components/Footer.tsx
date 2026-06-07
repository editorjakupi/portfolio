import { useLocale } from '../i18n/LocaleContext';
import { profile } from '../data/profile';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} <span>{profile.name}</span>. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
