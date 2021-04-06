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

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import StarsRatingBar from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: StarsRatingBar,
  componentPath: '..',

  componentProps: {
    readOnly: false,
    value: 0,
    onChange: () => {},
  },

  exampleProps: {
    descriptionValues: [
      {
        label: 'With description values',
        value: ['Very bad', 'Bad', 'Ok', 'Good', 'Very good'],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${StarsRatingBar.displayName}/`,
      component: <StarsRatingBar value={3} />,
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
              'Stars rating bar has 2 modes: readOnly and interactive. This is an example for the readOnly mode.',
            source: examples.readOnlyExample,
          }),

          example({
            title: 'Sizes for interactive mode',
            text:
              'Stars rating bar has 2 modes: readOnly and interactive. This is an example for the interactive mode. The only size for this mode is large (default).',
            source: examples.interactiveModeSizesExample,
          }),

          example({
            title: 'Sizes for read only mode',
            text: 'There are 4 sizes: tiny, small , medium (default) and large',
            source: examples.readOnlyModeSizesExample,
          }),

          example({
            title: 'With rate captions',
            text:
              "Stars rating bar can show a rating caption which represent the rate's value label. Supported only in the interactive mode.",
            source: examples.rateCaptionsExample,
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
