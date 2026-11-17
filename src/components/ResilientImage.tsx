import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Sri Karni Heritage Resort',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#917C58] via-[#7D6949] to-[#68563A] text-[#FAF6F0] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-16 h-16 text-[#FAF6F0]/80 mb-3"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 56H56M12 56V28C12 22 20 18 20 12C20 18 26 20 32 10C38 20 44 18 44 12C44 18 52 22 52 28V56"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 56V38C24 33.5817 27.5817 30 32 30C36.4183 30 40 33.5817 40 38V56"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <p className="font-serif-royal text-lg tracking-wide text-[#E6C674]">{fallbackTitle}</p>
        <p className="text-xs text-[#FAF6F0]/60 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
