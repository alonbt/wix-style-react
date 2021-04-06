import React from 'react';
import { storiesOf } from '@storybook/react';

import GenericModalLayout from '..';
import Modal from '../../Modal';

const defaultProps = {
  header: <div>header</div>,
  content: <div>content</div>,
  footer: <div>footer</div>,
};

const tests = [
  {
    describe: 'default',
    its: [
      {
        it: 'example',
        props: {},
      },
    ],
  },
  {
    describe: 'full screen',
    its: [
      {
        it: 'example',
        props: {
          fullscreen: true,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `GenericModalLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <Modal isOpen="true" contentLabel="Generic Modal Layout">
        <GenericModalLayout {...defaultProps} {...props} />
      </Modal>
    ));
  });
});
