import React from 'react';
import LockLocked from 'wix-ui-icons-common/LockLocked';
import LockUnlocked from 'wix-ui-icons-common/LockUnlocked';
import {
  tab,
  description,
  importExample,
  example as baseExample,
  api,
  header,
  tabs,
  testkit,
  playground,
  divider,
  title,
} from 'wix-storybook-utils/Sections';
import { storySettings } from '../test/storySettings';
import SegmentedToggle from '..';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const exampleChildren = [
  {
    label: 'Button mode',
    value: [
      <SegmentedToggle.Button value="locked" prefixIcon={<LockLocked />}>
        Locked
      </SegmentedToggle.Button>,
      <SegmentedToggle.Button value="unlocked" prefixIcon={<LockUnlocked />}>
        Very long fancy and hardly fitting tab
      </SegmentedToggle.Button>,
    ],
  },
  {
    label: 'Icon mode',
    value: [
      <SegmentedToggle.Icon value="locked" tooltipText="Locked">
        <LockLocked />
      </SegmentedToggle.Icon>,
      <SegmentedToggle.Icon value="unlocked" tooltipText="Unlocked">
        <LockUnlocked />
      </SegmentedToggle.Icon>,
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SegmentedToggle,
  componentPath: '..',

  componentProps: {
    defaultSelected: 'locked',
    children: exampleChildren[0].value,
  },

  exampleProps: { children: exampleChildren },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `SegmentedToggle is a view group containing typically three or more buttons that can be toggled on and off. These buttons visibly change to indicate whether an option is active or inactive.`,
          ),
          importExample(),

          divider(),

          description({
            title: `Usage`,
            text: `Component includes compound components: Button and Icon. Make sure to pass prop "value" to compound components to enable selection control.`,
          }),

          title('Examples'),

          example({
            title: 'Text & Prefix',
            text:
              'Icon accompanied by text make information easier to find and scan.',
            source: examples.textAndIcon,
          }),
          example({
            title: 'Text',
            text: 'Simple usecase where prefix icon is not an option.',
            source: examples.text,
          }),
          example({
            title: 'Icon',
            text:
              'Icon only option is mostly used in narrow places. This option provides additional tooltip on hover in order to inform users on icons meaning.',
            source: examples.icon,
          }),
          example({
            title: 'Controlled mode',
            text: `Controlled mode can be enabled by passing 'selected' prop`,
            source: examples.controlled,
          }),
          example({
            title: 'Disabled',
            text: `All component children can be disabled by passing 'disabled' prop.`,
            source: examples.disabled,
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
