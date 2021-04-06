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

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Proportion from '..';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const IMG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg';
const CUSTOM_RATIO = 3142 / 3820; // taken from image ^

const exampleAspectRatio = [
  {
    value: CUSTOM_RATIO,
    label: `custom (3142 / 3820 = image original ratio)`,
  },
  { value: Proportion.PREDEFINED_RATIOS.square, label: 'square' },
  { value: Proportion.PREDEFINED_RATIOS.portrait, label: 'portrait' },
  { value: Proportion.PREDEFINED_RATIOS.cinema, label: 'cinema' },
  { value: Proportion.PREDEFINED_RATIOS.landscape, label: 'landscape' },
  { value: Proportion.PREDEFINED_RATIOS.none, label: 'none' },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Proportion,
  componentPath: '..',

  componentProps: {
    children: (
      <img
        src={IMG_URL}
        style={{ verticalAlign: 'middle' }}
        width={'100%'}
        height={'100%'}
      />
    ),
  },

  exampleProps: {
    aspectRatio: exampleAspectRatio,
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description('HOC that enforces proportions on child components'),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            source: examples.simple,
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
