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

import TestimonialList from '..';
import Avatar from '../../Avatar';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TestimonialList,
  componentPath: '..',

  componentProps: {
    cols: 2,
  },

  exampleProps: {
    testimonials: [
      {
        label: 'add testimonials',
        value: [
          {
            avatar: <Avatar name="Guy in glasses" size="size60" />,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses',
          },
          {
            avatar: <Avatar name="Person with a hat" size="size60" />,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat',
          },
        ],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TestimonialList.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              "TestimonialList is a group of layouts that display avatar, description and name. It's used in a footer of a marketing page layout.",
          }),

          importExample("import { TestimonialList } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Component lists horizontally any number of testimonials. Each testimonial has text, author name and avatar. Avatar should be 60px size.',
            source: examples.basicExample,
          }),

          example({
            title: 'Columns',
            text:
              "Component can have any number of columns. Default is set to 3. If items don't fit in a row, they move to a new one.",
            source: examples.columnsExample,
          }),

          example({
            title: 'Customization',
            text:
              "The testimonial's props: avatar, text and author name are all optional. This is an example for testimonial list without avatars.",
            source: examples.withoutAvatarExample,
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
