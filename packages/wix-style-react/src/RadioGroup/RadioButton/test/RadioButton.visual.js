import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../RadioButton';
import { radioButtonPrivateDriverFactory } from '../RadioButton.private.uni.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const dataHook = 'test-radio-button';
const radioButtonUniTestkitFactory = uniTestkitFactoryCreator(
  radioButtonPrivateDriverFactory,
);
const createDriver = () =>
  radioButtonUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const interactiveProps = {
  wait: 1000,
};

const tests = [
  {
    describe: 'with focus',
    its: [
      {
        it: 'should show focus indication',
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.focus();
        },
      },
      {
        it: 'should not show focus indication when disabled',
        props: {
          disabled: true,
          componentDidMount: async () => {
            const driver = createDriver();
            await driver.focus();
          },
        },
      },
      {
        it: 'should not show focus indication when clicked by mouse',
        props: {
          componentDidMount: async () => {
            const driver = createDriver();
            await driver.click();
          },
        },
      },
    ],
  },
];

const InteractiveRadioButton = ({ wait, ...props }) => {
  const [testStatus, setTestStatus] = useState(false);
  useEffect(() => {
    let timeout;
    if (wait) {
      timeout = setTimeout(() => setTestStatus(true), wait);
    } else {
      setTestStatus(true);
    }
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [wait]);
  return (
    <div data-test-ready={testStatus}>
      <RadioButton dataHook={dataHook} {...props}>{`Option 1`}</RadioButton>
    </div>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props = {}, componentDidMount }) => {
    storiesOf(`RadioButton${describe ? '/' + describe : ''}`, module).add(
      it,
      () => {
        useEffect(() => {
          componentDidMount && componentDidMount();
        }, []);
        return <InteractiveRadioButton {...interactiveProps} {...props} />;
      },
      { eyes: { waitBeforeScreenshot: `[data-test-ready="true"]` } },
    );
  });
});
