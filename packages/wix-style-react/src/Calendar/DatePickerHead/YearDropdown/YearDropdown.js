import React from 'react';
import PropTypes from 'prop-types';
import { classes, st } from './YearDropdown.st.css';
import range from '../../../utils/operators/range';
import { setYear } from 'date-fns';

import DatePickerDropdown from '../../DatePickerDropdown';

const optionsOf = items =>
  items.map((item, index) => ({ value: item, id: index }));

const YearDropdown = ({
  className,
  date,
  onChange,
  ariaLabel,
  ariaLabelledBy,
}) => {
  const year = date.getFullYear();
  const [lowerLimit, upperLimit] = [1899, 2028];
  const years = optionsOf(
    range(year > upperLimit ? year : upperLimit, lowerLimit),
  );

  const selectedYear = years.find(({ value }) => value === year);

  return (
    <DatePickerDropdown
      dataHook="datepicker-year-dropdown"
      className={st(classes.root, className)}
      caption={selectedYear.value}
      options={years}
      selectedId={selectedYear.id}
      onChange={({ value }) => onChange(setYear(date, value))}
      ariaLabel={ariaLabel}
      ariaLabelledBy={ariaLabelledBy}
    />
  );
};

YearDropdown.propTypes = {
  className: PropTypes.string,
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
};

export default YearDropdown;
