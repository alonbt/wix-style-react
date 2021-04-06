import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Divider from './Divider';

export interface SidePanelProps {
  dataHook?: string;
  buttonText?: string;
  className?: string;
  onCloseButtonClick?: () => void;
  children?: React.ReactNode;
}

export default class SidePanel extends React.PureComponent<SidePanelProps> {
  static Header: typeof Header;
  static Footer: typeof Footer;
  static Content: typeof Content;
  static Divider: typeof Divider;
}
