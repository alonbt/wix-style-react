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

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { ModalWrapper } from './modalWrapper';
import GenericModalLayout from '..';
import * as examples from './examples';

const exampleItems = [
  {
    label: 'Full height content',
    value: (
      <div style={{ backgroundColor: '#fbfba1', minHeight: '100%' }}>
        content
      </div>
    ),
  },
  {
    label: 'Content',
    value: <div style={{ backgroundColor: '#fbfba1' }}>content</div>,
  },
];

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: GenericModalLayout,
  componentPath: '..',
  componentWrapper: ({ component }) => <ModalWrapper>{component}</ModalWrapper>,

  componentProps: {
    header: 'header',
    content: exampleItems[0].value,
    footer: 'footer',
    fullscreen: true,
  },

  exampleProps: {
    content: exampleItems,
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            'GenericModalLayout provides a general structure of a modal. Use it to set up a custom design.',
          ),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            source: examples.simple,
          }),
          example({
            title: 'Fullscreen',
            source: examples.fullscreen,
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
