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

import { THEMES, ACTION_BUTTON_TYPES } from '../constants';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Notification from '..';
import Text from '../../Text';

import * as examples from './examples.js';
import CompoundComponentsRaw from '!raw-loader!./README.md';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const exampleChildren = [
  {
    label: 'Just text',
    value: <Notification.TextLabel>Notification text</Notification.TextLabel>,
  },

  {
    label: 'Text and action button',
    value: [
      <Notification.TextLabel>Notification text</Notification.TextLabel>,
      <Notification.ActionButton>Button</Notification.ActionButton>,
    ],
  },

  {
    label: 'Text and close button',
    value: [
      <Notification.TextLabel>Notification text</Notification.TextLabel>,
      <Notification.CloseButton />,
    ],
  },

  {
    label: 'Text and both buttons',
    value: [
      <Notification.TextLabel>Notification text</Notification.TextLabel>,
      <Notification.ActionButton>Button</Notification.ActionButton>,
      <Notification.CloseButton />,
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Notification,
  componentPath: '..',

  componentProps: {
    theme: 'standard',
    type: 'global',
    show: true,
    children: exampleChildren[0].value,
  },

  componentWrapper: ({ component }) => (
    <div>
      {component}
      <Text>
        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'.repeat(
          5,
        )}
      </Text>
    </div>
  ),

  exampleProps: {
    children: exampleChildren,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Notification.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'A sticky toast bar that appears on top of the screen notifying about system changes.',
          }),

          importExample("import { Notification } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          code({
            title: 'Themes',
            compact: true,
            subtitle: `There are 5 themes: \`${THEMES.standard}\` (default), \`${THEMES.error}\`, \`${THEMES.warning}\` \`${THEMES.success}\` and \`${THEMES.premium}\`.`,
            source: examples.themes,
          }),

          code({
            title: 'Actions',
            compact: true,
            subtitle: `There are 2 types of actions: \`${ACTION_BUTTON_TYPES.button}\` (default) and \`${ACTION_BUTTON_TYPES.textLink}\`.`,
            source: examples.actions,
          }),

          code({
            title: 'Label Text Ellipsis',
            compact: true,
            subtitle: `Component with long text shows ellipsis and full text appears on mouse hover. It can be toggled to display multiple lines instead.`,
            source: examples.ellipsis,
          }),

          code({
            title: 'Controlled Notification',
            compact: true,
            source: examples.controlled,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Compound Components API',

          sections: [
            description({
              title: 'Compound Components APIs',
              text: CompoundComponentsRaw,
            }),
          ],
        },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
