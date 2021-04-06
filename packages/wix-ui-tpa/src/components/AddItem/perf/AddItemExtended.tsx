import * as React from 'react';
import { AddItem } from '../';
import { st, classes } from './AddItemExtended.st.css';

export const AddItemPerf = () => {
  return <AddItem className={st(classes.root)}>Add Item</AddItem>;
};
