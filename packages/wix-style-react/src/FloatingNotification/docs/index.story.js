import icons from '../../../stories/utils/icons-for-story';
import {
  tab,
  tabs,
  api,
  testkit,
  description,
  playground,
  importExample,
  example as baseExample,
  title,
  header,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import FloatingNotification from '..';
import { TYPES } from '../constants';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const trashLabel = { label: 'Trash' };
const linkProps = {
  as: 'a',
  href: 'https://www.wix.com',
  label: 'Wix.com',
};
const textButtonPropsExamples = [
  { label: 'Standard', value: trashLabel },
  { label: 'Link', value: linkProps },
];

const undoLabel = { label: 'Undo' };
const buttonPropsExamples = [
  { label: 'Stndard', value: undoLabel },
  { label: 'Link', value: linkProps },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FloatingNotification,
  componentPath: '..',

  componentProps: {
    type: TYPES.standard,
    text: 'Some content text',
    showCloseButton: true,
    textButtonProps: textButtonPropsExamples[0].value,
    buttonProps: buttonPropsExamples[0].value,
    prefixIcon: null,
  },

  exampleProps: {
    prefixIcon: icons,
    type: Object.values(TYPES),
    textButtonProps: textButtonPropsExamples,
    buttonProps: buttonPropsExamples,
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            'Displays simple and temporary messages or destructive events',
          ),

          importExample(),

          title('Examples'),

          example({
            title: 'Notification types',
            source: examples.types,
          }),

          example({
            title: 'All options',
            source: examples.options,
          }),

          example({
            title: 'Set buttons as anchors with href',
            source: examples.href,
          }),

          example({
            title: 'Defining the width',
            source: examples.fullWidth,
          }),

          example({
            title: 'fullWidth prop',
            source: examples.fullWidthProp,
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
