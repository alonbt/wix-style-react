import * as React from 'react';
import { TableListItemProps } from '../TableListItem';

export type StyledNestableListItem = {
  id: string | number;
  draggable?: boolean;
  isCollapsed?: boolean;
  addItemLabel?: string;
  children?: StyledNestableListItem[];
} & TableListItemProps;

export interface StyledNestableListProps {
  dataHook?: string;
  withBottomBorder?: boolean;
  className?: string;
  readOnly?: boolean;
  items: StyledNestableListItem[];
  preventChangeDepth?: boolean;
  maxDepth?: number;
  addItemLabel?: string;
  onChange?(data: { items: StyledNestableListItem[] }): void;
  onAddItem?(item: StyledNestableListItem): void;
}

export default class StyledNestableList extends React.PureComponent<StyledNestableListProps> {}
