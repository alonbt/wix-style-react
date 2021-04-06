import * as React from 'react';

export type SkeletonGroupSkin = 'dark' | 'light';
export interface SkeletonGroupProps {
  dataHook?: string;
  className?: string;
  skin?: SkeletonGroupSkin;
}

export default class SkeletonGroup extends React.PureComponent<
  SkeletonGroupProps
> {}
