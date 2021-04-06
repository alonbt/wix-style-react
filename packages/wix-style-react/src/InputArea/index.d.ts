import * as React from 'react';
import { InputStatus } from '../Input';
import { TooltipProps } from '../Tooltip';

export type InputAreaStatus = InputStatus;

export interface InputAreaProps {
  dataHook?: string;
  className?: string;
  ariaControls?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  size?: InputAreaSize;
  defaultValue?: string;
  disabled?: boolean;
  forceFocus?: boolean;
  forceHover?: boolean;
  hasCounter?: boolean;
  id?: string;
  name?: string;
  maxHeight?: string;
  maxLength?: number;
  menuArrow?: boolean;
  minHeight?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onEnterPressed?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onEscapePressed?: () => void;
  onFocus?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  readOnly?: boolean;
  resizable?: boolean;
  rows?: number;
  autoGrow?: boolean;
  minRowsAutoGrow?: number;
  tabIndex?: number;
  tooltipPlacement?: TooltipProps['placement'];
  value?: string;
  required?: boolean;
  status?: InputAreaStatus;
  statusMessage?: React.ReactNode;
}

export default class InputArea extends React.PureComponent<InputAreaProps> {
  static MIN_ROWS: 2;

  focus: () => void;
  blur: () => void;
  select: () => void;
}

export type InputAreaSize = 'small' | 'medium' | 'normal';
