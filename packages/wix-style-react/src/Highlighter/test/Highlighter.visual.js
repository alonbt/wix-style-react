import React from 'react';
import { storiesOf } from '@storybook/react';

import Highlighter from '../Highlighter';

const defaultProps = {
  children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
  consequuntur earum eius eum fugiat`,
};

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'should render',
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it }) => {
    storiesOf(`Highlighter${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div>
          <Highlighter {...defaultProps} />
        </div>
      ),
    );
  });
});
