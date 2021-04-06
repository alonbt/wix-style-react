import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoCircle from 'wix-ui-icons-common/InfoCircle';
import { skins, SIZES } from '../constants';
import Accordion, { accordionItemBuilder } from '../Accordion';
import Text from '../../Text';
import { Layout, Cell } from '../../Layout';
import Card from '../../Card';
import WixStyleReactProvider from '../../WixStyleReactProvider';

export const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

storiesOf('Accordion', module).add('simple', () => (
  <Accordion
    items={[
      accordionItemBuilder({
        title: 'First Row',
        children: <Text>${text}</Text>,
      }),
      accordionItemBuilder({
        title: 'Second Row',
        children: <Text>${text}</Text>,
      }),
    ]}
  />
));

storiesOf('Accordion', module).add('withButton', () => (
  <Accordion
    items={[
      accordionItemBuilder({
        title: 'First Row With Button',
        children: <Text>${text}</Text>,
        buttonType: 'button',
        expandLabel: 'Show More',
        collapseLabel: 'Less',
      }),
      accordionItemBuilder({
        title: 'Second Row With Icon',
        children: <Text>${text}</Text>,
        icon: <InfoCircle />,
        expandLabel: 'Show More',
        collapseLabel: 'Less',
      }),
    ]}
  />
));

storiesOf('Accordion', module).add('multiple', () => (
  <Accordion
    multiple
    items={[
      accordionItemBuilder({
        title: 'Disable Row',
        children: <Text>${text}</Text>,
        collapseLabel: 'Less',
        open: true,
        disabled: true,
      }),
      accordionItemBuilder({
        title: 'First Initially Open Row',
        children: <Text>${text}</Text>,
        initiallyOpen: true,
        collapseLabel: 'Less',
      }),
      accordionItemBuilder({
        title: 'Second Row',
        children: <Text>${text}</Text>,
        open: true,
        collapseLabel: 'Less',
      }),
      accordionItemBuilder({
        title: 'Third Row',
        children: <Text>${text}</Text>,
        open: true,
        collapseLabel: 'Less',
      }),
    ]}
  />
));

storiesOf('Accordion', module).add('skins', () => (
  <Layout>
    {Object.values(skins).map(skinColor => (
      <Cell span={4}>
        <Accordion
          multiple
          skin={skinColor}
          items={[
            accordionItemBuilder({
              title: 'First Initially Open Row',
              children: <Text>${text}</Text>,
              initiallyOpen: true,
              collapseLabel: 'Less',
            }),
            accordionItemBuilder({
              title: 'Second Row',
              children: <Text>${text}</Text>,
              open: true,
              collapseLabel: 'Less',
            }),
            accordionItemBuilder({
              title: 'Third Row',
              children: <Text>${text}</Text>,
              collapseLabel: 'Less',
            }),
            accordionItemBuilder({
              title: 'Disable Row',
              children: <Text>${text}</Text>,
              collapseLabel: 'Less',
              disabled: true,
            }),
          ]}
        />
      </Cell>
    ))}
  </Layout>
));

storiesOf('Accordion', module).add('skins and shadow', () => (
  <Layout>
    {Object.values(skins).map(skinColor =>
      Object.values([false, true]).map(hideShadow => (
        <Cell span={4}>
          <Accordion
            multiple
            skin={skinColor}
            hideShadow={hideShadow}
            items={[
              accordionItemBuilder({
                title: 'First Initially Open Row',
                children: <Text>${text}</Text>,
                initiallyOpen: true,
                collapseLabel: 'Less',
              }),
            ]}
          />
        </Cell>
      )),
    )}
  </Layout>
));

storiesOf('Accordion', module).add('inCard', () => (
  <Card>
    <Card.Header title="Card with Accordion" />
    <Card.Divider />
    <Accordion
      items={[
        accordionItemBuilder({
          title: 'First Item',
          icon: <InfoCircle />,
          expandLabel: 'More',
          collapseLabel: 'Less',
          buttonType: 'button',
          children: <Text>${text}</Text>,
        }),
      ]}
    />
  </Card>
));

storiesOf('Accordion', module).add('button types', () => (
  <Layout>
    {Object.values([false, true]).map(open => (
      <Cell span={6}>
        <Accordion
          items={[
            accordionItemBuilder({
              title: 'Item',
              children: <Text>${text}</Text>,
              open,
              showLabel: 'always',
            }),
          ]}
        />
      </Cell>
    ))}
    {Object.values(['textButton', 'button', 'node']).map(buttonType =>
      Object.values([false, true]).map(open => (
        <Cell span={6}>
          <Accordion
            items={[
              accordionItemBuilder({
                title: 'Item',
                children: <Text>${text}</Text>,
                expandLabel: 'expand',
                collapseLabel: 'collapse',
                buttonType,
                open,
                showLabel: 'always',
              }),
            ]}
          />
        </Cell>
      )),
    )}
  </Layout>
));

storiesOf('Accordion', module).add('sizes', () => (
  <Layout>
    {Object.values(SIZES).map(size => (
      <Cell span={4}>
        <Accordion
          size={size}
          items={[
            accordionItemBuilder({
              title: 'First Row',
              children: <Text>${text}</Text>,
            }),
          ]}
        />
      </Cell>
    ))}
  </Layout>
));

storiesOf(`Layout And Spacing| Accordion`, module).add('sanity', () => (
  <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
    <Layout>
      <Cell>
        <Accordion
          items={[
            accordionItemBuilder({
              title: 'Item',
              children: <Text>${text}</Text>,
              showLabel: 'always',
              initiallyOpen: true,
            }),
          ]}
        />
      </Cell>
      <Cell>
        <Accordion
          skin="light"
          items={[
            accordionItemBuilder({
              title: 'Item',
              children: <Text>${text}</Text>,
              showLabel: 'always',
              initiallyOpen: true,
            }),
          ]}
        />
      </Cell>
      <Cell>
        <Accordion
          hideShadow
          items={[
            accordionItemBuilder({
              title: 'Item',
              children: <Text>${text}</Text>,
              showLabel: 'always',
              initiallyOpen: true,
            }),
          ]}
        />
      </Cell>
      <Cell>
        <Accordion
          hideShadow
          skin="light"
          items={[
            accordionItemBuilder({
              title: 'Item',
              children: <Text>${text}</Text>,
              showLabel: 'always',
              initiallyOpen: true,
            }),
          ]}
        />
      </Cell>
    </Layout>
  </WixStyleReactProvider>
));
