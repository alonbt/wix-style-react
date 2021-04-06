import * as React from 'react';
import { headingAppearance } from './ModalHeading';

export interface HeaderProps {
  className?: string;
  dataHook?: string;
  title?: React.ReactNode;
  titleAppearance?: headingAppearance;
  subtitle?: React.ReactNode;
  showHeaderDivider?: boolean;
}

export const Header: React.FunctionComponent<HeaderProps> & {
  Title: React.FunctionComponent;
};
