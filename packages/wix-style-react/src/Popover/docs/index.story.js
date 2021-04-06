import React from 'react';
import {
  header,
  tabs,
  tab,
  title,
  description,
  importExample,
  divider,
  code as baseCode,
  example as baseExample,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';

import Popover, { placements } from '..';
import Button from '../../Button';
import Dropdown from '../../Dropdown';
import Calendar from '../../Calendar';
import FormField from '../../FormField';
import Box from '../../Box';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });
const code = config =>
  baseCode({
    components: allComponents,
    compact: true,
    ...config,
  });

const children = [
  {
    label: 'Content without padding',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">Content without padding</Popover.Content>,
    ],
  },
  {
    label: 'Content with padding',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">
        <Box padding="12px 24px">Content with padding</Box>
      </Popover.Content>,
    ],
  },
  {
    label: 'A button',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">
        <Box padding="12px 24px">
          <Button>I am a useless button!</Button>
        </Box>
      </Popover.Content>,
    ],
  },
  {
    label: 'A Dropdown',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">
        <Box padding="12px 24px">
          <FormField label="This is the FormField label">
            <Dropdown
              options={[
                { id: 0, value: 'Option 1' },
                { id: 1, value: 'Option 2' },
                { value: '-' },
                { id: 2, value: 'Option 3' },
                { id: 3, value: 'Option 4' },
              ]}
              placeholder="This is a placeholder"
            />
          </FormField>
        </Box>
      </Popover.Content>,
    ],
  },
  {
    label: 'A Calendar',
    value: [
      <Popover.Element key="1">This is the Popover.Element</Popover.Element>,
      <Popover.Content key="2">
        <Box padding="12px 24px">
          <Calendar onChange={() => {}} autoFocusSelectedDay />
        </Box>
      </Popover.Content>,
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Popover,
  componentPath: '..',

  componentProps: (setProps, getProps) => ({
    children: children[1].value,
    showArrow: true,
    animate: true,
    shown: false,
    flip: true,
    placement: 'top',
    appendTo: 'window',

    onClick: () => setProps({ shown: !getProps().shown }),
  }),

  exampleProps: {
    children,
    appendTo: [
      { label: 'window', value: window },
      { label: 'scrollParent', value: 'scrollParent' },
      { label: 'viewport', value: 'viewport' },
      { label: 'parent', value: 'parent' },
      { label: 'null', value: null },
    ],
    hideDelay: null,
    showDelay: null,
    placement: placements,
    onClickOutside: () => 'I was called!',
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`
Popover is a structural component used for showing and positioning pop-ups and tooltips over a given element.\n
It uses Popper.js as engine. <a href="https://popper.js.org/">popper.js.org</a>
          `),

          importExample(),

          divider(),

          title('Examples'),

          title('appendTo prop'),
          example({
            title: '`appendTo="window"`',
            text:
              "If you inspect the content, you'll see it is attached to a new `<div/>` under the body.",
            source: examples.appendToWindow,
          }),
          example({
            title: '`appendTo="viewport"`',
            text: `
            This is similar to \`window\` as it also appends the content to a new \`<div/>\` under the body, but also set its boundary to the viewport.
            _The Popover in the example is not shown by default._ To see the effect, toggle the popover shown and to scroll out of the Popover's viewport.`,
            source: examples.appendToViewport,
          }),
          example({
            title: '`appendTo="parent"`',
            text: `If you inspect the content, you'll see it is attached to a new div next to the target element (the Button).`,
            source: examples.appendToParent,
          }),
          example({
            title: '`appendTo="scrollParent"`',
            text: `If you inspect the content, you'll see it is attached to a new div under the list container.`,
            source: examples.appendToScrollParent,
            autoRender: false,
          }),

          title({ title: 'Positioning' }),
          code({
            source: examples.positioning,
            autoRender: false,
          }),

          title({ title: 'Interactive' }),
          description({
            text: `
            A Popover can be interactive when setting \`appendTo="parent"\` or a \`hideDelay\`. This means the
            event handlers set directly on the \`<Popover/>\` component will be triggered on both the
            \`<Popover.Element/>\` and \`<Popover.Content/>\``,
          }),
          description({
            title: 'Using click handlers',
            text: `
            The following example uses the \`onClick\` and the \`onClickOutside\` handlers
            to toggle the Popover. Notice that in the non-interactive example, when clicking
            the \`<Popover.Content/>\`, the \`onClickOutside\` event fires.`,
          }),
          example({
            title: 'Interactive with appendTo="parent"',
            source: examples.interactiveClickable,
          }),
          example({
            title: 'Non-Interactive with appendTo="window"',
            source: examples.nonInteractiveClickable,
          }),

          description({
            title: 'Using mouse events',
            text: `
            A similar approach can be used with mouse events handlers (\`onMouseEnter\`,
            \`onMouseLeave\`). Notice that in the non-interactive example, the
            \`onMouseLeave\` event fires when entering the \`<Popover.Content/>\`.
            `,
          }),
          example({
            title: 'Interactive with `appendTo="parent"`',
            source: examples.interactiveHoverable,
          }),
          example({
            title: 'Interactive with `hideDelay={150}`',
            source: examples.interactiveHoverableHideDelay,
          }),
          example({
            title: 'Non-Interactive with `appendTo="window"`',
            source: examples.nonInteractiveHoverable,
          }),

          title({ title: 'Flip behaviour' }),
          description({
            title: 'Using mouse events',
            text: `
            The \`<Popover/>\` uses the \`flip\` behaviour by default. This behaviour used to flip the
            \`<Popover/>\`'s placement when it starts to overlap the target element (\`<Popover.Element/>\`).
            `,
          }),
          example({
            title: 'Flip enabled and `placement="right"`',
            source: examples.flipEnabled,
          }),
          example({
            title: 'Flip disabled and `placement="right"`',
            source: examples.flipDisabled,
          }),

          title({ title: 'Fixed behaviour' }),
          description({
            title: 'Using mouse events',
            text: `
            You can set the \`fixed\` behaviour for the \`<Popover/>\` component (which is **disabled** by
            default).
            This behaviour used to keep the \`<Popover/>\` in it's original placement. By default this behaviour
            is disabled, and the \`<Popover/>\` will change it's position when it'll being positioned outside
            the boundary (the boundary is the value of the \`appendTo\` prop).
            `,
          }),
          example({
            title: 'Fixed disabled (default) and `placement="top"`',
            source: examples.fixedDisabled,
            autoRender: false,
          }),
          example({
            title: 'Fixed enabled and `placement="top"`',
            source: examples.fixedEnabled,
            autoRender: false,
          }),
          example({
            title: 'Fixed disabled and `placement="top"` and `flip={false}`',
            source: examples.fixedDisabledFlipFalse,
            autoRender: false,
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
