import { useState } from 'react';
import { Trees } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-surface-variant via-primary-container to-secondary-container flex flex-col items-center justify-center p-6 text-center text-primary/80"
      >
        <Trees className="w-10 h-10 mb-2 text-primary/70" aria-hidden="true" />
        <span className="text-sm font-medium text-on-surface-variant max-w-xs">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
