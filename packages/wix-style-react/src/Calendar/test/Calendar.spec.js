import React from 'react';
import calendarDriverFactory from '../Calendar.driver';
import Calendar from '..';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import { calendarUniDriverFactory } from '../Calendar.uni.driver';
import { CAPITALIZED_MONTH_LANGUAGES } from '../../LocaleUtils';

const isFirstLetterCapitalized = str =>
  str && str.length && str[0] === str[0].toLocaleUpperCase();

describe('Calendar', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(calendarDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(calendarUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    const AUGUST = 7,
      SEPTEMBER = 8,
      OCTOBER = 9,
      NOVEMBER = 10;

    const monthNames = 'January February March April May June July August September October November December'.split(
      ' ',
    );

    describe('rendering the Calendar', () => {
      it('should display the month of the {from} Date if the provided value is {from, to}', async () => {
        const { driver } = render(
          <Calendar
            value={{
              from: new Date(2018, OCTOBER, 5),
              to: new Date(2018, NOVEMBER, 7),
            }}
            onChange={() => {}}
          />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[OCTOBER]);
      });

      it('should display the month of the {from} Date if the provided value is {from, to} with date strings', async () => {
        const { driver } = render(
          <Calendar
            value={{ from: '2018/10/05', to: '2018/11/07' }}
            onChange={() => {}}
          />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[OCTOBER]);
      });

      it('should display the month of the {from} Date if the provided value is {from}', async () => {
        const { driver } = render(
          <Calendar
            value={{ from: new Date(2018, OCTOBER, 5) }}
            onChange={() => {}}
          />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[OCTOBER]);
      });

      it('should capitalize first letter of month in certain languages', async () => {
        for (const locale of CAPITALIZED_MONTH_LANGUAGES) {
          const { driver } = render(
            <Calendar
              value={{ from: new Date(2018, OCTOBER, 5) }}
              onChange={() => {}}
              locale={locale}
            />,
          );

          const monthCaption = await driver.getMonthCaption();
          expect(isFirstLetterCapitalized(monthCaption)).toBe(true);
        }
      });

      it('should display the month of the {from} Date if the provided value is {from} with a date string', async () => {
        const { driver } = render(
          <Calendar value={{ from: '2018/10/05' }} onChange={() => {}} />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[OCTOBER]);
      });

      it('should display the month of the {to} Date if the provided value is {to}', async () => {
        const { driver } = render(
          <Calendar
            value={{ to: new Date(2018, NOVEMBER, 7) }}
            onChange={() => {}}
          />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[NOVEMBER]);
      });

      it('should display the month of the {to} Date if the provided value is {to} with a date string', async () => {
        const { driver } = render(
          <Calendar value={{ to: '2018/11/07' }} onChange={() => {}} />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[NOVEMBER]);
      });

      it('should display the month of the Date if the provided value is a single Date', async () => {
        const { driver } = render(
          <Calendar value={new Date(2018, NOVEMBER, 7)} onChange={() => {}} />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[NOVEMBER]);
      });

      it('should display the month of the Date if the provided value is a single date string', async () => {
        const { driver } = render(
          <Calendar value={'2018/11/07'} onChange={() => {}} />,
        );

        expect(await driver.getMonthCaption()).toEqual(monthNames[NOVEMBER]);
      });

      it('should display the current month if the provided value is undefined', async () => {
        const { driver } = render(<Calendar onChange={() => {}} />);

        expect(await driver.getMonthCaption()).toEqual(
          monthNames[new Date().getMonth()],
        );
      });

      it('should display the current month if the provided value is an empty object', async () => {
        const { driver } = render(<Calendar value={{}} onChange={() => {}} />);

        expect(await driver.getMonthCaption()).toEqual(
          monthNames[new Date().getMonth()],
        );
      });
      it('should have 5 selected dates', async () => {
        const { driver } = render(
          <Calendar
            value={{
              from: new Date(2018, 10, 5),
              to: new Date(2018, 10, 9),
            }}
            onChange={() => {}}
            selectionMode={'range'}
          />,
        );

        expect(await driver.getNumOfSelectedDays()).toBe(5);
      });
    });

    describe('`filterDate` prop', () => {
      it('should not affect calendar if date is modified', async () => {
        const date = new Date(2017, 9, 2);
        const { driver } = render(
          <Calendar
            onChange={() => {}}
            filterDate={_date => {
              _date.setUTCDate(3);
              return false;
            }}
            value={date}
          />,
        );

        expect(await driver.getSelectedDay()).toBe('2');
      });
    });

    describe('onClose', () => {
      it('should be call with default not prevented when closing with ESC key', async () => {
        const onCloseMock = jest.fn();
        const value = new Date(2018, 10, 5);
        const { driver } = render(
          <Calendar
            value={value}
            onChange={() => {}}
            onClose={onCloseMock}
            shouldCloseOnSelect={false}
          />,
        );

        await driver.clickDay(new Date(2018, 10, 1));

        await driver.triggerKeyDown({
          key: 'Escape',
          keyCode: 27,
        });
        expect(onCloseMock).toHaveBeenCalledTimes(1);
        expect(onCloseMock.mock.calls[0][0].type).toEqual('keydown');
        expect(onCloseMock.mock.calls[0][0].defaultPrevented).toBeFalsy();
      });

      it('should be call with default not prevented when closing with TAB key', async () => {
        const onCloseMock = jest.fn();
        const value = new Date(2018, 10, 5);
        const { driver } = render(
          <Calendar
            value={value}
            onChange={() => {}}
            onClose={onCloseMock}
            shouldCloseOnSelect={false}
          />,
        );

        await driver.clickDay(new Date(2018, 10, 1));

        await driver.triggerKeyDown({
          key: 'Tab',
          keyCode: 9,
        });
        expect(onCloseMock).toHaveBeenCalledTimes(1);
        expect(onCloseMock.mock.calls[0][0].type).toEqual('keydown');
        expect(onCloseMock.mock.calls[0][0].defaultPrevented).toBeFalsy();
      });
    });

    describe('Prevent Default', () => {
      it('should prevent default when clicking in header parts', async () => {
        const eventListenerMock = jest.fn(event => event.persist());
        const dataHook = 'calendar-data-hook';
        // We use a label wrapper, since a label's default is to delegate the click on to it's target. Just to demonstrate that this is a use-case that needs to be prevented.
        const { driver } = render(
          <label onClick={eventListenerMock}>
            <Calendar
              dataHook={dataHook}
              onChange={() => {}}
              showYearDropdown
              showMonthDropdown
            />
          </label>,
          { dataHook },
        );

        await driver.clickOnPrevMonthButton();
        await driver.clickOnNextMonthButton();
        await driver.clickOnYearDropdown();
        await driver.clickOnMonthDropdown();

        expect(eventListenerMock).toHaveBeenCalledTimes(4);
        expect(eventListenerMock.mock.calls[0][0].defaultPrevented).toEqual(
          true,
        );
        expect(eventListenerMock.mock.calls[1][0].defaultPrevented).toEqual(
          true,
        );
        expect(eventListenerMock.mock.calls[2][0].defaultPrevented).toEqual(
          true,
        );
        expect(eventListenerMock.mock.calls[3][0].defaultPrevented).toEqual(
          true,
        );
      });
    });

    it('should call onMonthChange with the current month first day when changing the displayed month', async () => {
      const currentMonth = 2;
      const date = new Date(2021, currentMonth, 1);
      const expectedMonth = new Date(2021, currentMonth + 1, 1);
      const onMonthChange = jest.fn();
      const { driver } = render(
        <Calendar
          value={date}
          onMonthChange={onMonthChange}
          onChange={() => {}}
          selectionMode={'day'}
        />,
      );
      expect(onMonthChange).toHaveBeenCalledTimes(0);

      await driver.clickOnNextMonthButton();

      expect(onMonthChange).toHaveBeenCalledTimes(1);
      const onMonthChangeValue = onMonthChange.mock.calls[0][0];
      expect(onMonthChangeValue.toLocaleDateString()).toEqual(
        expectedMonth.toLocaleDateString(),
      );
    });

    describe('clicking on a day', () => {
      let onChange;

      beforeEach(() => {
        onChange = jest.fn();
      });

      describe("with selectionMode='day'", () => {
        it('should call onChange with the clicked day', async () => {
          const date = new Date(2018, 10, 5);
          const { driver } = render(
            <Calendar value={date} onChange={onChange} selectionMode={'day'} />,
          );

          expect(onChange).toHaveBeenCalledTimes(0);

          await driver.clickDay(new Date(2018, 10, 1));

          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].getDate()).toEqual(1);
        });

        it('should prevent event default', async () => {
          const dataHook = 'calendar-data-hook';
          const date = new Date(2018, 10, 5);
          const eventListenerMock = jest.fn();
          const { driver } = render(
            <div onClick={eventListenerMock}>
              <Calendar
                value={date}
                onChange={onChange}
                selectionMode={'day'}
                dataHook={dataHook}
              />
            </div>,
            { dataHook },
          );

          await driver.clickDay(new Date(2018, 10, 1));

          expect(eventListenerMock).toHaveBeenCalledTimes(1);
          expect(eventListenerMock.mock.calls[0][0].defaultPrevented).toEqual(
            true,
          );
        });

        it('should call `onClose` callback with event', async () => {
          const date = new Date(2018, 10, 5);
          const onCloseMock = jest.fn();
          const { driver } = render(
            <Calendar
              value={date}
              onChange={onChange}
              selectionMode={'day'}
              onClose={onCloseMock}
              shouldCloseOnSelect
            />,
          );

          await driver.clickDay(new Date(2018, 10, 1));

          expect(onCloseMock).toHaveBeenCalledTimes(1);
          expect(onCloseMock.mock.calls[0][0].type).toEqual('click');
        });
      });

      describe("with selectionMode='range'", () => {
        it('should call onChange({from: $clickedDay}) when value is undefined', async () => {
          const { driver } = render(
            <Calendar onChange={onChange} selectionMode={'range'} />,
          );

          await driver.clickOnNthDay(0);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(1);
        });

        it('should call onChange({from: $clickedDay}) when value is a Range', async () => {
          const { driver } = render(
            <Calendar
              value={{
                from: new Date(2018, 10, 5),
                to: new Date(2018, 10, 10),
              }}
              onChange={onChange}
              selectionMode={'range'}
            />,
          );

          await driver.clickOnNthDay(0);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(1);
        });

        it('should call onChange({from: $clickedDay}) when value is a single Date', async () => {
          const { driver } = render(
            <Calendar
              value={new Date(2018, 10, 5)}
              onChange={onChange}
              selectionMode={'range'}
            />,
          );

          await driver.clickOnNthDay(0);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(1);
        });

        it(`should call onChange({from: $from, to: $clickedDay}) when value has only 'from'`, async () => {
          const { driver } = render(
            <Calendar
              value={{ from: new Date(2018, 10, 1) }}
              onChange={onChange}
              selectionMode={'range'}
            />,
          );

          await driver.clickOnNthDay(2);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(1);
          expect(onChange.mock.calls[0][0].to.getDate()).toEqual(3);
        });

        it(`should call onChange({from: $clickedDay, to: $to}) when a day is clicked, given only 'to'`, async () => {
          const { driver } = render(
            <Calendar
              value={{ to: new Date(2018, 10, 3) }}
              onChange={onChange}
              selectionMode={'range'}
            />,
          );

          await driver.clickOnNthDay(0);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(1);
          expect(onChange.mock.calls[0][0].to.getDate()).toEqual(3);
        });
        it(`should call onChange({from: $clickedDay, to: $from}) if the clicked day is earlier than the provided 'from'`, async () => {
          const { driver } = render(
            <Calendar
              value={{ from: new Date(2018, 10, 10) }}
              onChange={onChange}
              selectionMode={'range'}
            />,
          );

          await driver.clickOnNthDay(0);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(1);
          expect(onChange.mock.calls[0][0].to.getDate()).toEqual(10);
        });

        it(`should call onChange({from: $clickedDay, to: $from}) when a day is clicked, given only 'from'`, async () => {
          const { driver } = render(
            <Calendar
              value={{ from: new Date(2018, 10, 10) }}
              onChange={onChange}
              selectionMode={'range'}
            />,
          );

          await driver.clickOnNthDay(2);
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange.mock.calls[0][0].from.getDate()).toEqual(3);
          expect(onChange.mock.calls[0][0].to.getDate()).toEqual(10);
        });

        it('should prevent event default', async () => {
          const dataHook = 'calendar-data-hook';
          const eventListenerMock = jest.fn();
          const { driver } = render(
            <div onClick={eventListenerMock}>
              <Calendar
                value={{ from: new Date(2018, 10, 10) }}
                onChange={onChange}
                selectionMode={'range'}
                dataHook={dataHook}
              />
            </div>,
            { dataHook },
          );

          await driver.clickOnNthDay(2);
          expect(eventListenerMock).toHaveBeenCalledTimes(1);
          expect(eventListenerMock.mock.calls[0][0].defaultPrevented).toEqual(
            true,
          );
        });

        it('should call `onClose` callback with event', async () => {
          const onCloseMock = jest.fn();
          const { driver } = render(
            <Calendar
              value={{ from: new Date(2018, 10, 10) }}
              onChange={onChange}
              selectionMode={'range'}
              onClose={onCloseMock}
              shouldCloseOnSelect
            />,
          );

          await driver.clickOnNthDay(2);
          expect(onCloseMock).toHaveBeenCalledTimes(1);
          expect(onCloseMock.mock.calls[0][0].type).toEqual('click');
        });
      });
    });

    describe('excludePastDates', () => {
      const defaultProps = {
        onChange: () => {},
      };

      it('past dates should not be active', async () => {
        const { driver } = render(
          <Calendar
            {...defaultProps}
            value={new Date(2020, 0, 17)}
            excludePastDates
          />,
        );
        expect(await driver.isDayActive(new Date(2020, 0, 7))).toBe(false);
      });

      it('other days should be active', async () => {
        const { driver } = render(
          <Calendar {...defaultProps} value={new Date()} excludePastDates />,
        );

        expect(await driver.isDayActive(new Date())).toBe(true);
      });

      it('when combined with filterDate prop disable more than one range of date', async () => {
        const today = new Date(2021, 2, 17);
        const yesterday = new Date(2021, 2, 16);
        const tomorrow = new Date(2021, 2, 18);
        const { driver } = render(
          <Calendar
            {...defaultProps}
            value={today}
            filterDate={date => date < new Date()}
            excludePastDates
          />,
        );

        expect(await driver.isDayActive(yesterday)).toBe(false);
        expect(await driver.isDayActive(tomorrow)).toBe(false);
      });
    });

    describe('Auto Focus', () => {
      const defaultProps = {
        onChange: () => {},
      };
      it('should autoFocus on selected Day by default', async () => {
        const { driver } = render(
          <Calendar {...defaultProps} value={new Date(2018, 10, 10)} />,
        );
        expect(await driver.getFocusedDay()).toBe('10');
      });

      it('should NOT autoFocus on selected Day when autoFocus prop is false', async () => {
        const { driver } = render(
          <Calendar
            {...defaultProps}
            value={new Date(2018, 10, 10)}
            autoFocus={false}
          />,
        );
        expect(await driver.getFocusedDay()).toBe(null);
      });

      it('should autoFocus on selected Day when rerendering with autoFocus=true', async () => {
        const { driver, rerender } = render(
          <Calendar
            {...defaultProps}
            value={new Date(2018, 10, 10)}
            autoFocus={false}
          />,
        );
        expect(await driver.getFocusedDay()).toBe(null);

        rerender(
          <Calendar
            {...defaultProps}
            value={new Date(2018, 10, 10)}
            autoFocus
          />,
        );

        expect(await driver.getFocusedDay()).toBe('10');
      });

      it('should NOT autoFocus on selected Day when rerendering without changing the autoFocus', async () => {
        const { driver, rerender } = render(
          <Calendar
            {...defaultProps}
            value={new Date(2018, 10, 10)}
            autoFocus
          />,
        );
        expect(await driver.getFocusedDay()).toBe('10');

        rerender(
          <Calendar
            {...defaultProps}
            value={new Date(2018, 10, 9)}
            autoFocus
          />,
        );

        expect(await driver.getFocusedDay()).toBe('10');
      });
    });

    describe(`'value' update`, () => {
      describe(`'month' state`, () => {
        async function testCase({
          initialValue,
          nextValue,
          expectedInitialMonth,
          expectedMonth,
          numOfMonths = 1,
        }) {
          const props = {
            onChange: () => {},
            numOfMonths: numOfMonths,
          };
          const { driver, rerender } = render(
            <Calendar {...props} value={initialValue} />,
          );
          expect(await driver.getMonthCaption()).toEqual(
            monthNames[expectedInitialMonth],
          );
          rerender(<Calendar {...props} value={nextValue} />);
          expect(await driver.getMonthCaption()).toEqual(
            monthNames[expectedMonth],
          );
        }

        describe('one month', () => {
          it('should not change when nextValue is empty', async () => {
            await testCase({
              initialValue: new Date(2018, NOVEMBER, 1),
              expectedInitialMonth: NOVEMBER,
              nextValue: {},
              expectedMonth: NOVEMBER,
            });
          });

          describe('single day', () => {
            it('should not change the displayed month, provided that current month contains the new Date', async () => {
              await testCase({
                initialValue: new Date(2018, OCTOBER, 1),
                expectedInitialMonth: OCTOBER,
                nextValue: new Date(2018, OCTOBER, 2),
                expectedMonth: OCTOBER,
              });
            });

            it('should change the displayed month, provided that the current month is earlier than the new Date', async () => {
              await testCase({
                initialValue: new Date(2018, OCTOBER, 1),
                expectedInitialMonth: OCTOBER,
                nextValue: new Date(2018, NOVEMBER, 1),
                expectedMonth: NOVEMBER,
              });
            });

            it('should change the displayed month, provided that the current month is later than the new Date', async () => {
              await testCase({
                initialValue: new Date(2018, OCTOBER, 1),
                expectedInitialMonth: OCTOBER,
                nextValue: new Date(2018, SEPTEMBER, 1),
                expectedMonth: SEPTEMBER,
              });
            });
          });

          describe('range', () => {
            it('should not change the displayed month, provided that the current month is contained in the new Range', async () => {
              await testCase({
                initialValue: new Date(2018, OCTOBER, 1),
                expectedInitialMonth: OCTOBER,
                nextValue: {
                  from: new Date(2018, SEPTEMBER, 1),
                  to: new Date(2018, NOVEMBER, 1),
                },
                expectedMonth: SEPTEMBER,
              });
            });

            it('should move the displayed month forward, provided that the current month is earlier than the new Range', async () => {
              await testCase({
                initialValue: new Date(2018, SEPTEMBER, 1),
                expectedInitialMonth: SEPTEMBER,
                nextValue: {
                  from: new Date(2018, OCTOBER, 1),
                  to: new Date(2018, NOVEMBER, 1),
                },
                expectedMonth: OCTOBER,
              });
            });

            it('should move the displayed month forward, provided that the current month is earlier than the new unbounded Range', async () => {
              await testCase({
                initialValue: new Date(2018, SEPTEMBER, 1),
                expectedInitialMonth: SEPTEMBER,
                nextValue: {
                  from: new Date(2018, OCTOBER, 1),
                },
                expectedMonth: OCTOBER,
              });
            });

            it('should move the displayed month back, provided that the current month is later than the new Range', async () => {
              await testCase({
                initialValue: new Date(2018, NOVEMBER, 1),
                expectedInitialMonth: NOVEMBER,
                nextValue: {
                  from: new Date(2018, SEPTEMBER, 1),
                  to: new Date(2018, OCTOBER, 1),
                },
                expectedMonth: OCTOBER,
              });
            });

            it('should move the displayed month back, provided that the current month is later than the new unbounded Range', async () => {
              await testCase({
                initialValue: new Date(2018, NOVEMBER, 1),
                expectedInitialMonth: NOVEMBER,
                nextValue: {
                  to: new Date(2018, OCTOBER, 1),
                },
                expectedMonth: OCTOBER,
              });
            });
          });
        });

        describe('two month', () => {
          describe('single day', () => {
            it('should not change the displayed month, when new day is 2nd month', async () => {
              await testCase({
                initialValue: new Date(2018, OCTOBER, 1),
                expectedInitialMonth: OCTOBER,
                nextValue: new Date(2018, NOVEMBER, 2),
                expectedMonth: OCTOBER,
                numOfMonths: 2,
              });
            });
          });

          describe('range', () => {
            it(`should not change the displayed month, when new 'from' is in 2nd month`, async () => {
              await testCase({
                initialValue: new Date(2018, OCTOBER, 1),
                expectedInitialMonth: OCTOBER,
                nextValue: { from: new Date(2018, NOVEMBER, 2) },
                expectedMonth: OCTOBER,
                numOfMonths: 2,
              });
            });

            it(`should change the displayed month to new range 'from', when new 'to' is before calendar view and the new range fits in view`, async () => {
              await testCase({
                initialValue: new Date(2018, NOVEMBER, 1),
                expectedInitialMonth: NOVEMBER,
                nextValue: {
                  from: new Date(2018, SEPTEMBER, 1),
                  to: new Date(2018, OCTOBER, 10),
                },
                expectedMonth: SEPTEMBER,
                numOfMonths: 2,
              });
            });

            it(`should change the displayed month so that new range 'to' is in the 2nd month, when new 'to' is before calendar view and the new range does not fit in view`, async () => {
              await testCase({
                initialValue: new Date(2018, NOVEMBER, 1),
                expectedInitialMonth: NOVEMBER,
                nextValue: {
                  from: new Date(2018, AUGUST, 1),
                  to: new Date(2018, OCTOBER, 20),
                },
                expectedMonth: SEPTEMBER,
                numOfMonths: 2,
              });
            });

            it(`should change the displayed month to the 'from', when new range contains the view`, async () => {
              await testCase({
                initialValue: new Date(2018, NOVEMBER, 1),
                expectedInitialMonth: NOVEMBER,
                nextValue: {
                  from: new Date(2018, AUGUST, 1),
                  to: new Date(2018, OCTOBER, 20),
                },
                expectedMonth: SEPTEMBER,
                numOfMonths: 2,
              });
            });
          });
        });
      });
    });

    describe('firstDayOfWeek', () => {
      it('should show correct first day of the week', async () => {
        const { driver } = render(
          <Calendar value={{}} onChange={() => {}} firstDayOfWeek={0} />,
        );

        expect(await driver.getNthWeekDayName(0)).toEqual('Su');
      });

      it('should set sunday as first day of the week for vi locale', async () => {
        const { driver } = render(
          <Calendar value={{}} onChange={() => {}} locale="vi" />,
        );

        expect(await driver.getNthWeekDayName(0)).toEqual('CN');
      });
    });

    describe('formatWeekdayShort', () => {
      it('should set iiiiii as short weekday format by default', async () => {
        const { driver } = render(
          <Calendar value={{}} onChange={() => {}} locale="lt" />,
        );

        expect(await driver.getNthWeekDayName(0)).toEqual('Pr');
      });

      it('should set iiiii as short weekday format for vi locale', async () => {
        const { driver } = render(
          <Calendar value={{}} onChange={() => {}} locale="vi" />,
        );

        expect(await driver.getNthWeekDayName(1)).toEqual('T2');
      });
    });

    describe('Month & Year dropdowns', () => {
      it('Should select a month & year', async () => {
        const { driver } = render(
          <Calendar
            value="01.01.01"
            onChange={() => {}}
            showYearDropdown
            showMonthDropdown
          />,
        );

        const monthDropdownDriver = await driver.getMonthDropdownDriver();
        const yearDropdownDriver = await driver.getYearDropdownDriver();

        expect(await driver.getMonthDropdownLabel()).toBe('January');
        await monthDropdownDriver.clickAtOptionWithValue('June');
        expect(await driver.getMonthDropdownLabel()).toBe('June');

        expect(await driver.getSelectedYear()).toBe('2001');
        await yearDropdownDriver.clickAtOptionWithValue('2020');
        expect(await driver.getSelectedYear()).toBe('2020');
      });
    });
  }
});
