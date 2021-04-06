import React from 'react';
import { style, classes } from '../styles.st.css';

import { Card, Layout, Cell } from 'wix-style-react';

export default () => (
  <div className={style(classes.exampleContainer)}>
    <Layout>
      <Cell span={4}>{card()}</Cell>
      <Cell span={4}>{card()}</Cell>
      <Cell span={4}>{card()}</Cell>
      <Cell span={4}>{card()}</Cell>
      <Cell span={4}>{card()}</Cell>
    </Layout>
  </div>
);

function card() {
  return (
    <Card>
      <Card.Header title="Card" />
      <Card.Divider />
      <Card.Content>
        <div style={{ height: '150px' }} />
      </Card.Content>
    </Card>
  );
}
