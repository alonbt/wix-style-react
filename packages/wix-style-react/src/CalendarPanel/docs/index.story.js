import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import { addDays, addMonths, startOfMonth, endOfMonth } from 'date-fns';
import { storySettings } from './storySettings';
import CalendarPanelFooter, {
  defaultDateToStringOptions,
} from '../../CalendarPanelFooter';

import CalendarPanel from '..';

import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

// We don't actually show today because tests are done on the auto-example and we want them to be consistent.
const TODAY = new Date(2018, 0, 10);

const dayPresets = [
  { id: 1, value: 'Today', selectedDays: TODAY },
  { id: 2, value: 'Yesterday', selectedDays: addDays(TODAY, -1) },
  { id: 3, value: 'Silvester', selectedDays: new Date(2018, 11, 31) },
];

const rangePresets = [
  {
    id: 1,
    value: 'Next 7 Days',
    selectedDays: { from: TODAY, to: addDays(TODAY, 6) },
  },
  {
    id: 2,
    value: 'Last 7 Days',
    selectedDays: { from: addDays(TODAY, -6), to: TODAY },
  },
  {
    id: 3,
    value: 'Full Month',
    selectedDays: { from: startOfMonth(TODAY), to: endOfMonth(TODAY) },
  },
  {
    id: 4,
    value: '2 Full Month',
    selectedDays: {
      from: startOfMonth(TODAY),
      to: endOfMonth(addMonths(TODAY, 1)),
    },
  },
  {
    id: 5,
    value: 'Partial Month',
    selectedDays: { from: TODAY, to: addMonths(TODAY, 1) },
  },
  {
    id: 6,
    value: 'Month In Past',
    selectedDays: {
      from: startOfMonth(addMonths(TODAY, -3)),
      to: endOfMonth(addMonths(TODAY, -3)),
    },
  },
  ...[1, 2, 3, 4, 5, 6, 8, 9].map(offset => ({
    id: 6 + offset,
    value: `Next ${offset} days`,
    selectedDays: { from: TODAY, to: addDays(TODAY, offset - 1) },
  })),
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CalendarPanel,
  componentPath: '..',

  componentProps: setState => ({
    onChange: value => setState({ value }),
    selectionMode: 'day',
    presets: rangePresets,
    value: rangePresets[0].selectedDays,
    footer: ({ selectedDays, submitDisabled }) => (
      <CalendarPanelFooter
        primaryActionLabel="Submit"
        primaryActionOnClick={() => alert('Submit clicked')}
        primaryActionDisabled={submitDisabled}
        secondaryActionLabel="Cancel"
        secondaryActionOnClick={() => alert('Cancel clicked')}
        selectedDays={selectedDays}
        dateToString={date =>
          date.toLocaleDateString('en-US', defaultDateToStringOptions)
        }
      />
    ),
  }),

  exampleProps: {
    presets: [
      {
        label: 'Day Presets',
        value: dayPresets,
      },
      {
        label: 'Range Presets',
        value: rangePresets,
      },
    ],
    locale: [
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
      'uk',
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CalendarPanel.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'CalendarPanel extends a double Calendar with presets and a footer.',
          }),

          importExample("import { CalendarPanel } from 'wix-style-react'"),

          divider(),

          title('Examples'),

          example({
            title: 'Standard',
            source: examples.standard,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
