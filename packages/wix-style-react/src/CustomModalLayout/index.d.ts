import * as React from 'react';
import { BaseModalLayoutProps } from '../BaseModalLayout';
import { OmitPolyfill } from '../common';
import { ButtonProps, ButtonSize } from '../Button';

export interface CustomModalLayoutProps extends BaseModalLayoutProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  primaryButtonOnClick?(): void;
  secondaryButtonText?: string;
  secondaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  secondaryButtonOnClick?(): void;
  actionsSize?: ButtonSize;
  sideActions?: React.ReactNode;
  footnote?: React.ReactNode;
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  maxHeight?: React.CSSProperties['maxHeight'];
  removeContentPadding?: boolean;
  showHeaderDivider?: 'auto' | boolean;
  showFooterDivider?: 'auto' | boolean;
  hideContentDividers?: boolean;
}

declare const CustomModalLayout: React.FC<CustomModalLayoutProps> & {
  Title: React.FunctionComponent;
};
export default CustomModalLayout;
