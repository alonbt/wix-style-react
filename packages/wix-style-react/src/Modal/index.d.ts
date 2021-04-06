import * as React from 'react';

export interface ModalProps {
  dataHook?: string;
  isOpen: boolean;
  borderRadius?: number;
  contentLabel?: string;
  zIndex?: number;
  shouldCloseOnOverlayClick?: boolean;
  shouldDisplayCloseButton?: boolean;
  onRequestClose?: (event?: React.MouseEvent | React.KeyboardEvent) => void;
  onAfterOpen?: () => void;
  horizontalPosition?: ModalHorizontalPostion;
  verticalPosition?: ModalVerticalPosition;
  closeTimeoutMS?: number;
  scrollable?: boolean;
  scrollableContent?: boolean;
  maxHeight?: string;
  height?: string;
  overlayPosition?: ModalOverlayPosition;
  parentSelector?: () => HTMLElement;
  appElement?: string;
  onOk?: () => void;
  screen?: ModalScreen;
}

export default class Modal extends React.PureComponent<ModalProps> {}

export type ModalHorizontalPostion = 'start' | 'center' | 'end';
export type ModalVerticalPosition = 'start' | 'center' | 'end';
export type ModalOverlayPosition =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';
export type ModalScreen = 'full' | 'desktop' | 'mobile';
