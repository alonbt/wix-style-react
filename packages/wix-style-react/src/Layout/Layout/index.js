import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './styles.st.css';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';

const DEFAULT_GAP = '30px';
const REDUCED_SPACING_GAP = '24px';

const Layout = ({
  children,
  gap,
  cols,
  justifyItems,
  alignItems,
  rowHeight,
  dataHook,
}) => (
  <WixStyleReactContext.Consumer>
    {({ reducedSpacingAndImprovedLayout }) => (
      <div
        data-hook={dataHook}
        style={{
          gap:
            gap === DEFAULT_GAP && reducedSpacingAndImprovedLayout
              ? REDUCED_SPACING_GAP
              : gap,
          justifyItems,
          alignItems,
          gridAutoRows: rowHeight,
          gridTemplateColumns: cols
            ? `repeat(${cols}, minmax(0, 1fr))`
            : undefined,
        }}
        className={classes.root}
        children={children}
      />
    )}
  </WixStyleReactContext.Consumer>
);

Layout.displayName = 'Layout';

Layout.propTypes = {
  /** hook for testing purposes */
  dataHook: PropTypes.string,

  /** one or more Cell components. Other nodes are accepted although not recommended */
  children: PropTypes.node,

  /** distance between cells both vertically and horizontally */
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** set custom amount of columns to be rendered. Default is 12 which means at `<Cell span={12}/>` occupies all columns, in other words, full width */
  cols: PropTypes.number,

  /** is used to justify the grid items along the row axis */
  justifyItems: PropTypes.string,

  /** is used to aligns the grid items along the column axis */
  alignItems: PropTypes.string,

  /** Sets all rows to a given height. */
  rowHeight: PropTypes.string,
};

Layout.defaultProps = {
  gap: DEFAULT_GAP,
  rowHeight: 'auto',
};

export default Layout;
