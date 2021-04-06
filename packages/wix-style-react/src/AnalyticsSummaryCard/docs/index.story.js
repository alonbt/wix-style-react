/* eslint-disable no-console */
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
import IconButton from '../../IconButton';
import Refresh from 'wix-ui-icons-common/Refresh';
import AnalyticsSummaryCard from '..';
import * as examples from './examples';

const chartData = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
];
const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AnalyticsSummaryCard,
  componentPath: '..',

  componentProps: {
    title: 'Sessions',
    titleTooltip: 'tooltip',
    value: '1,9K',
    valueTooltip: '1,943',
    trend: 12,
    invertedTrend: false,
    isTrendVisible: false,
    isLoading: false,
    chartHighlightedStartingIndex: 0,
    ctaButton: (
      <IconButton size="tiny">
        <Refresh />
      </IconButton>
    ),
    onCTAClick: () => console.log('refresh click'),
    onClick: () => console.log('general click'),
    onChartHover: () => console.log('on chart hover'),
    chartWidth: 169,
    chartData,
    chartColorHex: '#3899ec',
    footer: <div> This is footer</div>,
  },

  exampleProps: {},

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AnalyticsSummaryCard.displayName}/`,
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

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'a simple usage',
            source: examples.simple,
          }),
          example({
            title: 'Footer',
            text: `Summary card can have a footer for extra content.
            The footer is a node box with no height limitation.`,
            source: examples.footer,
          }),
          example({
            title: 'Trend',
            text: `The trend indicates the change of the value in percentage.
            It has 2 modes:
            Positive - colored green with arrow upwards
            Negative - colored red with arrow downwards.
            If there’s no change in value, trend won’t be displayed.`,
            source: examples.trend,
          }),
          example({
            title: 'Action Button',
            text: `Summary card can have action button inside to assist with any action needed, since it’s a node.`,
            source: examples.actionButton,
          }),
          example({
            title: 'Clickable Card',
            text: `Card can be clickable or not`,
            source: examples.clickable,
          }),
          example({
            title: 'Loader',
            text: `Card supports loading state.It will replace the action button when it’s active.If the card is clickable it won’t be as long the loader is active.`,
            source: examples.loader,
          }),
          example({
            title: 'Sparkline Width',
            text: `Sparkline width is set by px only.The minimum width is 69px.
            `,
            source: examples.sparkline,
          }),
          example({
            title: 'Tooltip On Title',
            text: `If needed, the title can have tooltip to better explain the context.
            `,
            source: examples.tooltipOnTitle,
          }),
          example({
            title: 'Tooltip On Value',
            text: `When value appears as abbreviated number, tooltip will appear on hover.
            `,
            source: examples.tooltipOnValue,
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
