import React from 'react';
import * as examples from './examples';

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
import allComponents from '../../../stories/utils/allComponents';

import CarouselWIP from '..';
import SectionHelper from '../../SectionHelper';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CarouselWIP,
  componentPath: '..',

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CarouselWIP.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          description({
            text: (
              <SectionHelper title="WARNING">
                This component is work in progress, please don't use this
                component unless you were instructed to by wsr team. <br />
                Note that API is not stable and can change anytime!
              </SectionHelper>
            ),
          }),

          title('Examples'),

          description({
            title: 'Carousel WIP - Suggestions Widget',
          }),
          code({
            compact: true,
            source: examples.suggestionsWidgetCarouselWIPExample,
          }),

          description({
            title: 'Old Carousel - Suggestions Widget',
          }),
          code({
            compact: true,
            source: examples.suggestionsWidgetCarouselExample,
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
