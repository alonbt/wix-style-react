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

import PulseAnimation from '..';
import Button from '../../Button';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const exampleChildren = [
  {
    label: 'Button',
    value: <Button>Button</Button>,
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: PulseAnimation,
  componentPath: '..',

  componentProps: {
    children: exampleChildren[0].value,
    color: 'B10',
    borderRadius: '18px',
    active: true,
  },

  exampleProps: { children: exampleChildren },

  sections: [
    header({
      component: <PulseAnimation children={<div />} color="B10" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              '`<PulseAnimation/>` component is a wrapper that contains predefined pulse animation. It is used to emphasize UI elements with pulse motion.',
          }),

          importExample("import { PulseAnimation } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Default example',
            text: 'A simple example of usage of `<PulseAnimation/>`.',
            source: examples.defaultExample,
          }),

          example({
            title: 'Color example',
            text: 'The color prop is used to change the pulse color.',
            source: examples.colorExample,
          }),

          example({
            title: 'Delay example',
            text:
              'The delay prop is used to set a delay before the animation execution.',
            source: examples.delayExample,
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
