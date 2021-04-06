import React from 'react';
import { storiesOf } from 'wix-style-react/node_modules/@storybook/react';
import componentsMeta from 'wix-style-react/.wuf/components.json';
import DEFINITIONS from './component-definitions';
import { Layout, Cell } from 'wix-style-react';
import { Box } from 'wix-style-react';
import * as wsr from 'wix-style-react';

const components = Object.keys(componentsMeta);

const ignoreList = [
  'Layout',
  'Box',
  'Grid',
  'Selector',
  'ContactItemBuilder',
  'BadgeSelectItemBuilder',
];

components.forEach(name => {
  if (ignoreList.includes(name)) {
    return;
  }

  const props = DEFINITIONS[name] && DEFINITIONS[name].props;

  const Component = wsr[name];

  storiesOf(`es-named modules`, module).add(`${name}`, () => (
    <Layout>
      <Cell span={6}>
        <Box height="500px" width="500px">
          <Component {...props} />
        </Box>
      </Cell>
    </Layout>
  ));
});
