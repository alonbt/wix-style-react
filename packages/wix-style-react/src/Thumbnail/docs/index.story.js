import { storySettings } from './storySettings';
import {
  tab,
  description,
  playground,
  api,
  testkit,
  importExample,
  example as baseExample,
  header,
  tabs,
  divider,
  title,
} from 'wix-storybook-utils/Sections';

import Thumbnail from '../Thumbnail';

import * as examples from './examples';
import thumbnailReadme from '../README.md';
import allComponents from '../../../stories/utils/allComponents';

const sizes = [
  { value: 100, label: '100' },
  { value: 300, label: '300' },
];

const example = config =>
  baseExample({
    components: allComponents,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Thumbnail,
  componentPath: '../Thumbnail.js',

  componentProps: (setState, getState) => ({
    title: 'I am a Thumbnail',
    description: 'And I can do this and that',
    image: examples.image,
    size: 'medium',
    backgroundImage: false,
    hideSelectedIcon: false,
    onClick: () => setState({ selected: !getState().selected }),
  }),

  exampleProps: {
    onClick: () => 'Thumbnail Clicked',
    size: [
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' },
      { label: 'Tiny', value: 'tiny' },
    ],
    backgroundImage: [
      { label: 'On', value: false },
      {
        label: 'Off',
        value: examples.getImageUrl(500, 500),
      },
    ],
    image: [
      {
        label: '64x64 image as URL',
        value: examples.getImageUrl(64, 64),
      },
      {
        label: '300x200 image as <img/> component',
        value: examples.image,
      },
    ],
    width: sizes,
    height: sizes,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Thumbnail/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(thumbnailReadme),

          importExample(),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Thumbnail with title',
              source: examples.exampleDefault,
            },
            {
              title: 'Thumbnail with image',
              source: examples.selectedWithImage,
            },
            {
              title: 'Thumbnails with different content alignments',
              source: examples.withDifferentAlignments,
            },
            {
              title: 'Thumbnail with background image',
              source: examples.selectedWithBackgroundImage,
            },
            {
              title: 'Thumbnail with custom children',
              source: examples.withCustomChildren,
            },
            {
              title: 'List of small thumbnails',
              source: examples.listOfSmall,
            },
            {
              title: 'Disabled',
              source: examples.disabledWithImage,
            },
            {
              title: 'Controlled Thumbnail',
              source: examples.controlled,
            },
          ].map(example),
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
