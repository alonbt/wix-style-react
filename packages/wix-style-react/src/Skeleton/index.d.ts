import * as React from 'react';

export type SkeletonContentType = 'line';
export type SkeletonContentSize = 'small' | 'medium' | 'large' | 'full';
export type SkeletonAlignment = 'start' | 'middle';
export type SkeletonSpacing = 'small' | 'medium' | 'large';
export type SkeletonContent = {
  type: SkeletonContentType;
  size: SkeletonContentSize;
};

export interface SkeletonProps {
  dataHook?: string;
  className?: string;
  content: SkeletonContent[];
  alignment?: SkeletonAlignment;
  spacing?: SkeletonSpacing;
}

export default class Skeleton extends React.PureComponent<SkeletonProps> {}
