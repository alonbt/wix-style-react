import React from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import AddressInput from '../AddressInput';
import { addressInputItemBuilder } from '../../AddressInputItem';
import { addressInputPrivateDriverFactory } from './AddressInput.private.uni.driver';

const predictions = [
  {
    id: 0,
    displayLabel: 'First option, text',
    mainLabel: 'First option',
    secondaryLabel: 'text',
  },
  {
    id: 1,
    displayLabel: 'Second option, text',
    mainLabel: 'Second option',
    secondaryLabel: 'text',
  },
];
const options = predictions.map(addressInputItemBuilder);

const defaultProps = {
  dataHook: 'address-input-test',
};

const addressInputTestkitFactory = uniTestkitFactoryCreator(
  addressInputPrivateDriverFactory,
);

const createDriver = () =>
  addressInputTestkitFactory({
    wrapper: document.body,
    dataHook: defaultProps.dataHook,
  });

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'basic',
        props: {},
        closed: true,
      },
      {
        it: 'with options',
        props: {
          value: 'opt',
          options,
        },
      },
      {
        it: 'no results',
        props: {
          value: 'opt',
          options: [],
          noResultsText: 'No results found',
        },
      },
      {
        it: 'loading - closed dropdown',
        props: {
          status: 'loading',
          value: 'opt',
        },
        closed: true,
      },
      {
        it: 'loading - open dropdown',
        props: {
          status: 'loading',
          value: 'opt',
        },
      },
      {
        it: 'error',
        props: {
          status: 'error',
          statusMessage: 'Something went wrong',
        },
        closed: true,
      },
      {
        it: 'not round',
        props: {
          border: 'standard',
        },
        closed: true,
      },
    ],
  },
];

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    const { disabled, closed } = this.props;
    if (disabled || closed) {
      return;
    }

    const driver = createDriver();
    await driver.clickInput();
    await driver.pressArrowDown();
  }

  render() {
    const { closed, ...props } = this.props;
    return <AddressInput {...defaultProps} {...props} />;
  }
}

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, closed }) => {
    storiesOf(`AddressInput${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <InteractiveEyeTest closed={closed} {...props} />,
    );
  });
});
