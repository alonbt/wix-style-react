import * as React from 'react';
import { DraggableProps } from '../DragAndDrop/Draggable';

export interface SortableListProps extends DraggableProps {
  dataHook?: string;
  insertPosition?: SortableListInsertPosition;
  usePortal?: boolean;
  dragPreview?: boolean;
  items?: object[];
  className?: string;
  contentClassName?: string;
}

export default class SortableList extends React.PureComponent<SortableListProps> {}

export type SortableListInsertPosition = 'start' | 'end' | 'any';
