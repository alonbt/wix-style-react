import * as React from 'react';

export interface TagProps {
  disabled?: boolean;
  id: string;
  onClick?: (id: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove?: (id: string) => void;
  removable?: boolean;
  size?: TagSize;
  theme?: TagTheme;
  thumb?: React.ReactElement;
  maxWidth?: number;
  className?: string;
  dataHook?: string;
  children?: React.ReactNode;
}

export default class Tag extends React.PureComponent<TagProps> {}

export type TagIconSize = 'small' | 'medium';
export type TagSize = 'tiny' | 'small' | 'medium' | 'large';
export type TagTheme =
  | 'standard'
  | 'error'
  | 'warning'
  | 'dark'
  | 'neutral'
  | 'light'
  | 'lightOutlined';
