import {
  addMonths,
  startOfMonth,
  endOfMonth,
  endOfDay,
  isWithinInterval,
  isAfter,
  isBefore,
  differenceInCalendarDays,
} from 'date-fns';

/**
 * Date utils for a multi-month calendar view.
 */
export class CalendarView {
  /**
   * @param {*} firstMonthDate a date that represents the first displayed month in the calendar view. (Does not have to be the 1st of that month)
   * @param {*} numOfMonths number of months that are displayed in the view
   */
  constructor(firstMonthDate, numOfMonths) {
    this.startDate = startOfMonth(firstMonthDate);
    this.endDate = endOfDay(
      endOfMonth(addMonths(this.startDate, numOfMonths - 1)),
    );
  }

  /**
   * Is the given date contained in the calendar view
   *
   * @param {*} date
   * @returns
   * @memberof CalendarView
   */
  isContained(date) {
    return isWithinInterval(date, { start: this.startDate, end: this.endDate });
  }

  isRangeFits(from, to) {
    return (
      differenceInCalendarDays(to, from) <=
      differenceInCalendarDays(this.endDate, this.startDate)
    );
  }

  /**
   * Is the given date after the view's end date
   */
  isAfterView(date) {
    return isAfter(date, this.endDate);
  }

  /**
   * Is the given date before the view's start date
   */
  isBeforeView(date) {
    return isBefore(date, this.startDate);
  }
}
