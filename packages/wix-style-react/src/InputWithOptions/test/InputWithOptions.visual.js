import { storiesOf } from '@storybook/react';
import Box from '../../Box';
import React from 'react';
import { InputWithOptions } from '../../index';
import { inputWithOptionsTestkitFactory } from '../../../testkit';

const defaultProps = {
  dataHook: 'inputwithoptions',
  options: [
    {
      id: 0,
      value: 'First option',
    },
    {
      id: 2,
      value: 'Second option',
    },
    {
      id: 3,
      value: <span style={{ color: 'red' }}>Node option</span>,
    },
    {
      id: 4,
      value: '-',
    },
    {
      id: 5,
      value: 'A very long option text and the line will break automatically',
    },
  ],
};

const createDriver = () =>
  inputWithOptionsTestkitFactory({
    wrapper: document.body,
    dataHook: 'inputwithoptions',
  });

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'basic',
        props: {},
      },
      {
        it: 'selected',
        props: {
          selectedId: 2,
        },
      },
      {
        it: 'disabled',
        props: {
          disabled: true,
        },
      },
      {
        it: 'highlight',
        props: {
          highlight: true,
          value: 'tion',
        },
      },
    ],
  },
];

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    if (this.props.disabled) return;

    const { driver } = createDriver();
    await driver.focus();
    await driver.pressKey('ArrowDown');
  }

  render() {
    return (
      <Box height="24px" padding="50px">
        <InputWithOptions {...defaultProps} {...this.props} />
      </Box>
    );
  }
}

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`InputWithOptions${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box direction="vertical">
          <Box margin={2}>
            <InteractiveEyeTest {...props} />
          </Box>
        </Box>
      ),
    );
  });
});
