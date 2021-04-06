import * as React from 'react';
import { IconElement } from '../../common';
import { ButtonSize } from '../../Button';

export type MessageBoxFunctionalLayoutTheme = 'red' | 'blue' | 'purple';

export interface MessageBoxFunctionalLayoutProps {
  dataHook?: string;
  hideFooter?: boolean;
  confirmText?: React.ReactNode;
  confirmPrefixIcon?: IconElement;
  confirmSuffixIcon?: IconElement;
  cancelText?: React.ReactNode;
  cancelPrefixIcon?: IconElement;
  cancelSuffixIcon?: IconElement;
  theme?: MessageBoxFunctionalLayoutTheme;
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  margin?: string;
  title?: React.ReactNode;
  maxHeight?: string | number;
  buttonsHeight?: ButtonSize;
  closeButton?: boolean;
  disableCancel?: boolean;
  disableConfirmation?: boolean;
  noBodyPadding?: boolean;
  footerBottomChildren?: React.ReactNode;
  fullscreen?: boolean;
  withEmptyState?: boolean;
  sideActions?: React.ReactNode;
  image?: React.ReactNode;
}

export default class MessageBoxFunctionalLayout extends React.PureComponent<MessageBoxFunctionalLayoutProps> {}
