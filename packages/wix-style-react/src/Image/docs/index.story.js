import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import Box from '../../Box';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import {
  sourceExample,
  sizeExample,
  fitExample,
  positionExample,
  lazyExample,
  borderExample,
  borderRadius,
} from './examples/examples';

import Image from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'Image',

  component: Image,
  componentPath: '..',

  componentProps: {
    src: 'example.jpg',
    fit: 'cover',
    position: 'center',
  },

  exampleProps: {
    position: [
      'center',
      'top',
      'top left',
      'top right',
      'right',
      'bottom',
      'bottom left',
      'bottom right',
      'left',
    ],
  },

  componentWrapper: ({ component }) => <Box align="center">{component}</Box>,

  sections: [
    header({
      component: <Image width="150" height="100" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Image component allows to display various formats of graphics. It works as a placeholder when a user has no image to show. Use it to show product images, table list thumbnails and similar.',
            }),
          ]),

          importExample("import { Image } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Source',
            text:
              'Use `src` prop to display an image asset. If source is not provided - a default placeholder image asset is displayed.',
            source: sourceExample,
          }),

          example({
            title: 'Size',
            text:
              'An image will stretch to parent width by default and will maintain aspect ratio if there is enough space provided by parent container. Custom size of an image can be specified using `width` and `height` props.',
            source: sizeExample,
          }),

          example({
            title: 'Fit Mode',
            text:
              'A `fit` prop can be used to customize how the image is displayed when the image asset size does not match custom size. The special `tile` value is used to enable tiled fit mode. Other values directly map to [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property values.',
            source: fitExample,
          }),

          example({
            title: 'Position',
            text:
              'A `position` prop can be used to adjust the placement of an image affected by one of the `fit` prop modes. Any valid [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) value can be used.',
            source: positionExample,
          }),

          example({
            title: 'Lazy Loading',
            text:
              'An image marked with `loading="lazy"` prop will only load source asset when it reaches a calculated distance from the viewport.',
            source: lazyExample,
          }),
          example({
            title: 'Show Border',
            text:
              'When content is light, the image can appear with a border to make image ratio visible.',
            source: borderExample,
          }),
          example({
            title: 'Border Radius',
            text:
              'A `borderRadius` prop can be used to customize the border radius of the image element. if the prop is not passed - the default value is 8px',
            source: borderRadius,
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
