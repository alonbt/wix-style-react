import * as React from 'react';
import { Card } from '../../Card';

export const NewCardBasic = () => {
  return (
    <Card upgrade>
      <Card.Container>Container 1</Card.Container>
      <Card.Container>Container 2</Card.Container>
    </Card>
  );
};
