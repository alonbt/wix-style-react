import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import MarketingLayout from '..';

import * as examples from './examples';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'MarketingLayout',

  component: MarketingLayout,
  componentPath: '..',

  componentProps: {
    title: 'Marketing Layout Title',
    description:
      'Connect to Google and get indexed in seconds so people can easily find your site.',
    actions: examples.actions[0].value,
    image: examples.images[0].value,
    size: 'small',
    inverted: false,
  },

  exampleProps: {
    image: examples.images,
    actions: examples.actions,
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([description(examples.description)]),

          importExample("import { MarketingLayout } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          description({
            title: 'Size',
            text:
              'Component supports four sizes - `tiny`, `small`, `medium` and `large` (which will be deprecated in the next major version). For each size are dedicated illustration sizes. Please note, action button sizes must be adjusted based on marketing layout size.',
          }),
          code({
            compact: true,
            source: examples.sizeTiny,
          }),
          code({
            compact: true,
            source: examples.sizeSmall,
          }),
          code({
            compact: true,
            source: examples.sizeMedium,
          }),

          description({
            title: 'Direction',
            text:
              'The direction of the layout can be `horizontal` (default) or `vertical`.',
          }),
          code({
            compact: true,
            source: examples.directions,
          }),

          description({
            title: 'Image Position',
            text:
              'Image can be positioned on the right or left side. Position can be changed with `inverted` prop.',
          }),
          code({
            compact: true,
            source: examples.inverted,
          }),

          description({
            title: 'Align Items',
            text:
              'The content can be displayed centered or stretched out, using the alignItems prop.',
          }),
          code({
            compact: true,
            source: examples.alignItemsStretch,
          }),

          description({
            title: 'Image Area Background',
            text:
              'Use `imageBackgroundColor` prop to set a custom background color for the image area.',
          }),
          code({
            compact: true,
            source: examples.imageBackgroundColor,
          }),

          description({
            title: 'Badge',
            text:
              'Marketing layout can contain a `<Badge>` in the `badge` prop, or have the `hiddenBadge` prop enabled. These examples use `<Card>` component as a container for marketing layout.',
          }),
          code({
            compact: true,
            source: examples.badge,
          }),
          code({
            compact: true,
            source: examples.hiddenBadge,
          }),

          description({
            title: 'Advanced Example',
            text:
              'Marketing layout can be customized to support complex layouts. This example uses `<Card>` component as a container for marketing layout.',
          }),
          code({
            compact: true,
            source: examples.advanced,
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
