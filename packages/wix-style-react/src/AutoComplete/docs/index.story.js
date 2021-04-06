import React from 'react';
import {
  header,
  description,
  importExample,
  title,
  example as baseExample,
  tab,
  api,
  testkit,
  playground,
  tabs,
  divider,
} from 'wix-storybook-utils/Sections';
import AutoComplete from '..';
import { Layout, Cell } from '../../Layout';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import { createOptions } from '../../../stories/utils/playgroundUtils';
import testkitDesc from './testkit.md';

const example = config =>
  baseExample({
    components: allComponents,
    ...config,
  });

const options4 = createOptions(4);
const options10 = createOptions(10);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AutoComplete,
  componentPath: '..',

  componentProps: setState => ({
    placeholder: 'This is a placeholder',
    options: options4,
    onSelect: option => setState({ value: option.value }),
    size: 'normal',
  }),

  exampleProps: {
    onSelect: () => 'I was called!',
    options: [
      { label: '4 options', value: options4 },
      { label: '10 options', value: options10 },
    ],
  },

  hiddenProps: ['value'],

  sections: [
    header({
      component: (
        <Layout gap={10}>
          <Cell span={3}>
            <AutoComplete
              placeholder="Select dominant hand"
              options={[
                { id: 0, value: 'Left' },
                { id: 1, value: 'Right' },
                { id: 2, value: 'Ambidextrous' },
              ]}
              popoverProps={{
                appendTo: 'window',
              }}
            />
          </Cell>
        </Layout>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'A Dropdown presents a list of options and allows a user to select one of the options.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Controlled example',
              subtitle: 'Component usage in controlled mode.',
              source: examples.simple,
            },
            {
              title: 'Available states',
              subtitle: 'Component supports disabled and error states.',
              source: examples.states,
            },
            {
              title: 'Handling overflow',
              subtitle: `Some times we want autocomplete to be detached from nearest overflow container. For this we can use popovers feature to set the overflow target to certain element in the DOM. By passing appendTo="window" we say that dropdowns overflow boundary is document.body itself.`,
              source: examples.overflow,
            },
            {
              title: 'Infinite Scroll',
              subtitle:
                'Adding the `infiniteScroll` prop triggers `loadMore` callback function when the user scrolls to the end and the `hasMore` prop is true',
              source: examples.infinite,
            },
          ].map(example),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [description(testkitDesc)] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
