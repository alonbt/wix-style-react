import React from 'react';
import Box from '../../Box';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Print from 'wix-ui-icons-common/Print';
import More from 'wix-ui-icons-common/More';
import ascendInvoice from '../../../test/assets/ascend-invoice.jpg';
import ModalPreviewLayout from '..';
import Modal from '../../Modal';
import { snap, visualize, story } from 'storybook-snapper';
import { modalPreviewLayoutPrivateDriverFactory } from './ModalPreviewLayout.private.uni.driver';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const dataHook = 'storybook-modal-preview-layout';

const createDriver = () =>
  uniTestkitFactoryCreator(modalPreviewLayoutPrivateDriverFactory)({
    wrapper: document.body,
    dataHook,
  });

const commonProps = {
  title: 'Basic Website Design',
  onClose: () => null,
};

const multipleChildren = ['first', 'second', 'third'].map(ordinalNum => (
  <Box
    width="90vw"
    height="100%"
    align="center"
    verticalAlign="middle"
    backgroundColor="D80"
  >
    {`${ordinalNum} content page`}
  </Box>
));

const actions = (
  <Box align="space-between" width={'276px'}>
    <Button prefixIcon={<Print />} skin="dark">
      Print
    </Button>
    <Button priority="secondary" skin="light">
      Send
    </Button>
    <IconButton priority="secondary" size="small" skin="light">
      <More />
    </IconButton>
  </Box>
);

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'scrollable',
        props: {
          children: (
            <Box>
              <img src={ascendInvoice} />
            </Box>
          ),
          actions,
        },
      },
      {
        it: 'full width',
        props: {
          children: (
            <Box verticalAlign="middle" height="100%">
              <img
                src="https://i.ibb.co/C8HHTJx/rectangle-2x.png"
                width="100%"
                height="550px"
              />
            </Box>
          ),
          actions,
        },
      },
      {
        it: 'simple content',
        props: {
          children: (
            <Box
              align="center"
              verticalAlign="middle"
              backgroundColor="D80"
              width="800px"
              height="100%"
            >
              Simple Content
            </Box>
          ),
        },
      },
    ],
  },
  {
    describe: 'multiple children',
    its: [
      {
        it: 'Navigation buttons on render',
        props: { children: multipleChildren },
      },
      {
        it: 'Navigation buttons on middle child node',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.clickNextNavigationButton();
        },
      },
      {
        it: 'NavigationButton on last child node',
        props: { children: multipleChildren },
        componentDidMount: async () => {
          const driver = createDriver();
          await driver.clickNextNavigationButton();
          await driver.clickNextNavigationButton();
        },
      },
    ],
  },
];

const InteractiveModalPreviewLayout = ({
  componentDidMount,
  onDone,
  ...props
}) => {
  const afterModalOpenCallback = () => {
    componentDidMount && componentDidMount();
    /* waiting to tooltip animation to finish executing */
    setTimeout(onDone, 500);
  };

  return (
    <Modal onAfterOpen={afterModalOpenCallback} isOpen>
      <ModalPreviewLayout {...commonProps} {...props} />
    </Modal>
  );
};

visualize('ModalPreviewLayout', () => {
  tests.forEach(({ describe, its }) => {
    story(describe, () => {
      its.forEach(({ it, props, componentDidMount }) => {
        snap(it, done => (
          <InteractiveModalPreviewLayout
            {...commonProps}
            {...props}
            dataHook={dataHook}
            componentDidMount={componentDidMount}
            onDone={done}
          />
        ));
      });
    });
  });
});
