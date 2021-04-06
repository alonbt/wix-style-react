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
  code,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import WixStyleReactProvider from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: WixStyleReactProvider,
  componentPath: '..',

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${WixStyleReactProvider.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Design',
        sections: [
          description({
            title: 'Usage',
            text:
              '`<WixStyleReactProvider/>` is a wrapper component that upgrades all its children to the features requested. Use it to enable the experiments.',
          }),

          importExample(),

          example({
            title: 'Enable the feature',
            text:
              'Use `features` prop to pass the keys to turn on or off the changes. In the given example `reducedSpacingAndImprovedLayout` feature is turned on.',
            source: examples.usage,
          }),

          divider(),

          title('Changes in reduced spacing feature'),

          code({
            title: 'Heading',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.heading,
          }),
          code({
            title: 'Layout',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.layout,
          }),
          code({
            title: 'Page Header',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.pageHeader,
          }),
          code({
            title: 'Page Section',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.pageSection,
          }),
          code({
            title: 'Card',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.card,
          }),
          code({
            title: 'Table',
            description: ' `<TableToolbar/>` and `<Table.Titlebar/>` components have few remaining spacing bugs, they will be fixed in <a href="https://jira.wixpress.com/browse/DSM-1783" target="_blank">this task</a>.',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.table,
          }),
          code({
            title: 'Table row sizes',
            description: 'WSR version 9.0 — `rowVerticalPadding` default value is `medium`.<br> WSR version 10.0 — `rowVerticalPadding` default value will be `small`. Value `large` will be <b>removed</b>. ',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.tableRows,
          }),
          code({
            title: 'Table List item',
            description: 'WSR version 9.0 — `verticalPadding` default value is `medium`.<br> WSR version 10.0 — `verticalPadding` default value will be `small`. ',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.tableListItem,
          }),
          code({
            title: 'Accordion',
            description: 'WSR version 9.0 — `size` default value is `large`.<br> WSR version 10.0 — `size` default value will be `small`. Value `large` will be <b>removed</b>, `medium` and `tiny` sizes will be introduced in <a href="https://jira.wixpress.com/browse/DSM-1782" target="_blank">this task.</a>',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.accordion,
          }),
          code({
            title: 'Selectable Accordion',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.selectableAccordion,
          }),
          code({
            title: 'Statistics Widget',
            description: 'WSR version 9.0 — `size` default value is `large`.<br> WSR version 10.0 — `size` default value will be `tiny`. ',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.statisticsWidget,
          }),
          code({
            title: 'Marketing Layout',
            description: 'WSR version 9.0 — `size` default value is `small`.<br> WSR version 10.0 — `size` default value will remain `small`. Value `large` will be <b>removed</b>. ',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.marketingLayout,
          }),
          code({
            title: 'Announcement Modal Layout',
            description: 'WSR version 9.0 — `illustration` size is `L1`.<br> WSR version 10.0 — `illustration` size will be `L0`. ',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.announcementModalLayout,
          }),
          code({
            title: 'Form Field',
            description: 'WSR version 9.0 — `labelSize` default value is `medium`.<br> WSR version 10.0 — `labelSize` default value will be `small`. Value `medium` will be <b>removed</b>. ',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.formField,
          }),
          code({
            title: 'Color Picker',
            description: '',
            autoRender: true,
            components: allComponents,
            compact: true,
            source: examples.colorPicker,
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
