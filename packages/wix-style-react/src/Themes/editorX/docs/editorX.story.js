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
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import { editorXComponents } from '../../../../stories/utils/allComponents';
import SectionHelper from '../../../SectionHelper';

import * as examples from './examples';

const example = config =>
  baseExample({ components: editorXComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: () => null,

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/Themes/editorX/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            text: (
              <SectionHelper title="WARNING">
                Do not use this theme unless you've been instructed to
              </SectionHelper>
            ),
          }),

          description({
            title: 'Description',
            text: `
            This theme provides the flavor of the EditorX design on top of wix-style-react components.
            Important: This is an experimental theme which might change, so do not use it unless you've been instructed to`,
          }),

          importExample(`
import { ThemeProvider } from 'wix-style-react';
import { theme } from 'wix-style-react/themes/editorX';

() => (
  <ThemeProvider theme={theme()}>
    ...
  </ThemeProvider>
);
          `),
          divider(),
          title('Examples'),
          example({
            title: 'Playground',
            text: 'Example of some components that support this theme',
            source: examples.playground,
          }),
        ],
      }),
    ]),
  ],
};
