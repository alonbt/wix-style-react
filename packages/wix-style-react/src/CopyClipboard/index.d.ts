import * as React from 'react';

type CopyClipboardChildrenProps = {
  copyToClipboard: Function;
  isCopied: boolean;
  reset: Function;
};

export interface CopyClipboardProps {
  value: string;
  children(params: CopyClipboardChildrenProps): React.ReactNode;
  dataHook?: string;
  className?: string;
  onCopy?: Function;
  resetTimeout?: number;
}

export default class CopyClipboard extends React.PureComponent<CopyClipboardProps> {}
