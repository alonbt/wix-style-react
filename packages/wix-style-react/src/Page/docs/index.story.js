import React from 'react';
import {
  api,
  tabs,
  tab,
  playground,
  testkit,
  title,
  code as baseCode,
  description,
  importExample,
  header,
  divider,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import Page from '..';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import {
  header as headerExample,
  tail as tailExample,
  fixedContent as fixedContentExample,
  content as contentExample,
} from '../test/examples/PageChildren';
import { classes } from '../test/examples/PageStory.st.css';
import ChildrenReadme from './Children.md';
import * as examples from './examples';

const code = config =>
  baseCode({
    components: allComponents,
    compact: false,
    ...config,
  });

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  name: 'Page',
  component: Page,
  componentWrapper: ({ component }) => (
    <div style={{ position: 'relative' }}>{component}</div>
  ),
  componentPath: '../Page.js',

  componentProps: {
    children: [headerExample(), tailExample, contentExample(false)],
    gradientClassName: classes.backgroundGradient,
  },

  exampleProps: {
    children: [
      {
        label: 'header, tailExample & content',
        value: [headerExample(), tailExample, contentExample()],
      },
      {
        label: 'header & content',
        value: [headerExample(), contentExample()],
      },
      {
        label: 'just content',
        value: [contentExample()],
      },
      {
        label: 'header, tailExample, fixed-content & content',
        value: [
          headerExample(),
          tailExample,
          fixedContentExample,
          contentExample(),
        ],
      },
    ],
    backgroundImageUrl: [
      {
        label: 'https://some-host.com/image-path.jpg',
        value:
          'https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg',
      },
    ],
  },

  sections: [
    header({}),
    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            description:
              'The Page component provides a common layout for a page header and content, including scrolling capabilities, sticky nodes and much more',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Basic',
            text:
              'Simply compound a <Page/> with <Page.Header/> and <Page.Content/>',
            source: examples.simple,
          }),

          example({
            title: 'Stretch to full size',
            text:
              'A Page stretches according to its container height. use `100vh` for a standalone page or `calc(100vh - 48px)` if top bar exists',
            source: examples.fullSize,
          }),

          example({
            title: 'Page containing a layout of cards',
            text:
              'A common use case will be a Page containing Card components arranged by Layout components',
            source: examples.gridOfCards,
          }),

          example({
            title: 'A Powerful Page Header',
            description:
              'The `PageHeader` is a standalone component, checkout its docs to see all features',
            source: examples.header,
          }),

          divider(),

          title('Page Layout Features'),

          code({
            title: 'Minimized header',
            description:
              'The Page will automatically adjust its header to a minimized mode when scrolling through the content',
            compact: true,
            source: examples.minimizedHeader,
          }),

          code({
            title: 'Horizontal Scroll',
            description: 'Allows for horizontal scrolling without set width',
            compact: true,
            source: examples.horizontalScroll,
          }),

          code({
            title: 'Vertical Scroll',
            description:
              'Provides easy registration to vertical scroll listeners on the scrollable content, all scroll events are throttled internally (100ms)',
            compact: true,
            source: examples.verticalScroll,
          }),

          code({
            title: 'Header Tail elements',
            description:
              'elements can be sticked to the header when scrolled. Tabs are a good example for usage.',
            compact: true,
            source: examples.headerTailElements,
          }),

          code({
            title: 'Sticky elements',
            description:
              'The Page provides <Page.Sticky/> container to attach elements to the scrolled container.',
            compact: true,
            source: examples.stickyElements,
          }),

          code({
            title: 'Complex structures',
            description: `With Page component you can achieve rich experiences, for example wrapping Table components`,
            compact: true,
            autoRender: false,
            source: examples.complexStructures,
          }),

          example({
            title: 'Full page - non scrollable',
            text:
              'A full view of a non scrollable page with a header and a footer.',
            source: examples.fullNotScrollableContent,
          }),

          example({
            title: 'Full page - scrollable',
            text: `
A full view of a scrollable page with a header and a footer.\n
This example also demonstrate the \`scrollTo\` functionality.
            `,
            source: examples.fullScrollableContent,
          }),
        ],
      }),
      ...[
        {
          title: 'API',
          sections: [
            description({
              title:
                'Please refer the "Compound Components API" for <Page.XXX/> related API',
            }),
            api(),
          ],
        },
        {
          title: 'Compound Components API',
          sections: [description({ title: 'Children', text: ChildrenReadme })],
        },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
