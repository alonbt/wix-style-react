import * as React from 'react';
import { Layout, Cell } from '..';

function LayoutWithMandatoryProps() {
  return (
    <Layout>
      <Cell />
    </Layout>
  );
}

function LayoutWithAllProps() {
  return (
    <Layout
      dataHook="hook"
      gap={30}
      cols={12}
      rowHeight="1fr"
      alignItems="center"
      justifyItems="center"
    >
      <Cell span={12} vertical rows={1}>
        <Layout gap="30px">
          <Cell />
        </Layout>
      </Cell>
    </Layout>
  );
}
