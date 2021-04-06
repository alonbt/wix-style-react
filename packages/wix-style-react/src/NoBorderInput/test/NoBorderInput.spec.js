import React from 'react';
import noBorderInputDriverFactory from '../NoBorderInput.driver';
import noBorderInputUniDriverFactory from '../NoBorderInput.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';
import NoBorderInput from '../NoBorderInput';

describe('NoBorderInput', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(noBorderInputDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(noBorderInputUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    it('should verify component exists', async () => {
      const { driver } = render(<NoBorderInput />);
      expect(await driver.exists()).toBe(true);
    });

    it('should render label', async () => {
      const props = {
        label: 'bob',
      };

      const { driver } = render(<NoBorderInput {...props} />);
      expect(await driver.getLabel()).toEqual(props.label);
    });

    it('should not have status', async () => {
      const { driver } = render(<NoBorderInput />);
      expect(await driver.hasStatus('error')).toBe(false);
    });

    it('should render the status message', async () => {
      const props = {
        status: NoBorderInput.StatusError,
        statusMessage: 'Error!',
      };
      const { driver } = render(<NoBorderInput {...props} />);
      expect(await driver.hasStatus('error')).toBe(true);
      expect(await driver.getStatusMessage()).toEqual(props.statusMessage);
    });

    it('should auto focus', async () => {
      const props = { autoFocus: true };
      const { driver } = render(<NoBorderInput {...props} />);
      expect(await driver.isFocus()).toBe(props.autoFocus);
    });

    it('should invoke onFocus', async () => {
      const props = {
        onFocus: jest.fn(),
      };
      const { driver } = render(<NoBorderInput {...props} />);

      await driver.focus();
      expect(props.onFocus).toHaveBeenCalled();
    });

    it('should invoke onBlur', async () => {
      const props = {
        onBlur: jest.fn(),
      };
      const { driver } = render(<NoBorderInput {...props} />);
      await driver.focus();
      await driver.blur();

      expect(props.onBlur).toHaveBeenCalled();
    });
  }
});
