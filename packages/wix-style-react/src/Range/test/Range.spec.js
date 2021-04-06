import React from 'react';
import Range from '../Range';
import Input from '../../Input';
import DatePicker from '../../DatePicker';
import rangeDriverFactory from '../Range.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';
import { rangeUniDriverFactory } from '../Range.uni.driver';

describe(Range.displayName, () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(rangeDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(rangeUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    it('should work with datePickers', async () => {
      const onChange = jest.fn();
      const dataHook = 'compHook';

      const { driver } = render(
        <Range dataHook={dataHook}>
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} />
        </Range>,
      );

      expect(await driver.exists()).toBe(true);
    });

    it('should contain both inputs', async () => {
      const { driver } = render(
        <Range>
          <Input />
          <Input />
        </Range>,
      );

      expect(await driver.hasInput()).toBe(true);
    });

    it('should contain label', async () => {
      const { driver } = render(
        <Range>
          <label>Label example</label>
          <Input />
          <Input />
        </Range>,
      );

      expect(await driver.hasLabel()).toBe(true);
    });
  }
});
