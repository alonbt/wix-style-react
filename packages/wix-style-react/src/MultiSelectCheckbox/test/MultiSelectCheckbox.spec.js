import React from 'react';
import MultiSelectCheckbox from '../MultiSelectCheckbox';
import { multiSelectCheckboxUniDriverFactory } from '../MultiSelectCheckbox.uni.driver';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/react';
import { multiSelectCheckboxPrivateDriverFactory } from '../MultiSelectCheckbox.private.driver';

describe('multiSelectCheckbox', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(multiSelectCheckboxPrivateDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(multiSelectCheckboxUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);
    const createDriver = jsx => render(jsx).driver;

    const options = [
      { value: 'Alabama', id: 'Alabama-1' },
      { value: 'Alaska', id: 'Alaska' },
      { value: <div>Arkansas</div>, id: 'Arkansas', label: 'Arkansan Label' },
      { value: 'Arkansas', id: 'Arkansas' },
      { value: 'California', id: 'California' },
      { value: 'California2', id: 'California2' },
      { value: 'California3', id: 'California3' },
      { value: 'California4', id: 'California4' },
      { value: 'California5', id: 'California5' },
      { value: 'California6', id: 'California6' },
      { value: 'California7', id: 'California7', disabled: true },
      { value: 'Two words', id: 'Two words' },
    ];

    it('should not be editable', async () => {
      const { driver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      expect(await driver.isEditable()).toBe(false);
    });

    it('should show dropdown on input click', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should not show dropdown on input click when disabled', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox disabled options={options} />,
      );
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should close dropdown on second input click', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should close dropdown on Escape', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      await inputDriver.focus();
      await inputDriver.keyDown({ key: 'Escape' });

      expect(await dropdownLayoutDriver.isShown()).toBe(false);
    });

    const OPEN_DROPDOWN_CHARS = [
      { key: 'ArrowDown', keyCode: 40, which: 40 },
      { key: 'Enter', keyCode: 13, which: 13 },
      { key: 'Space', keyCode: 32, which: 32 },
    ];
    OPEN_DROPDOWN_CHARS.forEach(charData => {
      it(`should show dropdown on input focus and press on ${charData.key}`, async () => {
        const { inputDriver, dropdownLayoutDriver } = createDriver(
          <MultiSelectCheckbox options={options} />,
        );
        await inputDriver.focus();
        await inputDriver.trigger('keyDown', charData);

        expect(await dropdownLayoutDriver.isShown()).toBe(true);
      });
    });

    it('should not lose Focus or close the list on selection with a mouse click', async () => {
      const { inputDriver, dropdownLayoutDriver, driver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );

      await inputDriver.focus();
      await driver.selectOptionById('Alabama-1');
      expect(await dropdownLayoutDriver.isShown()).toBe(true);

      expect(await inputDriver.isFocus()).toBe(true);
    });

    it('should display a selectedOptions separated by default delimiter', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await inputDriver.getValue()).toBe(
        `${options[0].value}, ${options[1].value}`,
      );
    });

    it('should display a selectedOptions separated by custom delimiter', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const delimiter = ';';
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          delimiter={delimiter}
        />,
      );
      expect(await inputDriver.getValue()).toBe(
        `${options[0].value};${options[1].value}`,
      );
    });

    it('should not display the selectedOptions that not included in options', async () => {
      const selectedOptions = [options[0].id, 'NOT_LEGAL_ID', options[1].id];
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await inputDriver.getValue()).toBe(
        `${options[0].value}, ${options[1].value}`,
      );
    });

    it('should display value passed as prop (controlled input)', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const value = 'Controlled input value';
      const { inputDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          value={value}
        />,
      );
      expect(await inputDriver.getValue()).toBe(value);
    });

    describe('valueParser', () => {
      it('should use the default valueParser', async () => {
        const options = [{ value: 'Option 1', id: 'Option 1' }];

        const selectedOptions = [options[0].id];

        const { driver } = createDriver(
          <MultiSelectCheckbox
            options={options}
            selectedOptions={selectedOptions}
          />,
        );

        expect(await driver.getLabelAt(0)).toBe(options[0].value);
      });

      it('should use the default valueParser for options that contain label property', async () => {
        const options = [
          {
            value: <div>Option 1</div>,
            id: 'Option 1',
            label: 'Option 1 Label',
          },
        ];

        const selectedOptions = [options[0].id];

        const { driver } = createDriver(
          <MultiSelectCheckbox
            options={options}
            selectedOptions={selectedOptions}
          />,
        );

        expect(await driver.getLabelAt(0)).toBe(options[0].label);
      });

      it('should use provided valueParser when given', async () => {
        const specialOption = {
          value: 'Arkansas',
          id: 'Arkansas',
          customOptionPropertyByTheUser: 'Arkansan Label',
        };
        const selectedOptions = [specialOption.id];

        const options = [specialOption];
        const valueParser = option => option.customOptionPropertyByTheUser;

        const { driver } = createDriver(
          <MultiSelectCheckbox
            valueParser={valueParser}
            options={options}
            selectedOptions={selectedOptions}
          />,
        );
        expect(await driver.getLabelAt(0)).toBe(
          specialOption.customOptionPropertyByTheUser,
        );
      });
    });

    it('should allow using functions as options', async () => {
      const options = [
        {
          value: jest.fn(),
          id: 'option1',
          label: 'option 1',
        },
        {
          value: jest.fn(),
          id: 'option2',
          label: 'option 2',
        },
      ];

      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={[options[0].id]}
        />,
      );
      await inputDriver.click();
      expect(await dropdownLayoutDriver.isShown()).toBe(true);

      expect(options[0].value).toHaveBeenCalledWith({
        selected: true,
        disabled: undefined,
        hovered: false,
      });

      expect(options[1].value).toHaveBeenCalledWith({
        selected: false,
        disabled: undefined,
        hovered: false,
      });
    });

    it('should contain specific selected values', async () => {
      const selectedOptions = [options[0].id, options[1].id];

      const { driver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
        />,
      );
      expect(await driver.getNumOfLabels()).toBe(selectedOptions.length);
      expect(await driver.getLabelAt(0)).toBe(options[0].value);
      expect(await driver.getLabelAt(1)).toBe(options[1].value);
    });

    it('should not close dropdown after clicking on an option', async () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} />,
      );
      await inputDriver.click();
      await dropdownLayoutDriver.clickAtOption(0);
      expect(await dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should call onSelect when selecting unselected option', async () => {
      const onSelect = jest.fn();
      const { dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} onSelect={onSelect} />,
      );
      await dropdownLayoutDriver.clickAtOption(0);
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect).toHaveBeenCalledWith(options[0].id, options[0]);
    });

    it('should not call onSelect when selecting a disabled option', async () => {
      const onSelect = jest.fn();
      const indexOfDisabled = options.findIndex(opt => opt.disabled);
      const { dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox options={options} onSelect={onSelect} />,
      );
      await dropdownLayoutDriver.clickAtOption(indexOfDisabled);
      expect(onSelect).not.toHaveBeenCalled();
    });

    it('should call onDeselect when selecting selected option', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const onDeselect = jest.fn();
      const { dropdownLayoutDriver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          onDeselect={onDeselect}
        />,
      );
      await dropdownLayoutDriver.clickAtOption(0);
      expect(onDeselect).toHaveBeenCalledWith(options[0].id, options[0]);
    });

    it('should getLabels', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const onDeselect = jest.fn();
      const { driver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          onDeselect={onDeselect}
        />,
      );

      expect(await driver.getLabels()).toEqual([
        options[0].value,
        options[1].value,
      ]);
    });

    it('should getLabels with delimiter', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const onDeselect = jest.fn();
      const delimiter = '.';
      const { driver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          onDeselect={onDeselect}
          delimiter={delimiter}
        />,
      );

      expect(await driver.getLabels(delimiter)).toEqual([
        options[0].value,
        options[1].value,
      ]);
    });

    it('should getLabelAt with delimiter', async () => {
      const selectedOptions = [options[0].id, options[1].id];
      const onDeselect = jest.fn();
      const delimiter = '.';

      const { driver } = createDriver(
        <MultiSelectCheckbox
          options={options}
          selectedOptions={selectedOptions}
          onDeselect={onDeselect}
          delimiter={delimiter}
        />,
      );

      expect(await driver.getLabelAt(1, delimiter)).toEqual(selectedOptions[1]);
    });
  }
});
