import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../Modal';
import Box from '../../Box';

const fullScreenProps = {
  height: '100%',
  width: '100%',
};

const tests = [
  {
    its: [
      {
        it: 'without close button',
        props: {
          title: 'Modal without close button',
        },
      },
      {
        it: 'with close button',
        props: {
          shouldDisplayCloseButton: true,
          title: 'Modal with close button',
        },
      },
    ],
  },
  {
    describe: 'screen',
    its: [
      {
        it: 'default',
        props: {
          title: 'Full viewport modal with default screen',
          boxProps: fullScreenProps,
        },
      },
      {
        it: 'full',
        props: {
          screen: 'full',
          title: 'Full viewport modal with screen: "full"',
          boxProps: fullScreenProps,
        },
      },
      {
        it: 'desktop',
        props: {
          screen: 'desktop',
          title: 'Full viewport modal with screen: "desktop"',
          boxProps: fullScreenProps,
        },
      },
      {
        it: 'mobile',
        props: {
          screen: 'mobile',
          title: 'Full viewport modal with screen: "mobile"',
          boxProps: fullScreenProps,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    const { title, boxProps = {}, ...modalProps } = props;
    storiesOf(`Modal${describe ? '/' + describe : ''}`, module).add(it, () => (
      <Modal isOpen {...modalProps}>
        <Box
          padding="10px"
          align="center"
          verticalAlign="middle"
          backgroundColor="white"
          {...boxProps}
        >
          {title}
        </Box>
      </Modal>
    ));
  });
});
