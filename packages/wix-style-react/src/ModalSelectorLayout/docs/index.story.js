import React from 'react';

import {
  header,
  tabs,
  tab,
  description,
  playground,
  api,
  testkit,
  importExample,
  divider,
  example as baseExample,
  title,
} from 'wix-storybook-utils/Sections';

import * as examples from './examples';

import allComponents from '../../../stories/utils/allComponents';

import { storySettings } from './storySettings';

import ModalSelectorLayout from '..';
import Button from '../../Button';
import Text from '../../Text';
import SectionHelper from '../../SectionHelper';

const example = config => baseExample({ components: allComponents, ...config });

const dataSource = (searchQuery, offset, limit) =>
  new Promise(resolve =>
    setTimeout(() => {
      const items = Array(50)
        .fill(0)
        .map((_, i) => ({
          id: i,
          title: `Title ${i}`,
          subtitle: `Subtitle ${i}`,
          extraText: `Extra Text ${i}`,
          disabled: !(i % 2),
          image: (
            <img
              width="100%"
              height="100%"
              src="http://via.placeholder.com/100x100"
            />
          ),
        }));

      const filtered = items.filter(({ title }) =>
        title.toLowerCase().startsWith(searchQuery.toLowerCase()),
      );

      resolve({
        items: filtered.slice(offset, offset + limit),
        totalCount: filtered.length,
      });
    }, 2000),
  );

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ModalSelectorLayout,
  componentPath: '..',
  componentProps: {
    dataHook: 'storybook-modal-selector-layout',
    height: '540px',
    onClose: () => {},
    onCancel: () => {},
    itemsPerPage: 4,
    imageSize: 'large',
    withSearch: true,
    searchDebounceMs: 150,
    dataSource,
  },

  exampleProps: {
    onOk: data => {
      const isArray = Array.isArray(data);
      const view = i => ({ id: i.id, title: i.title, subtitle: i.substitle });

      return JSON.stringify(isArray ? data.map(view) : view(data));
    },

    onCancel: () => 'canceled',

    title: [
      {
        label: 'default title',
        value: ModalSelectorLayout.defaultProps.title,
      },
      {
        label: 'BOLD title',
        value: (
          <Text key={0} weight="bold">
            BOLD title
          </Text>
        ),
      },
    ],

    subtitle: [
      { label: 'simple text', value: 'A list of items go below' },
      {
        label: 'component with button',
        value: (
          <span key={0}>
            Some text and a <Button>button</Button>
          </span>
        ),
      },
    ],
  },

  sections: [
    header({}),
    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            ' Modal Selector is a modal pattern that enable the user to select one or multiple elements from a list, as well as the ability to search in the list in order to select a specific option.',
          ),

          description({
            text: (
              <SectionHelper appearance="danger" title="WARNING">
                This component is deprecated! Instead, we advise you to use the
                newer &lt;SelectorList/&gt; component in combination with
                &lt;CustomModalLayout/&gt;
              </SectionHelper>
            ),
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Single select',
            source: examples.single,
          }),

          example({
            title: 'Multi select',
            source: examples.multi,
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
