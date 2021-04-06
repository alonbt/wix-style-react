import React from 'react';
import {
  tab,
  api,
  playground,
  testkit,
  title,
  description,
  importExample,
  header,
  tabs,
  doDont,
  example as baseExample,
  divider,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import Box from '..';
import * as examples from './examples';
import allComponents from '../../../stories/utils/allComponents';

const childrenExamples = [
  {
    label: 'Text',
    value: <span>Here is a simple text</span>,
  },
  {
    label: 'Multiple direct children',
    value: [
      <Box
        align="center"
        verticalAlign="middle"
        margin={1}
        width={80}
        height={80}
        color="D70"
        backgroundColor="B10"
        borderRadius={3}
        key={1}
      >
        Blue
      </Box>,
      <Box
        align="center"
        verticalAlign="middle"
        margin={1}
        width={80}
        height={80}
        color="D70"
        backgroundColor="R10"
        borderRadius={3}
        key={2}
      >
        Red
      </Box>,
      <Box
        align="center"
        verticalAlign="middle"
        margin={1}
        width={80}
        height={80}
        color="D70"
        backgroundColor="G10"
        borderRadius={3}
        key={3}
      >
        Green
      </Box>,
    ],
  },
];

const example = config =>
  baseExample({ components: allComponents, compact: true, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Box,
  componentPath: '..',

  componentProps: () => ({
    children: childrenExamples[0].value,
    inline: false,
    direction: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
    padding: 1,
    minHeight: 200,
    color: 'P00',
    backgroundColor: 'B50',
  }),

  exampleProps: {
    children: childrenExamples,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: 'https://github.com/wix/wix-style-react/tree/master/src/Box/',
    }),

    tabs([
      tab({
        title: 'Design',
        sections: [
          description({
            title: 'Usage',
            text: 'Box allows to layout, align, space and style its children elements. It’s a container that can wrap and apply CSS styles to one or more elements inside of it.',
          }),

          doDont({
            do: {
              list: [
                'To arrange elements in vertical or horizontal direction.',
                'To apply custom spacing and styles.',
                'To build custom widgets',
              ],
            },
            dont: {
              list: [
                'To build page layouts, instead use <Page/> component.',
                'To structure content inside of a page, instead use a combination of <Layout/> and <Card/> components.',
              ],
            },
          }),

          importExample("import { Box } from 'wix-style-react';"),

          divider(),

          title('Variations'),

          example({
            title: 'Structure',
            text: `Render any kind of content inside of Box.
              It must receive at least one element, but can wrap multiple children as well.`,
            source: examples.structure,
          }),

          example({
            title: 'Dimensions',
            text: `Control component size by setting its \`width\` and \`height\` pixels or percentage.
              Box container size will equal the size of content added inside of it if these values are not specified.`,
            source: examples.dimensions,
          }),

          example({
            title: 'Direction',
            text: `Control direction in which children elements will be listed inside of a box. It supports 2 values:<br/>
              &emsp;- \`horizontal\` - use to list items in a single row<br/>
              &emsp;- \`vertical\` - use to list items in a single column. Note that this layout will automatically extend each item to a full width.`,
            source: examples.direction,
          }),

          example({
            title: 'Gap',
            text: `Control space between elements inside of a box. Prop accept WSR spacing tokens and value in pixels.`,
            source: examples.gap,
          }),

          example({
            title: 'Horizontal Alignment',
            text: `Align child elements on X axis inside of a box:<br/>
              &emsp;- \`left\`<br/>
              &emsp;- \`center\`<br/>
              &emsp;- \`right \`<br/>
              &emsp;- \`space-between\` - distributes child items evenly`,
            source: examples.horizontalAlignment,
          }),

          example({
            title: 'Vertical Alignment',
            text: `Align child elements on Y axis inside of a box:<br/>
              &emsp;- \`top\`<br/>
              &emsp;- \`middle\`<br/>
              &emsp;- \`bottom\`<br/>
              &emsp;- \`space-between\` - distributes child items evenly`,
            source: examples.verticalAlignment,
          }),

          example({
            title: 'Padding',
            text: `Control amount of white space around child elements inside of a box. It can be defined by:<br/>
              &emsp;- \`padding\` - define amount of white space from all sides<br/>
              &emsp;- \`paddingTop\`, \`paddingRight\`, \`paddingBottom\`, \`paddingLeft\` - define amount of white space from a specific side only.`,
            source: examples.padding,
          }),

          example({
            title: 'Margin',
            text: `Control amount of white space around the box component itself. It can be defined by:<br/>
              &emsp;- \`margin\` - define amount of space from all sides<br/>
              &emsp;- \`marginTop\`, \`marginRight\`, \`marginBottom\`, \`marginLeft\` - define amount of space for a specific side only.`,
            source: examples.margin,
          }),

          example({
            title: 'Color',
            text: `Control background and text color of a component with:<br/>
              &emsp;- \`backgroundColor\` - use to specify background fill<br/>
              &emsp;- \`color\` - use to specify text color.<br/>
              Properties accept WSR colour variables and natively supported values, e.g. HEX, RGB, etc.`,
            source: examples.color,
          }),

          example({
            title: 'Border',
            text: `Control style of a border with following properties:<br/>
              &emsp;- \`border\` - use to enable border, set its width and style. (Note: this prop do not accept WSR color variable keys)<br/>
              &emsp;- \`borderColor\` - use to specify the border color<br/>
              &emsp;- \`borderTopColor\`, \`borderRightColor\`, \`borderBottomColor\`, \`borderLeftColor\` - use to specify border color per edge<br/>
              &emsp;- \`borderRadius\` - use to specify corner radius.`,
            source: examples.border,
          }),

          example({
            title: 'Inline',
            text: `Defines if a box behaves as an inline element when placed next to other components.`,
            source: examples.inline,
          }),

          divider(),

          title('Common Use Cases'),

          example({
            title: 'Event Item',
            text: `Combination of boxes can be used to construct custom widgets and list items.`,
            source: examples.eventItem,
          }),

          example({
            title: 'List Items',
            text: `Use a box to arrange elements inside of other components in a desired way.`,
            source: examples.listItems,
          }),

          divider(),

          title('Feedback'),

          description(
            'You can help us improve this component by providing feedback, asking questions or leaving any  other comments via `#wix-style-ux` or `#wix-style-react` Slack channels or GitHub. Found a bug? Please report it to: <a href="https://goo.gl/forms/wrVuHnyBrEISXUPF2" target="_blank">goo.gl/forms/wrVuHnyBrEISXUPF2</a>',
          ),
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
