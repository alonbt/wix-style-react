import * as React from 'react';
import { BoxSelection } from '../';

export const BoxSelectionPerf = () => {
  return (
    <BoxSelection name="Test" onChange={() => {}}>
      <BoxSelection.Option checked id={'id'}>
        Item
      </BoxSelection.Option>
    </BoxSelection>
  );
};
