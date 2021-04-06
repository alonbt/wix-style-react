import React from 'react';

import { Layout, Cell, Card, Text } from 'wix-style-react';

const FamilyStructure = ({ title, children, showPreview }) => (
  <Card>
    <Card.Header title={title} />
    <Card.Content>
      <Layout>
        <Cell span={4}>
          <Text size="small" skin="disabled" weight="bold">
            INDEX NAME & I.C.
          </Text>
        </Cell>
        <Cell span={8}>
          {showPreview && (
            <Text size="small" skin="disabled" weight="bold">
              PREVIEW
            </Text>
          )}
        </Cell>
        <Cell>
          <Layout>{children}</Layout>
        </Cell>
      </Layout>
    </Card.Content>
  </Card>
);

export default FamilyStructure;
