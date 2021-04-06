import * as React from 'react';
import { OmitPolyfill } from '../common';
import { ButtonProps, ButtonSize } from '../Button';
import { BaseModalLayoutProps } from '../BaseModalLayout';

export interface AnnouncementModalLayoutProps extends BaseModalLayoutProps {
  title?: string;
  subtitle?: string;
  content?: string | React.ReactNode;
  primaryButtonText?: string;
  primaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  primaryButtonOnClick?(): void;
  secondaryButtonText?: string;
  secondaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  secondaryButtonOnClick?(): void;
  actionsSize?: ButtonSize;
  sideActions?: React.ReactNode;
  footnote?: React.ReactNode;
  illustration?: string | React.ReactNode;
  linkText?: string;
  linkOnClick?: () => void;
}

declare const AnnouncementModalLayout: React.FC<AnnouncementModalLayoutProps>;
export default AnnouncementModalLayout;
