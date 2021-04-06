import React from 'react';
import { storiesOf } from '@storybook/react';
import AudioPlayer from '../AudioPlayer';

const commonProps = {};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {
          src: 'example.mp3',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${AudioPlayer.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AudioPlayer {...commonProps} {...props} />);
  });
});
