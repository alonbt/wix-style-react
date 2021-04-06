import * as React from 'react';

export enum AreaY {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
  NONE = 'none',
}

export enum AreaX {
  START = 'start',
  MIDDLE = 'middle',
  END = 'end',
  NONE = 'none',
}
export interface ScrollAreaData {
  area: {
    x: AreaX;
    y: AreaY;
  };
  target: HTMLElement;
}

export interface ScrollableContainerProps {
  scrollThrottleWait?: number;
  onScrollAreaChanged?(scrollChangedData: ScrollAreaData): void;
  onScrollChanged?(target: HTMLElement): void;
}

declare const ScrollableContainer: React.FunctionComponent<ScrollableContainerProps>;
export default ScrollableContainer;
