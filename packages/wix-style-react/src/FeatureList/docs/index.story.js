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

import FeatureList from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FeatureList,
  componentPath: '..',

  componentProps: {},

  exampleProps: {
    features: [
      {
        label: 'add features',
        value: [
          {
            image: (
              <img src="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_60,h_60/c78d05b79ede429fb77c9d8ec4443b93.jpg" />
            ),
            title: 'Remove Wix Ads',
            text:
              "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            image: (
              <img src="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_60,h_60/c78d05b79ede429fb77c9d8ec4443b93.jpg" />
            ),
            title: 'Connect a Custom Domain',
            text: 'Get your business found with a custom domain.',
          },
          {
            image: (
              <img src="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_60,h_60/c78d05b79ede429fb77c9d8ec4443b93.jpg" />
            ),
            title: 'Accept Online Payment',
            text: 'Let your customers and clients pay you online at checkout.',
          },
        ],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${FeatureList.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              "FeatureList is a group of layouts that displays image, description and title. It's used in a footer of a marketing page to list product features.",
          }),

          importExample("import { FeatureList } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Component lists horizontally any number of features. Each feature has title, text and image. Image should be 60px size.',
            source: examples.basicExample,
          }),

          example({
            title: 'Columns',
            text:
              "Component can have any number of columns. Default is set to 3. If items don't fit in a row, they move to a new one.",
            source: examples.columnsExample,
          }),

          example({
            title: 'Customization',
            text:
              "The Feature's props: image, title and text are all optional. This is an example for feature list without images.",
            source: examples.withoutImagesExample,
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
