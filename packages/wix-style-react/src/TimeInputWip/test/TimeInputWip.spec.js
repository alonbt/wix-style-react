import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TimeInputWip from '../TimeInputWip';
import { timeInputWipPrivateDriverFactory } from './TimeInputWip.private.uni.driver';

describe(TimeInputWip.displayName, () => {
  const defaultDate = new Date(1995, 11, 17, 3, 24, 0);
  const defaultFormatParts = [
    { type: 'hour', value: '3' },
    { type: 'literal', value: ':' },
    { type: 'minute', value: '24' },
    { type: 'literal', value: ' ' },
    { type: 'dayPeriod', value: 'am' },
  ];
  const render = createRendererWithUniDriver(timeInputWipPrivateDriverFactory);
  let dateTimeFormatSpy;

  function createComponent(props = {}, formatParts = defaultFormatParts) {
    const mockDateTimeFormatExpression = {
      locale: 'en-US',
      formatToParts: () => formatParts,
    };
    dateTimeFormatSpy = jest
      .spyOn(Intl, 'DateTimeFormat')
      .mockImplementation(() => mockDateTimeFormatExpression);

    return render(<TimeInputWip {...props} />);
  }

  afterEach(() => {
    dateTimeFormatSpy.mockRestore();
    cleanup();
  });

  it('should render', async () => {
    const { driver } = createComponent();

    expect(await driver.exists()).toBe(true);
  });

  it('should render formatted date value in 12 hours mode', async () => {
    const props = {
      value: defaultDate,
      hour12: true,
    };
    const { driver } = createComponent(props);

    expect(await driver.getStringValue()).toBe('3:24 AM');
  });

  it('should render formatted date value in 24 hours mode', async () => {
    const props = {
      value: defaultDate,
      hour12: false,
    };
    const { driver } = createComponent(props, [
      { type: 'hour', value: '03' },
      { type: 'literal', value: ':' },
      { type: 'minute', value: '24' },
    ]);

    expect(await driver.getStringValue()).toBe('03:24');
  });

  it(`should set time input value to passed date in miliseconds`, async () => {
    const props = {
      value: defaultDate,
    };
    const { driver } = createComponent(props);

    expect(await driver.getValue()).toBe(defaultDate.getTime());
  });

  it(`should call onChange when choosing a date`, async () => {
    const onChangeMock = jest.fn();
    const props = {
      value: defaultDate,
      onChange: onChangeMock,
    };
    const { driver } = createComponent(props, [
      { type: 'hour', value: '0' },
      { type: 'literal', value: ':' },
      { type: 'minute', value: '00' },
      { type: 'literal', value: ' ' },
      { type: 'dayPeriod', value: 'am' },
    ]);

    await driver.selectOptionAt(0);

    expect(onChangeMock).toBeCalledWith({
      date: new Date(defaultDate.setHours(0, 0, 0, 0)),
      formattedDate: '0:00 AM',
    });
  });
});
