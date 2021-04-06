import * as React from 'react';

type IRenderData = {
  isPlaceholder: boolean;
  depth: number;
  isPreview: boolean;
  connectDragSource: any;
  item: object;
};

export interface NestableListProps {
  dataHook?: string;
  items?: object[];
  readOnly?: boolean;
  isRenderDraggingChildren?: boolean;
  childrenProperty?: string;
  childrenStyle?: React.CSSProperties;
  onUpdate?: (data: { items: object[]; item: object }) => void;
  useDragHandle?: boolean;
  maxDepth?: number;
  threshold?: number;
  onDragStart?: (itemProps: any) => void;
  onDragEnd?: (itemProps: any) => void;
  renderItem?: (data: IRenderData) => React.ReactNode;
  renderAction?: (data: IRenderData) => React.ReactNode;
  renderPrefix?: (data: IRenderData) => React.ReactNode;
}

export default class NestableList extends React.PureComponent<NestableListProps> {}
