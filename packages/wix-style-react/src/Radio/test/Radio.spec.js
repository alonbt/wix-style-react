import * as React from 'react';

import Radio from '../Radio';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';
import radioDriverFactory from '../Radio.driver';
import { radioUniDriverFactory } from '../Radio.uni.driver';

describe(Radio.displayName, () => {
  const DefaultRadio = props => (
    <Radio label={<span>Radio test</span>} value="radio-test" {...props} />
  );

  afterEach(cleanup);

  describe('[sync]', () => {
    runTests(createRendererWithDriver(radioDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(radioUniDriverFactory));
  });

  function runTests(render) {
    it('renders to the screen', async () => {
      const { driver } = await render(<DefaultRadio />);

      expect(await driver.exists()).toBe(true);
    });

    it('is checked correctly', async () => {
      const { driver } = await render(<DefaultRadio checked />);

      expect(await driver.isChecked()).toBe(true);
    });

    it('is disabled correctly', async () => {
      const { driver } = await render(<DefaultRadio disabled />);

      expect(await driver.isDisabled()).toBe(true);
    });

    it('accepts correct value', async () => {
      const { driver } = await render(<DefaultRadio value="radio-value" />);
      expect(await driver.getValue()).toEqual('radio-value');
    });

    it('accepts correct name', async () => {
      const { driver } = await render(<DefaultRadio name="radio-name" />);

      expect(await driver.getName()).toEqual('radio-name');
    });

    it('accepts correct id', async () => {
      const { driver } = await render(<DefaultRadio id="radio-id" />);

      expect(await driver.getId()).toEqual('radio-id');
    });

    it('renders label correctly', async () => {
      const { driver } = await render(<DefaultRadio id="radio-id" />);

      expect(await driver.labelExists()).toBe(true);
    });

    it('should not render label if it is not passed', async () => {
      const { driver } = await render(<Radio />);

      expect(await driver.labelExists()).toBe(false);
    });

    it('renders icon correctly', async () => {
      const { driver } = await render(<DefaultRadio />);

      expect(await driver.iconExists()).toBe(true);
    });

    it('invokes callback for onChange with the correct value', async () => {
      const onChange = jest.fn();
      const { driver } = await render(<DefaultRadio onChange={onChange} />);

      await driver.click();
      expect(onChange.mock.calls.length).toEqual(1);
      expect(onChange.mock.calls[0][0].value).toEqual('radio-test');
    });

    it('does not invoke callback function when disabled and clicked', async () => {
      const onChange = jest.fn();
      const { driver } = await render(
        <DefaultRadio onChange={onChange} disabled />,
      );

      driver.click();
      expect(onChange).not.toHaveBeenCalled();
    });
  }
});
