/* eslint-disable no-console */
import React, { Component } from 'react';
import { SingleComponentStacked } from '../../../sharedComponents';
import { layoutSymbolsToComponents } from '../../../../../symbolsComponentsMapping/families/layoutFamily';

import { layoutSymbols } from '../../../../../symbolsComponentsMapping/symbols';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../../../sharedComponents/utils';

import Add from 'wix-ui-icons-common/Add';
import More from 'wix-ui-icons-common/More';
import { Category } from '../../../../../storiesHierarchy';

import {
  Cell,
  Layout,
  Card,
  Page,
  Box,
  Button,
  TextButton,
  Breadcrumbs,
  PopoverMenu,
  IconButton,
  EmptyState,
} from 'wix-style-react';

class ExamplePageWithCard extends Component {
  renderHeader() {
    const ActionBar = () => {
      return (
        <Box>
          <Box>
            <PopoverMenu
              triggerElement={
                <IconButton skin="inverted">
                  <More />
                </IconButton>
              }
            >
              <PopoverMenu.MenuItem
                onClick={() => console.log('PopoverMenu.MenuItem onClick')}
                text="Refresh"
              />
              <PopoverMenu.MenuItem
                onClick={() => console.log('PopoverMenu.MenuItem onClick')}
                text="Trash"
              />
            </PopoverMenu>
          </Box>
          <Box marginLeft="small" marginRight="small">
            <Button skin="light">Cancel</Button>
          </Box>
          <Box>
            <Button>Save</Button>
          </Box>
        </Box>
      );
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => console.log('Breadcrumbs onClick')}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  render() {
    return (
      <Page>
        {this.renderHeader()}
        <Page.Content>
          <Card>
            <Card.Header title="Card Title" />
            <Card.Content>
              <Box height="150px" />
            </Card.Content>
          </Card>
        </Page.Content>
      </Page>
    );
  }
}

class ExamplePageEmptyState extends Component {
  renderHeader() {
    const ActionBar = () => <Button prefixIcon={<Add />}>New Item</Button>;

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => console.log('Breadcrumbs onClick')}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  render() {
    return (
      <Page>
        {this.renderHeader()}
        <Page.Content>
          <EmptyState
            image={
              <Box
                height="120px"
                width="120px"
                backgroundColor="D60"
                borderRadius="50%"
              />
            }
            subtitle="Create your product item in an easy & fast way to display it on your site"
            theme="page"
            title="You don't have any items yet"
          >
            <TextButton prefixIcon={<Add />}>New Item</TextButton>
          </EmptyState>
        </Page.Content>
      </Page>
    );
  }
}

const PageExamples = () => {
  const symbol = layoutSymbols.pageLayout;
  const components = layoutSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.LAYOUT, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Layout>
        <Cell>
          <ExamplePageWithCard />
        </Cell>
        <Cell>
          <ExamplePageEmptyState />
        </Cell>
      </Layout>
    </SingleComponentStacked>
  );
};

export default PageExamples;
