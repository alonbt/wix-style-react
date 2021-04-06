import * as React from 'react';

export interface ContentProps {
  children?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default class Content extends React.PureComponent<ContentProps> {}
