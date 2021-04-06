import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusIndicator from '../StatusIndicator';
import { Cell, Layout } from '../../Layout';

storiesOf('StatusIndicator', module).add('default', () => (
  <Layout cols={3}>
    <Cell span={1}>
      <StatusIndicator status="error" />
    </Cell>
    <Cell span={1}>
      <StatusIndicator status="warning" />
    </Cell>
    <Cell span={1}>
      <StatusIndicator status="loading" />
    </Cell>
  </Layout>
));
