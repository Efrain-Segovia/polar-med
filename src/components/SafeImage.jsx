import { useMemo, useState } from 'react';

const fallbackSvg = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#e2e8f0'/>
        <stop offset='100%' stop-color='#cbd5e1'/>
      </linearGradient>
    </defs>
    <rect width='1200' height='800' fill='url(#g)'/>
  </svg>`
);

export default function SafeImage({ src, alt, className, ...props }) {
  const fallbackSrc = useMemo(() => `data:image/svg+xml;charset=UTF-8,${fallbackSvg}`, []);
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImageSrc(fallbackSrc)}
      className={className}
      {...props}
    />
  );
}
