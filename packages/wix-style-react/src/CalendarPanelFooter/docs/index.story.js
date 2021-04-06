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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import { storySettings } from './storySettings';

import CalendarPanelFooter, { defaultDateToStringOptions } from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: CalendarPanelFooter,
  componentPath: '..',

  componentProps: {
    primaryActionDisabled: false,
    primaryActionOnClick: () => null,
    secondaryActionOnClick: () => null,
    dateToString: date =>
      date.toLocaleDateString('en-US', defaultDateToStringOptions),
    selectedDays: {
      from: new Date('2019-05-27T21:00:00.000Z'),
      to: new Date('2019-05-27T21:00:00.000Z'),
    },
    primaryActionLabel: 'submit',
    secondaryActionLabel: 'cancel',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CalendarPanelFooter.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A footer for the CalendarPanel component',
          }),

          importExample(
            "import { CalendarPanelFooter } from 'wix-style-react'",
          ),

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
