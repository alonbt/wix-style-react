import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelledElement from '../LabelledElement';
import Input from '../../Input';

const commonProps = {
  label: 'First Name',
};

const tests = [
  {
    describe: 'Uncontrolled_Children',
    its: [
      {
        it: 'should have label placed in the middle of the input',
        props: {
          children: <Input size="large" />,
        },
      },
    ],
  },
  {
    describe: 'Controlled_Children',
    its: [
      {
        it: 'should have label placed in the middle of the input',
        props: {
          children: <Input size="large" value="" />,
        },
      },
      {
        it: 'should have label placed at the top of the input',
        props: {
          value: 'asddas',
          children: <Input size="large" value="asddas" />,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `LabelledElement${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <LabelledElement {...commonProps} {...props} />);
  });
});
