import * as React from 'react';

export interface ThumbnailProps {
  dataHook?: string;
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
  size?: ThumbnailSize;
  selected?: boolean;
  disabled?: boolean;
  hideSelectedIcon?: boolean;
  backgroundImage?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => void;
  width?: string | number;
  height?: string | number;
  contentAlignment?: ThumbnailContentAlignment;
}

export default class Thumbnail extends React.PureComponent<ThumbnailProps> {}

export type ThumbnailSize = 'tiny' | 'small' | 'medium';

export type ThumbnailContentAlignment = 'top' | 'center';
