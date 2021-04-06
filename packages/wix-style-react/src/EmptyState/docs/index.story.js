import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import { storySettings } from '../test/storySettings';
import EmptyState from '..';
import { Add, Download, StatusComplete } from 'wix-ui-icons-common';
import ImagePlaceholder from '../../../stories/utils/ImagePlaceholder';
import { TextButton } from 'wix-style-react';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const code = config => baseCode({ components: allComponents, ...config });
const singleAction = <TextButton prefixIcon={<Add />}>New Item</TextButton>;

const twoActions = (
  <span>
    <span style={{ margin: '0 15px' }}>
      <TextButton prefixIcon={<Add />}>New Item</TextButton>
    </span>
    <span style={{ margin: '0 15px' }}>
      <TextButton prefixIcon={<Download />}>Import Items</TextButton>
    </span>
  </span>
);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: EmptyState,
  componentPath: '..',

  componentProps: {
    theme: 'page',
    title: "You don't have any items yet",
    subtitle:
      'Create your product item in an easy & fast way to display it on your site',
    image: <ImagePlaceholder />,
    children: null,
  },

  exampleProps: {
    theme: ['page', 'page-no-border', 'section'],
    image: [
      { label: 'No image', value: null },
      {
        label: 'Image URL',
        value:
          'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_375,h_375/c78d05b79ede429fb77c9d8ec4443b93.jpg',
      },
      { label: 'Node', value: <ImagePlaceholder /> },
      { label: 'SVG', value: <StatusComplete size="120px" /> },
    ],
    children: [
      { label: 'No children', value: null },
      { label: 'Single action', value: singleAction },
      { label: 'Two actions', value: twoActions },
    ],
    align: [
      { label: 'start', value: 'start' },
      { label: 'center', value: 'center' },
      { label: 'end', value: 'end' },
    ],
    title: [
      { label: 'With title', value: `You don't have any items yet` },
      { label: 'Without title', value: '' },
    ],
    subtitle: [
      {
        label: 'With subtitle',
        value:
          'Create your product item in an easy & fast way to display it on your site',
      },
      {
        label: 'Without subtitle',
        value: '',
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${EmptyState.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'Representing a state of an empty page, section, table, etc.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          description({
            title: 'Structure',
            text: `The EmptyState has a title, subtitle, and image (image URL or a node to render). All of these props are optional.`,
          }),
          code({
            compact: true,
            source: examples.structure,
          }),

          description({
            title: 'Themes',
            text: `There are 3 themes: 'page', 'page-no-border', 'section' (default)`,
          }),
          code({
            compact: true,
            source: examples.pageTheme,
          }),
          code({
            compact: true,
            source: examples.pageNoBorderTheme,
          }),
          code({
            compact: true,
            source: examples.sectionTheme,
          }),

          description({
            title: 'With Children',
            text: `Component can have children like action button that will be rendered below the subtitle/title/image.`,
          }),
          code({
            compact: true,
            source: examples.children,
          }),

          description({
            title: 'Alignment',
            text: `Component can be aligned to the 'start', 'center' (default), 'end'`,
          }),
          code({
            compact: true,
            source: examples.alignStart,
          }),
          code({
            compact: true,
            source: examples.alignCenter,
          }),
          code({
            compact: true,
            source: examples.alignEnd,
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
