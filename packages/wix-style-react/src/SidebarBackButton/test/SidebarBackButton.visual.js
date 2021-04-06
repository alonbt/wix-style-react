import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarBackButton from '../SidebarBackButton';
import Box from '../../Box';
import { SidebarContext } from '../../Sidebar/SidebarAPI';
import { sidebarSkins } from '../../Sidebar/constants';

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {},
      },
    ],
  },
];

const skins = Object.values(sidebarSkins);

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}SidebarBackButton${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          skins.map(skin => (
            <Box
              direction="vertical"
              backgroundColor="D70"
              marginBottom={5}
              marginRight={5}
              key={skin}
            >
              <div style={{ width: '228px', margin: '16px' }}>
                <SidebarContext.Provider value={{ getSkin: () => skin }}>
                  <SidebarBackButton>Go Back</SidebarBackButton>
                </SidebarContext.Provider>
              </div>
            </Box>
          )),
        ),
      );
    });
  });
};
