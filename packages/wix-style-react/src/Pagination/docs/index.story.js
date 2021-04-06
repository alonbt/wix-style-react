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
  columns,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Pagination from '..';

import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Pagination,
  componentPath: '..',

  componentProps: {
    totalPages: 13,
    currentPage: 5,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Pagination/',
      component: <Pagination currentPage={8} totalPages={15} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Pagination component used for navigating between pages.',
            }),
          ]),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Short',
            description: 'The component fully displays up to 7 pages.',
            source: examples.short,
          }),

          example({
            title: 'Long',
            description:
              'The component with more than 7 pages hides the exceeded ones under the ellipsis.',
            source: examples.long,
          }),

          example({
            title: 'Interactive',
            description:
              'You can try and test yourself how the component behaves with each page selected.',
            source: examples.interactive,
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
