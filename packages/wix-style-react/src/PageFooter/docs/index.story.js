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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import Pagination from '../../Pagination';
import Box from '../../Box';
import PageFooter from '..';
import { Button } from '../..';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });
const code = ({ title, text, source }) =>
  baseCode({
    components: allComponents,
    compact: true,
    title,
    description: text,
    source,
  });

const exampleComponents = [
  {
    label: 'One component in each column',
    value: [
      <PageFooter.Start>
        <Button size="small">Go Back</Button>
      </PageFooter.Start>,
      <PageFooter.Center>
        <Pagination currentPage={3} totalPages={5} />
      </PageFooter.Center>,
      <PageFooter.End>
        <Button size="small">Save</Button>
      </PageFooter.End>,
    ],
  },
  {
    label: 'Two components in each column',
    value: [
      <PageFooter.Start>
        <Button size="small">⬅⬅</Button>
        <Box marginLeft="SP2">
          <Button size="small" skin="inverted">
            ⬅
          </Button>
        </Box>
      </PageFooter.Start>,
      <PageFooter.Center>
        <Pagination currentPage={2} totalPages={3} />
      </PageFooter.Center>,
      <PageFooter.End>
        <Box marginRight="SP2">
          <Button size="small" skin="destructive" priority="secondary">
            Cancel
          </Button>
        </Box>
        <Button size="small">Save</Button>
      </PageFooter.End>,
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: PageFooter,
  componentPath: '..',

  componentProps: {
    children: exampleComponents[0].value,
    divider: false,
  },

  exampleProps: {
    children: exampleComponents,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${PageFooter.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: examples.titles.description,
            text: examples.texts.description,
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: examples.titles.structure,
            text: examples.texts.structure,
            source: examples.structure,
          }),
          example({
            title: examples.titles.divider,
            text: examples.texts.divider,
            source: examples.divider,
          }),
          example({
            title: examples.titles.usage,
            text: examples.texts.usage,
            source: examples.usage,
          }),
          code({
            title: examples.titles.advanced,
            text: examples.texts.advanced,
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
