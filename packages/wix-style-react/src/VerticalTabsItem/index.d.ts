import * as React from 'react';
import { IconElement } from '../common';

export interface VerticalTabsItemProps {
  type?: VerticalTabsItemType;
  dataHook?: string;
  prefixIcon?: IconElement;
  suffixIcon?: IconElement;
  disabled?: boolean;
  id?: number;
}

export default class VerticalTabsItem extends React.PureComponent<VerticalTabsItemProps> {}
export type VerticalTabsItemType = 'tab' | 'action' | 'title';
