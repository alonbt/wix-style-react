import React from 'react';
import PropTypes from 'prop-types';

import { dataHooks } from './constants';
import { st, classes, vars } from './FluidColumns.st.css';

/** A fluid columns component*/
class FluidColumns extends React.PureComponent {
  render() {
    const { dataHook, className, cols, children } = this.props;

    return (
      <div
        className={st(classes.root, className)}
        data-hook={dataHook}
        style={{ [vars.cols]: cols }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={index}
              data-hook={dataHooks.item}
              className={classes.item}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }
}

FluidColumns.displayName = 'FluidColumns';

FluidColumns.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Define the number of columns. It is used for the grid in order to define how many features will be displayed in a row. The default value is 3. */
  cols: PropTypes.number,

  /** Children to render. */
  children: PropTypes.node.isRequired,
};

FluidColumns.defaultProps = {
  cols: 3,
};

export default FluidColumns;
