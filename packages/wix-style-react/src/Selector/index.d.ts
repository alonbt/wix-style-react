import * as React from 'react';

export interface SelectorProps {
  className?: string;
  dataHook?: string;
  id: string | number;
  title: string;
  image?: React.ReactNode;
  imageSize?: SelectorImageSize;
  imageShape?: SelectorImageShape;
  isSelected?: boolean;
  isDisabled?: boolean;
  subtitle?: string;
  extraNode?: React.ReactNode;
  onToggle?: (id: SelectorProps['id']) => void;
  toggleType?: SelectorToggleType;
  showBelowNodeOnSelect?: boolean;
  belowNode?: React.ReactNode;
  subtitleNode?: React.ReactNode;
}

export interface SelectorExtraTextProps {
  dataHook?: string;
  text: string;
}
export class SelectorExtraText extends React.PureComponent<SelectorExtraTextProps> {}

export interface SelectorProgressBarProps {
  dataHook?: string;
  progress: number;
}
export class SelectorProgressBar extends React.PureComponent<SelectorProgressBarProps> {}

export default class Selector extends React.PureComponent<SelectorProps> {
  static ExtraText: typeof SelectorExtraText;
  static ProgressBar: typeof SelectorProgressBar;
}

export type SelectorImageSize =
  | 'tiny'
  | 'small'
  | 'portrait'
  | 'large'
  | 'cinema';
export type SelectorImageShape = 'rectangular' | 'circle';
export type SelectorToggleType = 'checkbox' | 'radio';
