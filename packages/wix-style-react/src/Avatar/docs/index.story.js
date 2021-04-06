import React from 'react';
import * as icons from 'wix-ui-icons-common';

import Avatar from '..';
import { storySettings } from './storySettings';

import { avatarColorList } from '../constants';

import {
  api,
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

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import { CounterBadge } from '../..';
import Box from '../../Box';

const example = config => baseExample({ components: allComponents, ...config });

const IMG_REAL_URL = 'https://randomuser.me/api/portraits/women/39.jpg';
const IMG_INVALID_URL = 'https://1234.me/4321.jpg';

const PhotoCamera = icons.PhotoCamera;

const indicationExamples = [
  {
    label: 'Icon',
    value: <PhotoCamera size="24" />,
  },
  {
    label: 'SVG',
    value: (
      <svg viewBox="0 0 18 18" fill="hotpink" width="18" height="18">
        <path
          id="addsmall-a"
          d="M10 9L10 5 9 5 9 9 5 9 5 10 9 10 9 14 10 14 10 10 14 10 14 9z"
        ></path>
      </svg>
    ),
  },
];

const customIndicationExamples = [
  {
    label: 'Facebook Logo',
    value: (
      <Box
        align="center"
        verticalAlign="middle"
        backgroundColor="#3b5998"
        color="white"
        minHeight="100%"
      >
        <icons.Facebook size="18" />
      </Box>
    ),
  },
  {
    label: 'Counter Badge',
    value: <CounterBadge skin="warning">3</CounterBadge>,
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Avatar,
  componentPath: '..',

  componentProps: {
    name: 'John Doe',
    placeholder: undefined,
    imgProps: undefined,
    size: undefined,
    color: undefined,
    shape: undefined,
    text: undefined,
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
    ariaLabel: 'Avatar for John Doe',
    indication: indicationExamples[0].value,
    customIndication: undefined,
    presence: undefined,
    loading: false,
    showIndicationOnHover: false,
  },
  exampleProps: {
    onIndicationClick: () => 'Clicked!',
    indication: indicationExamples,
    customIndication: customIndicationExamples,
    size: [
      'size90',
      'size72',
      'size60',
      'size48',
      'size36',
      'size30',
      'size24',
      'size18',
    ],
    color: avatarColorList,
    shape: [
      { label: 'circle (default)', value: 'circle' },
      { label: 'square', value: 'square' },
    ],
    imgProps: [
      { label: 'With Image', value: { src: IMG_REAL_URL } },
      { label: 'With Invalid Image URL', value: { src: IMG_INVALID_URL } },
    ],
    placeholderPresence: Object.entries(icons).map(([name, icon]) => ({
      label: name,
      value: React.createElement(icon),
    })),
  },

  sections: [
    header({
      component: <Avatar color="A1" name={'John Doe'} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`
Avatar is a type of element that visually represents a user, either as an image, placeholder or text (name initials).\n
If more than one of these props is supplied (with \`name\` prop giving default value to the text\` prop), then the resolved content type for display goes according to this priority:\n
image -> icon -> text.

          `),

          importExample(),

          divider(),

          title('Examples'),

          example({ title: 'Image', source: examples.image }),

          example({
            title: 'Image Error (Icon Placeholder)',
            source: examples.imageError,
          }),

          example({
            title: 'Image Error (Initials Placeholder)',
            source: examples.imageErrorInitials,
          }),

          example({ title: 'Size', source: examples.sizes }),

          example({ title: 'Square Shape', source: examples.squareShape }),

          example({ title: 'Colors', source: examples.colors }),

          example({
            title: 'Placeholder (No name)',
            source: examples.placeholder,
          }),

          example({ title: 'Custom text', source: examples.customText }),

          example({ title: 'Presence', source: examples.presence }),

          example({ title: 'Indication', source: examples.indication }),

          example({ title: 'Loading', source: examples.loading }),

          example({
            title: 'Custom Indication',
            source: examples.customIndication,
          }),

          example({ title: 'Click', source: examples.click }),
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
