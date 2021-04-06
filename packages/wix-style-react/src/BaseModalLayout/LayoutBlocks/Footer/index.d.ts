import { OmitPolyfill } from '../../../common';
import { ButtonProps, ButtonSize } from '../../../Button';
import { ModalTheme } from '../..';
import * as React from 'react';

interface FooterProps {
  className?: string;
  dataHook?: string;
  primaryButtonText?: React.ReactNode;
  primaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  primaryButtonOnClick?(): void;
  secondaryButtonText?: React.ReactNode;
  secondaryButtonProps?: OmitPolyfill<ButtonProps, 'dataHook'>;
  secondaryButtonOnClick?(): void;
  actionsSize?: ButtonSize;
  sideActions?: React.ReactNode;
  showFooterDivider?: boolean;
  theme?: ModalTheme;
}

export const Footer: React.FunctionComponent<FooterProps>;
