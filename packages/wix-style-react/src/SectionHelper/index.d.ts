import * as React from 'react';

export interface SectionHelperProps {
  dataHook?: string;
  appearance?: SectionHelperAppearance;
  title?: React.ReactNode;
  showCloseButton?: boolean;
  onClose?: React.MouseEventHandler<HTMLElement>;
  onAction?: React.MouseEventHandler<HTMLElement>;
  actionText?: string;
  fullWidth?: boolean;
}

export default class SectionHelper extends React.PureComponent<SectionHelperProps> {}

export type SectionHelperAppearance =
  | 'warning'
  | 'standard'
  | 'danger'
  | 'success'
  | 'premium'
  | 'preview'
  | 'experimentalDark';
