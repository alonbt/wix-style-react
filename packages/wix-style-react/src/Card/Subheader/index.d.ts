import * as React from 'react';

export interface SubheaderProps {
  title: React.ReactNode;
  suffix?: React.ReactNode;
  dataHook?: string;
  skin?: SubheaderSkin;
}

export type SubheaderSkin = 'standard' | 'neutral';

export default class Subheader extends React.PureComponent<SubheaderProps> {}
