import React from 'react';
import { storiesOf } from '@storybook/react';
import SidePanel from '../SidePanel';
import Box from '../../Box';
import Search from '../../Search';
import Tabs from '../../Tabs';
import Text from '../../Text';

function dummyContent() {
  return (
    <Box
      background="#f6f6f6"
      height="200px"
      align="center"
      verticalAlign="middle"
    >
      <Text>dummy content</Text>
    </Box>
  );
}

function simpleHeader() {
  return <SidePanel.Header title="Title" infoTooltipContent="Tooltip" />;
}

function simpleFooter() {
  return (
    <SidePanel.Footer>
      <Text>Footer</Text>
    </SidePanel.Footer>
  );
}

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'simple',
        content: (
          <>
            <SidePanel.Content>{dummyContent()}</SidePanel.Content>
            <SidePanel.Divider />
            <SidePanel.Content>{dummyContent()}</SidePanel.Content>
          </>
        ),
      },
      {
        it: 'header title',
        header: <SidePanel.Header title={<Search value="" options={[]} />} />,
      },
      {
        it: 'header children',
        header: (
          <SidePanel.Header title="Filters">
            <Tabs
              items={[
                { id: 1, title: 'Selected Tab' },
                { id: 2, title: 'Second Tab' },
              ]}
              activeId={1}
              type="uniformSide"
              width="174px"
            />
          </SidePanel.Header>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, header, content, footer }) => {
    storiesOf(`SidePanel${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div style={{ backgroundColor: '#eee', padding: '10px' }}>
          <SidePanel>
            {header || simpleHeader()}
            {content || <SidePanel.Content>{dummyContent()}</SidePanel.Content>}
            {footer || simpleFooter()}
          </SidePanel>
        </div>
      ),
    );
  });
});
