import * as React from 'react';
import { InputSize, InputStatus, InputProps } from '../Input';

export interface TimeInputWipProps {
  className?: string;
  dataHook?: string;
  disabled?: InputProps['disabled'];
  border?: InputProps['border'];
  hour12?: Intl.DateTimeFormatOptions['hour12'];
  numberingSystem?: Intl.ResolvedDateTimeFormatOptions['numberingSystem'];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: InputProps['placeholder'];
  prefix?: InputProps['prefix'];
  size?: InputProps['size'];
  status?: InputProps['status'];
  statusMessage?: InputProps['statusMessage'];
  step?: number;
  suffix?: InputProps['suffix'];
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  timeZone?: Intl.DateTimeFormatOptions['timeZone'];
  value?: Date;
  width?: React.CSSProperties['width'];
}

export default class TimeInputWip extends React.PureComponent<TimeInputWipProps> {}
