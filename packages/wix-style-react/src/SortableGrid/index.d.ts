import * as React from 'react';
import { DraggableProps } from '../DragAndDrop/Draggable';

export interface SortableGridProps extends DraggableProps {
  dataHook?: string;
  usePortal?: boolean;
  dragPreview?: boolean;
  items?: object[];
  className?: string;
  contentClassName?: string;
  startFixedElement?: React.ReactNode;
  endFixedElement?: React.ReactNode;
}

export default class SortableGrid extends React.PureComponent<SortableGridProps> {}
