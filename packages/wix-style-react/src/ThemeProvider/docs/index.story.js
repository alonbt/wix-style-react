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
import { floatingPanelsComponents } from '../../../stories/utils/allComponents';

import ThemeProvider from '..';
import ToggleSwitch from '../../ToggleSwitch';
import Box from '../../Box';
import SectionHelper from '../../SectionHelper';

const colors = [
  '#2B81CB',
  '#3899EC',
  '#4EB7F5',
  '#C1E4FE',
  '#DAEFFE',
  '#EAF7FF',
  '#F4FAFE',
];
const ColorsExample = () => (
  <Box direction="vertical">
    Color Palette:
    <Box>
      {colors.map((color, i) => (
        <Box
          marginTop="12px"
          background={`var(--wsr-color-${i}0, ${color})`}
          color="black"
          padding="6px"
          width="fit-content"
        >
          Color {i}0
        </Box>
      ))}
    </Box>
  </Box>
);

const example = config =>
  baseExample({
    components: { ColorsExample, ...floatingPanelsComponents },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ThemeProvider,
  componentPath: '..',

  componentProps: {
    children: <ToggleSwitch checked />,
    theme: {
      color10: '#EE5951',
      color20: '#FF6666',
    },
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${ThemeProvider.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            text: (
              <SectionHelper title="WARNING">
                This component is work in progress, please don't use this
                component unless you were instructed to by wsr team. <br />
                Note that API is not stable and can change anytime!
              </SectionHelper>
            ),
          }),

          description({
            title: 'Description',
            text: `
ThemeProvider is a wrapper component applying custom theme styles.
Important: This is an experimental tool and should not be used in production unless you were instructed to.
            `,
          }),

          importExample(`import { ThemeProvider } from 'wix-style-react';`),

          divider(),

          title('Examples'),

          example({
            title: 'Custom theme definition',
            text: 'Using a ThemeProvider to create a custom theme',
            source: `
<ThemeProvider
  theme={{
    color10: '#EE5951',
    color20: '#FF6666',
    textColorPrimary: '#585dd9',
  }}
>
  <Layout>
    <Cell>
      <ToggleSwitch checked />
    </Cell>
    <Cell>
      <Text>I have a theme!</Text>
    </Cell>
    <Cell>
      <ColorsExample />
    </Cell>
  </Layout>
</ThemeProvider>
            `,
          }),

          example({
            title: 'Use a pre made theme',
            text:
              'Using a pre made theme function to generate a theme (import {theme} from "wix-style-react/themes/floatingPanels',
            source: `
<ThemeProvider theme={theme({ mainColor: '#00aa00' })}>
  <Layout>
    <Cell>
      <ToggleSwitch checked />
    </Cell>
    <Cell>
      <Text>In this theme I'm #000000 by default!</Text>
    </Cell>
    <Cell>
      <ColorsExample />
    </Cell>
  </Layout>
</ThemeProvider>
            `,
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
