import SectionHelper from '..';
import { storySettings } from './storySettings';
import {
  api,
  code as baseCode,
  columns,
  example as baseExample,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import * as examples from './examples';
import React from 'react';
import allComponents from '../../../stories/utils/allComponents';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const titleExamples = [
  { label: 'short text', value: 'Look at this important message!' },

  {
    label: 'long text',
    value:
      'Look at this really long and important message that could in some cases contain many lengthy words like psychophysicotherapeutics!',
  },
];

const childrenExamples = [
  {
    label: 'short text',
    value: 'This is a very important message',
  },
  {
    label: 'long text',
    value:
      'This is the content of very important message which actually has a lot of detailed explanation about various things. It may even have multiple sentences but they do not need to be those boring "Lorem Ipsum"',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SectionHelper,
  componentPath: '..',

  componentProps: {
    actionText: 'I understand the consequences',
    appearance: 'standard',
    title: titleExamples[0].value,
    children: childrenExamples[0].value,
    showCloseButton: true,
    fullWidth: false,
  },

  exampleProps: {
    title: titleExamples,
    children: childrenExamples,

    onAction: () => 'I was called!',
    onClose: () => 'I was called!',
  },

  sections: [
    header({}),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Section Helper displays a status message that can be shown anywhere in the page. It appears in various styles and can contain an action. Use it when the user needs to see a status message next to another component.',
            }),
          ]),

          importExample("import { SectionHelper } from 'wix-style-react';"),

          divider(),

          title('Appearance'),

          example({
            title: 'Appearance',
            description:
              'Section Helper supports 7 appearance types. <br> - Use `standard` for important information or to signify a change in a state. <br> - Use `warning` to help user avoid errors and potentially dangerous / destructive actions.<br> - Use `danger` to let user know about critical issues.<br> - Use `success` to let user know about successfull operation or a state.<br> - Use `premium` to inform about available premium features.<br> - Use `preview` to display content preview.<br> - Use `experimentalDark` to emphasize informational message more in the context of other content .',
            source: examples.appearance,
          }),

          title('Structure'),

          example({
            title: 'Text Button',
            description: 'Text button can be added as a child item.',
            source: examples.textbutton,
          }),
          example({
            description:
              'Section Helper consists of a title, content area and an action button.',
            source: examples.structure,
          }),

          title('Variations'),

          example({
            title: 'Child Elements',
            description:
              'A default child element of a SectionHelper is a paragraph. It can also contain any other component.',
            source: examples.children,
          }),

          example({
            title: 'Close (optional)',
            description:
              'Use close button when helper message is a suggestion only and can be dismissed.',
            source: examples.close,
          }),

          example({
            title: 'Title (optional)',
            description: 'Use Title to highlight the purpose of the helper.',
            source: examples.title,
          }),

          example({
            title: 'Action (optional)',
            description:
              'Section Helper can have a single button that enables the user to act on the message.',
            source: examples.action,
          }),

          title('Constraints'),

          example({
            title: 'Component Width',
            description:
              'Section helper inherits parent container width (100%). Height adapts to the content.',
            source: examples.componentWidth,
          }),

          example({
            title: 'Content Width',
            description:
              'By default Section Helper content has a set maximum width. Extend it to full width by setting fullWidth to true.',
            source: examples.contentWidth,
          }),

          title('Advanced Examples'),

          example({
            title: 'Usage in a Card',
            description:
              'This example showcase section helper used in a card layout.',
            source: examples.cardExample,
          }),

          code({
            title: 'Usage in a Page',
            compact: true,
            description:
              'This example showcase section helper used in a page layout.',
            source: examples.pageExample,
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
