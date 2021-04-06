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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AudioPlayer from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const audioFiles = [
  {
    label: 'Sample 1',
    value:
      'https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3',
  },
  {
    label: 'Sample 2',
    value:
      'https://music.wixstatic.com/preview/84770f_eb1f6dd925cb4b608e5c86027962b27d-128.mp3',
  },
  {
    label: 'Sample 3',
    value:
      'https://music.wixstatic.com/preview/84770f_954ba2388ca147ff80a873d9cc72ea84-128.mp3',
  },
  {
    label: 'Sample 4',
    value:
      'https://music.wixstatic.com/preview/84770f_85eb27843ea94bd9b484c9f4afb24e6a-128.mp3',
  },
  {
    label: 'Broken link',
    value: 'broken-example.mp3',
  },
];
export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AudioPlayer,
  componentPath: '..',

  componentProps: {
    src: audioFiles[0].value,
    preload: 'metadata',
    webAudioAPI: false,
  },

  exampleProps: {
    onLoad: () => 'I was called',
    onLoadError: message => `I was called with: \"${message}\"`,
    onEnd: () => 'I was called',
    onPause: () => 'I was called!',
    onPlay: () => 'I was called!',
    onSeek: () => 'I was called!',
    src: audioFiles,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AudioPlayer.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'AudioPlayer component is used to load, play, pause and seek through an audio file.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'The component loads an audio file on initialization, press play to hear it.',
            source:
              '<AudioPlayer src="https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3" />',
          }),

          example({
            title: 'Lazy load',
            text: 'The given file is not loaded until play is pressed.',
            source:
              '<AudioPlayer preload="none" src="https://music.wixstatic.com/preview/84770f_954ba2388ca147ff80a873d9cc72ea84-128.mp3" />',
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
