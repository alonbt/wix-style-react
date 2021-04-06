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
import Carousel from '..';
import { InfoChild } from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const imagesExamples = [
  {
    value: [
      {
        src:
          'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
      },
      {
        src:
          'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
      },
      {
        src:
          'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
      },
    ],
    label: 'Three images',
  },
];

const childrenExamples = [
  {
    value: [
      <InfoChild text="This is the first information text" />,
      <InfoChild text="This is the second information text" />,
      <InfoChild text="This is the third information text" />,
    ],
    label: 'Three nodes',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Carousel,
  componentPath: '..',

  componentProps: () => ({
    images: imagesExamples[0].value,
    infinite: true,
    autoplay: false,
    controlsPosition: 'sides',
    controlsSize: 'medium',
    imagesPosition: 'center top',
    imagesFit: 'contain',
  }),

  exampleProps: {
    images: imagesExamples,
    children: childrenExamples,
    beforeChange: (before, after) => `I was called with ${before}, ${after}`,
    afterChange: index => `I was called with ${index}`,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Carousel.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'The carousel component creates a slideshow for cycling through a series of content.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Autoplay',
            text:
              'The carousel is still by default, it can be set to Autoplay in order to change to the following slide each 3 seconds.',
            source: examples.autoplayExample,
          }),

          example({
            title: 'Controls Skin, Size and Position',
            text: `
Control arrows come in two skins: \`standard\` (default), \`inverted\` and \`light\`.\n
And two sized: \`tiny\`, \`small\` and \`medium\` (default).\n
They can be placed in one of these positions: \`sides\` (default), \`overlay\`, \`bottom\` or \`none\` to remove them completely.
            `,
            source: examples.controlsPositionExample,
          }),

          example({
            title: 'Controls Shadow',
            text: `Display a shadow behind the carousel controls by using the \`showControlsShadow\` flag.`,
            source: examples.controlsShadowExample,
          }),

          example({
            title: 'Without Dots',
            text: 'Pagination at the bottom can be removed.',
            source: examples.withoutDotsExample,
          }),

          example({
            title: 'Variable Width',
            text:
              'Set variableWidth to disable automatic slide width calculation. Use this prop when you want the carousel to show more than a single item simultaneously.',
            source: examples.variableWidthExample,
          }),

          example({
            title: 'Controls on Start and End',
            text: `The carousel controls on the start and end of the carousel can be set to be \`hidden\` when not using infinite mode.`,
            source: examples.controlsStartEndHidden,
          }),

          example({
            title: 'Images Position',
            text:
              "Specifies the position of the image inside its content box (default: 'center top'). First value controls the x-axis and the second value controls the y-axis. Can be a string (left, center, right, top, middle or bottom), or a number (in px or %).",
            source: examples.imagesPositionExample,
          }),

          example({
            title: 'Images Fit',
            text: `Image can be set to fit the container in the following ways:\n
\`contain\` (default) -  scaled to maintain its aspect ratio while fitting within the element’s content box. Scaled until one axis is filled.\n
\`cover\` - sized to maintain its aspect ratio while filling the element’s entire content box. Scaled until both axes are filled.
\`fill\` - sized to fill the element’s content box (doesn't maintain aspect ratio).\n
\`none\` - keeps original image dimensions.\n
\`scale-down\` - sized as if \`none\` or \`contain\` were specified, whichever would result in a smaller concrete object size.`,
            source: examples.imagesFitExample,
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
