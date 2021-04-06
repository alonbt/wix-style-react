import {
  tab,
  tabs,
  api,
  header,
  divider,
  columns,
  title,
  playground,
  example as baseExample,
  description,
  importExample,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import BreadcrumbsThemes from '!raw-loader!./examples/BreadcrumbsThemes';

import StandardBreadcrumbs from '!raw-loader!./examples/StandardBreadcrumbs';
import BreadcrumbsSizes from '!raw-loader!./examples/BreadcrumbsSizes';
import BreadcrumbsOnClickCallback from '!raw-loader!./examples/BreadcrumbsOnClickCallback';
import BreadcrumbsEllipsis from '!raw-loader!./examples/BreadcrumbsEllipsis';
import ControlledBreadcrumbs from '!raw-loader!./examples/ControlledBreadcrumbs';
import { Breadcrumbs } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

const items = [
  {
    id: 1,
    value: 'First item',
  },
  {
    id: 2,
    value: 'Linked item',
  },
  {
    id: 3,
    value: 'Third item',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Breadcrumbs,
  componentPath: '..',

  componentProps: {
    activeId: 1,
    items,
    size: 'medium',
    theme: 'onGrayBackground',
  },

  exampleProps: {
    activeId: [1, 2, 3],
    onClick: item => `I was called with ${JSON.stringify(item)}`,
    items: [
      { label: 'One item', value: [{ id: 1, value: 'Homepage' }] },
      { label: 'Three items', value: items },
    ],
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Breadcrumbs is a type of navigation scheme which reveals the user’s location in a website or Web application.',
            }),
          ]),

          importExample("import { Breadcrumbs } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Standard',
            text: 'Breadcrumbs items can be either with or without links.',
            source: StandardBreadcrumbs,
          }),

          example({
            title: 'Sizes',
            text:
              'Breadcrumbs supports 2 sizes: `medium` (default) and `large`.',
            source: BreadcrumbsSizes,
          }),

          example({
            title: 'Themes',
            text:
              'Breadcrumbs supports 3 themes: `onGrayBackground` (default), `onWhiteBackground` and `onDarkBackground`.',
            source: BreadcrumbsThemes,
          }),

          example({
            title: 'Ellipsis',
            text: `Breadcrumbs component shows ellipsis when displaying long texts.
              Hidden text appears on hover in a tooltip.
              You can control the item's maximum width with the \`itemMaxWidth\` prop, where \`"max-content"\` disables ellipsis completely.`,
            source: BreadcrumbsEllipsis,
          }),

          description({
            title: 'On click callback',
            text: 'Breadcrumbs supports an onClick callback.',
            source: BreadcrumbsOnClickCallback,
          }),

          example({
            title: 'Controlled Breadcrumbs',
            text: '',
            source: ControlledBreadcrumbs,
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
