import * as React from 'react';
import {
  Header,
  Content,
  Footer,
  Footnote,
  Illustration,
} from './LayoutBlocks';

export type ModalTheme = 'standard' | 'premium' | 'destructive';

export interface BaseModalLayoutProps {
  className?: string;
  dataHook?: string;
  theme?: ModalTheme;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onHelpButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export * from './LayoutBlocks';

export default class BaseModalLayout extends React.PureComponent<BaseModalLayoutProps> {
  static Header: typeof Header;
  static Content: typeof Content;
  static Footer: typeof Footer;
  static Footnote: typeof Footnote;
  static Illustration: typeof Illustration;
}
