import * as React from 'react';

export interface HeaderProps {
  dataHook?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  suffix?: React.ReactNode;
}

export default class Header extends React.PureComponent<HeaderProps> {}
