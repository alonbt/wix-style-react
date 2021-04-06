import Skeleton from '..';
import { Category } from '../../../stories/storiesHierarchy';
import {
  api,
  example as baseExample,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import React from 'react';
import SectionHelper from '../../SectionHelper';

const example = config => baseExample({ components: allComponents, ...config });

const exampleContent = [
  {
    label: 'small/large/medium',
    value: [
      {
        size: 'small',
        type: 'line',
      },
      {
        size: 'large',
        type: 'line',
      },
      {
        size: 'medium',
        type: 'line',
      },
    ],
  },
  {
    label: 'small/medium/full',
    value: [
      {
        size: 'small',
        type: 'line',
      },
      {
        size: 'medium',
        type: 'line',
      },
      {
        size: 'full',
        type: 'line',
      },
    ],
  },
];

export default {
  category: Category.DEPRECATED,
  storyName: 'Skeleton',
  component: Skeleton,
  componentPath: '..',

  componentProps: {
    content: exampleContent[0].value,
  },

  exampleProps: {
    content: exampleContent,
  },

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <Skeleton />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Placeholder for filling up screen, usually for when some async operation is ongoing.`,
          ),
          description({
            text: (
              <SectionHelper appearance="danger" title="WARNING">
                This component is deprecated! Instead, we advise you to use
                <br />
                &lt;SkeletonLine/&gt; instead.
              </SectionHelper>
            ),
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({ title: 'Sizes', source: examples.sizes }),
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
