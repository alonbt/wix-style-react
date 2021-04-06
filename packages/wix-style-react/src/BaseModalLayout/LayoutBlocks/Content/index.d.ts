import * as React from 'react';
import { ScrollableContainerCommonProps } from '../../../common';

export interface ContentProps {
  className?: string;
  dataHook?: string;
  content?: string | React.ReactNode;
  hideTopScrollDivider?: boolean;
  hideBottomScrollDivider?: boolean;
  scrollProps?: ScrollableContainerCommonProps;
}

export const Content: React.FunctionComponent<ContentProps>;
