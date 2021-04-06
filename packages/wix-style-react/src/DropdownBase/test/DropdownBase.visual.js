import React, { useEffect } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { storiesOf } from '@storybook/react';
import DropdownBase from '..';

const dataHook = 'interactive';
const triggerElementDatahook = 'interactive-button';

const DropdownBaseWrapper = ({ componentDidMount, ...rest }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return <DropdownBase dataHook={dataHook} {...rest} />;
};

const defaultProps = {
  options: [
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fourth option' },
    { id: 4, value: 'Fifth option' },
    { id: 5, value: 'Sixth option' },
  ],
  children: ({ toggle, selectedOption = {} }) => {
    return (
      <button data-hook={triggerElementDatahook} onClick={toggle}>
        {selectedOption.value || 'Please choose'}
      </button>
    );
  },
};

const tests = [
  {
    describe: 'DropdownBase',
    its: [
      {
        it: 'should render the RGB inputs when clicking on the RGB tab',
        props: {
          ...defaultProps,
        },
        componentDidMount: () => {
          ReactTestUtils.Simulate.click(
            document.querySelector(`[data-hook=${triggerElementDatahook}]`),
          );
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`DropdownBase${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div style={{ padding: '60px' }}>
          <DropdownBaseWrapper
            {...props}
            componentDidMount={componentDidMount}
          />
        </div>
      ),
    );
  });
});
