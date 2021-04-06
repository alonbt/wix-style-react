import * as React from 'react';
import * as color from 'color';

type ColorInstance = ReturnType<typeof color['rgb']>;

export interface ColorPickerProps {
  dataHook?: string;
  value: string | ColorInstance;
  showHistory?: boolean;
  showConverter?: boolean;
  showInput?: boolean;
  onChange: (color: string | ColorInstance) => void;
  onCancel: (color: string | ColorInstance) => void;
  onConfirm: (color: string | ColorInstance) => void;
  onAdd?: (color: string | ColorInstance) => void;
  addTooltipContent?: React.ReactNode;
  allowEmpty?: boolean;
  emptyPlaceholder?: string;
}

export default class ColorPicker extends React.Component<ColorPickerProps> {}
