import * as React from 'react';

export type ToggleAllCheckboxProps = {
  selectAllText?: string;
  deselectAllText?: string;
  enabledItemsAmount: number;
  selectedEnabledItemsAmount: number;
  selectAll: () => void;
  deselectAll: () => void;
  dataHook?: string;
};

declare const ToggleAllCheckbox: React.FC<ToggleAllCheckboxProps>;
export default ToggleAllCheckbox;
