import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import DateInput from '../DateInput';
import { dateInputPrivateDriverFactory } from '../DateInput.private.uni.driver';
import { formatDate, formatDateV2 } from '../../../LocaleUtils';
import Input from '../../../Input/Input';

describe('DateInput', () => {
  const createDriver = createUniDriverFactory(dateInputPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<DateInput />);
    expect(await driver.exists()).toBe(true);
  });

  it('should format date based on locale (dateFormat)', async () => {
    const sampleDate = new Date();
    const locale = 'ru';
    const dateFormat = 'HH:MM';
    const driver = createDriver(
      <DateInput value={sampleDate} dateFormat={dateFormat} locale={locale} />,
    );
    expect(await driver.getValue()).toEqual(
      formatDate(sampleDate, dateFormat, locale),
    );
  });

  it('should format date based on formatting function (dateFormat)', async () => {
    const sampleDate = new Date();
    const dateFormat = () => 'Some other string';
    const driver = createDriver(
      <DateInput value={sampleDate} dateFormat={dateFormat} />,
    );
    expect(await driver.getValue()).toEqual(dateFormat(sampleDate));
  });

  it('should format date based on locale (dateFormatV2)', async () => {
    const sampleDate = new Date();
    const locale = 'ru';
    const dateFormatV2 = 'LL/yyyy';
    const driver = createDriver(
      <DateInput
        value={sampleDate}
        dateFormatV2={dateFormatV2}
        locale={locale}
      />,
    );
    expect(await driver.getValue()).toEqual(
      formatDateV2(sampleDate, dateFormatV2, locale),
    );
  });

  it('should format date based on formatting function (dateFormatV2)', async () => {
    const sampleDate = new Date();
    const dateFormatV2 = () => 'Some other string';
    const driver = createDriver(
      <DateInput value={sampleDate} dateFormatV2={dateFormatV2} />,
    );
    expect(await driver.getValue()).toEqual(dateFormatV2(sampleDate));
  });

  it('should render with Date icon in prefix by default', async () => {
    const driver = createDriver(<DateInput />);
    expect(await driver.hasDateIcon()).toEqual(true);
  });

  it('should allow custom prefix', async () => {
    const prefix = <Input.Affix>##</Input.Affix>;
    const driver = createDriver(<DateInput prefix={prefix} />);
    expect(await driver.hasDateIcon()).toEqual(false);
  });
});
