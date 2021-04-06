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

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import FacesRatingBar from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FacesRatingBar,
  componentPath: '..',

  componentProps: {
    readOnly: false,
    value: 3,
    onChange: () => {},
  },

  exampleProps: {
    value: [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
      {
        label: '3',
        value: 3,
      },
      {
        label: '4',
        value: 4,
      },
      {
        label: '5',
        value: 5,
      },
    ],
    descriptionValues: [
      {
        label: 'With description values',
        value: [
          'Strong Negative',
          'Negative',
          'Neutral',
          'Positive',
          'Strong Positive',
        ],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${FacesRatingBar.displayName}/`,
      component: <FacesRatingBar value={3} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component let the users the ability to share their opinion about any requested subject on a 1-5 scale.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple examples',
            source: examples.basicExample,
          }),

          example({
            title: 'readOnly',
            text:
              'Faces rating bar has 2 modes: readOnly and interactive. This is an example for the readOnly mode.',
            source: examples.readOnlyExample,
          }),

          example({
            title: 'With description values',
            text:
              "Faces rating bar can show description values which are tooltips that represent the rate's values. Supported only in the interactive mode.",
            source: examples.descriptionValuesExample,
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
