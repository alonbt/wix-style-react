import * as React from 'react';

export interface EmptyStateProps {
  theme?: EmptyStateTheme;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  image?: string | JSX.Element;
  classNames?: { imageContainer?: string };
  dataHook?: string;
  align?: EmptyStateAlign;
}

export const EmptyState: React.SFC<EmptyStateProps>;
export default EmptyState;
export type EmptyStateTheme = 'page' | 'page-no-border' | 'section';
export type EmptyStateAlign = 'start' | 'center' | 'end';
