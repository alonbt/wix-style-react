import React from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import Calendar from '..';
import { calendarUniDriverFactory } from '../Calendar.uni.driver.js';
import { REVERSE_MONTH_YEAR_LANGUAGES } from '../DatePickerHead/DatePickerHead';

const dataHook = 'calendar';
const calendarTestkitFactory = uniTestkitFactoryCreator(
  calendarUniDriverFactory,
);

const getDriver = () =>
  calendarTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class CalendarWrapper extends React.PureComponent {
  componentDidMount() {
    const { componentDidMount } = this.props;
    componentDidMount && componentDidMount();
  }

  render() {
    const { componentDidMount, ...props } = this.props;
    return (
      <Calendar dataHook={dataHook} onChange={() => undefined} {...props} />
    );
  }
}

const tests = [
  {
    describe: 'Calendar',
    its: [
      {
        it: 'should correctly render when selectedDays is a single date',
        props: {
          value: new Date('2017/05/01'),
        },
      },
      {
        it: 'should correctly render when selectedDays is a date range',
        props: {
          value: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/06'),
          },
        },
      },
      {
        it: 'should correctly render two months',
        props: {
          value: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/06'),
          },
          numOfMonths: 2,
        },
      },
      {
        it:
          'should correctly render when selectedDays is a date range with boundaries outside the current month',
        props: {
          value: {
            from: new Date('2017/04/01'),
            to: new Date('2017/07/01'),
          },
        },
        componentDidMount: async () => {
          await getDriver().clickOnNextMonthButton();
        },
      },
      {
        it:
          'should correctly render when selectedDays is an infinite date range starting in the current month',
        props: {
          value: {
            from: new Date('2017/05/02'),
          },
        },
      },
      {
        it: 'should correctly render when selectedDays is a range of one day',
        props: {
          value: {
            from: new Date('2017/05/02'),
            to: new Date('2017/05/02'),
          },
        },
      },
      {
        it: 'should correctly render when previous month button is clicked',
        props: {
          value: new Date('2017/06/05'),
        },
        componentDidMount: async () => {
          await getDriver().clickOnPrevMonthButton();
        },
      },
      {
        it: 'FilterDate - Prior for today dates (includes today)',
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/10'),
          filterDate: date => date <= new Date('2020/10/10'),
        },
      },
      {
        it: 'FilterDate - feature dates only (includes today)',
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/10'),
          filterDate: date => date >= new Date('2020/10/10'),
        },
      },
      {
        it: 'Months dropdown',
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/10'),
          showMonthDropdown: true,
        },
      },
      {
        it: 'Years dropdown',
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/10'),
          showYearDropdown: true,
        },
      },
      {
        it: 'Months and years dropdown',
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/10'),
          showMonthDropdown: true,
          showYearDropdown: true,
        },
      },
      ...REVERSE_MONTH_YEAR_LANGUAGES.map(locale => ({
        it: `Flips months and years dropdowns in ${locale}`,
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/10'),
          showMonthDropdown: true,
          showYearDropdown: true,
          locale: locale,
        },
      })),
      {
        it: 'Date Indication',
        props: {
          placeholderText: 'Select Date',
          value: new Date('2020/10/8'),
          showMonthDropdown: true,
          showYearDropdown: true,
          dateIndication: ({ date, isSelected }) =>
            date <= new Date('2020/10/10') ? (
              <div
                className="Indications"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  className="indication"
                  style={{
                    borderRadius: '50%',
                    width: '4px',
                    height: '4px',
                    backgroundColor: 'black',
                  }}
                />
              </div>
            ) : null,
        },
      },
      {
        it: 'Should indicate custom today',
        props: {
          value: new Date('2020/10/10'),
          today: new Date('2020/10/12'),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(describe, module).add(it, () => (
      <CalendarWrapper {...props} componentDidMount={componentDidMount} />
    ));
  });
});
