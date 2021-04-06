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
import TimeInput from '..';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import LockLocked from 'wix-ui-icons-common/LockLocked';
import Input from '../../Input';
import * as examples from './examples';
import { Cell, Layout } from '../../Layout';

const example = config => baseExample({ components: allComponents, ...config });

const exampleStatus = [
  {
    label: 'Error',
    value: 'error',
  },
  {
    label: 'Warning',
    value: 'warning',
  },
  {
    label: 'Loading',
    value: 'loading',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TimeInput,
  componentPath: '..',

  exampleImport: `import { TimeInput } from 'wix-style-react';`,

  componentProps: {
    dashesWhenDisabled: false,
    disabled: false,
    disableAmPm: false,
    width: 'auto',
    showSeconds: true,
  },

  exampleProps: {
    onChange: moment => moment.format('h:mm a'),
    customSuffix: [
      { label: 'string', value: 'hello' },
      {
        label: 'node',
        value: (
          <Input.IconAffix>
            <LockLocked />
          </Input.IconAffix>
        ),
      },
    ],
    status: exampleStatus,
  },
  sections: [
    header(),
    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'An uncontrolled time input component with a stepper and am/pm support',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Standard',
            text: 'A simple use, `minutesStep` is 20 by default',
            source: examples.standard,
          }),
          example({
            title: 'Disabled',
            text: 'TimeInput supports `disabled` state',
            source: examples.disabled,
          }),
          example({
            title: 'With status',
            text: 'TimeInput supports `error`, `warning`, and `loading` status',
            source: examples.status,
          }),
          example({
            title: 'With suffix',
            text: 'TimeInput supports `customSuffix` to display before ticker',
            source: examples.customSuffix,
            components: { TimeInput, Input, LockLocked, Layout, Cell },
          }),
          example({
            title: '24h mode',
            text: 'TimeInput supports 24h mode',
            source: examples.disableAmPm,
          }),
          example({
            title: 'With seconds',
            text: 'TimeInput supports showing seconds',
            source: examples.showSeconds,
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
