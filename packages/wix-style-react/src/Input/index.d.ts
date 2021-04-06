import * as React from 'react';
import { TooltipProps } from '../Tooltip';

export interface InputProps {
  dataHook?: string;
  className?: string;
  id?: string;
  ariaControls?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  autocomplete?: string;
  defaultValue?: string;
  disabled?: boolean;
  status?: InputStatus;
  statusMessage?: React.ReactNode;
  hideStatusSuffix?: boolean;
  forceFocus?: boolean;
  forceHover?: boolean;
  maxLength?: number;
  menuArrow?: boolean;
  clearButton?: boolean;
  name?: string;
  border?: 'standard' | 'round' | 'bottomLine';
  noLeftBorderRadius?: boolean;
  noRightBorderRadius?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClear?: React.MouseEventHandler<HTMLInputElement>;
  onCompositionChange?: (isComposing: boolean) => void;
  onEnterPressed?: React.KeyboardEventHandler<HTMLInputElement>;
  onEscapePressed?: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  onInputClicked?: React.MouseEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  prefix?: React.ReactNode;
  readOnly?: boolean;
  disableEditing?: boolean;
  roundInput?: boolean;
  rtl?: boolean;
  size?: InputSize;
  suffix?: React.ReactNode;
  tabIndex?: number;
  textOverflow?: 'clip' | 'ellipsis';
  tooltipPlacement?: TooltipProps['placement'];
  type?: string;
  value?: string | number;
  withSelection?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  customInput?: React.ReactNode | Function;
  pattern?: string;
  inputRef?: (input: HTMLInputElement) => void;
}

export type InputStatus =
  | InputStatusError
  | InputStatusWarning
  | InputStatusLoading;
export type InputStatusError = 'error';
export type InputStatusLoading = 'loading';
export type InputStatusWarning = 'warning';

export type InputSize = 'small' | 'medium' | 'large';

declare const Ticker: React.SFC<TickerProps>;
interface TickerProps {
  onUp?: React.MouseEventHandler<HTMLElement>;
  onDown?: React.MouseEventHandler<HTMLElement>;
  upDisabled?: boolean;
  downDisabled?: boolean;
  dataHook?: string;
}

declare class Unit extends React.Component<UnitProps> {}
interface UnitProps {
  value?: string;
}

declare const IconAffix: React.SFC<IconAffixProps>;
interface IconAffixProps {
  dataHook?: string;
}

declare const Affix: React.SFC<AffixProps>;
interface AffixProps {
  value?: string;
}

declare const Group: React.SFC;

export default class Input extends React.Component<InputProps> {
  static Ticker: typeof Ticker;
  static Unit: typeof Unit;
  static IconAffix: typeof IconAffix;
  static Affix: typeof Affix;
  static Group: typeof Group;
  static StatusError: InputStatusError;
  static StatusLoading: InputStatusLoading;
  static StatusWarning: InputStatusWarning;

  clear: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  blur: () => void;
  focus: HTMLElement['focus'];
  select: () => void;
}
