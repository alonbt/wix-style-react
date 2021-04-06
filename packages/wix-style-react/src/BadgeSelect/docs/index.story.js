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
import { SKIN, TYPE, SIZE } from '../../Badge/constants';
import { commonPopoverPropsExample } from '../../../stories/utils/playgroundUtils';

import BadgeSelect from '..';

const example = config => baseExample({ components: allComponents, ...config });

const options = Object.values(SKIN).map((skin, id) => ({
  id: id.toString(),
  skin,
  text: skin,
}));

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: BadgeSelect,
  componentPath: '..',

  componentProps: {
    size: 'medium',
    type: 'solid',
    uppercase: true,
    options: options,
  },

  exampleProps: {
    options: [{ label: 'All badges', value: options }],
    type: Object.keys(TYPE),
    size: Object.keys(SIZE),
    popoverProps: commonPopoverPropsExample,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${BadgeSelect.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'The BadgeSelect component is used for selecting a badge from a list.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example',
            source: examples.basicExample,
          }),

          example({
            title: 'Controlled example',
            text:
              'This component can be used in controlled or uncontrolled modes. This ia an example of usage in controlled mode.',
            source: examples.controlledModeExample,
          }),

          example({
            title: 'Sizes',
            text:
              'The BadgeSelect component has two different sizes: "small" and "medium" (default). This size is used to define the `<Badge/>` size.',
            source: examples.sizesExample,
          }),

          example({
            title: 'Type',
            text:
              'The BadgeSelect has 3 different types: "solid" (default), "outlined", "transparent". This type is used to define the `<Badge/>` type.',
            source: examples.typeExample,
          }),
          example({
            title: 'Subtitle',
            text:
              'The BadgeSelect can display a subtitle per option. This is an example of options with subtitles.',
            source: examples.subtitle,
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
