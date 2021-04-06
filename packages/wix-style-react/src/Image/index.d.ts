import * as React from 'react';

export type ImageFit = 'contain' | 'cover' | 'tile' | 'none';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  borderRadius?: React.CSSProperties['borderRadius'];
  dataHook?: string;
  className?: string;
  fit?: ImageFit;
  position?: string;
  showBorder?: boolean;
}

declare const Image: React.FC<ImageProps>;
export default Image;
