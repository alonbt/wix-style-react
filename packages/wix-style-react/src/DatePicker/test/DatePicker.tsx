import * as React from 'react';
import DatePicker from '..';
import { datePickerTestkitFactory } from '../../../testkit';
import { datePickerTestkitFactory as datePickerEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from 'enzyme';

function datePickerWithMandatoryProps() {
  return <DatePicker onChange={() => {}} />;
}

function datePickerWithAllProps() {
  return (
    <DatePicker
      className="datePicker"
      customInput="customInput"
      inputProps="{}"
      dateFormat="string | Function"
      dateFormatV2="string | Function"
      locale="en"
      disabled
      inputDataHook="string"
      calendarDataHook="string"
      placeholderText="string"
      rtl
      value="{}"
      initialOpen
      status="error"
      statusMessage="message"
      width="number | string"
      zIndex={1}
      onChange={() => {}}
      popoverProps={{
        dynamicWidth: true,
        flip: true,
        hideDelay: 500,
        maxWidth: '100',
        minWidth: '100',
        moveArrowTo: 5,
        moveBy: { x: 1, y: 1 },
        showDelay: 500,
        timeout: 100,
        zIndex: 1,
        width: 100,
      }}
      firstDayOfWeek={1}
      leftArrowAriaLabel="left arrow label"
      leftArrowAriaLabelledBy="left_arrow_labelledby"
      rightArrowAriaLabel="right arrow label"
      rightArrowAriaLabelledBy="right_arrow_labelledby"
      monthDropdownAriaLabel="month label"
      monthDropdownAriaLabelledBy="month_labelledby"
      yearDropdownAriaLabel="year label"
      yearDropdownAriaLabelledBy="year_labelledby"
      size="medium"
      readOnly
      clearButton
      onClear={()=>{}}
    />
  );
}

async function testkits() {
  const testkit = datePickerTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = datePickerEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });
}
