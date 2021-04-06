import React from 'react';

import ComponentNaming from './ComponentNaming';
import singleComponentSizes from './constants';

import { Layout, Cell } from 'wix-style-react';

const SingleComponentSideBySide = ({
  name,
  componentsNames,
  children,
  size = singleComponentSizes.fullWidth,
}) => (
  <Cell>
    <Layout>
      <Cell span={4}>
        <ComponentNaming name={name} componentsNames={componentsNames} />
      </Cell>
      <Cell span={8}>
        <Layout>
          <Cell span={size}>{children}</Cell>
        </Layout>
      </Cell>
    </Layout>
  </Cell>
);

export default SingleComponentSideBySide;
