import React from 'react';
import RadioButton from '../RadioButton';
import radioButtonDriverFactory from '../RadioButton.driver';
import { radioButtonPrivateDriverFactory } from '../RadioButton.private.uni.driver';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
  isUniTestkitExists,
} from '../../../../test/utils/testkit-sanity';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { radioButtonTestkitFactory } from '../../../../testkit';
import { radioButtonTestkitFactory as enzymeRadioButtonTestkitFactory } from '../../../../testkit/enzyme';
import { radioButtonUniDriverFactory } from '../RadioButton.uni.driver';
import { mount } from 'enzyme';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../../test/utils/unit';

describe(RadioButton.displayName, () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(radioButtonDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(radioButtonPrivateDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    it('should render', async () => {
      const { driver } = render(<RadioButton />);
      expect(await driver.exists()).toBe(true);
    });

    describe('checked prop', () => {
      it('should not be checked', async () => {
        const { driver } = render(<RadioButton value="1" />);
        expect(await driver.isChecked()).toBe(false);
      });

      it('should be checked', async () => {
        const { driver } = render(<RadioButton value="1" checked />);
        expect(await driver.isChecked()).toBe(true);
      });
    });

    describe('disabled prop', () => {
      it('should not be disabled', async () => {
        const { driver } = render(<RadioButton value="1" />);
        expect(await driver.isDisabled()).toBe(false);
      });

      it('should be disabled', async () => {
        const { driver } = render(<RadioButton value="1" disabled />);
        expect(await driver.isDisabled()).toBe(true);
      });
    });

    describe('label (children prop)', () => {
      it('should have a label', async () => {
        const label = 'myLabel';
        const { driver } = render(<RadioButton value="1">{label}</RadioButton>);
        expect(await driver.getLabel()).toBe(label);
      });

      it('should return the label element', async () => {
        const label = 'myLabel';
        const { driver } = render(<RadioButton value="1">{label}</RadioButton>);
        expect(
          (await driver.getLabelElement()) instanceof HTMLLabelElement,
        ).toBe(true);
      });
    });

    describe('onChange prop', () => {
      it('should call onChange', async () => {
        const onChange = jest.fn();
        const value = 1;
        const { driver } = render(
          <RadioButton value={value} onChange={onChange} />,
        );

        expect(onChange).not.toHaveBeenCalled();
        await driver.check();
        expect(onChange).toBeCalledWith(value);
      });

      it('should not call onChange if already checked', async () => {
        const onChange = jest.fn();
        const value = 1;
        const { driver } = render(
          <RadioButton value={value} onChange={onChange} checked />,
        );
        await driver.check();
        expect(onChange).not.toBeCalledWith(value);
      });

      it('should not call onChange if disabled', async () => {
        const onChange = jest.fn();
        const value = 1;
        const { driver } = render(
          <RadioButton value={value} onChange={onChange} disabled />,
        );
        await driver.check();
        expect(onChange).not.toBeCalledWith(value);
      });
    });

    describe('value prop', () => {
      it('should not have value', async () => {
        const { driver } = render(<RadioButton />);
        expect(await driver.getValue()).toBe('');
      });

      it('should have value', async () => {
        const value = '1';
        const { driver } = render(<RadioButton value={value} />);
        expect(await driver.getValue()).toBe(value);
      });
    });

    describe('tabindex prop', () => {
      it('should set tabIndex to 0 by default', async () => {
        const { driver } = render(<RadioButton value="1" />);

        expect(await driver.getTabIndex()).toEqual('0');
      });

      it('should set tabIndex according to tabIndex prop', async () => {
        const { driver } = render(<RadioButton value="1" tabIndex={3} />);

        expect(await driver.getTabIndex()).toEqual('3');
      });

      it('should not be focusable if disabled prop is true', async () => {
        const { driver } = render(<RadioButton value="1" disabled />);

        expect(await driver.getTabIndex()).toEqual(null);
      });
    });

    describe('content prop', () => {
      it('should render node from that prop', async () => {
        const { driver } = render(<RadioButton content={<span>Hello</span>} />);
        expect((await driver.getContent()).textContent).toBe('Hello');
      });
    });
  }

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<RadioButton />, radioButtonTestkitFactory)).toBe(
        true,
      );
    });
  });

  describe('uni testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <RadioButton />,
          uniTestkitFactoryCreator(radioButtonUniDriverFactory),
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(
        isEnzymeTestkitExists(
          <RadioButton />,
          enzymeRadioButtonTestkitFactory,
          mount,
        ),
      ).toBe(true);
    });
  });
});
