import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';

import checkboxDriverFactory from '../Checkbox.driver';
import { checkboxUniDriverFactory } from '../Checkbox.uni.driver';
import Checkbox from '../Checkbox';

import { labelTextSizes } from '../constants';

describe('Checkbox', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(checkboxDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(checkboxUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should be unchecked by default', async () => {
      const { driver } = render(<Checkbox />);
      expect(await driver.isChecked()).toBe(false);
    });

    it('should be checked', async () => {
      const { driver } = render(<Checkbox checked />);
      expect(await driver.isChecked()).toBe(true);
    });

    it('should have an error state', async () => {
      const { driver } = render(<Checkbox hasError />);
      expect(await driver.hasError()).toBe(true);
    });

    it('should call onChange when clicking the Checkbox', async () => {
      const onChange = jest.fn();

      const { driver } = render(<Checkbox onChange={onChange} />);

      await driver.click();

      expect(onChange).toBeCalledWith(
        expect.objectContaining({ target: { checked: true } }),
      );
    });

    it('should not run in indeterminate mode when not specified', async () => {
      const { driver } = render(<Checkbox />);

      expect(await driver.isIndeterminate()).toBe(false);
    });

    it('should run in indeterminate mode when specified', async () => {
      const { driver } = render(<Checkbox indeterminate />);

      expect(await driver.isIndeterminate()).toBe(true);
    });

    it('should show error message when in error state with message', async () => {
      const errorMessage = 'Error message';
      const { driver } = render(
        <Checkbox hasError errorMessage={errorMessage} />,
      );
      expect(await driver.getErrorMessage()).toEqual(errorMessage);
    });

    it('should not show error message when no error message stated', async () => {
      const { driver } = render(<Checkbox hasError />);
      await expect(driver.getErrorMessage()).rejects.toThrow(Error);
    });

    it('should not show error message when not in error state', async () => {
      const errorMessage = 'Error message';
      const { driver } = render(<Checkbox errorMessage={errorMessage} />);
      await expect(driver.getErrorMessage()).rejects.toThrow(Error);
    });

    it('should show a tooltip message when a tooltipContent prop is passed', async () => {
      const tooltipContent = 'some content';
      const { driver } = render(<Checkbox tooltipContent={tooltipContent} />);
      expect(await driver.getTooltipContent()).toEqual(tooltipContent);
    });

    it('should show tooltipContent message on tooltip when both tooltipContent and errorMessage props are passed', async () => {
      const tooltipContent = 'tooltip content';
      const tooltipErrorMessage = 'error message';
      const { driver } = render(
        <Checkbox
          tooltipContent={tooltipContent}
          hasError
          errorMessage={tooltipErrorMessage}
        />,
      );
      expect(await driver.getTooltipContent()).toEqual(tooltipContent);
    });

    it('should show tooltip message if tooltipContent and hasError props passed', async () => {
      const tooltipContent = 'tooltip content';
      const { driver } = render(
        <Checkbox tooltipContent={tooltipContent} hasError />,
      );
      expect(await driver.getTooltipContent()).toEqual(tooltipContent);
    });

    describe('disabled', () => {
      it('should be not disabled by default', async () => {
        const { driver } = render(<Checkbox />);
        expect(await driver.isDisabled()).toBe(false);
      });

      it('should be disabled', async () => {
        const { driver } = render(<Checkbox disabled />);
        expect(await driver.isDisabled()).toBe(true);
      });

      it('should not call onChange when clicking disabled Checkbox', async () => {
        const onChange = jest.fn();
        const { driver } = render(<Checkbox onChange={onChange} disabled />);

        await driver.click();
        expect(onChange).not.toBeCalled();
      });

      it('should not show error message when disabled', async () => {
        const errorMessage = 'Error message';
        const { driver } = render(
          <Checkbox hasError errorMessage={errorMessage} disabled />,
        );

        expect(await driver.hasError()).toEqual(false);
        await expect(driver.getErrorMessage()).rejects.toThrow(Error);
      });

      it('should not show error message when tooltipProps disabled is true', async () => {
        const tooltipContent = 'tooltip content';
        const tooltipProps = {
          disabled: true,
        };
        const { driver } = render(
          <Checkbox
            tooltipContent={tooltipContent}
            tooltipProps={tooltipProps}
          />,
        );

        expect(await driver.isTooltipEnabled()).toBe(false);
      });

      it('should show error message when disabled but tooltipProps disabled is false', async () => {
        const tooltipContent = 'tooltip content';
        const tooltipProps = {
          disabled: false,
        };
        const { driver } = render(
          <Checkbox
            tooltipContent={tooltipContent}
            tooltipProps={tooltipProps}
            disabled
          />,
        );

        expect(await driver.isTooltipEnabled()).toBe(true);
      });
    });

    describe('Label', () => {
      it('should have the correct label text', async () => {
        const { driver } = render(<Checkbox>Info</Checkbox>);
        expect(await driver.getLabel()).toEqual('Info');
      });

      it('should text size "medium" by default', async () => {
        const { driver } = render(<Checkbox>Info</Checkbox>);
        expect(await driver.getLabelSize()).toEqual(labelTextSizes.medium);
      });

      it.each(Object.values(labelTextSizes))(
        'text be %s when giving size prop "%s"',
        async size => {
          const { driver } = render(<Checkbox size={size}>Info</Checkbox>);
          expect(await driver.getLabelSize()).toEqual(size);
        },
      );
    });
  }
});
