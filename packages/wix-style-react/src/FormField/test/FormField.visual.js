import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from '../FormField';
import Input from '../../Input';
import InputArea from '../../InputArea';
import ToggleSwitch from '../../ToggleSwitch';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const testGroups = [
  {
    describe: 'Label',
    tests: [
      {
        describe: 'Long label',
        labelPlacements: ['top'],
        its: [
          {
            label:
              'a long label that should use ellipsis, you can see the whole sentence in the tooltip',
            children: [<Input />],
          },
        ],
      },
      {
        describe: 'Label sizes',
        labelPlacements: ['top', 'right', 'left'],
        its: [
          {
            label: 'I am a medium label',
            labelSize: 'medium',
            children: [<Input />],
          },
          {
            label: 'I am a small label',
            labelSize: 'small',
            children: [<Input />],
          },
        ],
      },
    ],
  },
  {
    describe: 'Info',
    tests: [
      {
        describe: 'Info should be rendered',
        its: [
          {
            infoContent: 'hi',
            children: [<Input />],
          },
        ],
      },
    ],
  },
  {
    describe: 'Required',
    tests: [
      {
        describe: 'The field should be required',
        its: [
          {
            required: true,
            children: [<Input />],
          },
        ],
      },
    ],
  },
  {
    describe: 'Children',
    tests: [
      {
        describe: 'Should render children',
        labelPlacements: ['top', 'right', 'left'],
        its: [
          {
            label: 'I have an Input',
            children: [<Input />],
            stretchContent: false,
          },
          {
            label: 'I have a ToggleSwitch',
            children: [<ToggleSwitch size={'small'} />],
            stretchContent: false,
          },
        ],
      },
      {
        describe: 'Should render children with stretch',
        labelPlacements: ['top', 'right', 'left'],
        its: [
          {
            label: 'I have an Input',
            children: [<Input />],
          },
          {
            label: 'I have a ToggleSwitch',
            children: [<ToggleSwitch size={'small'} />],
          },
        ],
      },
    ],
  },
  {
    describe: 'Character Count',
    tests: [
      {
        describe: 'Should render',
        labelPlacements: ['top', 'right', 'left'],
        its: [
          {
            label: 'Positive',
            children: [<Input />],
            charCount: 5,
          },
          {
            label: 'Negative',
            children: [<Input />],
            charCount: -5,
          },
        ],
      },
    ],
  },
  {
    describe: 'Suffix',
    tests: [
      {
        describe: 'Should render',
        labelPlacements: ['top', 'left'],
        its: [
          {
            label: 'Label',
            children: [<Input />],
            suffix: <div>Some suffix</div>,
          },
        ],
      },
    ],
  },
  {
    describe: 'Label Alignment',
    tests: [
      {
        describe: 'should render',
        labelPlacements: ['top', 'right', 'left'],
        its: [
          {
            label: 'Middle',
            labelAlignment: 'middle',
            children: [<InputArea />],
          },
          {
            label: 'Top',
            labelAlignment: 'top',
            children: [<InputArea />],
          },
        ],
      },
    ],
  },
  {
    describe: 'Label Placement',
    tests: [
      {
        describe: 'should render',
        labelPlacements: ['top', 'right', 'left'],
        its: [
          {
            label: 'Label',
            children: [<Input />],
          },
          {
            label:
              'A long label should not be wrapped when placement is left/right',
            children: [<Input />],
          },
        ],
      },
    ],
  },
];

testGroups.forEach(group => {
  group.tests.forEach(test => {
    storiesOf(`FormField/${group.describe}`, module).add(test.describe, () => (
      <div style={{ width: 500, padding: 50 }}>
        {test.its.map(props =>
          (test.labelPlacements || ['top']).map(labelPlacement => (
            <div style={{ padding: 15 }}>
              <FormField labelPlacement={labelPlacement} {...props} />
            </div>
          )),
        )}
      </div>
    ));
  });
});

testGroups.forEach(group =>
  group.tests.forEach(test => {
    storiesOf(`Layout And Spacing| FormField/${group.describe}`, module).add(
      test.describe,
      () => (
        <WixStyleReactProvider
          features={{ reducedSpacingAndImprovedLayout: true }}
        >
          <div style={{ width: 500, padding: 50 }}>
            {test.its.map(props =>
              (test.labelPlacements || ['top']).map(labelPlacement => (
                <div style={{ padding: 15 }}>
                  <FormField labelPlacement={labelPlacement} {...props} />
                </div>
              )),
            )}
          </div>
        </WixStyleReactProvider>
      ),
    );
  }),
);
