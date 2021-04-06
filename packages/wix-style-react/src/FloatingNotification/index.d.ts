import * as React from 'react';
import { IconElement } from '../common';
import { ButtonWithAsProp } from '../Button';

export interface FloatingNotificationProps {
  dataHook?: string;
  className?: string;
  type?: FloatingNotificationType;
  showCloseButton?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  textButtonProps?: FloatingNotificationButtonProps;
  buttonProps?: FloatingNotificationButtonProps;
  prefixIcon?: IconElement;
  text?: React.ReactNode;
  width?: string;
  fullWidth?: boolean;
}

export default class FloatingNotification extends React.PureComponent<FloatingNotificationProps> {}

export type FloatingNotificationType =
  | 'standard'
  | 'success'
  | 'destructive'
  | 'warning'
  | 'premium'
  | 'preview'
  | 'dark';

export type FloatingNotificationButtonProps = ButtonWithAsProp<{
  label?: React.ReactNode;
}>;
