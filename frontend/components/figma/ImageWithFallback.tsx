import * as React from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallback = '/assets/figma/placeholder.png', alt, ...rest }) => {
  const [error, setError] = React.useState(false);
  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      {...rest}
    />
  );
};

export default ImageWithFallback;
