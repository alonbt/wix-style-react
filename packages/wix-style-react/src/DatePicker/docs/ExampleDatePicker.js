import React, { useState } from 'react';
import DatePicker from '..';
import { storySettings } from './storySettings';

const defaultValue = new Date('2017/05/01');

const ExampleDatePicker = props => {
  const [value, setValue] = useState(defaultValue);
  const onChange = newValue => setValue(newValue);

  return (
    <DatePicker
      value={value}
      dataHook={storySettings.dataHook}
      onChange={onChange}
      dateFormatV2="yyyy/LL/dd"
      placeholderText="Select Date"
      shouldCloseOnSelect
      showYearDropdown={false}
      showMonthDropdown={false}
      locale="en"
      twoMonths={false}
      {...props}
    />
  );
};

export default ExampleDatePicker;
