import * as React from 'react';
import { InputStatus } from '../Input';

export interface TimeInputProps {
  dashesWhenDisabled?: boolean;
  dataHook?: string;
  defaultValue?: import('moment').Moment;
  disableAmPm?: boolean;
  disabled?: boolean;
  onChange?: (time: import('moment').Moment) => void;
  rtl?: boolean;
  style?: object;
  minutesStep?: number;
  width?: 'auto' | '100%';
  customSuffix?: React.ReactNode;
  status?: InputStatus;
  hideStatusSuffix?: boolean;
  statusMessage?: React.ReactNode;
  showSeconds?: boolean;
}

export default class TimeInput extends React.PureComponent<TimeInputProps> {}
