import * as React from 'react';

export default class ClosablePopover extends React.PureComponent<ClosablePopoverProps> {
  open: () => void;
  close: () => void;
}

export interface ClosablePopoverProps {
  opened?: boolean;
  initiallyOpened?: boolean;
  target: React.ReactNode;
  onOpen?: Function;
  onClose?: Function;
  closeOnMouseLeave?: boolean;
  content: Function;
  className?: string;
}
