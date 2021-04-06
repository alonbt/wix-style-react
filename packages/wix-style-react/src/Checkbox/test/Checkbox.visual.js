import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import { checkboxUniDriverFactory } from './Checkbox.private.uni.driver';
import Box from '../../Box';
import { FormField } from 'wix-style-react';

const dataHook = 'storybook-checkbox';
const checkboxId = 'checkboxId';

const checkboxUniTestkitFactory = uniTestkitFactoryCreator(
  checkboxUniDriverFactory,
);
const createDriver = () =>
  checkboxUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const InteractiveCheckbox = ({ componentDidMount, ...props }) => {
  const [isChecked, setChecked] = useState(false);
  const onChange = () => setChecked(!isChecked);

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  return (
    <div style={{ padding: '45px' }}>
      <Checkbox
        checked={isChecked}
        onChange={onChange}
        dataHook={dataHook}
        {...props}
      >
        Hello World!
      </Checkbox>
    </div>
  );
};

const defaultProps = {
  onChange: e => e.stopPropagation(),
  size: 'medium',
  children: 'Hello World!',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'basic',
        props: {},
      },
      {
        it: 'error',
        props: { hasError: true },
      },
      {
        it: 'selectionArea',
        props: { selectionArea: 'always' },
      },
      {
        it: 'small label',
        props: { size: 'small' },
      },
    ],
  },
  {
    describe: 'vertical align',
    its: [
      {
        it: 'center (default)',
        props: {
          vAlign: 'center',
        },
      },
      {
        it: 'top',
        props: {
          vAlign: 'top',
        },
      },
      {
        it: 'two lines - center',
        props: {
          vAlign: 'center',
          children: (
            <React.Fragment>
              <div>I have two lines</div>
              <div>My box is centered</div>
            </React.Fragment>
          ),
        },
      },
      {
        it: 'two lines - top',
        props: {
          vAlign: 'top',
          children: (
            <React.Fragment>
              <div>I have two lines</div>
              <div>My box is on top</div>
            </React.Fragment>
          ),
        },
      },
      {
        it: 'selectionArea + center',
        props: {
          vAlign: 'center',
          selectionArea: 'always',
          children: (
            <React.Fragment>
              <div>I have two lines</div>
              <div>My box is centered</div>
            </React.Fragment>
          ),
        },
      },
      {
        it: 'selectionArea + top',
        props: {
          vAlign: 'top',
          selectionArea: 'always',
          children: (
            <React.Fragment>
              <div>I have two lines</div>
              <div>My box is on top</div>
            </React.Fragment>
          ),
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'tooltip',
    its: [
      {
        it: 'displayed on checkbox hover when error exists',
        props: { hasError: true, errorMessage: 'error' },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.hoverInput();
        },
      },
    ],
  },
  {
    describe: 'focus',
    its: [
      {
        it: 'displayed when checkbox has focus',
        props: {},
        componentDidMount: async () => {
          await createDriver().focus();
        },
      },
      {
        it: 'displayed when checkbox has error and focus',
        props: { hasError: true },
        componentDidMount: async () => {
          await createDriver().focus();
        },
      },
    ],
  },
  {
    describe: 'click',
    its: [
      {
        it: 'should select checkbox',
        props: {},
        componentDidMount: async () => {
          await createDriver().click();
        },
      },
      {
        it: 'should not select checkbox when disabled',
        props: { disabled: true },
        componentDidMount: async () => {
          await createDriver().click();
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}Checkbox${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <Box direction="vertical">
            <Box margin={2}>
              <Checkbox {...defaultProps} {...props} />
            </Box>
            <Box margin={2}>
              <Checkbox checked {...defaultProps} {...props} />
            </Box>
            <Box margin={2}>
              <Checkbox indeterminate {...defaultProps} {...props} />
            </Box>
            <Box margin={2}>
              <Checkbox disabled {...defaultProps} {...props} />
            </Box>
            <Box margin={2}>
              <Checkbox checked disabled {...defaultProps} {...props} />
            </Box>
            <Box margin={2}>
              <Checkbox indeterminate disabled {...defaultProps} {...props} />
            </Box>
          </Box>,
        ),
      );
    });
  });

  interactiveTests.forEach(({ describe, its }) => {
    its.forEach(({ it, props, componentDidMount }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}Checkbox${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <InteractiveCheckbox
            {...props}
            componentDidMount={componentDidMount}
          />,
        ),
      );
    });
  });

  storiesOf(
    `${themeName ? `${themeName}|` : ''}Checkbox/FormField`,
    module,
  ).add('FormField', () =>
    testWithTheme(
      <div style={{ padding: '40px' }}>
        <FormField
          dataHook={`${dataHook}-formfield`}
          id={checkboxId}
          infoContent="I help you to fill info"
          label="Checkbox"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <Checkbox id={checkboxId} />
        </FormField>
      </div>,
    ),
  );
};
