import * as React from 'react';

export interface LoaderProps {
  dataHook?: string;
  size?: LoaderSize;
  color?: LoaderColor;
  text?: React.ReactNode;
  status?: LoaderStatus;
  statusMessage?: string;
}

export default class Loader extends React.PureComponent<LoaderProps> {}

export type LoaderSize = 'tiny' | 'small' | 'medium' | 'large';

export type LoaderColor = 'blue' | 'white';

export type LoaderStatus = 'loading' | 'success' | 'error';
