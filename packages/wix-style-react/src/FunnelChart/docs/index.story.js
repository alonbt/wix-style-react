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

import FunnelChart from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FunnelChart,
  componentPath: '..',

  componentProps: {
    data: [
      {
        value: 1220,
        label: 'visits',
      },
      {
        value: 800,
        label: 'product views',
      },
      {
        value: 630,
        label: 'cart',
      },
      {
        value: 410,
        label: 'checkout',
      },
      {
        value: 200,
        label: 'ordered',
      },
    ],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${FunnelChart.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'FunnelChart displays values as progressively decreasing proportions. should contain at least 2 values',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage with mandatory props',
            text: 'data prop is mandatory and should contain at least 2 items',
            source: `<Box direction="vertical" backgroundColor="WHITE" padding={2}>
              <FunnelChart data={[
                {
                  value: 1220,
                  label: 'visits',
                },
                {
                  value: 800,
                  label: 'product views',
                },
                {
                  value: 630,
                  label: 'cart',
                },
                {
                  value: 410,
                  label: 'checkout',
                },
                {
                  value: 410,
                  label: 'ordered',
                },
              ]}/>
            </Box>`,
          }),

          example({
            title: "With badge's tooltips",
            description:
              "Use differenceBadgeTooltipContent to control tooltips's content by current index and badge's value",
            source: `<Box direction="vertical" backgroundColor="WHITE" padding={2}>
            <FunnelChart data={[
              {
                value: 1220,
                label: 'visits',
              },
              {
                value: 800,
                label: 'product views',
              },
              {
                value: 630,
                label: 'cart',
              },
              {
                value: 410,
                label: 'checkout',
              },
              {
                value: 200,
                label: 'ordered',
              },
            ]}
            differenceBadgeTooltipContent={({currentIndex, difference}) => \`$\{difference} from data at index $\{currentIndex} continued next\`}
            />
            </Box>`,
          }),

          example({
            title: 'With no badges',
            description:
              'Use `hideDifferenceBadge` to control difference badges display',
            source: `<Box direction="vertical" backgroundColor="WHITE" padding={2}>
            <FunnelChart data={[
              {
                value: 1220,
                label: 'visits',
              },
              {
                value: 800,
                label: 'product views',
              },
              {
                value: 630,
                label: 'cart',
              },
              {
                value: 410,
                label: 'checkout',
              },
              {
                value: 200,
                label: 'ordered',
              },
            ]}
            hideDifferenceBadge
            />
            </Box>`,
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
