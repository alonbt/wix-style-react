import * as React from 'react';
import { IconElement } from '../../common';

export interface FooterLayoutProps {
  confirmText?: React.ReactNode;
  confirmPrefixIcon?: IconElement;
  confirmSuffixIcon?: IconElement;
  cancelText?: React.ReactNode;
  cancelPrefixIcon?: IconElement;
  cancelSuffixIcon?: IconElement;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  enableOk?: boolean;
  enableCancel?: boolean;
  theme?: string;
  buttonsHeight?: string;
  bottomChildren?: React.ReactNode;
  sideActions?: React.ReactNode;
}

declare const FooterLayout: React.SFC<FooterLayoutProps>;
export default FooterLayout;
