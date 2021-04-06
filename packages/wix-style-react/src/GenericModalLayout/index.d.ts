import * as React from 'react';

export interface GenericModalLayoutProps {
  dataHook?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  fullscreen?: boolean;
}

export default class GenericModalLayout extends React.PureComponent<GenericModalLayoutProps> {}
