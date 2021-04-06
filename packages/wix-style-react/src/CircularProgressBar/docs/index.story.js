import CircularProgressBar from '..';
import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CircularProgressBar,
  componentPath: '..',

  componentProps: {
    errorMessage: 'some error message',
    value: 20,
    size: 'medium',
    light: false,
    error: false,
    errorLabel: '',
    showProgressIndication: false,
    label: undefined,
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/LinearProgressBar/',
      component: (
        <div style={{ width: '50%' }}>
          <CircularProgressBar size="large" value={45} />
          <CircularProgressBar size="medium" value={45} />
          <CircularProgressBar size="small" value={45} />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Component for indicating a progress along a process.',
            }),
          ]),

          columns([
            importExample(
              "import { CircularProgressBar } from 'wix-style-react';",
            ),
          ]),

          divider(),

          title('Examples'),

          example({
            title: 'Sizes',
            description: 'Appear in all different sizes.',
            source: examples.sizes,
          }),

          example({
            title: 'Progress Indication',
            description: 'Displaying a progress indicator in percentage.',
            source: examples.progressIndication,
          }),

          example({
            title: 'Label',
            description: 'Displaying a textual label',
            source: examples.label,
          }),

          example({
            title: 'Themes',
            description: 'Appear in all different themes.',
            source: examples.themes,
          }),

          example({
            title: 'Error',
            description: 'Error state',
            source: examples.errors,
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
