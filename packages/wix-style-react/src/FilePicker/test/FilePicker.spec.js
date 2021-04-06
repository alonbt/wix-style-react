import React from 'react';
import FilePicker from '../FilePicker';
import filePickerDriverFactory from '../FilePicker.driver';
import { filePickerUniDriverFactory } from '../FilePicker.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/react';
import { filePickerTestkitFactory } from '../../../testkit';
import { filePickerTestkitFactory as enzymeFilePickerTestkitFactory } from '../../../testkit/enzyme';
import {
  isEnzymeTestkitExists,
  isTestkitExists,
} from '../../../test/utils/testkit-sanity';
import { mount } from 'enzyme';

describe('FilePicker', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(filePickerDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(filePickerUniDriverFactory));
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx).driver;

    describe('error property', () => {
      it('should not have error by default', async () => {
        const driver = createDriver(<FilePicker />);
        expect(await driver.hasError()).toEqual(false);
      });

      it('should have error', async () => {
        const driver = createDriver(
          <FilePicker error errorMessage="error!!!" />,
        );
        expect(await driver.hasError()).toEqual(true);
        expect(await driver.errorMessage()).toEqual('error!!!');
      });
    });

    describe('name property', () => {
      it('should not have name property by default', async () => {
        const driver = createDriver(<FilePicker />);
        expect(await driver.getName()).toEqual('');
      });

      it('should have name', async () => {
        const driver = createDriver(<FilePicker name="filePickerName" />);
        expect(await driver.getName()).toEqual('filePickerName');
      });
    });

    describe('testkit', () => {
      it('should exist', async () => {
        expect(isTestkitExists(<FilePicker />, filePickerTestkitFactory)).toBe(
          true,
        );
      });
    });

    describe('enzyme testkit', () => {
      it('should exist', async () => {
        expect(
          isEnzymeTestkitExists(
            <FilePicker />,
            enzymeFilePickerTestkitFactory,
            mount,
          ),
        ).toBe(true);
      });
    });
  }
});
