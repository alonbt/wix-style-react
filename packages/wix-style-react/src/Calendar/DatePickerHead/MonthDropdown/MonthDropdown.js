import React from 'react';
import PropTypes from 'prop-types';
import { classes, st } from './MonthDropdown.st.css';
import { setMonth } from 'date-fns';

import DatePickerDropdown from '../../DatePickerDropdown';

const optionsOf = items =>
  items.map((item, index) => ({ value: item, id: index }));

const MonthDropdown = ({
  className,
  months,
  date,
  onChange,
  ariaLabel,
  ariaLabelledBy,
}) => {
  const options = optionsOf(months);
  const selectedMonth = options.find(({ id }) => id === date.getMonth());

  return (
    <DatePickerDropdown
      dataHook="datepicker-month-dropdown"
      className={st(classes.root, className)}
      caption={selectedMonth.value}
      options={options}
      selectedId={selectedMonth.id}
      onChange={({ id }) => onChange(setMonth(date, id))}
      ariaLabel={ariaLabel}
      ariaLabelledBy={ariaLabelledBy}
    />
  );
};

MonthDropdown.propTypes = {
  className: PropTypes.string,
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
};

export default MonthDropdown;
