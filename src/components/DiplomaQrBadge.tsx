import { nbiDiploma } from '../data/credentials';

type Props = {
  className?: string;
};

export default function DiplomaQrBadge({ className = '' }: Props) {
  return (
    <a
      className={`diploma-qr-badge ${className}`.trim()}
      href={nbiDiploma.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={nbiDiploma.qrCaption}
      title={nbiDiploma.qrCaption}
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
