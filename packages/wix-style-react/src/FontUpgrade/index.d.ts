import * as React from 'react';

export interface FontUpgradeProps {
  dataHook?: string;
  className?: string;
  active?: boolean;
  as?: 'span' | 'div';
  children?: React.ReactNode;
}

export default class FontUpgrade extends React.PureComponent<FontUpgradeProps> {}
