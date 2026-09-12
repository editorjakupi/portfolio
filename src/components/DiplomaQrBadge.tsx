import { nbiDiploma } from '../data/credentials';
import { useLocale } from '../i18n/LocaleContext';

type Props = {
  className?: string;
};

export default function DiplomaQrBadge({ className = '' }: Props) {
  const { locale } = useLocale();

  return (
    <a
      className={`diploma-qr-badge ${className}`.trim()}
      href={nbiDiploma.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={nbiDiploma.qrCaption[locale]}
      title={nbiDiploma.qrCaption[locale]}
    >
      <img
        className="diploma-qr-badge__img"
        src={nbiDiploma.qrImageUrl}
        alt=""
        width={56}
        height={56}
        loading="lazy"
      />
    </a>
  );
}
