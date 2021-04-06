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
import { Add } from 'wix-ui-icons-common';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import CardFolderTabs from '..';
import Card from '../../Card';
import EmptyState from '../../EmptyState';
import TextButton from '../../TextButton';

const example = config => baseExample({ components: allComponents, ...config });
const children = [
  <CardFolderTabs.Tab id="1" name="Selected tab">
    <Card>
      <Card.Content>
        <EmptyState
          title="This is a nice tab"
          subtitle="Create your own tabs and try them!"
          theme="section"
        >
          <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
        </EmptyState>
      </Card.Content>
    </Card>
  </CardFolderTabs.Tab>,
  <CardFolderTabs.Tab id="2" name="Second Long Tab">
    <Card>
      <Card.Content>
        <EmptyState
          title="This is also a nice tab"
          subtitle="It has a very long title that will eventually be truncated by ellipsis"
          theme="section"
        >
          <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
        </EmptyState>
      </Card.Content>
    </Card>
  </CardFolderTabs.Tab>,
  <CardFolderTabs.Tab id="3" name="Disabled Tab" disabled>
    <Card>
      <Card.Content>
        <EmptyState
          title="This is also a nice tab"
          subtitle="It has a very long title that will eventually be truncated by ellipsis"
          theme="section"
        >
          <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
        </EmptyState>
      </Card.Content>
    </Card>
  </CardFolderTabs.Tab>,
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CardFolderTabs,
  componentPath: '..',

  componentProps: {
    maxTabWidth: '138px',
    activeId: '1',
    children,
  },

  exampleProps: {
    onTabChange: () => 'I was called',
    activeId: ['1', '2'],
  },

  hiddenProps: ['children'],

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CardFolderTabs.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Card with folder tabs allows content distribution within a card. Switching between the different content areas is done by using the tabs at the top of the card.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'CardFolderTabs consist of a list of tabs and a content area.',
            source: examples.simple,
          }),

          example({
            title: 'Max tab width',
            text:
              'Tab can have a specified max width. Long names will have ellipsis overflow with a tooltip containing full name.',
            source: examples.maxTabWidth,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Tab API',
          sections: [
            description(
              `
<h4>Props</h4>
| Name | Type | Default Value | Required | Description                                             |
| ---      | ---        | ---          | ---        | ---                                          |
| id       | \`string\` |              | yes        | A unique id to differentiate between tabs    |
| children | \`node\`   |              | yes        | Any content to be rendered as the tab itself |
| name     | \`string\` |              | yes        | The title of the tab                         |
| disabled | \`boolean\`|              |            | Makes the tab unselectable                   |
        `,
            ),
          ],
        },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
