import * as React from 'react';
import { Locale } from 'date-fns';

export interface dateIndicationProps {
  date: Date;
  isSelected: boolean;
}

export type LanguageType =
  | 'en'
  | 'es'
  | 'pt'
  | 'fr'
  | 'de'
  | 'pl'
  | 'it'
  | 'ru'
  | 'ja'
  | 'ko'
  | 'tr'
  | 'sv'
  | 'no'
  | 'nl'
  | 'da'
  | 'zh'
  | 'th'
  | 'uk'
  | 'cs'
  | 'ar'
  | 'bg'
  | 'el'
  | 'fi'
  | 'he'
  | 'hi'
  | 'hu'
  | 'id'
  | 'ms'
  | 'ro'
  | 'lt'
  | 'vi';

export interface CalendarProps {
  dataHook?: string;
  autoFocus?: boolean;
  numOfMonths?: 1 | 2;
  className?: string;
  onChange: Function;
  onMonthChange?: (monthStart: Date) => void;
  onClose?: Function;
  excludePastDates?: boolean;
  filterDate?: Function;
  value?:
    | string
    | Date
    | {
        from?: string | Date;
        to?: string | Date;
      };
  selectionMode?: 'day' | 'range';
  showYearDropdown?: boolean;
  showMonthDropdown?: boolean;
  shouldCloseOnSelect?: boolean;
  locale?: LanguageType | Locale;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  rtl?: boolean;
  dateIndication?: React.FC<dateIndicationProps>;
  today?: string | Date;
  leftArrowAriaLabel?: string;
  leftArrowAriaLabelledBy?: string;
  rightArrowAriaLabel?: string;
  rightArrowAriaLabelledBy?: string;
  monthDropdownAriaLabel?: string;
  monthDropdownAriaLabelledBy?: string;
  yearDropdownAriaLabel?: string;
  yearDropdownAriaLabelledBy?: string;
}

export default class Calendar extends React.PureComponent<CalendarProps> {
  static areValuesEqual: (value1?: {}, value2?: {}) => boolean;
  static renderDay: (day: any, modifiers: any) => void;
  static optionalParse: (dateOrString: Date | string) => void;
  static parseValue: (value: any) => any;
  static isSingleDay: (value: any) => Date;
  static isRangeValue: (value: any) => boolean;
  static getUpdatedMonth: (
    nextPropsValue: any,
    numOfMonths: number,
    currentMonthDate: any,
  ) => any;
}
