import * as React from 'react';
import { Card } from '..';
import { st, classes } from './CardExtended.st.css';

export const CardPerf = () => {
  return (
    <Card upgrade className={st(classes.root)}>
      <Card.Container>Container 1</Card.Container>
      <Card.Container>Container 2</Card.Container>
    </Card>
  );
};
