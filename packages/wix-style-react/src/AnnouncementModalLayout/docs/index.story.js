import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  example as baseExample,
  divider,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AnnouncementModalLayout from '..';

import SimpleExample from '!raw-loader!./examples/SimpleExample';
import BasicExample from '!raw-loader!./examples/BasicExample';
import FootnoteExample from '!raw-loader!./examples/FootnoteExample';
import SecondaryButtonExample from '!raw-loader!./examples/SecondaryButtonExample';
import NoIllustrationExample from '!raw-loader!./examples/NoIllustrationExample';
import ThemeExample from '!raw-loader!./examples/ThemeExample';
import HelpButtonExample from '!raw-loader!./examples/HelpButtonExample';
import Text from '../../Text';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AnnouncementModalLayout,
  componentPath: '..',

  componentProps: {
    title: 'All Your Info In One Place',
    children: (
      <Text>
        Meet your brand new General Info page.
        <br />
        We brought all your business information together here.
      </Text>
    ),
    primaryButtonText: 'Start Now',
    linkText: 'Link',
    onCloseButtonClick: () => {},
    illustration: 'generic_upgrade.svg',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/AnnouncementModalLayout/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Use this component inside a Modal component to display content in the AnnouncementModalLayout. You may place a title and/or a footer with actions relevant to the displayed content',
          }),
          importExample(
            "import { AnnouncementModalLayout } from 'wix-style-react';",
          ),
          divider(),
          title('Examples'),
          example({
            title: 'Opening a modal',
            text:
              'Use Modal component to reveal the announcement modal layout.',
            source: SimpleExample,
          }),
          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: BasicExample,
          }),
          example({
            title: 'Secondary Button Example',
            text: 'With a Secondary Button action instead of the link.',
            source: SecondaryButtonExample,
          }),
          example({
            title: 'No Illustration Example',
            source: NoIllustrationExample,
          }),
          example({
            title: 'Footnote Example',
            text: 'The basic example with the addition of a footnote',
            source: FootnoteExample,
          }),
          example({
            title: 'Theme Example',
            text: 'The basic example with a premium theme',
            source: ThemeExample,
          }),
          example({
            title: 'Help Button Example',
            text: 'The basic example with a help button shown',
            source: HelpButtonExample,
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
