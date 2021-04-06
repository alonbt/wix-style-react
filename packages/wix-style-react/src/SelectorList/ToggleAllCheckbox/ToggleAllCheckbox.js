import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '../..';
import { dataHooks } from '../SelectorList.helpers';

const ToggleAllCheckbox = ({
  selectAllText,
  deselectAllText,
  enabledItemsAmount,
  selectedEnabledItemsAmount,
  selectAll,
  deselectAll,
  dataHook,
}) => {
  const cases = {
    select: {
      text: selectAllText,
      number: enabledItemsAmount,
      onChange: selectAll,
      indeterminate: false,
      checked: false,
    },

    deselect: {
      text: deselectAllText,
      number: selectedEnabledItemsAmount,
      onChange: deselectAll,
      indeterminate: selectedEnabledItemsAmount < enabledItemsAmount,
      checked: true,
    },
  };

  const {
    text,
    number: num,
    onChange,
    checked,
    indeterminate,
  } = selectedEnabledItemsAmount ? cases.deselect : cases.select;

  return (
    <Checkbox
      dataHook={dataHook}
      checked={checked}
      onChange={onChange}
      indeterminate={indeterminate}
    >
      {` ${text} (${num})`}
    </Checkbox>
  );
};

ToggleAllCheckbox.propTypes = {
  /** string to be displayed in footer when `multiple` prop is used and no items are selected  */
  selectAllText: PropTypes.string,

  /** string to be displayed in footer when `multiple` prop is used and some or all items ar selected */
  deselectAllText: PropTypes.string,

  /** the amount of items which are not disabled */
  enabledItemsAmount: PropTypes.number.isRequired,

  /** an array of not disabled items that are marked as selected */
  selectedEnabledItemsAmount: PropTypes.number.isRequired,

  /** a function that selects all non-disabled items */
  selectAll: PropTypes.func.isRequired,

  /** a function that deselects all non-disabled items */
  deselectAll: PropTypes.func.isRequired,

  /** applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,
};

ToggleAllCheckbox.defaultProps = {
  selectAllText: 'Select All',
  deselectAllText: 'Deselect All',
  dataHook: dataHooks.toggleAllCheckbox,
};

export default ToggleAllCheckbox;
