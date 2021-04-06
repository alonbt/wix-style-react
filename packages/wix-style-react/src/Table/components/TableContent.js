import React from 'react';
import PropTypes from 'prop-types';
import defaultTo from 'lodash/defaultTo';
import DataTable from '../DataTable';
import { getDataTableProps, createColumns } from '../Table';
import { TableContext } from '../TableContext';

import { st, classes } from '../Table.st.css';
import { BulkSelectionConsumer } from '../BulkSelection';

export const TableContent = ({ titleBarVisible, dataHook, ...rest }) => {
  // TODO: figure out if we need to put result of createColumns() on state, in order to avoid
  // redundant renders.
  return (
    <TableContext.Consumer>
      {tableProps => {
        const dataTableProps = {
          ...getDataTableProps(tableProps),
          dataHook: tableProps.withWrapper ? 'table-content' : dataHook,
          hideHeader: !titleBarVisible,
        };

        return (
          <div className={st(classes.content, { titleBarVisible })}>
            {tableProps.showSelection ? (
              <BulkSelectionConsumer
                consumerCompName="Table.Content"
                providerCompName="Table"
              >
                {bulkSelectionContext => (
                  <DataTable
                    {...dataTableProps}
                    isRowSelected={(rowData, rowIndex) =>
                      bulkSelectionContext.isSelected(
                        defaultTo(rowData.id, rowIndex),
                      )
                    }
                    columns={createColumns({
                      tableProps,
                      bulkSelectionContext,
                    })}
                  />
                )}
              </BulkSelectionConsumer>
            ) : (
              <DataTable {...dataTableProps} />
            )}
          </div>
        );
      }}
    </TableContext.Consumer>
  );
};
TableContent.displayName = 'Table.Content';
TableContent.propTypes = {
  titleBarVisible: PropTypes.bool,
  dataHook: PropTypes.string,
};
TableContent.defaultProps = {
  titleBarVisible: true,
};
