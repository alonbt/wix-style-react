import * as React from 'react';

export interface DividerProps {
  dataHook?: string;
  className?: string;
  direction?: DividerDirection;
  skin?: DividerSkin;
}

export type DividerDirection = 'horizontal' | 'vertical';
export type DividerSkin =
  | 'light'
  | 'dark'
  | 'standard'
  | 'warning'
  | 'destructive'
  | 'success'
  | 'premium';

export default class Divider extends React.PureComponent<DividerProps> {}
