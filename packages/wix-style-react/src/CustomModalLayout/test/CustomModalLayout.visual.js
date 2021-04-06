import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import CustomModalLayout from '../CustomModalLayout';
import Text from '../../Text/Text';
import Checkbox from '../../Checkbox';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const LONG_CONTENT = (
  <Text>
    {new Array(100)
      .fill(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`)
      .join(' ')}
  </Text>
);

const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const commonProps = {
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  title: 'Title',
  subtitle: 'Subtitle',
  children: SHORT_CONTENT,
  onCloseButtonClick: () => {},
};

const tests = [
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
    describe: 'scroll',
    its: [
      {
        it: 'long text should be scrollable. title and footer should be sticky',
        props: {
          children: LONG_CONTENT,
          wait: 500,
        },
      },
    ],
  },
  {
    describe: 'header',
    its: [
      {
        it: 'showHeaderDivider',
        props: {
          showHeaderDivider: true,
        },
      },
    ],
  },
  {
    describe: 'content',
    its: [
      {
        it: 'removeContentPadding',
        props: {
          children: LONG_CONTENT,
          removeContentPadding: true,
        },
      },
    ],
  },
  {
    describe: 'footer',
    its: [
      {
        it: 'empty footer',
        props: {
          primaryButtonText: false,
          secondaryButtonText: false,
        },
      },
      {
        it: 'with sideActions',
        props: {
          sideActions: <Checkbox>Check</Checkbox>,
        },
      },
      {
        it: 'showFooterDivider',
        props: {
          showFooterDivider: true,
        },
      },
    ],
  },
  {
    describe: 'footnote',
    its: [
      {
        it: 'basic',
        props: {
          footnote: <span>Footnote text goes here</span>,
        },
      },
    ],
  },
  {
    describe: 'width',
    its: [
      {
        it: '800px',
        props: {
          width: '800px',
        },
      },
    ],
  },
  {
    describe: 'style',
    its: [
      {
        it: 'custom style',
        props: {
          style: { backgroundColor: 'pink' },
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without title',
        props: {
          title: false,
        },
      },
      {
        it: 'without subtitle',
        props: {
          subtitle: false,
        },
      },
      {
        it: 'without title & subtitle',
        props: {
          title: false,
          subtitle: false,
        },
      },
      {
        it: 'without content',
        props: {
          content: false,
        },
      },
      {
        it: 'without actions',
        props: {
          primaryButtonText: false,
          secondaryButtonText: false,
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

const InteractiveCustomModalLayout = ({ wait, ...props }) => {
  const [testReady, setTestReady] = useState(false);
  useEffect(() => {
    if (wait) {
      setTimeout(() => setTestReady(true), wait);
    } else {
      setTestReady(true);
    }
  }, [wait]);
  return (
    <div data-test-ready={testReady}>
      <CustomModalLayout {...props} />
    </div>
  );
};

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) =>
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}CustomModalLayout/${describe}`,
        module,
      ).add(
        it,
        () =>
          testWithTheme(
            <InteractiveCustomModalLayout {...commonProps} {...props} />,
          ),
        { eyes: { waitBeforeScreenshot: `[data-test-ready="true"]` } },
      );
    });
  });

storiesOf(`Layout And Spacing| CustomModalLayout`, module).add('sanity', () => (
  <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
    <CustomModalLayout {...commonProps} />
  </WixStyleReactProvider>
));
