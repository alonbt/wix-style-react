import { st, classes, cssStates } from './Calendar.st.css';
import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import { addMonths, subMonths, startOfMonth, isSameDay } from 'date-fns';
import { CalendarView } from './utils';
import localeUtilsFactory from '../LocaleUtils';
import DatePickerHead from './DatePickerHead';
import { legacyParse } from '@date-fns/upgrade/v2';

export default class Calendar extends React.PureComponent {
  static displayName = 'Calendar';

  static defaultProps = {
    locale: 'en',
    className: '',
    filterDate: () => true,
    dateIndication: () => null,
    shouldCloseOnSelect: true,
    onClose: () => {},
    autoFocus: true,
    excludePastDates: false,
    selectionMode: 'day',
    showMonthDropdown: false,
    showYearDropdown: false,
    numOfMonths: 1,
    firstDayOfWeek: 1,
  };

  constructor(props) {
    super(props);

    const initialMonth = Calendar.getUpdatedMonth(
      props.value,
      props.numOfMonths,
    );
    this.state = {
      month: initialMonth || new Date(),
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const month = Calendar.getUpdatedMonth(
        nextProps.value,
        nextProps.numOfMonths,
        this.state.month,
      );
      if (month) {
        this.setState({ month });
      }
    }
  }

  static areValuesEqual(value1 = {}, value2 = {}) {
    if (!Boolean(value1) && !Boolean(value2)) {
      return true;
    }

    if (Calendar.isRangeValue(value1) && Calendar.isRangeValue(value2)) {
      return (
        isSameDay(value1.from, value2.from) && isSameDay(value1.to, value2.to)
      );
    }

    return isSameDay(value1, value2);
  }

  _renderDay = (day, modifiers) => {
    const { dateIndication } = this.props;

    const isOutsideDay = !!modifiers[cssStates({ outside: true })];
    const isSelectedDay = !!modifiers[cssStates({ selected: true })];
    const dateIndicationNode =
      dateIndication &&
      dateIndication({ date: day, isSelected: isSelectedDay });
    const shouldHasIndication = dateIndicationNode && !isOutsideDay;

    return (
      <div
        className={st(classes.dayWrapper, {
          hasIndication: shouldHasIndication,
        })}
        data-date={`${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`}
        data-outsideday={isOutsideDay}
      >
        <div className={classes.dayText}>{day.getDate()}</div>
        {shouldHasIndication ? (
          <div className={classes.dayIndicationContainer}>
            {dateIndicationNode}
          </div>
        ) : null}
      </div>
    );
  };

  _setMonth = month => {
    this.setState({ month });
    const { onMonthChange } = this.props;
    if (onMonthChange) {
      onMonthChange(month);
    }
  };

  _handleDayClick = (value, modifiers = {}, event = null) => {
    this._preventActionEventDefault(event);
    const propsValue = this.props.value || {};
    const { onChange, shouldCloseOnSelect } = this.props;

    if (this.props.selectionMode === 'range') {
      if (
        (!propsValue.from && !propsValue.to) ||
        (propsValue.from && propsValue.to)
      ) {
        onChange({ from: value }, modifiers);
      } else {
        const anchor = propsValue.from || propsValue.to;
        const newVal =
          anchor < value
            ? { from: anchor, to: value }
            : { from: value, to: anchor };

        onChange(newVal, modifiers);
        shouldCloseOnSelect && this.props.onClose(event);
      }
    } else {
      onChange(value, modifiers);
      shouldCloseOnSelect && this.props.onClose(event);
    }
  };

  static optionalParse = dateOrString =>
    typeof dateOrString === 'string' ? legacyParse(dateOrString) : dateOrString;

  /** Return a value in which all string-dates are parsed into Date objects */
  static parseValue = value => {
    if (!value) {
      return new Date();
    }
    if (typeof value === 'string') {
      return legacyParse(value);
    } else if (value instanceof Date) {
      return value;
    } else {
      return {
        from: Calendar.optionalParse(value.from),
        to: Calendar.optionalParse(value.to),
      };
    }
  };

  static isSingleDay(value) {
    return value instanceof Date;
  }

  static isRangeValue(value) {
    return Boolean(value.from || value.to);
  }

  static getUpdatedMonth = (nextPropsValue, numOfMonths, currentMonthDate) => {
    const nextValue = Calendar.parseValue(nextPropsValue);

    if (!currentMonthDate) {
      return Calendar.isSingleDay(nextValue)
        ? nextValue
        : nextValue.from || nextValue.to;
    }

    const view = new CalendarView(currentMonthDate, numOfMonths);

    if (Calendar.isSingleDay(nextValue)) {
      if (!view.isContained(nextValue)) {
        return nextValue;
      }
    } else {
      const { from, to } = nextValue;

      if (from && view.isAfterView(from)) {
        //         F--- =>  F---
        //   VVVVV      =>  VVVVV
        return from;
      } else if (to && view.isBeforeView(to)) {
        if (view.isRangeFits(from, to)) {
          //   F-T        =>  F-T
          //       VVVVV  =>  VVVVV
          return from;
        } else {
          //   F-----T        =>  F-----T
          //          VVVVV    =>    VVVVV
          return subMonths(to, numOfMonths - 1);
        }
      } else if (
        from &&
        view.isBeforeView(from) &&
        to &&
        view.isAfterView(to)
      ) {
        //   F-------T  =>    F-------T
        //     VVVVV    =>    VVVVV
        return from; // choose the 'from' anchor arbitrarly
      }
    }
    /*
     * We only changed the month if the day (or range.edges) are outside the view.
     * This is to avoid changing the month right after a user clicks on the calendar.
     */
    return null;
  };

  _getSelectedDays(value) {
    const { from, to } = value || {};
    if (from && to) {
      return { from: from, to: to };
    } else if (from) {
      return { after: prevDay(from) };
    } else if (to) {
      return { before: nextDay(to) };
    } else {
      // Single day OR empty value
      return value;
    }
  }

  _preventActionEventDefault = (event = null) => {
    // We should not prevent "TAB"/"ESC" key
    if (event && (!event.key || !this.keyHandlers[event.key])) {
      event.preventDefault();
    }
  };

  _createCaptionElement = month => {
    const {
      locale,
      showMonthDropdown,
      showYearDropdown,
      leftArrowAriaLabel,
      leftArrowAriaLabelledBy,
      rightArrowAriaLabel,
      rightArrowAriaLabelledBy,
      monthDropdownAriaLabel,
      monthDropdownAriaLabelledBy,
      yearDropdownAriaLabel,
      yearDropdownAriaLabelledBy,
    } = this.props;

    const localeUtils = localeUtilsFactory(locale);

    return (
      <DatePickerHead
        {...{
          className: classes.header,
          date: month,
          showYearDropdown,
          showMonthDropdown,
          locale: typeof locale === 'string' ? locale : '',
          localeUtils,
          onChange: this._setMonth,
          onLeftArrowClick: () =>
            this._setMonth(startOfMonth(addMonths(month, -1))),
          onRightArrowClick: () =>
            this._setMonth(startOfMonth(addMonths(month, 1))),
          leftArrowAriaLabel,
          leftArrowAriaLabelledBy,
          rightArrowAriaLabel,
          rightArrowAriaLabelledBy,
          monthDropdownAriaLabel,
          monthDropdownAriaLabelledBy,
          yearDropdownAriaLabel,
          yearDropdownAriaLabelledBy,
        }}
      />
    );
  };

  _createWeekdayElement = localeUtils => {
    return ({ className, weekday }) => {
      const weekdayShort = localeUtils.formatWeekdayShort(weekday);
      const weekdayLong = localeUtils.formatWeekdayLong(weekday);
      return (
        <div className={className} aria-label={weekdayLong} role="columnheader">
          <abbr data-hook="weekday-day">{weekdayShort}</abbr>
        </div>
      );
    };
  };

  _createDayPickerProps = () => {
    const {
      locale,
      filterDate,
      excludePastDates,
      numOfMonths,
      firstDayOfWeek,
      rtl,
      today,
    } = this.props;

    const value = Calendar.parseValue(this.props.value);

    const month = this.state.month;
    const localeUtils = localeUtilsFactory(locale, firstDayOfWeek);
    const { from, to } = value || {};
    const singleDay = !from && !to && value;

    const firstOfMonth = [
      new Date(month.getFullYear(), month.getMonth(), 1),
      new Date(month.getFullYear(), month.getMonth() + 1, 1),
    ];
    const lastOfMonth = [
      new Date(month.getFullYear(), month.getMonth() + 1, 0),
      new Date(month.getFullYear(), month.getMonth() + 2, 0),
    ];

    const captionElement = this._createCaptionElement(month);
    const selectedDays = this._getSelectedDays(value);
    const weekdayElement = this._createWeekdayElement(localeUtils);

    const modifiers = {
      [cssStates({ start: true })]: from,
      [cssStates({ end: true })]: to,
      [cssStates({ firstOfMonth: true })]: firstOfMonth,
      [cssStates({ lastOfMonth: true })]: lastOfMonth,
      [cssStates({ singleDay: true })]: singleDay,
    };

    if (today) {
      modifiers[cssStates({ today: true })] = Calendar.parseValue(today);
    }

    return {
      disabledDays: [
        date => !filterDate(new Date(date)),
        excludePastDates ? { before: new Date() } : {},
      ],
      initialMonth: month,
      initialYear: month,
      selectedDays,
      month,
      year: month,
      locale: typeof locale === 'string' ? locale : '',
      fixedWeeks: true,
      onKeyDown: this._handleKeyDown,
      onDayClick: this._handleDayClick,
      localeUtils,
      navbarElement: () => null,
      captionElement,
      onCaptionClick: this._preventActionEventDefault,
      onDayKeyDown: this._handleDayKeyDown,
      numberOfMonths: numOfMonths,
      modifiers,
      renderDay: this._renderDay,
      dir: rtl ? 'rtl' : 'ltr',
      weekdayElement,
      classNames: {
        /* The classes: 'DayPicker', 'DayPicker-wrapper', 'DayPicker-Month', 'DayPicker-Day', 'disabled'
        are used as selectors for the elements at the drivers and at the e2e tests */

        container: st('DayPicker', classes.container),
        wrapper: 'DayPicker-wrapper',
        interactionDisabled: 'DayPicker--interactionDisabled',

        months: st(classes.months, { twoMonths: numOfMonths > 1 }),
        month: st('DayPicker-Month', classes.month),
        weekdays: classes.weekdays,
        weekdaysRow: classes.weekdaysRow,
        weekday: classes.weekday,
        body: classes.body,
        week: classes.week,
        weekNumber: 'DayPicker-WeekNumber',
        day: st('DayPicker-Day', classes.day),

        // default modifiers
        today: cssStates({ today: !today }),
        selected: cssStates({ selected: true }),
        disabled: st('disabled', cssStates({ disabled: true })),
        outside: cssStates({ outside: true }),
      },
    };
  };

  _handleKeyDown = event => {
    const keyHandler = this.keyHandlers[event.key];

    keyHandler && keyHandler(event);
  };

  keyHandlers = {
    // escape
    Escape: this.props.onClose,

    // tab
    Tab: this.props.onClose,
  };

  _focusSelectedDay = () => {
    if (this.dayPickerRef) {
      const selectedDay = this.dayPickerRef.dayPicker.querySelector(
        `.${cssStates({ selected: true })}`,
      );

      if (selectedDay) {
        // The 'unfocused' class is used as a selector at the drivers and e2e test
        selectedDay.classList.add(cssStates({ unfocused: true }), 'unfocused');
        selectedDay.focus();
      }
    }
  };

  _handleDayKeyDown = (_value, _modifiers, event = null) => {
    this._preventActionEventDefault(event);

    const unfocusedDay = this.dayPickerRef.dayPicker.querySelector(
      `.${cssStates({ unfocused: true })}`,
    );

    if (unfocusedDay) {
      // The 'unfocused' class is used as a selector at the drivers and e2e test
      unfocusedDay.classList.remove(
        cssStates({ unfocused: true }),
        'unfocused',
      );
    }
  };

  componentDidMount() {
    this.props.autoFocus && this._focusSelectedDay();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.autoFocus && this.props.autoFocus) {
      this._focusSelectedDay();
    }
  }

  render() {
    const { dataHook, className } = this.props;
    return (
      <div
        data-hook={dataHook}
        className={st(classes.root, className)}
        onClick={this._preventActionEventDefault}
      >
        <DayPicker
          ref={ref => (this.dayPickerRef = ref)}
          {...this._createDayPickerProps()}
        />
      </div>
    );
  }
}

Calendar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Auto focus on selected day when component mounts or updates */
  autoFocus: PropTypes.bool,

  /** Display multiple months, currently allowing only 1 or 2 */
  numOfMonths: PropTypes.oneOf([1, 2]),

  /** First day of the week, allowing only from 0 to 6 (Sunday to Saturday) */
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),

  /** A single CSS class name to be appended to the root element. */
  className: PropTypes.string,

  /** Callback function called with a Date or a Range whenever the user selects a day in the calendar */
  onChange: PropTypes.func.isRequired,

  /** Callback function called with the Date of the first day of the month whenever the user selects a month in the calendar */
  onMonthChange: PropTypes.func,

  /** Callback function called whenever user press escape or click outside of the element or a date is selected and `shouldCloseOnSelect` is set. Receives an event as first argument */
  onClose: PropTypes.func,

  /** Past dates are unselectable */
  excludePastDates: PropTypes.bool,

  /**
   * ##### Determines selectable dates
   *  * `param` {Date} `date` - a date to check
   *  * `return` {boolean} - true if `date` should be selectable, false otherwise
   */
  filterDate: PropTypes.func,

  /** The selected date */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
    PropTypes.shape({
      from: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    }),
  ]),

  /** Whether the user should be able to select a date range, or just a single day */
  selectionMode: PropTypes.oneOf(['day', 'range']),

  /** Display a selectable yearDropdown */
  showYearDropdown: PropTypes.bool,

  /** Display a selectable monthDropdown */
  showMonthDropdown: PropTypes.bool,

  /** should the calendar close on day selection */
  shouldCloseOnSelect: PropTypes.bool,

  /** DatePicker instance locale */
  locale: PropTypes.oneOfType([
    PropTypes.oneOf([
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
      'uk',
      'ar',
      'bg',
      'el',
      'fi',
      'he',
      'hi',
      'hu',
      'id',
      'ms',
      'ro',
      'lt',
      'vi',
    ]),
    PropTypes.shape({
      code: PropTypes.string,
      formatDistance: PropTypes.func,
      formatRelative: PropTypes.func,
      localize: PropTypes.object,
      formatLong: PropTypes.object,
      match: PropTypes.object,
      options: PropTypes.object,
    }),
  ]),

  /** RTL mode. When true, the keyboard navigation will be changed means pressing on the right arrow will navigate to the previous day, and pressing on the left arrow will navigate to the next day. */
  rtl: PropTypes.bool,

  /**
   ##### This function allows you to add an indication under a specific date.
   The function should return the indication node of a specific date or null if this day doesn't have an indication.
   * `param` {date: Date, isSelected: boolean } `date` - a date, `isSelected` - whether this date is the selected date
   * `return` {React.node} - the indication node of a specific date or null if this day doesn't have an indication.
  */
  dateIndication: PropTypes.func,

  /** Define today's date. The today indication is added automatically according to the user timezone but in some cases, we need the ability to add the today indication based on the business timezone. */
  today: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /** Defines a string value that labels the left arrow in calendar header */
  leftArrowAriaLabel: PropTypes.string,

  /**  Identifies the element that labels the left arrow in calendar header */
  leftArrowAriaLabelledBy: PropTypes.string,

  /** Defines a string value that labels the right arrow in calendar header */
  rightArrowAriaLabel: PropTypes.string,

  /** Identifies the element that labels the right arrow in calendar header */
  rightArrowAriaLabelledBy: PropTypes.string,

  /** Defines a string value that labels the months dropdown in calendar header */
  monthDropdownAriaLabel: PropTypes.string,

  /** Identifies the element that labels the months dropdown in calendar header */
  monthDropdownAriaLabelledBy: PropTypes.string,

  /** Defines a string value that labels the years dropdown in calendar header */
  yearDropdownAriaLabel: PropTypes.string,

  /** Identifies the element that labels the years dropdown in calendar header */
  yearDropdownAriaLabelledBy: PropTypes.string,
};

function nextDay(date) {
  const day = new Date(date);
  day.setDate(day.getDate() + 1);
  return day;
}

function prevDay(date) {
  const day = new Date(date);
  day.setDate(day.getDate() - 1);
  return day;
}
