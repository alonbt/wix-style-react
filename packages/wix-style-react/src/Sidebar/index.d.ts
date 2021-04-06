import * as React from 'react';
import SidebarBackButton from '../SidebarBackButton';

export interface SidebarProps {
  classNames?: SidebarClassNames;
  dataHook?: string;
  isHidden?: boolean;
  skin?: SidebarSkin;
  selectedKey?: string;
}

export type SidebarSkin = 'dark' | 'light';
export type SidebarClassNames = {
  sideBar?: string;
  content?: string;
  slider?: string;
  sliderOutToLeft?: string;
  sliderOutToRight?: string;
  sliderInFromLeft?: string;
  sliderInFromRight?: string;
};

export class SidebarItem extends React.PureComponent<SidebarItemProps> {}
interface SidebarItemProps {
  itemKey?: string;
  innerMenu?: React.ReactNode[];
  disable?: boolean;
  onClick?: (itemKey: string, e: React.MouseEvent<HTMLElement>) => void;
}

export class SidebarPersistentHeader extends React.Component<SidebarPersistentHeaderProps> {}
interface SidebarPersistentHeaderProps {}

export class SidebarPersistentFooter extends React.Component<SidebarPersistentFooterProps> {}
interface SidebarPersistentFooterProps {}

export class SidebarContextConsumer extends React.Component<SidebarContextConsumerProps> {}
interface SidebarContextConsumerProps {
  children(renderProps: {
    itemClicked: (itemKey: string) => void;
    backClicked: () => void;
    getSelectedKey: () => string;
    getSkin: () => SidebarSkin;
  }): React.ReactNode;
}

export class SidebarItemContextConsumer extends React.Component<SidebarItemContextConsumerProps> {}
interface SidebarItemContextConsumerProps {
  children(renderProps: { selected: () => boolean }): React.ReactNode;
}

export default class Sidebar extends React.Component<SidebarProps> {
  static Item: typeof SidebarItem;
  static PersistentHeader: typeof SidebarPersistentHeader;
  static PersistentFooter: typeof SidebarPersistentFooter;
  static BackButton: typeof SidebarBackButton;

  setSelectedKey: (setSelectedKey: string) => void;
}
