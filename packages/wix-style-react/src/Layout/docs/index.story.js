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
} from 'wix-storybook-utils/Sections';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { Layout, Cell } from '..';
import { style, classes } from './styles.st.css';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });
const GreyBox = ({ children, height }) => (
  <div
    className={style(classes.greyBox)}
    style={{ height }}
    children={children}
  />
);
GreyBox.displayName = 'GreyBox';

const childrenExample = [
  {
    label: 'single cell',
    value: (
      <Cell>
        <GreyBox children="hello" />
      </Cell>
    ),
  },
  {
    label: 'two cells',
    value: [
      <Cell>
        <GreyBox children="hello" />
      </Cell>,
      <Cell>
        <GreyBox children="hello again" />
      </Cell>,
    ],
  },
  {
    label: 'two cells as columns',
    value: [
      <Cell span={6}>
        <GreyBox children="hello" />
      </Cell>,
      <Cell span={6}>
        <GreyBox children="hello again" />
      </Cell>,
    ],
  },
  {
    label: 'three cells and one row',
    value: [
      <Cell span={4}>
        <GreyBox children="left" />
      </Cell>,
      <Cell span={4}>
        <GreyBox children="middle" />
      </Cell>,
      <Cell span={4}>
        <GreyBox children="right" />
      </Cell>,
      <Cell>
        <GreyBox children="full" />
      </Cell>,
    ],
  },
  {
    label: 'various height cells',
    value: [
      [2, 30],
      [3, 60],
      [7, 90],
    ].map(([span, height]) => (
      <Cell span={span}>
        <GreyBox height={height} children={`${height}px`} />
      </Cell>
    )),
  },
  {
    label: 'vertically aligned cells',
    value: [
      [2, 30],
      [3, 60],
      [7, 90],
    ].map(([span, height]) => (
      <Cell span={span} vertical>
        <GreyBox height={height} children={`${height}px`} />
      </Cell>
    )),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Layout,
  componentPath: '../Layout',

  componentProps: {
    children: childrenExample[0].value,
    gap: '30px',
    justifyItems: undefined,
    alignItems: undefined,
    cols: undefined,
    rowHeight: 'auto',
  },

  exampleProps: {
    children: childrenExample,
  },

  hiddenProps: ['dataHook'],

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Layout.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: `
Wix layout design is a visual arrangement of elements on a page divided into 12 columns by default.\n
The \`<Layout/>\` component is a css grid based **container** and the \`<Cell/>\` component that is a css grid based **item**.
            `,
          }),

          importExample(`import { Layout, Cell } from 'wix-style-react';`),

          divider(),

          title('Examples'),

          example({
            title: 'Layout presentation',
            text: `
By default the layout is divided into 12 columns and the cell is spanned across all 12 columns.\n
Set the maximum number of columns with cols prop and adjust the space between cell with gap prop.\n
Build your own layout by setting a span to cells like in this example.
            `,
            source: examples.basic,
          }),

          example({
            title: 'Row Height',
            text: `
If not specified, each row height will be the determined by its highest item automatically.\n
You can set a row height that will affect all rows together.\n
In case you want all rows to be the same height as the highest one, use the fraction unit, like in this example.
            `,
            source: examples.height,
          }),

          example({
            title: 'Vertical',
            text:
              'Cell content can be aligned in a middle by enabling the prop `vertical`.',
            source: examples.vertical,
          }),

          example({
            title: 'Align Items',
            text: `
Property alignItems is used to align cells along column axis.\n
It supports all major CSS values, [read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
            `,
            source: examples.alignItems,
          }),

          example({
            title: 'Justify Items',
            text: `
Property justifyItems is used to align cells along row axis.\n
It supports all major CSS values, [read more here](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).
            `,
            source: examples.justifyItems,
          }),

          example({
            title: 'Cell rows',
            text: `
Property \`rows\` for a \`Cell\` is used to determine how many rows the cell takes, in this example the first element takes 2 rows, the rest takes 1.
            `,
            source: examples.cellRows,
          }),
        ],
      }),

      ...[
        { title: 'Layout API', sections: [api()] },
        {
          title: 'Cell API',
          sections: [
            description(
              `
              <h4>Props</h4>
  | Name     | Type       | Default Value| Required   | Description                                                                        |
  | ---      | ---        | ---          | ---        | ---                                                                                |
  | children | \`node\`   |              |            | any node to be rendered inside                                                     |
  | span     | \`number\` | 12           |            | how many columns should this cell occupy. Can be any number from 1 to 12 inclusive |
  | vertical | \`bool\`   |              |            | whether to align children vertically to the middle                                 |
  | rows     | \`number\` |              |            | how many rows should this cell occupy. |
          `,
            ),
          ],
        },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
