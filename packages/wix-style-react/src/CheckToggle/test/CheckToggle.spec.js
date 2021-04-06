import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CheckToggle from '../CheckToggle';
import { checkTogglePrivateDriverFactory } from './CheckToggle.private.uni.driver';

describe(CheckToggle.displayName, () => {
  const render = createRendererWithUniDriver(checkTogglePrivateDriverFactory);

  afterEach(cleanup);

  describe('checked prop', () => {
    it('should be unchecked by default', async () => {
      const { driver } = render(<CheckToggle />);

      expect(await driver.isChecked()).toBe(false);
    });

    it('should be checked', async () => {
      const { driver } = render(<CheckToggle checked onChange={() => {}} />);

      expect(await driver.isChecked()).toBe(true);
    });
  });

  describe('Uncontrolled - onChange prop', () => {
    it('should trigger onChange after a click', async () => {
      const onChange = jest.fn();
      const { driver } = render(<CheckToggle onChange={onChange} />);

      // Before click: onChange is not called and the toggle is false
      expect(onChange).not.toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);

      // Click the toggle
      await driver.click();

      // After click: onChange is called and the toggle becomes true
      expect(onChange).toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(true);
    });

    it('should not trigger onChange after a click when disabled', async () => {
      const onChange = jest.fn();
      const { driver } = render(<CheckToggle onChange={onChange} disabled />);

      // Before click: onChange is not called and the toggle is false
      expect(onChange).not.toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);

      // Click the toggle
      await driver.click();

      // After click: onChange is not and the toggle stays false
      expect(onChange).not.toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);
    });
  });

  describe('Controlled - onChange prop', () => {
    it('should trigger onChange after a click', async () => {
      const onChange = jest.fn();
      const checked = false;
      const { driver } = render(
        <CheckToggle onChange={onChange} checked={checked} />,
      );

      // Before click: onChange is not called and the toggle is false
      expect(onChange).not.toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);

      // Click the toggle
      await driver.click();

      // After click: onChange is called and the toggle stays false (can be changed only from outside)
      expect(onChange).toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);
    });

    it('should not trigger onChange after a click when disabled', async () => {
      const onChange = jest.fn();
      const checked = false;
      const { driver } = render(
        <CheckToggle onChange={onChange} disabled checked={checked} />,
      );

      // Before click: onChange is not called and the toggle is false
      expect(onChange).not.toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);

      // Click the toggle
      await driver.click();

      // After click: onChange is not called and the toggle stays false
      expect(onChange).not.toHaveBeenCalled();
      expect(await driver.isChecked()).toBe(false);
    });
  });

  describe('tooltipContent prop', () => {
    it('should have a tooltip', async () => {
      const tooltipContent = 'content';
      const { driver } = render(
        <CheckToggle tooltipContent={tooltipContent} />,
      );

      expect(await driver.getTooltipContent()).toBe(tooltipContent);
    });
    it('should not have a tooltip (throw an error)', async () => {
      const { driver } = render(<CheckToggle />);

      await expect(driver.getTooltipContent()).rejects.toThrow();
    });
  });
});
