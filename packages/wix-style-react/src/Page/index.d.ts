import * as React from 'react';
import PageHeader from '../PageHeader';
import { ScrollableContainerCommonProps } from '../common';

export type PageProps = {
  dataHook?: string;
  backgroundImageUrl?: string;
  maxWidth?: number;
  minWidth?: number;
  height?: string;
  sidePadding?: number;
  className?: string;
  gradientClassName?: string;
  scrollableContentRef?: (ref: HTMLElement) => void;
  zIndex?: number;
  horizontalScroll?: boolean;
  scrollProps?: ScrollableContainerCommonProps;
};

export interface ContentProps {
  children: React.ReactNode;
  fullScreen?: boolean;
}
declare const Content: React.SFC<ContentProps>;

export interface FixedContentProps {
  children: React.ReactElement;
}
declare const FixedContent: React.SFC<FixedContentProps>;

export interface FixedFooterProps {
  children: React.ReactElement;
}
declare const FixedFooter: React.SFC<FixedFooterProps>;

export interface TailProps {
  children: React.ReactElement;
  minimized?: boolean;
}
declare const Tail: React.SFC<TailProps>;

export interface StickyProps {
  children: React.ReactElement | StickyChildrenRenderFn;
  style?: React.CSSProperties;
}
type StickyChildrenRenderFn = (data: {
  style: string;
  className: string;
}) => React.ReactElement;
declare const Sticky: React.SFC<StickyProps>;

export default class Page extends React.PureComponent<PageProps> {
  static Header: typeof PageHeader;
  static Content: typeof Content;
  static FixedContent: typeof FixedContent;
  static Tail: typeof Tail;
  static Sticky: typeof Sticky;
  static FixedFooter: typeof FixedFooter;
}
