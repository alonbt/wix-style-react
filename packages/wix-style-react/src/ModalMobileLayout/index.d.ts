import * as React from 'react';

export interface ModalMobileLayoutProps {
  dataHook?: string;
  className?: string;
  title?: React.ReactNode;
  stickyTitle?: boolean;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  stickyFooter?: boolean;
  onOverlayClick?: () => void;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullscreen?: boolean;
}

export default class ModalMobileLayout extends React.PureComponent<ModalMobileLayoutProps> {}
