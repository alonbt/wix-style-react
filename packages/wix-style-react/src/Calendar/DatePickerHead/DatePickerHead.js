import React from 'react';
import PropTypes from 'prop-types';

import ChevronLeftLarge from 'wix-ui-icons-common/ChevronLeftLarge';
import ChevronRightLarge from 'wix-ui-icons-common/ChevronRightLarge';

import YearDropdown from './YearDropdown';
import MonthDropdown from './MonthDropdown';
import { st, classes } from './DatePickerHead.st.css';
import Text from '../../Text';
import IconButton from '../../IconButton';

const getMonthName = (months, month) => months[month] || months[0];

// Reverse display order of month/year in certain languages
export const REVERSE_MONTH_YEAR_LANGUAGES = ['ja', 'zh', 'ko'];
const getShouldReverseOrder = locale => {
  return REVERSE_MONTH_YEAR_LANGUAGES.includes(locale);
};

const DatePickerHead = ({
  className,
  date,
  locale,
  localeUtils,
  onChange,
  onLeftArrowClick,
  onRightArrowClick,
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
}) => {
  const renderMonth = () =>
    showMonthDropdown ? (
      <MonthDropdown
        className={classes.monthDropdown}
        date={date}
        onChange={onChange}
        months={localeUtils.getMonths()}
        ariaLabel={monthDropdownAriaLabel}
        ariaLabelledBy={monthDropdownAriaLabelledBy}
      />
    ) : (
      <Text
        className={classes.caption}
        weight="normal"
        dataHook={'datepicker-month-caption'}
      >
        {getMonthName(localeUtils.getMonths(), date.getMonth())}
      </Text>
    );

  const renderYear = () =>
    showYearDropdown ? (
      <YearDropdown
        className={classes.yearDropdown}
        date={date}
        onChange={onChange}
        ariaLabel={yearDropdownAriaLabel}
        ariaLabelledBy={yearDropdownAriaLabelledBy}
      />
    ) : (
      <Text
        className={classes.caption}
        weight="normal"
        dataHook={'datepicker-year-caption'}
      >
        {date.getFullYear()}
      </Text>
    );

  const renderYearAndMonth = () => {
    const shouldReverseOrder = getShouldReverseOrder(locale);
    if (shouldReverseOrder) {
      return (
        <>
          {renderYear()}
          {renderMonth()}
        </>
      );
    }
    return (
      <>
        {renderMonth()}
        {renderYear()}
      </>
    );
  };

  const KEYS = {
    arrowUp: 'ArrowUp',
    arrowDown: 'ArrowDown',
    arrowLeft: 'ArrowLeft',
    arrowRight: 'ArrowRight',
  };

  /* prevent the handleKeyDown method of the ReactDayPicker component to be executed when the focus is on one of the header elements */
  const _handleKeyDown = event => {
    // stop arrow up, arrow down, arrow left and arrow right ReactDayPicker handlers from changing the year and month
    if (
      event &&
      event.key &&
      (event.key === KEYS.arrowUp ||
        event.key === KEYS.arrowDown ||
        event.key === KEYS.arrowLeft ||
        event.key === KEYS.arrowRight)
    ) {
      event.stopPropagation();
    }
  };

  return (
    <div
      data-hook="datepicker-head"
      className={st(classes.root, className)}
      onKeyDown={_handleKeyDown}
    >
      <IconButton
        className={classes.arrowLeft}
        dataHook="datepicker-left-arrow"
        skin="light"
        ariaLabel={leftArrowAriaLabel}
        ariaLabelledBy={leftArrowAriaLabelledBy}
        onClick={onLeftArrowClick}
      >
        <ChevronLeftLarge className={classes.arrowIcon} />
      </IconButton>
      <IconButton
        className={classes.arrowRight}
        dataHook="datepicker-right-arrow"
        skin="light"
        ariaLabel={rightArrowAriaLabel}
        ariaLabelledBy={rightArrowAriaLabelledBy}
        onClick={onRightArrowClick}
      >
        <ChevronRightLarge className={classes.arrowIcon} />
      </IconButton>
      <div className={classes.yearAndMonthWrapper} role="alert">
        {renderYearAndMonth()}
      </div>
    </div>
  );
};

DatePickerHead.propTypes = {
  date: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  localeUtils: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLeftArrowClick: PropTypes.func.isRequired,
  onRightArrowClick: PropTypes.func.isRequired,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  leftArrowAriaLabel: PropTypes.string,
  leftArrowAriaLabelledBy: PropTypes.string,
  rightArrowAriaLabel: PropTypes.string,
  rightArrowAriaLabelledBy: PropTypes.string,
  monthDropdownAriaLabel: PropTypes.string,
  monthDropdownAriaLabelledBy: PropTypes.string,
  yearDropdownAriaLabel: PropTypes.string,
  yearDropdownAriaLabelledBy: PropTypes.string,
};

export default DatePickerHead;
