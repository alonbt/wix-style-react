import * as React from 'react';
import { Locale } from 'date-fns';
import { CalendarProps, LanguageType as CalendarLanguageType } from '../Calendar';
import { PopoverCommonProps } from '../common';

export type DatePickerStatus = 'error' | 'warning' | 'loading';
export { LanguageType } from '../Calendar';

export interface DatePickerProps extends CalendarProps {
  className?: string;
  customInput?: React.ReactNode;
  inputProps?: {};
  dateFormat?: string | Function;
  dateFormatV2?: string | Function;
  locale?: CalendarLanguageType | Locale;
  disabled?: boolean;
  inputDataHook?: string;
  calendarDataHook?: string;
  placeholderText?: string;
  rtl?: boolean;
  value?: {};
  initialOpen?: boolean;
  status?: DatePickerStatus;
  statusMessage?: React.ReactNode;
  width?: number | string;
  zIndex?: number;
  popoverProps?: PopoverCommonProps;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'small' | 'medium' | 'large';
  readOnly?: boolean;
  clearButton?: boolean;
  onClear?: React.MouseEventHandler<HTMLInputElement>;
}

export default class DatePicker extends React.PureComponent<DatePickerProps> {
  openCalendar: () => void;
  closeCalendar: () => void;
  makeInputFocusable: () => void;
}
