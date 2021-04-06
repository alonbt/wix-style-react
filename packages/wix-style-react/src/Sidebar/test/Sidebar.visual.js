import React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar from '..';
import Box from '../../Box';
import { Layout } from '../../Layout';
import { sidebarSkins } from '../constants';

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  const storiesTitle = `${themeName ? `${themeName}|` : ''}Sidebar`;

  storiesOf(storiesTitle, module).add('Sanity', () =>
    testWithTheme(
      <div style={{ height: '500px', color: 'white' }}>
        <Sidebar selectedKey={'item1'}>
          <Sidebar.PersistentHeader>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Simple Sidebar
            </div>
          </Sidebar.PersistentHeader>

          <Sidebar.Item
            itemKey={'item1'}
            innerMenu={[
              <Sidebar.BackButton>
                <div>Back</div>
              </Sidebar.BackButton>,
              <Sidebar.Item itemKey={'item4'}>
                <div>Inner Item 1</div>
              </Sidebar.Item>,
              <Sidebar.Item itemKey={'item5'}>
                <div>Inner Item 2</div>
              </Sidebar.Item>,
            ]}
          >
            <div>Item with internal navigation</div>
          </Sidebar.Item>
          <Sidebar.Item itemKey={'item2'} disable="true">
            <div disable="true">Disabled item</div>
          </Sidebar.Item>
          <Sidebar.Item itemKey={'item3'}>
            <div>A simple clickable item</div>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Sidebar Footer
            </div>
          </Sidebar.PersistentFooter>
        </Sidebar>
      </div>,
    ),
  );

  storiesOf(storiesTitle, module).add('Light', () =>
    testWithTheme(
      <div style={{ height: '500px', backgroundColor: '#f9f9f9' }}>
        <Sidebar selectedKey={'item1'} skin="light">
          <Sidebar.PersistentHeader>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Simple Sidebar
            </div>
          </Sidebar.PersistentHeader>

          <Sidebar.Item
            itemKey={'item1'}
            innerMenu={[
              <Sidebar.BackButton>
                <div>Back</div>
              </Sidebar.BackButton>,
              <Sidebar.Item itemKey={'item4'}>
                <div>Inner Item 1</div>
              </Sidebar.Item>,
              <Sidebar.Item itemKey={'item5'}>
                <div>Inner Item 2</div>
              </Sidebar.Item>,
            ]}
          >
            <div>Item with internal navigation</div>
          </Sidebar.Item>
          <Sidebar.Item itemKey={'item2'} disable="true">
            <div disable="true">Disabled item</div>
          </Sidebar.Item>
          <Sidebar.Item itemKey={'item3'}>
            <div>A simple clickable item</div>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Sidebar Footer
            </div>
          </Sidebar.PersistentFooter>
        </Sidebar>
      </div>,
    ),
  );

  storiesOf(storiesTitle, module).add('Hidden', () =>
    testWithTheme(
      <div style={{ height: '500px', color: 'white' }}>
        <Sidebar selectedKey={'item1'} isHidden>
          <Sidebar.PersistentHeader>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Simple Sidebar
            </div>
          </Sidebar.PersistentHeader>

          <Sidebar.Item itemKey={'item1'}>
            <div>A simple clickable item</div>
          </Sidebar.Item>

          <Sidebar.PersistentFooter>
            <div
              style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}
            >
              Sidebar Footer
            </div>
          </Sidebar.PersistentFooter>
        </Sidebar>
      </div>,
    ),
  );

  storiesOf(storiesTitle, module).add('Scrollbar', () => {
    const skins = Object.values(sidebarSkins);

    return testWithTheme(
      <Layout cols={skins.length}>
        {skins.map(sidebarSkin => (
          <Box height="500px">
            <Sidebar skin={sidebarSkin}>
              <Sidebar.PersistentHeader>
                <Box
                  verticalAlign="middle"
                  align="center"
                  color="red"
                  height="100px"
                  fontSize="20px"
                  margin="10px"
                >
                  Header
                </Box>
              </Sidebar.PersistentHeader>

              <Sidebar.Item>
                <Box
                  color="red"
                  height="500px"
                  align="center"
                  fontSize="20px"
                  margin="10px"
                >
                  Sidebar Item
                </Box>
              </Sidebar.Item>

              <Sidebar.PersistentFooter>
                <Box
                  verticalAlign="middle"
                  align="center"
                  color="red"
                  margin="10px"
                  fontSize="20px"
                >
                  Sidebar Footer
                </Box>
              </Sidebar.PersistentFooter>
            </Sidebar>
          </Box>
        ))}
      </Layout>,
    );
  });
};
