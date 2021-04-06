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

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import * as examples from './examples';
import SkeletonGroup from '..';
import SkeletonCircle from '../../SkeletonCircle';
import SkeletonLine from '../../SkeletonLine';
import SkeletonRectangle from '../../SkeletonRectangle';
import { Layout, Cell } from '../../Layout';
import Box from '../../Box';

const example = config => baseExample({ components: allComponents, ...config });

const exampleLayout = [
  <Layout>
    <Cell>
      <Layout>
        <Cell span={2}>
          <SkeletonCircle diameter="40px" margin="10px 5px 0 5px" />
        </Cell>
        <Cell span={5}>
          <SkeletonLine margin="10px 5px 5px 0" />
          <SkeletonLine />
        </Cell>
      </Layout>
    </Cell>
    <Cell>
      <SkeletonRectangle width="160px" height="60px" marginLeft="15px" />
    </Cell>
  </Layout>,
];

const childrenProps = [
  ...exampleLayout,
  <SkeletonCircle diameter="40px" />,
  <SkeletonLine width="100px" />,
  <SkeletonRectangle width="100px" height="60px" />,
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SkeletonGroup,
  componentPath: '..',

  componentWrapper: ({ component }) => (
    <Box
      width="200px"
      height="160px"
      backgroundColor={component.props.skin === 'light' ? 'white' : 'gray'}
    >
      {component}
    </Box>
  ),

  componentProps: {
    skin: 'light',
    children: exampleLayout,
  },

  exampleProps: {
    skin: ['light', 'dark'],
    children: childrenProps,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SkeletonGroup.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Placeholder for filling up screen using skeleton items, usually for when some async operation is ongoing.',
          }),

          importExample(
            `import { SkeletonGroup, SkeletonLine, SkeletonRectangle, SkeletonCircle } from 'wix-style-react'`,
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Build your own Skeleton!',
            text: `
The \`SkeletonGroup\` component is a container that synchronize animation between Skeleton elements.\n
In this example you can see how we built a skeleton with existing container components in wsr like \`Card\`, \`Layout\`, and \`Box\`.
            `,
            source: examples.general,
          }),

          example({
            title: 'Skins',
            text: `
A Skeleton can be rendered on any background, in order to prevent high contrast we provide 2 skins, \`dark\` and \`light\`.\n
Pay close attention that Skeleton looks best on a white background, but if your background has another color, you need to provide it as a prop.
            `,
            source: examples.skin,
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
