import { useState } from 'react';
import profilePhoto from '../assets/profile.jpg';
import fallbackPhoto from '../../public/me.svg?url';

interface Props {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function ProfileAvatar({
  className = '',
  width,
  height,
  alt = 'Editor Jakupi',
}: Props) {
  const [src, setSrc] = useState(profilePhoto);

  return (
    <img
      className={className}
      src={src}
      onError={() => setSrc(fallbackPhoto)}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
