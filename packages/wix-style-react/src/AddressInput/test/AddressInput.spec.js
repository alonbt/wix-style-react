import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { addressInputItemBuilder } from '../../AddressInputItem';

import AddressInput from '../AddressInput';
import { addressInputPrivateDriverFactory } from './AddressInput.private.uni.driver';

const mockOption = addressInputItemBuilder({
  id: '1',
  displayLabel: 'Hello world!',
  mainLabel: 'Hello',
  secondaryLabel: 'world!',
});

const mockOptions = [mockOption];

describe(AddressInput.displayName, () => {
  const render = createRendererWithUniDriver(addressInputPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AddressInput />);

    expect(await driver.exists()).toBe(true);
  });

  it('should insert initial value', async () => {
    const initialValue = 'test';
    const props = {
      initialValue,
    };
    const { driver } = render(<AddressInput {...props} />);

    expect(await driver.getInputValue()).toEqual(initialValue);
  });

  it('should work with controlled value', async () => {
    const value = 'test';
    const props = {
      value,
    };
    const { driver } = render(<AddressInput {...props} />);

    expect(await driver.getInputValue()).toEqual(value);
  });

  it('should invoke onChange', async () => {
    const text = 'test';
    const props = {
      onChange: jest.fn(),
    };
    const { driver } = render(<AddressInput {...props} />);

    expect(props.onChange).not.toHaveBeenCalled();
    expect(await driver.getInputValue()).toEqual('');

    await driver.enterText(text);

    expect(props.onChange).toHaveBeenCalled();
    expect(await driver.getInputValue()).toEqual(text);
  });

  it('should invoke onClear', async () => {
    const props = {
      onClear: jest.fn(),
      initialValue: 'test',
    };
    const { driver } = render(<AddressInput {...props} />);

    expect(props.onClear).not.toHaveBeenCalled();
    expect(await driver.getInputValue()).toEqual('test');

    await driver.clickClear();

    expect(props.onClear).toHaveBeenCalled();
    expect(await driver.getInputValue()).toEqual('');
  });

  it('should invoke onSelect', async () => {
    const props = {
      onSelect: jest.fn(),
      options: mockOptions,
    };
    const { driver } = render(<AddressInput {...props} />);

    await driver.clickAtOption(0);

    expect(props.onSelect).toHaveBeenCalledWith(mockOption);
    expect(await driver.getInputValue()).toEqual(mockOption.label);
  });

  describe('Dropdown', () => {
    it('should be empty when input is empty', async () => {
      const { driver } = render(<AddressInput />);
      expect(await driver.options()).toEqual([]);
    });

    it('should show options when options are passed', async () => {
      const { driver } = render(
        <AddressInput value="test" options={mockOptions} />,
      );
      expect(await driver.optionContentAt(0)).toBe('Helloworld!');
    });

    it('should show loader when loading', async () => {
      const { driver } = render(
        <AddressInput value="test" options={mockOptions} status="loading" />,
      );
      await driver.clickInput();
      expect(await driver.isDropdownLoaderShown()).toBe(true);
    });
  });

  describe('Input loading indicator', () => {
    it('is shown when status is `loading`', async () => {
      const { driver } = render(<AddressInput value="test" status="loading" />);
      expect(await driver.isLoadingIndicatorShown()).toBe(true);
    });
    it('is hidden when dropdown is opened', async () => {
      const { driver } = render(<AddressInput value="test" status="loading" />);
      await driver.clickInput();
      expect(await driver.isLoadingIndicatorShown()).toBe(false);
    });
  });
});
