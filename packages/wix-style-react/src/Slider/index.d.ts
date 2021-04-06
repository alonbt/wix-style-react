import * as React from 'react';

export interface SliderProps {
  allowCross?: boolean;
  dataHook?: string;
  displayMarks?: boolean;
  displayTooltip?: boolean;
  id?: string;
  max?: number;
  min?: number;
  onAfterChange?: (value: number[] | number) => void;
  onChange: (value: number[] | number) => void;
  rtl?: boolean;
  step?: number;
  pushable?: boolean | number;
  value?: number[] | number;
  disabled?: boolean;
  marks?: { [key: number]: number | string };
  startPoint?: number;
}

export default class Slider extends React.PureComponent<SliderProps> {}
