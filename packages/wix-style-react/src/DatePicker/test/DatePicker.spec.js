import React from 'react';
import { isSameDay, format } from 'date-fns';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import datePickerDriverFactory from '../DatePicker.driver.js';
import { datePickerUniDriverFactory } from '../DatePicker.uni.driver.js';
import Input from '../../Input';
import DatePicker from '../DatePicker';
import eventually from 'wix-eventually';
import { is as isLocale } from 'date-fns/locale';
import { convertTokens } from '@date-fns/upgrade/v2';

const noop = () => {};
describe('DatePicker', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(datePickerDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(datePickerUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    describe('date picker input', () => {
      it('should exist', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} />);
        expect(await inputDriver.exists()).toBe(true);
      });

      describe('given `disabled` prop', () => {
        it('should be disabled', async () => {
          const {
            driver: { inputDriver },
          } = render(<DatePicker onChange={noop} disabled />);
          expect(await inputDriver.isDisabled()).toBe(true);
        });

        it('should not open calendar on click', async () => {
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} disabled />);
          await inputDriver.click();
          expect(await calendarDriver.isVisible()).toBe(false);
        });
      });

      it('has prefix by default', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} />);
        expect(await inputDriver.hasPrefix()).toBe(true);
      });

      it('has custom prefix', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} prefix={<span>#</span>} />);

        expect(await inputDriver.hasPrefix()).toBe(true);
      });

      it('allow rendering custom input', async () => {
        const placeHolder = 'input date';
        const customInput = <Input placeholder={placeHolder} />;
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} customInput={customInput} />);
        expect(await inputDriver.getPlaceholder()).toEqual(placeHolder);
      });
    });

    describe('calendar', () => {
      it('should be hidden by default', async () => {
        const {
          driver: { calendarDriver },
        } = render(<DatePicker onChange={noop} />);
        expect(await calendarDriver.isVisible()).toBe(false);
      });

      describe('should open', () => {
        it('on click on datePickerInput', async () => {
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} />);

          await inputDriver.click();
          expect(await calendarDriver.isVisible()).toBe(true);
        });

        it('on focus', async () => {
          const value = new Date(2017, 5, 2);
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} value={value} />);
          await inputDriver.focus();
          expect(await calendarDriver.isVisible()).toBe(true);
        });

        it('on render when given `initialOpen` prop', async () => {
          const onChange = jest.fn();
          const date = new Date(2015, 9, 2);
          const {
            driver: { calendarDriver },
          } = render(
            <DatePicker onChange={onChange} value={date} initialOpen />,
          );
          expect(await calendarDriver.isVisible()).toBe(true);
        });
      });

      describe('should close', () => {
        it('on select date with click', async () => {
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} />);

          await inputDriver.click();
          await calendarDriver.clickOnNthDay();
          await eventually(async () => {
            expect(await calendarDriver.isVisible()).toBe(false);
          });
        });

        it('on press "Escape" key', async () => {
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} />);

          await inputDriver.click();
          await calendarDriver.triggerKeyDown({ key: 'Escape', keyCode: 27 });

          expect(await calendarDriver.isVisible()).toBe(false);
        });

        it('on press "Escape" key and call onClose callback', async () => {
          const onClose = jest.fn();
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} onClose={onClose} />);

          await inputDriver.click();
          await calendarDriver.triggerKeyDown({ key: 'Escape', keyCode: 27 });

          expect(await calendarDriver.isVisible()).toBe(false);
          expect(onClose).toBeCalled();
        });

        it('on press "Tab" key', async () => {
          const preventDefault = jest.fn();
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} />);

          await inputDriver.click();
          await calendarDriver.triggerKeyDown({
            key: 'Tab',
            keyCode: 9,
            preventDefault,
          });

          expect(preventDefault.mock.calls).toHaveLength(0);
          expect(await calendarDriver.isVisible()).toBe(false);
        });

        it('on outside click', async () => {
          const {
            driver: { inputDriver, calendarDriver },
          } = render(<DatePicker onChange={noop} />);

          await inputDriver.click();
          await calendarDriver.mouseClickOutside();

          expect(await calendarDriver.isVisible()).toBe(false);
        });
      });

      it('should not close on select when "shouldCloseOnSelect" property is false', async () => {
        const {
          driver: { inputDriver, calendarDriver },
        } = render(<DatePicker onChange={noop} shouldCloseOnSelect={false} />);

        await inputDriver.click();
        await calendarDriver.clickOnNthDay();

        expect(await calendarDriver.isVisible()).toBe(true);
      });

      it('should disable past dates given `excludePastDates` prop', async () => {
        const onChange = jest.fn();
        const date = new Date(2015, 9, 2);
        const {
          driver: { calendarDriver, inputDriver },
        } = render(
          <DatePicker onChange={onChange} value={date} excludePastDates />,
        );

        await inputDriver.click();
        await calendarDriver.clickOnNthDay();

        expect(onChange).not.toHaveBeenCalled();
        expect(await calendarDriver.isVisible()).toBe(true);
      });

      it('should disable past dates given `excludePastDates` prop (current date selected)', async () => {
        const onChange = jest.fn();
        const now = new Date();
        const date = new Date(now);
        date.setDate(now.getDate() === 1 ? 2 : 1); // set selected date other then now, but stay in the same month
        const {
          driver: { calendarDriver, inputDriver },
        } = render(
          <DatePicker onChange={onChange} value={date} excludePastDates />,
        );

        await inputDriver.click();
        await calendarDriver.clickOnNthDay();

        expect(onChange).toHaveBeenCalled();
        expect(await calendarDriver.isVisible()).toBe(false);

        const newDate = onChange.mock.calls[0][0];
        expect(newDate.getMonth()).toEqual(now.getMonth());
        expect(newDate.getDate()).toEqual(now.getDate());
      });

      describe('navbar arrow navigation', () => {
        it('should select previous month on previous month button click - LTR mode', async () => {
          const onChange = jest.fn();
          const {
            driver: { calendarDriver, inputDriver },
          } = render(
            <DatePicker onChange={onChange} value={new Date(2015, 9, 2)} />,
          );

          await inputDriver.click();
          await calendarDriver.clickOnPrevMonthButton();
          await calendarDriver.clickOnNthDay();

          const newDate = onChange.mock.calls[0][0];
          expect(newDate.getMonth()).toEqual(8);
          expect(newDate.getDate()).toEqual(1);
        });

        it('should select next month on next month button click - LTR mode', async () => {
          const onChange = jest.fn();
          const date = new Date(2015, 9, 2);
          const {
            driver: { calendarDriver, inputDriver },
          } = render(<DatePicker onChange={onChange} value={date} />);

          await inputDriver.click();
          await calendarDriver.clickOnNextMonthButton();
          await calendarDriver.clickOnNthDay();

          const newDate = onChange.mock.calls[0][0];

          expect(newDate.getMonth()).toEqual(10);
          expect(newDate.getDate()).toEqual(1);
        });

        it('should select previous month on previous month button click - RTL mode', async () => {
          const onChange = jest.fn();
          const date = new Date(2015, 9, 2);
          const {
            driver: { calendarDriver, inputDriver },
          } = render(<DatePicker onChange={onChange} value={date} rtl />);
          await inputDriver.click();

          await calendarDriver.clickOnPrevMonthButton();
          await calendarDriver.clickOnNthDay();

          const newDate = onChange.mock.calls[0][0];
          expect(newDate.getMonth()).toEqual(8);
          expect(newDate.getDate()).toEqual(1);
        });

        it('should select next month on next month button click - RTL mode', async () => {
          const onChange = jest.fn();
          const date = new Date(2015, 9, 2);
          const {
            driver: { calendarDriver, inputDriver },
          } = render(<DatePicker onChange={onChange} value={date} rtl />);

          await inputDriver.click();
          await calendarDriver.clickOnNextMonthButton();
          await calendarDriver.clickOnNthDay();

          const newDate = onChange.mock.calls[0][0];
          expect(newDate.getMonth()).toEqual(10);
          expect(newDate.getDate()).toEqual(1);
        });
      });

      it('should show header', async () => {
        const date = new Date(2015, 9, 2);
        const {
          driver: { calendarDriver, inputDriver },
        } = render(<DatePicker onChange={noop} value={date} />);
        await inputDriver.click();
        expect(await calendarDriver.isHeaderVisible()).toEqual(true);
        expect(await calendarDriver.isYearCaptionExists()).toEqual(true);
        expect(await calendarDriver.isMonthCaptionExists()).toEqual(true);
      });

      it('should show year dropdown', async () => {
        const date = new Date(2015, 9, 2);
        const {
          driver: { calendarDriver, inputDriver },
        } = render(
          <DatePicker onChange={noop} showYearDropdown value={date} />,
        );
        await inputDriver.click();
        expect(await calendarDriver.isYearDropdownExists()).toEqual(true);
        expect(await calendarDriver.isYearCaptionExists()).toEqual(false);
      });

      it('should show month dropdown', async () => {
        const date = new Date(2015, 9, 2);
        const {
          driver: { calendarDriver, inputDriver },
        } = render(
          <DatePicker onChange={noop} showMonthDropdown value={date} />,
        );
        await inputDriver.click();
        expect(await calendarDriver.isMonthDropdownExists()).toEqual(true);
        expect(await calendarDriver.isMonthCaptionExists()).toEqual(false);
      });

      describe('given date in far future', () => {
        it('should not fail', async () => {
          const {
            driver: { calendarDriver, driver },
          } = render(
            <DatePicker
              value={new Date('2055/01/01')}
              onChange={noop}
              showYearDropdown
            />,
          );

          await driver.open();

          const yearDropdownDriver = await calendarDriver.getYearDropdownDriver();
          const years = Array.from(
            await yearDropdownDriver.optionsContent(),
          ).map(n => parseInt(n, 10));
          const firstYear = years[0];
          const lastYear = years[years.length - 1];

          expect(firstYear).toBe(2055);
          expect(lastYear).toBe(1900);
        });
      });

      describe('`width` prop', () => {
        it('should set 150px by default to Input', async () => {
          const {
            driver: { driver, inputDriver },
          } = render(<DatePicker onChange={noop} />);
          await inputDriver.click();

          expect(await driver.getWidth()).toBe('150px');
        });

        it('should allow to be changed to Input', async () => {
          const {
            driver: { driver, inputDriver },
          } = render(<DatePicker onChange={noop} width={4} />);

          await inputDriver.click();

          expect(await driver.getWidth()).toBe('4px');
        });
      });

      describe('with year dropdown', () => {
        it('should give a possibility to choose date from another year', async () => {
          const date = new Date(2015, 9, 2);
          const {
            driver: { calendarDriver, inputDriver },
          } = render(
            <DatePicker onChange={noop} showYearDropdown value={date} />,
          );

          await inputDriver.click();
          await calendarDriver.clickOnYearDropdown();
          await calendarDriver.clickOnNthYear();
          expect(await calendarDriver.getSelectedYear()).not.toEqual(
            date.getFullYear(),
          );
        });
      });

      describe('When trigger open and close', () => {
        it('should open calendar using ref', async () => {
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} />);
          await driver.open();
          expect(await calendarDriver.isVisible()).toBe(true);
        });

        it('should hide the focus visually on the current element from the user', async () => {
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} />);
          await driver.open();
          expect(await calendarDriver.isFocusedDayVisuallyUnfocused()).toBe(
            true,
          );
        });

        it('should close calendar using ref', async () => {
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} />);

          await driver.open();
          expect(await calendarDriver.isVisible()).toBe(true);

          await calendarDriver.close();
          expect(await calendarDriver.isVisible()).toBe(false);
        });
      });

      describe('keyboard navigation', () => {
        it('should navigate days correctly with keyboard - LTR mode', async () => {
          const date = new Date(2018, 1, 5);
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} value={date} />);

          await driver.open();
          expect(await calendarDriver.getFocusedDay()).toEqual('5');
          await calendarDriver.pressLeftArrow();
          await eventually(async () => {
            expect(await calendarDriver.getFocusedDay()).toEqual('4');
          });
        });

        it('should navigate days correctly with keyboard - RTL mode', async () => {
          const date = new Date(2018, 1, 5);
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} rtl value={date} />);

          await driver.open();
          expect(await calendarDriver.getFocusedDay()).toEqual('5');
          await calendarDriver.pressLeftArrow();
          await eventually(async () => {
            expect(await calendarDriver.getFocusedDay()).toEqual('6');
          });
        });

        it('should not update input value while navigating the calendar', async () => {
          const date = new Date(2018, 1, 5);
          const {
            driver: { calendarDriver, inputDriver, driver },
          } = render(<DatePicker onChange={noop} value={date} />);

          await driver.open();
          expect(await inputDriver.getValue()).toEqual('02/05/2018');

          await calendarDriver.pressLeftArrow();
          expect(await inputDriver.getValue()).toEqual('02/05/2018');
        });

        it('should keep selected day unchanged when navigating with keyboard', async () => {
          const date = new Date(2018, 1, 5);
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} value={date} />);

          await driver.open();

          expect(await calendarDriver.getSelectedDay()).toEqual('5');
          expect(await calendarDriver.getFocusedDay()).toEqual('5');

          await calendarDriver.pressLeftArrow();
          await eventually(async () => {
            expect(await calendarDriver.getSelectedDay()).toEqual('5');
            expect(await calendarDriver.getFocusedDay()).toEqual('4');
          });
        });

        it('should remove unfocused class from the selected day while navigating the calendar', async () => {
          const date = new Date(2018, 1, 5);
          const {
            driver: { calendarDriver, driver },
          } = render(<DatePicker onChange={noop} value={date} />);

          await driver.open();
          expect(await calendarDriver.isFocusedDayVisuallyUnfocused()).toBe(
            true,
          );

          await calendarDriver.pressLeftArrow();
          expect(await calendarDriver.containsVisuallyUnfocusedDay()).toBe(
            false,
          );
        });
      });
    });

    describe('`format` prop', () => {
      it('should display date according to string format (dateFormat)', async () => {
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            value={new Date(2017, 9, 2)}
            dateFormat={'DD/MM/YYYY'}
          />,
        );

        expect(await inputDriver.getValue()).toBe('02/10/2017');
      });

      it('should ignore format from locale (dateFormat)', async () => {
        const date = new Date(2017, 9, 2);
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            locale="fr"
            dateFormat="YYYY/MM/DD"
            value={date}
          />,
        );

        expect(await inputDriver.getValue()).toBe('2017/10/02');
      });

      it('should display date according to custom function format (dateFormat)', async () => {
        const date = new Date(2017, 9, 2);
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            locale="fr"
            dateFormat={_date => format(_date, convertTokens('YYYY MMM DD'))}
            value={date}
          />,
        );

        expect(await inputDriver.getValue()).toBe('2017 Oct 02');
      });

      it('should display date according to string format (dateFormatV2)', async () => {
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            value={new Date(2017, 9, 2)}
            dateFormatV2={'dd/LL/yyyy'}
          />,
        );

        expect(await inputDriver.getValue()).toBe('02/10/2017');
      });

      it('should ignore format from locale (dateFormatV2)', async () => {
        const date = new Date(2017, 9, 2);
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            locale="fr"
            dateFormatV2="yyyy/LL/dd"
            value={date}
          />,
        );

        expect(await inputDriver.getValue()).toBe('2017/10/02');
      });

      it('should display date according to custom function format (dateFormatV2)', async () => {
        const date = new Date(2017, 9, 2);
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            locale="fr"
            dateFormatV2={_date => format(_date, 'yyyy LLL dd')}
            value={date}
          />,
        );

        expect(await inputDriver.getValue()).toBe('2017 Oct 02');
      });

      it('should display date according to string format dateFormatV2 if both dateFormat and dateFormatV2 given', async () => {
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            value={new Date(2017, 9, 2)}
            dateFormat={'MM/DD/YYYY'}
            dateFormatV2={'dd/LL/yyyy'}
          />,
        );

        expect(await inputDriver.getValue()).toBe('02/10/2017');
      });

      it('should fallback to default dateFormatV2 if both dateFormat and dateFormatV2 not given', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} value={new Date(2017, 9, 2)} />);

        expect(await inputDriver.getValue()).toBe('10/02/2017');
      });
    });

    describe('placeholder', () => {
      it('should be taken from `placeholderText` prop', async () => {
        const placeholder = 'Datepicker test placeholder';
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker onChange={noop} placeholderText={placeholder} />,
        );
        expect(await inputDriver.getPlaceholder()).toBe(placeholder);
      });

      it('should be taken from `placeholder` prop of `customInput`', async () => {
        const placeholder = 'Input test placeholder';
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            onChange={noop}
            placeholderText={'you should not see me!'}
            customInput={<Input placeholder={placeholder} />}
          />,
        );

        expect(await inputDriver.getPlaceholder()).toBe(placeholder);
      });
    });

    describe('`onChange` prop', () => {
      it('should be called on available day click', async () => {
        const onChange = jest.fn();
        const value = new Date(2017, 7, 1);
        const expectedValue = new Date(2017, 7, 2);
        const {
          driver: { calendarDriver, inputDriver },
        } = render(<DatePicker value={value} onChange={onChange} />);

        await inputDriver.click();
        await calendarDriver.clickOnNthDay(1);

        const newValue = onChange.mock.calls[0][0];

        expect(onChange).toHaveBeenCalled();
        expect(isSameDay(newValue, expectedValue)).toBe(true);
      });

      it('should not be called choosing already selected date with enter key', async () => {
        const onChange = jest.fn();
        const value = new Date(2017, 5, 2);
        const {
          driver: { inputDriver },
        } = render(<DatePicker value={value} onChange={onChange} />);

        await inputDriver.click();
        await inputDriver.trigger('keyDown', { keyCode: 13 });

        expect(onChange).not.toHaveBeenCalled();
      });

      it('should not be called clicking already selected date', async () => {
        const onChange = jest.fn();
        const value = new Date();
        const {
          driver: { calendarDriver, inputDriver },
        } = render(<DatePicker value={value} onChange={onChange} />);

        await inputDriver.click();
        await calendarDriver.clickOnSelectedDay();

        expect(onChange).not.toHaveBeenCalled();
      });

      it('should not adjust time of given value', async () => {
        const onChange = jest.fn();
        const value = new Date('2017/01/01 12:34:56.000Z');
        const {
          driver: { calendarDriver, driver },
        } = render(<DatePicker value={value} onChange={onChange} />);
        await driver.open();
        await calendarDriver.clickOnNthDay(1);
        expect(onChange.mock.calls[0][0]).toEqual(
          new Date('2017-01-02T12:34:56.000Z'),
        );
      });

      it('should adjust time if no value given to midnight', async () => {
        const onChange = jest.fn();
        const {
          driver: { calendarDriver, driver },
        } = render(<DatePicker onChange={onChange} />);
        await driver.open();
        await calendarDriver.clickOnNthDay(1);

        const chosenDate = onChange.mock.calls[0][0];
        expect(chosenDate.getHours()).toEqual(0);
        expect(chosenDate.getMinutes()).toEqual(0);
        expect(chosenDate.getSeconds()).toEqual(0);
        expect(chosenDate.getMilliseconds()).toEqual(0);
      });

      it('should trigger onChange when using clickOnNthDayOfTheMonth', async () => {
        const onChange = jest.fn();
        const value = new Date('2021-01-05T10:00:00.000Z');
        const {
          driver: { inputDriver, calendarDriver },
        } = render(<DatePicker onChange={onChange} value={value} />);
        await inputDriver.click();
        await calendarDriver.clickOnNthDayOfTheMonth(7);

        expect(onChange.mock.calls[0][0]).toEqual(
          new Date('2021-01-08T10:00:00.000Z'),
        );
      });
    });

    describe('`readonly` prop', () => {
      it('should be false by default', async () => {
        const {
          driver: { inputDriver, driver, calendarDriver },
        } = render(<DatePicker onChange={noop} />);
        expect(await inputDriver.getReadOnly()).toBe(false);
        expect(await calendarDriver.isVisible()).toBe(false);
        await driver.open();
        expect(await calendarDriver.isVisible()).toBe(true);
      });

      it('should be readonly when true', async () => {
        const {
          driver: { inputDriver, driver, calendarDriver },
        } = render(<DatePicker onChange={noop} readOnly />);
        expect(await inputDriver.getReadOnly()).toBe(true);
        expect(await calendarDriver.isVisible()).toBe(false);
        await driver.open();
        expect(await calendarDriver.isVisible()).toBe(false);
      });
    });

    describe('`size` prop', () => {
      it('should have size medium by default', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} />);

        expect(await inputDriver.getSize()).toBe('medium');
      });

      it('should have size large', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} size="large" />);

        expect(await inputDriver.getSize()).toBe('large');
      });

      it('should have size small', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} size="small" />);

        expect(await inputDriver.getSize()).toBe('small');
      });
    });

    describe('`clearButton` and `onClear` prop', () => {
      it('should not have clearButton by default', async () => {
        const onChange = jest.fn();
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={onChange} />);

        expect(await inputDriver.hasClearButton()).toBe(false);
      });

      it('should not have clearButton when value is not selected', async () => {
        const onChange = jest.fn();
        const onClear = jest.fn();
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker onChange={onChange} clearButton onClear={onClear} />,
        );

        expect(await inputDriver.hasClearButton()).toBe(false);
      });

      it('should have clearButton when value is selected', async () => {
        const onChange = jest.fn();
        const onClear = jest.fn();
        const value = new Date(2017, 5, 2);
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            value={value}
            onChange={onChange}
            clearButton
            onClear={onClear}
          />,
        );

        expect(await inputDriver.hasClearButton()).toBe(true);
      });

      it('onClear should be called when clicking clearButton', async () => {
        const onChange = jest.fn();
        const onClear = jest.fn();
        const value = new Date(2017, 5, 2);
        const {
          driver: { inputDriver },
        } = render(
          <DatePicker
            value={value}
            onChange={onChange}
            clearButton
            onClear={onClear}
          />,
        );

        await inputDriver.clickClear();

        expect(onClear).toHaveBeenCalled();
      });
    });

    describe('`locale` prop', () => {
      const setup = async (props = {}) => {
        const {
          driver: { calendarDriver, inputDriver, driver },
        } = render(
          <DatePicker
            onChange={noop}
            locale="fr"
            value={new Date(2015, 9, 2)}
            {...props}
          />,
        );

        await inputDriver.click();

        return {
          calendarDriver,
          driver,
          inputDriver,
        };
      };

      it('should display translated month in caption', async () => {
        const { calendarDriver } = await setup();
        expect(await calendarDriver.getMonthCaption()).toEqual('Octobre');
      });

      it('should display translated month in dropdown label', async () => {
        const { calendarDriver } = await setup({
          showMonthDropdown: true,
        });
        expect(await calendarDriver.getMonthDropdownLabel()).toEqual('Octobre');
      });

      it('should display translated months in dropdown options', async () => {
        const { calendarDriver } = await setup({
          showMonthDropdown: true,
        });
        expect(
          await (await calendarDriver.getMonthDropdownDriver()).optionContentAt(
            0,
          ),
        ).toEqual('Janvier');
      });

      it('should display translated weekdays', async () => {
        const { calendarDriver } = await setup();
        expect(await calendarDriver.getNthWeekDayName(0)).toEqual('lu');
      });

      describe('when function from date-fns', () => {
        it('should display translated month in caption', async () => {
          const { calendarDriver } = await setup({ locale: isLocale });
          expect(await calendarDriver.getMonthCaption()).toEqual('október');
        });

        it('should display translated month in dropdown label', async () => {
          const { calendarDriver } = await setup({
            locale: isLocale,
            showMonthDropdown: true,
          });
          expect(await calendarDriver.getMonthDropdownLabel()).toEqual(
            'október',
          );
        });

        it('should display translated months in dropdown options', async () => {
          const { calendarDriver } = await setup({
            locale: isLocale,
            showMonthDropdown: true,
          });
          expect(
            await (
              await calendarDriver.getMonthDropdownDriver()
            ).optionContentAt(0),
          ).toEqual('janúar');
        });

        it('should display translated weekdays', async () => {
          const { calendarDriver } = await setup({ locale: isLocale });
          expect(await calendarDriver.getNthWeekDayName(0)).toEqual('Má');
        });
      });
    });

    describe('`value` prop', () => {
      it('should show correct value from props', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} value={new Date(2017, 9, 2)} />);
        expect(await inputDriver.getValue()).toBe('10/02/2017');
      });

      it('should show empty value', async () => {
        const {
          driver: { inputDriver },
        } = render(<DatePicker onChange={noop} />);
        expect(await inputDriver.getValue()).toBe('');
      });

      describe('when undefined', () => {
        it('should display `placeholderText`', async () => {
          const {
            driver: { inputDriver },
          } = render(
            <DatePicker
              value={undefined}
              placeholderText="hello"
              onChange={noop}
            />,
          );
          expect(await inputDriver.getValue()).toBe('');
          expect(await inputDriver.getPlaceholder()).toBe('hello');
        });
      });
    });

    describe('two months layout', () => {
      it('should switch to 2 months layout if we set twoMonths prop to true', async () => {
        const {
          driver: { inputDriver, calendarDriver },
        } = render(<DatePicker twoMonths onChange={noop} />);
        await inputDriver.click();
        expect(await calendarDriver.isTwoMonthsLayout()).toBe(true);
      });
    });

    describe('firstDayOfWeek', () => {
      it('should show correct first day of the week', async () => {
        const {
          driver: { inputDriver, calendarDriver },
        } = render(<DatePicker onChange={() => {}} firstDayOfWeek={0} />);

        await inputDriver.click();

        expect(await calendarDriver.getNthWeekDayName(0)).toEqual('Su');
      });
    });
  }
});
