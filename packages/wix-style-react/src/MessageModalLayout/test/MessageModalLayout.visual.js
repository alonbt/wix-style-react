import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import MessageModalLayout from '../MessageModalLayout';
import Text from '../../Text/Text';
import Checkbox from '../../Checkbox';
import { BASE64_IMAGE } from './data/base64Image';
import { messageModalLayoutPrivateDriverFactory } from './MessageModalLayout.private.driver';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const ILLUSTRATION = <img src={BASE64_IMAGE} height={120} width={120} />;

const commonProps = {
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  sideActions: <Checkbox>Click Me</Checkbox>,
  title: 'Title',
  subtitle: 'Subtitle',
  children: SHORT_CONTENT,
  onCloseButtonClick: () => {},
};

const messageModalLayoutTestkitFactory = testkitFactoryCreator(
  messageModalLayoutPrivateDriverFactory,
);
const dataHook = 'message-modal-layout';
const createDriver = () =>
  messageModalLayoutTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

let tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'illustration',
    its: [
      {
        it: 'with illustration',
        props: {
          illustration: ILLUSTRATION,
        },
      },
    ],
  },
  {
    describe: 'themes',
    its: [
      {
        it: 'premium',
        props: {
          illustration: ILLUSTRATION,
          theme: 'premium',
        },
      },
      {
        it: 'destructive',
        props: {
          illustration: ILLUSTRATION,
          theme: 'destructive',
        },
      },
    ],
  },
];

const layoutTests = [
  {
    describe: 'layout',
    its: [
      {
        it: 'without title',
        props: {
          title: '',
        },
      },
      {
        it: 'without subtitle',
        props: {
          subtitle: '',
        },
      },
      {
        it: 'without title and subtitle',
        props: {
          title: '',
          subtitle: '',
        },
      },
      {
        it: 'without children',
        props: {
          children: false,
        },
      },
      {
        it: 'without actions',
        props: {
          primaryButtonText: false,
          secondaryButtonText: false,
          sideActions: false,
        },
      },
      {
        it: 'max-height',
        props: {
          children: new Array(30).fill(commonProps.children),
        },
      },
      {
        it: 'max-height with illustration',
        props: {
          illustration: <img src={BASE64_IMAGE} height={120} width={120} />,
          children: new Array(30).fill(commonProps.children),
        },
      },
      {
        it: 'with footnote',
        props: {
          footnote: 'footnote text here',
        },
      },
      {
        it: 'with help button',
        props: {
          onHelpButtonClick: () => {},
        },
      },
    ],
  },
];

const scrollTests = [
  {
    describe: 'scroll',
    its: [
      {
        it: 'scrolled to top',
        props: {
          children: new Array(50).fill(SHORT_CONTENT),
          wait: 500,
        },
      },
      {
        it: 'scrolled to middle',
        props: {
          children: new Array(50).fill(SHORT_CONTENT),
          wait: 500,
        },
        componentDidMount: () => {
          createDriver()._scrollContentTo(400);
        },
      },
      // This test is too flaky
      // {
      //   it: 'scrolled to bottom',
      //   props: {
      //     children: new Array(50).fill(SHORT_CONTENT),
      //     wait: 1000,
      //   },
      //   componentDidMount: () => {
      //     createDriver()._scrollContentTo(9999);
      //   },
      // },
    ],
  },
];

tests = tests
  .concat(layoutTests)
  .concat(scrollTests)
  .concat(
    scrollTests.map(d => ({
      describe: 'scroll with illustration',
      its: d.its.map(it => ({
        ...it,
        props: { ...it.props, illustration: ILLUSTRATION },
      })),
    })),
  );

const InteractiveMessageModalLayout = ({ wait, ...props }) => {
  const [testStatus, setTestStatus] = useState(false);
  useEffect(() => {
    if (wait) {
      setTimeout(() => setTestStatus(true), wait);
    } else {
      setTestStatus(true);
    }
  }, [wait]);
  return (
    <div data-test-ready={testStatus}>
      <MessageModalLayout {...props} />
    </div>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(
      `MessageModalLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(
      it,
      () => {
        useEffect(() => {
          componentDidMount && componentDidMount();
        }, []);
        return (
          <InteractiveMessageModalLayout
            dataHook={dataHook}
            {...commonProps}
            {...props}
          />
        );
      },
      { eyes: { waitBeforeScreenshot: `[data-test-ready="true"]` } },
    );
  });
});

storiesOf(`Layout And Spacing| MessageModalLayout`, module).add(
  'sanity',
  () => (
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <MessageModalLayout {...commonProps} />
    </WixStyleReactProvider>
  ),
);
