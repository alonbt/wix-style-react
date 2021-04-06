import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { storySettings } from './storySettings';
import Sidebar from '../Sidebar';
import SidebarSectionItem from '../../SidebarSectionItem/SidebarSectionItem';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import Button from '../../Button/Button';
import Box from '../../Box';
import { SidebarBackButton } from '../SidebarBackButton/SidebarBackButton';

const SidebarWithState = () => {
  const [items, setItems] = useState(Array(4).fill('item'));
  const innerItems = Array(10).fill('inner item');
  const [boxHeight, setBoxHeight] = React.useState('200');

  return (
    <Box
      dataHook={storySettings.dataHooks.boxContainer}
      height={`${boxHeight}px`}
    >
      <Sidebar dataHook={storySettings.dataHooks.sidebar}>
        <Sidebar.Item
          itemKey={'drilldown'}
          innerMenu={[
            <Sidebar.BackButton>
              <SidebarBackButton>Main Menu</SidebarBackButton>
            </Sidebar.BackButton>,
            innerItems.map(item => {
              return <SidebarSectionItem>{item}</SidebarSectionItem>;
            }),
          ]}
        >
          <SidebarSectionItem
            dataHook={storySettings.dataHooks.innerMenuItem}
            drillable
          >
            Inner Menu
          </SidebarSectionItem>
        </Sidebar.Item>

        {items.map(item => {
          return <SidebarSectionItem>{item}</SidebarSectionItem>;
        })}
      </Sidebar>
      <Box height="130" verticalAlign="space-between" direction="vertical">
        <Button
          dataHook={storySettings.dataHooks.addItemButton}
          onClick={() => setItems([...items, 'item'])}
        >
          Add Item
        </Button>
        <Button
          dataHook={storySettings.dataHooks.setBoxHeightButton}
          onClick={() => setBoxHeight('150')}
        >
          Set Height
        </Button>
      </Box>
    </Box>
  );
};

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.GRADIENT, () => (
  <SidebarWithState />
));
