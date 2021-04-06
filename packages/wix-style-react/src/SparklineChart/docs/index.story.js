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
import Box from '../../Box';
import allComponents from '../../../stories/utils/allComponents';
import SparklineChart from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const data = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
  { label: new Date('Thu Sep 7 2020'), value: 12 },
  { label: new Date('Thu Sep 8 2020'), value: 8 },
  { label: new Date('Thu Sep 9 2020'), value: 7 },
  { label: new Date('Thu Sep 10 2020'), value: 9 },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SparklineChart,
  componentPath: '..',
  componentWrapper: ({ component }) => <Box align="center">{component}</Box>,

  componentProps: {
    data: data,
    color: '#FF0000',
    getTooltipContent: index => data[index].label.toLocaleDateString(),
    highlightedStartingIndex: 4,
    width: 400,
    height: 80,
    onHover: index => `Point at index ${index} is hovered!`,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SparklineChart.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',

            text: 'A tiny chart that provides a visual representation of data.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            description: `A simple sparkline example. The SparklineChart supports custom tooltip on hover. When getTooltipContent is not set, the tooltip will be disabled `,
            source: ` <SparklineChart
            getTooltipContent={index => <span style={{color: '#ffffff'}}>{index}</span>}
                data={[
                    { label: new Date('Thu Sep 4 2020'), value: 3 },
                    { label: new Date('Thu Sep 5 2020'), value: 17 },
                    { label: new Date('Thu Sep 6 2020'), value: 18 },
                    { label: new Date('Thu Sep 7 2020'), value: 12 },
                    { label: new Date('Thu Sep 8 2020'), value: 8 },
                    { label: new Date('Thu Sep 9 2020'), value: 7 },
                    { label: new Date('Thu Sep 10 2020'), value: 9 },
                  ]}
          />`,
          }),
          example({
            title: 'Highlighted Area',
            description:
              'SparklineChart allows highlighting partial values on the chart line.',
            source: `<SparklineChart
            data={[
              { label: new Date('Thu Sep 4 2020'), value: 3 },
              { label: new Date('Thu Sep 5 2020'), value: 17 },
              { label: new Date('Thu Sep 6 2020'), value: 18 },
              { label: new Date('Thu Sep 7 2020'), value: 12 },
              { label: new Date('Thu Sep 8 2020'), value: 8 },
              { label: new Date('Thu Sep 9 2020'), value: 7 },
              { label: new Date('Thu Sep 10 2020'), value: 9 },
            ]}
            highlightedStartingIndex={4}
           />`,
          }),
          example({
            title: 'Custom Color & Size',
            source: `<SparklineChart
            data={[
              { label: new Date('Thu Sep 4 2020'), value: 3 },
              { label: new Date('Thu Sep 5 2020'), value: 17 },
              { label: new Date('Thu Sep 6 2020'), value: 18 },
              { label: new Date('Thu Sep 7 2020'), value: 12 },
              { label: new Date('Thu Sep 8 2020'), value: 8 },
              { label: new Date('Thu Sep 9 2020'), value: 7 },
              { label: new Date('Thu Sep 10 2020'), value: 9 },
             ]}
            color='#ee00ff'
            width={400}
            height={80}
           />`,
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
