import * as React from 'react';
import * as examples from './examples';
import {
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
  description,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { settingsPanel } from '../../../../stories/utils/SettingsPanel';
import { TextAreaTheme } from '../TextAreaEnums';
import { settingsApi } from '../../../../stories/utils/SettingsApi';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';
import { TextAreaExtendedExample } from './TextAreaExtendedExample';
import * as TextAreaExtendedExampleRaw from '!raw-loader!./TextAreaExtendedExample.tsx';
import * as TextAreaExtendedExampleCSSRaw from '!raw-loader!./TextAreaExtendedExample.st.css';
import { TextArea } from '..';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'TextArea',
  component: storyComponent(TextArea),
  componentPath: '../TextArea.tsx',
  componentProps: () => ({
    'data-hook': 'storybook-TextArea',
    placeholder: 'Enter your text here',
    value: '',
  }),
  exampleProps: {
    theme: Object.values(TextAreaTheme),
    value: [
      { label: 'Empty', value: '' },
      { label: 'Short', value: 'Text' },
      {
        label: 'Long',
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        label: 'Scroll',
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  dataHook: 'storybook-TextArea',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            '`TextArea` is a component allowing to render a multi-line custom text.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          ...[
            { title: 'Placeholder', source: examples.example },
            { title: 'Text', source: examples.exampleWithText },
            { title: 'Disabled', source: examples.disabledExample },
            { title: 'Success', source: examples.successExample },
            {
              title: 'Error with description',
              source: examples.errorWithDescription,
            },
            {
              title: 'Error without description',
              source: examples.errorWithoutDescription,
            },
            {
              title: 'Line theme',
              source: examples.lineTheme,
            },
            {
              title: 'Line theme with error',
              source: examples.lineThemeWithError,
            },
            {
              title: 'Box theme',
              source: examples.boxTheme,
            },
          ].map(code),
        ],
      }),

      ...[
        {
          title: 'Playground',
          sections: [playground()],
        },
        { title: 'API', sections: [api()] },
        {
          title: 'Style API',
          sections: [settingsApi()],
        },
        { title: 'TestKit', sections: [testkit()] },
        {
          title: 'SettingsPanel',
          sections: [
            settingsPanel({
              title: 'TextArea Settings Panel',
              example: <TextAreaExtendedExample />,
              rawSource: TextAreaExtendedExampleRaw,
              rawCSSSource: TextAreaExtendedExampleCSSRaw,
              params: {
                numbers: [
                  {
                    label: 'Container Width',
                    wixParam: 'containerWidth',
                    defaultNumber: 280,
                    min: 200,
                    max: 400,
                    unit: 'px',
                  },
                  {
                    label: 'Container Height',
                    wixParam: 'containerHeight',
                    defaultNumber: 92,
                    min: 60,
                    max: 180,
                    unit: 'px',
                  },
                ],
                colors: [
                  {
                    label: 'Border Color',
                    wixParam: 'borderColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Error Border Color',
                    wixParam: 'errorBorderColor',
                    defaultColor: 'color-5', // '#DF3131' fixed color doesn't work at the moment
                  },
                  {
                    label: 'Success Border Color',
                    wixParam: 'successBorderColor',
                    defaultColor: 'color-5', // '#008250' fixed color doesn't work at the moment,
                  },
                  {
                    label: 'Disabled Border Color',
                    wixParam: 'disabledBorderColor',
                    defaultColor: 'color-3',
                  },
                  {
                    label: 'Background Color',
                    wixParam: 'backgroundColor',
                    defaultColor: 'color-1',
                  },
                  {
                    label: 'Text Color',
                    wixParam: 'textColor',
                    defaultColor: 'color-5',
                  },
                  {
                    label: 'Disabled Text Color',
                    wixParam: 'disabledTextColor',
                    defaultColor: 'color-3',
                  },
                  {
                    label: 'Placeholder Text Color',
                    wixParam: 'placeholderColor',
                    defaultColor: 'color-3',
                  },
                ],
                fonts: [
                  {
                    label: 'Text Font',
                    wixParam: 'textFont',
                    defaultFont: 'arial',
                  },
                ],
              },
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
