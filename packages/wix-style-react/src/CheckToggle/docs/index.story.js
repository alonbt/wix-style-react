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

import CheckToggle from '..';
import { commonTooltipPropsExample } from '../../../stories/utils/playgroundUtils';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CheckToggle,
  componentPath: '..',

  componentProps: (setState, getState) => ({
    checked: true,
    size: 'small',
    skin: 'standard',
    disabled: false,
    tooltipContent: 'Click Me!',
    onChange: () => setState({ checked: !getState().checked }),
  }),

  exampleProps: {
    tooltipProps: commonTooltipPropsExample,
    onChange: () => 'I was called',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CheckToggle.displayName}/`,
      component: <CheckToggle checked tooltipContent="Click Me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A component that permits the user to make a binary choice',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Skins',
            text:
              'Affects the color of the component, can be ether standard or success.',
            source: examples.skin,
          }),

          example({
            title: 'Sizes',
            text:
              'Affects the size of the component, can be ether small or medium.',
            source: examples.size,
          }),

          example({
            title: 'Tooltip',
            text: 'Will display tooltip on hover',
            source: examples.tooltip,
          }),

          example({
            title: 'Disabled',
            text: 'Applies disabled styles and prevent toggling the check',
            source: examples.disabled,
          }),

          example({
            title: 'Controlled',
            text:
              'When checked prop is provided, the component becomes controlled.',
            source: examples.controlled,
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
