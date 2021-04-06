import { Category } from '../../../stories/storiesHierarchy';

import Loader from '..';
import {
  api,
  example as baseExample,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import allComponents from '../../../stories/utils/allComponents';
import React from 'react';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: Category.COMPONENTS,
  storyName: 'Loader',

  component: Loader,
  componentPath: '..',

  componentProps: {
    status: 'loading',
    statusMessage: 'some message here',
    text: '',
    size: 'medium',
    color: 'blue',
  },

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <Loader />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`Provides a spinner to be used for async operations.`),

          importExample("import { Loader } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Size',
            text:
              'There are four possible sizes : `tiny`, `small`, `medium` (default) and `large`',
            source: examples.sizes,
          }),
          example({
            title: 'Status',
            text:
              'There are four statuses types: `loading` (default), `success` and `error`',
            source: examples.status,
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
