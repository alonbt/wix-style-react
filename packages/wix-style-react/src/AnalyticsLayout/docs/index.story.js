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

import AnalyticsLayout from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AnalyticsLayout,
  componentPath: '..',

  componentProps: {},

  exampleProps: {},

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AnalyticsLayout.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'AnalyticsLayout is a smart layout that arrange items according to a min and max items per row.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Minimum Width',
            text:
              'Width depends on parent’s container, but cannot be less than 636px.',
            source: `<AnalyticsLayout items={[1,2,3, 4 ,5 ,6, 7, 8]}>
            {( item, index, rowItemsCount ) => (
              <AnalyticsLayout.Cell>
                <Box margin="SP4">item {item} ({index + 1} / {rowItemsCount})</Box>
              </AnalyticsLayout.Cell>
            )}
          </AnalyticsLayout>`,
          }),
          example({
            title: 'Disabled Highlight',
            text: 'Disable cell highlighting state',
            source: `<AnalyticsLayout items={[1,2,3, 4 ,5 ,6, 7, 8]}>
            {( item, index, rowItemsCount ) => (
              <AnalyticsLayout.Cell disableHighlight>
                <Box margin="SP4">item {item} ({index + 1} / {rowItemsCount})</Box>
              </AnalyticsLayout.Cell>
            )}
          </AnalyticsLayout>`,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
      ].map(tab),
    ]),
  ],
};
