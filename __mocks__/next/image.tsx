// __mocks__/next/image.tsx
import React from 'react';

const MockedImage = ({
  src,
  alt,
  priority,
  fill,
  ...props
}: {
  src: string;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  [key: string]: unknown;
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      data-priority={priority ? 'true' : undefined}
      data-fill={fill ? 'true' : undefined}
      {...props}
    />
  );
};

export default MockedImage;
