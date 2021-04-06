import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import { st, classes } from './AnalyticsLayout.st.css';
import Cell from './Cell/Cell';

const MIN_ITEMS_PER_ROW = 2;
const MAX_ITEMS_PER_ROW = 3;

function _splitItemsToRows(items, min, max) {
  const mod = items.length % max;

  if (mod < min && mod !== 0) {
    const numberOfItemsForFillsMaxRows =
      max * (Math.floor(items.length / max) - 1);
    const ItemsForFillsMaxRows = items.splice(0, numberOfItemsForFillsMaxRows);
    return [...chunk(ItemsForFillsMaxRows, max), ...chunk(items, min)];
  } else {
    return chunk(items, max);
  }
}

/** AnalyticsLayout */
class AnalyticsLayout extends React.PureComponent {
  render() {
    const { dataHook, items, className, children } = this.props;
    const itemsSplitToRows = _splitItemsToRows(
      items,
      MIN_ITEMS_PER_ROW,
      MAX_ITEMS_PER_ROW,
    );

    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        {itemsSplitToRows.map((row, indexKey) => {
          return (
            <div
              key={indexKey}
              className={st(classes.row)}
              style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
            >
              {row.map((item, index) => {
                return children(item, index, row.length);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

AnalyticsLayout.displayName = 'AnalyticsLayout';

AnalyticsLayout.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Items that will be rendered  */
  items: PropTypes.any.isRequired,

  /** Children  */
  children: PropTypes.func.isRequired,
};

AnalyticsLayout.defaultProps = {
  items: [],
};

AnalyticsLayout.Cell = Cell;

export default AnalyticsLayout;
