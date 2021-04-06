import { storiesOf } from '@storybook/react';
import React from 'react';
import Download from 'wix-ui-icons-common/Download';
import Star from 'wix-ui-icons-common/Star';
import Add from 'wix-ui-icons-common/Add';
import ChevronDownSmall from 'wix-ui-icons-common/ChevronDownSmall';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Print from 'wix-ui-icons-common/Print';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import Box from '../../Box';
import TableActionCell from '../TableActionCell';
import { tableActionCellPrivateUniDriverFactory } from './TableActionCell.private.uni.driver';

const interactiveDataHook = 'interactive-tableactioncell';

const tableActionCellUniTestkitFactory = uniTestkitFactoryCreator(
  tableActionCellPrivateUniDriverFactory,
);

const createDriver = dataHook =>
  tableActionCellUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const { componentDidMount, ...restProps } = this.props;

    return (
      <Box padding={20}>
        <TableActionCell dataHook={interactiveDataHook} {...restProps} />
      </Box>
    );
  }
}

const interactiveTests = [
  {
    describe: 'Secondary Actions',
    its: [
      {
        it: 'Should display a divider',
        props: {
          secondaryActions: [
            {
              text: 'Star',
              icon: <Star />,
            },
            { divider: true },
            {
              text: 'Download',
              icon: <Download />,
            },
          ],
          numOfVisibleSecondaryActions: 0,
        },
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.clickSecondaryActions();
        },
      },
    ],
  },
  {
    describe: 'Small actions',
    its: [
      {
        it: 'Should display small actions',
        props: {
          alwaysShowSecondaryActions: true,
          size: 'small',
          primaryAction: {
            onClick: () => {},
            text: 'text',
            skin: 'standard',
            prefixIcon: <Add />,
            suffixIcon: <ChevronDownSmall />,
          },
          secondaryActions: [
            {
              text: 'Star',
              icon: <Star />,
              onClick: () => window.alert('Star action was triggered.'),
            },
            {
              text: 'Download',
              icon: <Download />,
              onClick: () => window.alert('Download action was triggered.'),
            },
            {
              text: 'Duplicate',
              icon: <Duplicate />,
              onClick: () => window.alert('Duplicate action was triggered.'),
            },
            {
              text: 'Print',
              icon: <Print />,
              onClick: () => window.alert('Print action was triggered.'),
            },
          ],
        },
      },
      {
        it: 'Should display small actions',
        props: {
          alwaysShowSecondaryActions: true,
          size: 'small',
          primaryAction: {
            onClick: () => {},
            text: 'text',
            skin: 'standard',
          },
          secondaryActions: [
            {
              text: 'Star',
              icon: <Star />,
              onClick: () => window.alert('Star action was triggered.'),
            },
            {
              text: 'Download',
              icon: <Download />,
              onClick: () => window.alert('Download action was triggered.'),
            },
            {
              text: 'Duplicate',
              icon: <Duplicate />,
              onClick: () => window.alert('Duplicate action was triggered.'),
            },
            {
              text: 'Print',
              icon: <Print />,
              onClick: () => window.alert('Print action was triggered.'),
            },
          ],
        },
      },
      {
        it: 'Should display icon prefix in small actions',
        props: {
          alwaysShowSecondaryActions: true,
          size: 'small',
          primaryAction: {
            onClick: () => {},
            text: 'text',
            skin: 'standard',
            prefixIcon: <Add />,
          },
          secondaryActions: [
            {
              text: 'Star',
              icon: <Star />,
              onClick: () => window.alert('Star action was triggered.'),
            },
            {
              text: 'Download',
              icon: <Download />,
              onClick: () => window.alert('Download action was triggered.'),
            },
            {
              text: 'Duplicate',
              icon: <Duplicate />,
              onClick: () => window.alert('Duplicate action was triggered.'),
            },
            {
              text: 'Print',
              icon: <Print />,
              onClick: () => window.alert('Print action was triggered.'),
            },
          ],
        },
      },
      {
        it: 'Should display icon suffix in small actions',
        props: {
          alwaysShowSecondaryActions: true,
          size: 'small',
          primaryAction: {
            onClick: () => {},
            text: 'text',
            skin: 'standard',
            suffixIcon: <ChevronDownSmall />,
          },
          secondaryActions: [
            {
              text: 'Star',
              icon: <Star />,
              onClick: () => window.alert('Star action was triggered.'),
            },
            {
              text: 'Download',
              icon: <Download />,
              onClick: () => window.alert('Download action was triggered.'),
            },
            {
              text: 'Duplicate',
              icon: <Duplicate />,
              onClick: () => window.alert('Duplicate action was triggered.'),
            },
            {
              text: 'Print',
              icon: <Print />,
              onClick: () => window.alert('Print action was triggered.'),
            },
          ],
        },
      },
    ],
  },
];

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(
      `TableActionCell${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
