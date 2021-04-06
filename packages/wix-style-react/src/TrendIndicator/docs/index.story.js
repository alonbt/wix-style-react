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

import TrendIndicator from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TrendIndicator,
  componentPath: '..',

  componentProps: {
    value: 23,
    inverted: false,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TrendIndicator.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'TrendIndicator shows a percentage based positive or negative trend.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Trends',
            description:
              'Positive `value` displays with an arrow up, negative - with an arrow down.',
            source: examples.trends,
          }),

          example({
            title: 'Inverted trends',
            description:
              'By default, positive numbers are displayed in green, negative - with red. This could be changed with `inverted` property.',
            source: examples.invertedTrends,
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
