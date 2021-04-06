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

import MessageModalLayout from '..';
import Checkbox from '../../Checkbox';

import SimpleExample from '!raw-loader!./examples/SimpleExample';
import BasicExample from '!raw-loader!./examples/BasicExample';
import FootnoteExample from '!raw-loader!./examples/FootnoteExample';
import IllustrationExample from '!raw-loader!./examples/IllustrationExample';
import DestructiveThemeExample from '!raw-loader!./examples/DestructiveThemeExample';
import ThemeExample from '!raw-loader!./examples/ThemeExample';
import HelpButtonExample from '!raw-loader!./examples/HelpButtonExample';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MessageModalLayout,
  componentPath: '..',

  componentProps: {
    title: 'Modal title',
    children: 'Lorem ipsum',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    sideActions: <Checkbox>Check</Checkbox>,
    footnote: 'footnote text',
    onCloseButtonClick: () => {},
  },

  exampleProps: {},

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/MessageModalLayout/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Use this component inside a Modal to display content in the MessageModalLayout. You may place a title and/or a footer with actions relevant to the displayed content',
          }),

          importExample(
            "import { MessageModalLayout } from 'wix-style-react';",
          ),
          divider(),
          title('Examples'),
          example({
            title: 'Opening a modal',
            text: 'Use Modal component to reveal the message modal layout.',
            source: SimpleExample,
          }),
          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: BasicExample,
          }),
          example({
            title: 'Footnote Example',
            description: 'A simple example with Footnote',
            source: FootnoteExample,
          }),
          example({
            title: 'Help Button Example',
            text: 'A simple example with a help button shown',
            source: HelpButtonExample,
          }),
          example({
            title: 'Illustration Example',
            description: 'A simple example with illustration',
            source: IllustrationExample,
          }),
          example({
            title: 'Destructive Theme Example',
            description:
              'A simple example with destructive theme and illustration',
            source: DestructiveThemeExample,
          }),
          example({
            title: 'Premium Theme Example',
            text: 'A simple example with premium theme and illustration',
            source: ThemeExample,
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
