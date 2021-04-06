import React from 'react';
import classNames from 'classnames';
import Add from 'wix-ui-icons-common/Add';
import More from 'wix-ui-icons-common/More';
import SomeContentComponent from './SomeContentComponent';
import ImagePlaceholder from '../../../../stories/utils/ImagePlaceholder';
import { classes } from './testExamples.st.css';

import {
  Page,
  Button,
  Box,
  PopoverMenu,
  IconButton,
  Breadcrumbs,
  Tabs,
  Card,
  EmptyState,
  TextButton,
} from 'wix-style-react';

const ActionsBar = () => {
  return (
    <Box>
      <Box>
        <PopoverMenu
          dataHook="example-page-header-popover-menu"
          triggerElement={
            <IconButton skin="inverted">
              <More />
            </IconButton>
          }
        >
          <PopoverMenu.MenuItem onClick={() => {}} text="Refresh" />
          <PopoverMenu.MenuItem onClick={() => {}} text="Trash" />
          <PopoverMenu.MenuItem onClick={() => {}} text="Edit" />
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

export const PageContainer = props => {
  return (
    <div
      className={classNames(classes.pageContainer, {
        [classes.withFixedScrollBar]: props.withFixedScrollBar,
      })}
      {...props}
    >
      {props.children}
    </div>
  );
};

export const renderHeader = props => (
  <Page.Header
    dataHook="example-page-header"
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={() => {}}
    actionsBar={<ActionsBar />}
    breadcrumbs={
      <Breadcrumbs
        items={[1, 2, 3].map(i => ({ id: `${i}`, value: `#${i} item` }))}
        activeId="3"
        size="medium"
        theme="onGrayBackground"
        onClick={() => {}}
      />
    }
    {...props}
  />
);

export const renderContent = props => (
  <Page.Content>
    <SomeContentComponent {...props} />
  </Page.Content>
);

export const FixedContentExample = (
  <Page.FixedContent>
    <div
      style={{
        padding: '10px 0px',
        background: 'blue',
      }}
    >
      This is a fixedContent
    </div>
  </Page.FixedContent>
);

export const TailExample = (
  <Page.Tail>
    <Tabs
      activeId={'1'}
      hasDivider={false}
      items={[1, 2, 3].map(i => ({ id: `${i}`, title: `#${i} item` }))}
    />
  </Page.Tail>
);

export const EmptyStateExample = [
  <Page.Header
    title="Your Product"
    actionsBar={<Button prefixIcon={<Add />}>New Item</Button>}
  />,
  <Page.Content>
    <Card>
      <EmptyState
        theme="page"
        title="You don't have any items yet"
        subtitle="Create your product item in an easy & fast way to display it on your website"
        image={<ImagePlaceholder />}
      >
        <TextButton prefixIcon={<Add />}>New Item</TextButton>
      </EmptyState>
    </Card>
  </Page.Content>,
];
