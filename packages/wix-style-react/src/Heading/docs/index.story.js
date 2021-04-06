import {
  header,
  tabs,
  tab,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
  description,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import Heading from '..';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Heading,
  componentPath: '..',

  componentProps: {
    children: 'Hey there, good looking',
    light: false,
    appearance: 'H1',
    ellipsis: false,
  },

  exampleProps: {},

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description('Headings are texts to be used for titles or subtitles.'),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Ellipsis',
            source: examples.ellipsis,
          }),
          example({
            title: 'Typography',
            source: examples.typography,
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
