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

import BounceAnimation from '..';
import FormField from '../../FormField';
import Input from '../../Input';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const exampleChildren = [
  {
    label: 'Small child node',
    value: (
      <div style={{ width: '300px' }}>
        <FormField labelPlacement="left" label="Small">
          <Input placeholder="I scale to 1.03" />
        </FormField>
      </div>
    ),
  },
  {
    label: 'Medium child node',
    value: (
      <div style={{ width: '400px' }}>
        <FormField labelPlacement="left" label="Medium">
          <Input placeholder="I scale to 1.07" />
        </FormField>
      </div>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: BounceAnimation,
  componentPath: '..',

  componentProps: { children: exampleChildren[0].value },

  exampleProps: { children: exampleChildren },

  sections: [
    header({
      component: <BounceAnimation children={<div />} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              '`<BounceAnimation/>` component is a wrapper that contains predefined bounce animation. It is used to emphasize UI elements with bounce motion.',
          }),

          importExample("import { BounceAnimation } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Controlled example',
            text: 'A simple example of usage of `<BounceAnimation/>`.',
            source: examples.controlledExample,
          }),

          example({
            title: '"onEnd" example',
            text:
              'The callback is executed when the transition ends. This allows triggering actions after component finished playing its animation.',
            source: examples.onEndExample,
          }),

          example({
            title: 'Loop example',
            text:
              'When `loop` prop is true, the child component bounces repetitively until stopped by other event.',
            source: examples.loopExample,
          }),

          example({
            title: 'Delay example',
            text:
              'The `delay` prop is  used to set a delay before the animation execution.',
            source: examples.delayExample,
          }),

          example({
            title: 'Size example',
            text:
              'The scale of the animation is set manually, according to the size of the object:\n' +
              'For a child component with a width between `198px` to `341px`, the scale is `1.07`.\n' +
              'For a child component with a width between `342px` to `534px`, the scale is `1.03`.',
            source: examples.childSizeExamples,
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
