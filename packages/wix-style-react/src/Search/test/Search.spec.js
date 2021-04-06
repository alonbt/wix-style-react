import React from 'react';

import searchDriverFactory from '../Search.driver';
import { searchUniDriverFactory } from '../Search.uni.driver';
import Search from '../Search';
import { makeControlled } from '../../../test/utils';
import {
  cleanup,
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

describe('Search', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(searchDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(searchUniDriverFactory));
  });

  function runTests(render) {
    const REGEXP_SPECIAL_CHARS = '^$\\.*+?)(][}{|';

    const options = [
      'The quick',
      'brown',
      'fox',
      'jumps over',
      'the lazy',
      'dog',
      REGEXP_SPECIAL_CHARS,
    ].map((value, index) => ({ id: index, value }));
    const createDriver = jsx => render(jsx).driver;
    afterEach(cleanup);

    describe('Controlled', () => {
      const ControlledSearch = makeControlled(Search);

      const ControlledSearchOnBlur = ({ valueOnBlur }) => {
        const [value, setValue] = React.useState('fox');

        return (
          <Search
            expandable
            value={value}
            onBlur={() => setValue(valueOnBlur)}
          />
        );
      };

      it('should show search options if initial value passed and down-key pressed', async () => {
        const driver = createDriver(
          <ControlledSearch value="the" options={options} />,
        );

        expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        driver.driver.pressKey('ArrowDown');
        expect(await driver.dropdownLayoutDriver.isShown()).toBe(true);
      });

      it('should not show search options when focusing empty input', async () => {
        const driver = createDriver(<ControlledSearch options={options} />);

        expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        driver.inputDriver.focus();
        expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
      });

      it('should show search options when focusing empty input with showOptionsIfEmptyInput', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} showOptionsIfEmptyInput />,
        );

        expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        driver.inputDriver.click();
        expect(await driver.dropdownLayoutDriver.isShown()).toBe(true);
      });

      it('should filter search options if initial input value passed and input focused', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} value="fox" />,
        );

        driver.inputDriver.focus();
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(1);
      });

      it('should not treat spaces around search text as part of query', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} value="  fox  " />,
        );

        driver.inputDriver.focus();
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(1);
      });

      it('should render required elements of Search box', async () => {
        const driver = createDriver(<ControlledSearch options={options} />);

        expect(await driver.inputDriver.hasPrefix()).toBe(true);
        expect(await driver.inputDriver.getPlaceholder()).toBe('Search');
        expect(await driver.inputDriver.hasMenuArrow()).toBe(false);
      });

      it('should not render clear text button if clearButton=false', async () => {
        const driver = createDriver(
          <ControlledSearch
            options={options}
            clearButton={false}
            value="fox"
          />,
        );

        expect(await driver.inputDriver.hasClearButton()).toBe(false);
      });

      it('should render clear text button if input is not empty', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} value="fox" />,
        );

        expect(await driver.inputDriver.hasClearButton()).toBe(true);
      });

      it('should remain focused on Search component after clear button click', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} value="fox" />,
        );

        await driver.inputDriver.clickClear();
        expect(await driver.inputDriver.isFocus()).toBe(true);
      });

      it('should collapse search options after clear button click', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} value="fox" />,
        );

        await driver.inputDriver.clickClear();
        expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
      });

      it('should do search when text was entered', async () => {
        const driver = createDriver(<ControlledSearch options={options} />);

        await driver.inputDriver.focus();
        await driver.inputDriver.enterText('fox');
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(1);
        await driver.inputDriver.clearText();
        await driver.inputDriver.enterText('the');
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(2);
        await driver.inputDriver.clearText();
        await driver.inputDriver.enterText('');
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(
          options.length,
        );
      });

      it('should treat regex characters as text', async () => {
        const driver = createDriver(<ControlledSearch options={options} />);

        await driver.inputDriver.focus();
        await driver.inputDriver.enterText(REGEXP_SPECIAL_CHARS);
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(1);
      });

      it('should show no results if nothing was found in options', async () => {
        const driver = createDriver(<ControlledSearch options={options} />);

        await driver.inputDriver.focus();
        await driver.inputDriver.enterText('option nowhere to be found');
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(0);
      });

      // TODO: enhance Input component
      // eslint-disable-next-line jest/no-disabled-tests
      it.skip('should focus search input if click on magnifying glass', async () => {
        const driver = createDriver(
          <ControlledSearch options={options} value="fox" />,
        );

        expect(await driver.inputDriver.hasPrefix()).toBe(true);
        // driver.inputDriver.clickPrefix();    <--- Does not exist
        expect(await driver.inputDriver.isFocus()).toBe(true);
      });

      it('should allow filtering options by predicate', async () => {
        const nodeOptions = [
          { id: 1, value: <div>Found me</div>, keywords: ['Found'] },
          { id: 2, value: <div>Filtered me</div>, keywords: ['Filtered'] },
        ];
        const predicate = jest.fn(option => {
          return option.keywords.includes('Found');
        });
        const driver = createDriver(
          <ControlledSearch options={nodeOptions} predicate={predicate} />,
        );
        await driver.inputDriver.enterText('Some text value');
        expect(predicate).toHaveBeenCalled();
        expect(await driver.dropdownLayoutDriver.optionsLength()).toBe(1);
      });

      it('should highlight the matched options text', async () => {
        const driver = createDriver(
          <ControlledSearch value="the" options={options} />,
        );

        expect(await driver.dropdownLayoutDriver.optionContentAt(0)).toContain(
          'The',
        );
      });

      it('should collapse when out of focus if value in onBlur() is set to empty', async () => {
        const { driver, inputDriver } = createDriver(
          <ControlledSearchOnBlur valueOnBlur="" />,
        );
        await inputDriver.click();
        await inputDriver.enterText('fox');
        await inputDriver.blur();
        expect(await inputDriver.getText()).toEqual('');
        expect(await driver.isCollapsed()).toBe(true);
      });

      it('should not collapse when out of focus if value is set to custom in onBlur()', async () => {
        const { driver, inputDriver } = createDriver(
          <ControlledSearchOnBlur valueOnBlur="wix" />,
        );
        await inputDriver.click();
        await inputDriver.enterText('');
        await inputDriver.blur();
        expect(await inputDriver.getText()).toEqual('wix');
        expect(await driver.isCollapsed()).toBe(false);
      });

      it('should not collapse when clicked onClear() if value is set to custom in onBlur()', async () => {
        const { driver, inputDriver } = createDriver(
          <ControlledSearchOnBlur valueOnBlur="wix" />,
        );

        await inputDriver.clickClear();
        expect(await inputDriver.getText()).toEqual('fox');
        expect(await driver.isCollapsed()).toBe(false);
      });

      describe('Clearing input', () => {
        it('should NOT trigger onChange on clearing', async () => {
          const onChange = jest.fn();
          const { inputDriver } = createDriver(
            <Search value="fox" onChange={onChange} clearButton />,
          );
          expect(onChange).toHaveBeenCalledTimes(0);
          await inputDriver.clickClear();
          expect(onChange).toHaveBeenCalledTimes(0);
        });

        it('should trigger onClear on clearing', async () => {
          const onClear = jest.fn();
          const { inputDriver } = createDriver(
            <Search
              options={options}
              value="fox"
              onChange={() => {}}
              clearButton
              onClear={onClear}
            />,
          );
          expect(onClear).toHaveBeenCalledTimes(0);
          await inputDriver.clickClear();
          expect(onClear).toHaveBeenCalledTimes(1);
          expect(onClear.mock.calls[0][0]).toBeTruthy;
        });
      });
    });

    describe('Uncontrolled', () => {
      it('should filter search options if initial defaultValue value passed and input focused', async () => {
        const { inputDriver, dropdownLayoutDriver } = createDriver(
          <Search options={options} defaultValue="fox" />,
        );

        inputDriver.focus();
        expect(await dropdownLayoutDriver.optionsLength()).toBe(1);
      });

      describe('Clearing input', () => {
        it('should trigger onClear on clearing', async () => {
          const onClear = jest.fn();
          const { inputDriver } = createDriver(
            <Search defaultValue="fox" options={options} onClear={onClear} />,
          );
          expect(onClear).toHaveBeenCalledTimes(0);
          await inputDriver.clickClear();
          expect(onClear).toHaveBeenCalledTimes(1);
          expect(onClear.mock.calls[0][0]).toBeTruthy;
        });

        it('should clear input after clear button click', async () => {
          const { inputDriver } = createDriver(
            <Search defaultValue="fox" options={options} />,
          );
          await inputDriver.enterText('h');
          expect(await inputDriver.getText()).toEqual('h');
          await inputDriver.clickClear();
          expect(await inputDriver.getText()).toEqual('');
        });
      });
    });

    describe('Expandable', () => {
      it('should start as collapsed element by default when expandable=true', async () => {
        const { driver } = createDriver(
          <Search options={options} expandable />,
        );

        expect(await driver.isExpandable()).toBe(true);
        expect(await driver.isCollapsed()).toBe(true);
      });

      it('should extend the search input when clicked', async () => {
        const { driver, inputDriver } = createDriver(
          <Search options={options} expandable />,
        );

        expect(await driver.isCollapsed()).toBe(true);
        await inputDriver.click();
        expect(await driver.isCollapsed()).toBe(false);
      });

      it('should be focused on the input after expanding the search component', async () => {
        const { inputDriver } = createDriver(
          <Search options={options} expandable />,
        );

        expect(await inputDriver.isFocus()).toBe(false);
        await inputDriver.click();
        expect(await inputDriver.isFocus()).toBe(true);
      });

      it('should not collapse the input if the input has no value and blurred', async () => {
        const { inputDriver, driver } = createDriver(
          <Search options={options} expandable />,
        );

        await inputDriver.click();
        await inputDriver.enterText('wix');
        await inputDriver.blur();
        expect(await driver.isCollapsed()).toBe(false);
      });

      it('should collapse the input if the input has no value and blurred', async () => {
        const { inputDriver, driver } = createDriver(
          <Search options={options} expandable />,
        );

        await inputDriver.click();
        await inputDriver.blur();
        expect(await driver.isCollapsed()).toBe(true);
      });

      it('should have non-collapsed input when expandable=true and the input has initial value', async () => {
        const { driver } = createDriver(
          <Search options={options} expandable defaultValue={'Test'} />,
        );

        expect(await driver.isExpandable()).toBe(true);
        expect(await driver.isCollapsed()).toBe(false);
      });

      it('should not be collapsed by default', async () => {
        const { driver, inputDriver } = createDriver(
          <Search options={options} />,
        );

        expect(await driver.isExpandable()).toBe(false);
        expect(await driver.isCollapsed()).toBe(false);
        await inputDriver.click();
        expect(await driver.isCollapsed()).toBe(false);
      });
      it('should not be collapsed when specified with autoFocus', async () => {
        const { driver } = createDriver(
          <Search expandable autoFocus options={options} />,
        );

        expect(await driver.isExpandable()).toBe(true);
        expect(await driver.isCollapsed()).toBe(false);
      });
    });

    describe('debounced', () => {
      it('should debounce onChange callback if debounceMs prop is provided', async () => {
        jest.useFakeTimers();

        const onChangeSpy = jest.fn();
        const driver = createDriver(
          <Search onChange={onChangeSpy} debounceMs={100} />,
        );

        await driver.inputDriver.enterText('f');
        jest.advanceTimersByTime(99);

        expect(onChangeSpy).not.toHaveBeenCalled();

        await driver.inputDriver.enterText('fo');
        jest.advanceTimersByTime(99);

        expect(onChangeSpy).not.toHaveBeenCalled();

        await driver.inputDriver.enterText('foo');
        jest.advanceTimersByTime(100);

        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(onChangeSpy.mock.calls[0][0].target.value).toBe('foo');
      });

      it('should not debounce onChange callback if debounceMs prop is not provided', async () => {
        jest.useFakeTimers();

        const onChangeSpy = jest.fn();
        const driver = createDriver(<Search onChange={onChangeSpy} />);

        await driver.inputDriver.enterText('f');

        expect(onChangeSpy).toHaveBeenCalledTimes(1);

        await driver.inputDriver.enterText('fo');
        jest.advanceTimersByTime(99);

        expect(onChangeSpy).toHaveBeenCalledTimes(2);

        await driver.inputDriver.enterText('foo');
        jest.advanceTimersByTime(100);

        expect(onChangeSpy).toHaveBeenCalledTimes(3);
        expect(onChangeSpy.mock.calls[0][0].target.value).toBe('f');
        expect(onChangeSpy.mock.calls[1][0].target.value).toBe('fo');
        expect(onChangeSpy.mock.calls[2][0].target.value).toBe('foo');
      });

      // TODO - need to implement a logic in InputWithOptions
      it.skip('dropdown should not open until debounce finishes', async () => {
        jest.useFakeTimers();

        const onChangeSpy = jest.fn();
        const driver = createDriver(
          <Search options={options} onChange={onChangeSpy} debounceMs={100} />,
        );

        await driver.inputDriver.enterText('z');
        expect(await driver.dropdownLayoutDriver.isShown()).toBe(false);
        jest.advanceTimersByTime(100);
        expect(await driver.dropdownLayoutDriver.isShown()).toBe(true);
      });
    });

    describe('status attribute', () => {
      it('should have no status', async () => {
        const { inputDriver } = createDriver(<Search />);

        expect(await inputDriver.hasStatus('error')).toBe(false);
      });

      it.each([
        { status: 'error' },
        { status: 'warning' },
        { status: 'loading' },
      ])('should display status when %p', async test => {
        const { inputDriver } = createDriver(<Search {...test} />);

        expect(await inputDriver.hasStatus(test.status)).toBe(true);
        expect(await inputDriver.getStatusMessage()).toBeNull();
      });

      it.each([
        { status: 'error', statusMessage: 'Error Message' },
        { status: 'warning', statusMessage: 'Warning Message' },
        { status: 'loading', statusMessage: 'Loading Message' },
      ])('should display status with message when %p', async test => {
        const { inputDriver } = createDriver(<Search {...test} />);

        expect(await inputDriver.hasStatus(test.status)).toBe(true);
        expect(await inputDriver.getStatusMessage()).toBe(test.statusMessage);
      });

      it('should call onEnterPressed', async () => {
        const onEnterPressed = jest.fn();
        const { inputDriver } = createDriver(
          <Search onEnterPressed={onEnterPressed} />,
        );

        expect(onEnterPressed).not.toHaveBeenCalled();

        // Driver
        await inputDriver.keyDown({ key: 'Enter', keyCode: 13 });
        // Unidriver
        await inputDriver.keyDown('Enter');

        expect(onEnterPressed).toHaveBeenCalled();
      });
    });

    describe('onChange', () => {
      it('should update onChange callback', async () => {
        const onChange1 = jest.fn();
        const onChange2 = jest.fn();
        const { driver, rerender } = render(<Search onChange={onChange1} />);

        // Expect to call onChange
        expect(onChange1).toHaveBeenCalledTimes(0);
        await driver.inputDriver.enterText('yay');
        expect(onChange1).toHaveBeenCalledTimes(1);

        rerender(<Search onChange={onChange2} />);

        // Expect to update and call the new onChange
        expect(onChange2).toHaveBeenCalledTimes(0);
        await driver.inputDriver.enterText('yay');
        expect(onChange2).toHaveBeenCalledTimes(1);
      });
    });
  }
});
