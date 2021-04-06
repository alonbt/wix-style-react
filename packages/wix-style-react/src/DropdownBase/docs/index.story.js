import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  example as baseExample,
  divider,
  title,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';

import DropdownBase from '..';
import TextButton from '../../TextButton';
import IconButton from '../../IconButton';
import Input from '../../Input';
import { Layout, Cell } from '../../Layout';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import Date from 'wix-ui-icons-common/Date';

import { placements } from '../../Popover';
import Button from '../../Button';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const options = [
  {
    label: '4 options',
    value: [
      { id: 0, value: 'First option' },
      { id: 1, value: 'Second option' },
      { id: 2, value: 'Third option' },
      { id: 3, value: 'Fourth option' },
    ],
  },
  {
    label: '10 options',
    value: Array(10)
      .fill()
      .map((v, i) => ({ id: i, value: `Option ${i}` })),
  },
];

const children = [
  {
    label: 'Regular React node',
    value: <Button>I am a plain Button that does nothing!</Button>,
  },
  {
    label: 'Render prop on click',
    value: ({ toggle, selectedOption = {} }) => (
      <Button onClick={toggle}>{selectedOption.value || 'Click me'}</Button>
    ),
  },
  {
    label: 'Render prop on hover',
    value: ({ open, close, selectedOption = {} }) => (
      <Button onMouseEnter={open} onMouseLeave={close}>
        {selectedOption.value || 'Hover me'}
      </Button>
    ),
  },
];

const openProps = [
  { label: 'false', value: false },
  { label: 'true', value: true },
];

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: DropdownBase,
  componentPath: '..',

  componentProps: {
    children: children[1].value,
    options: options[0].value,
    open: undefined,
    showArrow: false,
    placement: 'bottom',
  },

  exampleProps: {
    children,
    options,
    open: openProps,
    placement: placements,

    onSelect: selectedOption =>
      `I was called with: ${JSON.stringify(selectedOption)}`,
    onClickOutside: () => 'I was called!',
  },

  sections: [
    header({
      component: (
        <Layout alignItems="center">
          <Cell span={2}>
            <DropdownBase
              appendTo="window"
              dynamicWidth
              options={[
                { id: 0, value: 'First option' },
                { id: 1, value: 'Second option' },
                { id: 2, value: 'Third option' },
                { id: 3, value: 'Fourth option' },
                { id: 4, value: 'Fifth option' },
                { id: 5, value: 'Sixth option' },
              ]}
            >
              {({ toggle, selectedOption = {} }) => {
                return (
                  <TextButton
                    skin="dark"
                    suffixIcon={<ChevronDown />}
                    onClick={toggle}
                    dataHook={'drop-down-opener'}
                  >
                    {selectedOption.value || 'Select an option'}
                  </TextButton>
                );
              }}
            </DropdownBase>
          </Cell>
          <Cell span={1}>
            <DropdownBase
              appendTo="window"
              showArrow
              dynamicWidth
              options={[
                { id: 0, value: 'First option' },
                { id: 1, value: 'Second option' },
                { id: 2, value: 'Third option' },
                { id: 3, value: 'Fourth option' },
                { id: 4, value: 'Fifth option' },
                { id: 5, value: 'Sixth option' },
              ]}
            >
              {({ toggle }) => {
                return (
                  <IconButton onClick={toggle}>
                    <Date />
                  </IconButton>
                );
              }}
            </DropdownBase>
          </Cell>
          <Cell span={4}>
            <DropdownBase
              appendTo="window"
              dynamicWidth
              options={[
                { id: 0, value: 'First option' },
                { id: 1, value: 'Second option' },
                { id: 2, value: 'Third option' },
                { id: 3, value: 'Fourth option' },
                { id: 4, value: 'Fifth option' },
                { id: 5, value: 'Sixth option' },
              ]}
            >
              {({ toggle }) => {
                return (
                  <Input
                    menuArrow
                    dataHook={'drop-down-opener'}
                    placeholder="Type something"
                    onInputClicked={toggle}
                  />
                );
              }}
            </DropdownBase>
          </Cell>
        </Layout>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`
A common dropdown mechanism using the Popover component.

There is a common behaviour of "Dropdown-like" components in our library. They have a trigger
element, and a list of items that opens when the user interacts with that trigger element. The
\`<DropdownBase/>\` component is a higher-level component that encapsulates that logic, and allows
you to create "Dropdown-like" component with ease.

It uses the \`<DropdownLayout/>\` component to show the list of items, and the \`<Popover/>\`
component under the hood in order to position the list in the best way possible. It also manage
keyboard navigation out of the box.
`),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'TextButton (click)',
            text:
              'An example that shows how to use TextButton and its click events to control DropdownBase.',
            source: examples.uncontrolled,
          }),

          example({
            title: 'IconButton (hover)',
            text:
              'An example that shows how to use IconButton and its hover events to control DropdownBase.',
            source: examples.uncontrolledIcon,
          }),

          example({
            title: 'Button (hover)(controlled)',
            text:
              'An example that shows how to use controlled Button and its hover events to control DropdownBase.',
            source: examples.controlledButton,
          }),

          example({
            title: 'Input (click)(controlled)',
            text:
              'An example that shows how to use controlled Input and its click events to control DropdownBase.',
            source: examples.controlledInput,
          }),

          example({
            title: 'TextButton with Ellipsis',
            text:
              'An example that shows how to achieve ellipsis functionality using Text, TextButton and DropdownBase',
            source: examples.uncontrolledEllipsis,
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
