import React from 'react';

import More from 'wix-ui-icons-common/More';

import SomeContentComponent2 from './SomeContentComponent2';
import SomeTailComponent from './SomeTailComponent';
import Breadcrumbs from './Breadcrumbs';

import { Page, Button, Box, IconButton, PopoverMenu } from 'wix-style-react';

const ActionsBar = () => {
  return (
    <Box>
      <Box>
        <PopoverMenu
          zIndex={5000}
          dataHook="example-page-header-popover-menu"
          triggerElement={
            <IconButton
              skin="inverted"
              dataHook="page-header-popover-menu-button"
            >
              <More />
            </IconButton>
          }
          placement="bottom"
          textSize="medium"
          appendTo="parent"
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

export const header = props => (
  <Page.Header
    dataHook="example-page-header"
    title="Page Title"
    subtitle="Page subtitle"
    showBackButton
    onBackClicked={() => {}}
    actionsBar={<ActionsBar />}
    breadcrumbs={Breadcrumbs}
    {...props}
  />
);

export const content = props => (
  <Page.Content>
    <SomeContentComponent2 {...props} />
  </Page.Content>
);

export const tail = (
  <Page.Tail>
    <SomeTailComponent />
  </Page.Tail>
);

export const fixedContent = (
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
