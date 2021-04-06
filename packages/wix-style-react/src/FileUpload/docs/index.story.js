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
import * as examples from './examples';
import FileUpload from '..';
import Button from '../../Button';
import TextButton from '../../TextButton';

const example = config => baseExample({ components: allComponents, ...config });
const childrenExample = [
  {
    label: 'Button',
    value: ({ openFileUploadDialog }) => (
      <Button onClick={openFileUploadDialog}>Upload file</Button>
    ),
  },
  {
    label: 'TextButton',
    value: ({ openFileUploadDialog }) => (
      <TextButton onClick={openFileUploadDialog}>Upload file</TextButton>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FileUpload,
  componentPath: '..',

  componentProps: {
    capture: 'user',
    multiple: false,
    accept: '',
    children: childrenExample[0].value,
  },

  exampleProps: {
    onChange: () => 'I was called',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${FileUpload.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A wrapper component to support native file upload.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A single file upload button',
            source: examples.simple,
          }),

          example({
            title: 'Upload multiple pictures',
            text: 'Verify only one or more image files can be uploaded',
            source: examples.withMultipleAndAccept,
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
