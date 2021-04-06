import React from 'react';
import PropTypes from 'prop-types';
import {
  BulkSelectionConsumer,
  BulkSelectionContextPropTypes,
} from '../BulkSelection';

export const TableToolbarContainer = props => {
  return (
    <BulkSelectionConsumer
      consumerCompName="Table.ToolbarContainer"
      providerCompName="Table"
    >
      {props.children}
    </BulkSelectionConsumer>
  );
};
TableToolbarContainer.displayName = 'Table.ToolbarContainer';
TableToolbarContainer.propTypes = {
  children: PropTypes.any,
};

/** Helper for PropTypes for components which consume the SelectionContext */
export const SelectionContextPropTypes = BulkSelectionContextPropTypes;
