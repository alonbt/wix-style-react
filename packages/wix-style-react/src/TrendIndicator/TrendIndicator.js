import React from 'react';
import PropTypes from 'prop-types';
import SortByArrowUp from 'wix-ui-icons-common/system/SortByArrowUp';
import SortByArrowDown from 'wix-ui-icons-common/system/SortByArrowDown';
import { st, classes } from './TrendIndicator.st.css';
import { dataHooks } from './constants';

/** TrendIndicator */
class TrendIndicator extends React.PureComponent {
  render() {
    const { value, inverted, className, dataHook } = this.props;

    if (isNaN(Number(value))) {
      return null;
    }

    let skin = 'neutral';
    let trendIcon = null;

    if (value > 0) {
      trendIcon = <SortByArrowUp data-hook={dataHooks.trendIndicatorUp} />;
      skin = !inverted ? 'positive' : 'negative';
    } else if (value < 0) {
      trendIcon = <SortByArrowDown data-hook={dataHooks.trendIndicatorDown} />;
      skin = !inverted ? 'negative' : 'positive';
    }

    return (
      <div
        className={st(classes.root, { skin }, className)}
        data-hook={dataHook}
      >
        <div className={classes.caption}>
          {!!value && (
            <span
              className={classes.icon}
              data-hook={dataHooks.trendIndicatorIcon}
            >
              {trendIcon}
            </span>
          )}
          <span data-hook={dataHooks.trendIndicatorValue}>
            {Math.abs(value)}%
          </span>
        </div>
      </div>
    );
  }
}

TrendIndicator.displayName = 'TrendIndicator';

TrendIndicator.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** A number to be displayed as the trend, a positive number will be green with an arrow facing up and a negative number will be red with an arrow facing down */
  value: PropTypes.number.isRequired,

  /** Invert color and arrow direction. */
  inverted: PropTypes.bool,
};

TrendIndicator.defaultProps = {
  inverted: false,
};

export default TrendIndicator;
