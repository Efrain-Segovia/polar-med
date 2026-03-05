import { useState } from 'react';

export default function BrandLogo({ data, className = 'h-10 w-auto' }) {
  const [src, setSrc] = useState(data.brand.logo.svg);

  return (
    <img
      src={src}
      alt={data.brand.logo.alt}
      className={className}
      loading="lazy"
      onError={() => setSrc(data.brand.logo.png)}
    />
  );
}
