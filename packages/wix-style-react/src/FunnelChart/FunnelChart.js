import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { classes } from './FunnelChart.st.css';

import { FunnelLabel } from './FunnelLabel';
import { FunnelBar } from './FunnelBar';
import { FunnelStep, EmptyFunnelStep } from './FunnelStep';
import { countPercentageFromBase } from '../utils/numberFormatters';
import { dataHooks } from './constants';

// TODO - this can be memoized
const calculateBarsHeights = ({ funnelChartData, startValue }) =>
  funnelChartData.map(i => {
    const percentage = countPercentageFromBase(startValue, i.value, 0);
    return percentage > 100 ? 100 : percentage;
  });

/** FunnelChart */
const FunnelChart = props => {
  const {
    dataHook,
    className,
    data,
    hideDifferenceBadge,
    differenceBadgeTooltipContent,
    onDifferenceBadgeTooltipShow,
  } = props;

  if (data.length < 2) {
    return null;
  }

  const barsHeights = calculateBarsHeights({
    funnelChartData: data,
    startValue: data[0].value,
  });

  return (
    <div data-hook={dataHook} className={className}>
      <section className={classes.funnel}>
        {data.map((item, index) => {
          const currentBarHeight = barsHeights[index];
          const nextBarHeight = barsHeights[index + 1];

          const isLastItem = index === data.length - 1;

          return (
            <Fragment key={item.label}>
              <FunnelBar
                height={currentBarHeight}
                dataHook={dataHooks.funnelChartItem}
              />
              {isLastItem ? (
                <EmptyFunnelStep />
              ) : (
                <FunnelStep
                  currentBarIndex={index}
                  currentBarData={data[index]}
                  nextBarData={data[index + 1]}
                  currentBarHeight={currentBarHeight}
                  nextBarHeight={nextBarHeight}
                  hideDifferenceBadge={hideDifferenceBadge}
                  getTooltipContent={differenceBadgeTooltipContent}
                  onTooltipShow={onDifferenceBadgeTooltipShow}
                />
              )}
            </Fragment>
          );
        })}
      </section>
      <section className={classes.labels}>
        {data.map(item => {
          return (
            <div key={item.label} className={classes.labelWrapper}>
              <FunnelLabel
                value={item.value}
                label={item.label}
                displayValue={item.displayValue}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

FunnelChart.displayName = 'FunnelChart';

FunnelChart.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /**
   * Array of Funnel Chart items
   * * `value` - Item's value.
   * * `label` - Short label under the value.
   * * `displayValue` - Item's value send by the user.
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      displayValue: PropTypes.string,
    }),
  ).isRequired,

  /** A flag that controls the appearance of the calculated percentage badge */
  hideDifferenceBadge: PropTypes.bool,

  /** Returns the tooltip content by current index and badge's value (in percentage)
   * ##### Signature:
   * `({currentIndex: number, difference: string}) => string`
   */
  differenceBadgeTooltipContent: PropTypes.func,

  /** Callback on tooltip content show event by current index and badge's value (in percentage)
   * ##### Signature:
   * `({currentIndex: number, difference: string}) => void`
   */
  onDifferenceBadgeTooltipShow: PropTypes.func,
};

FunnelChart.defaultProps = {
  showDifference: false,
  differenceBadgeTooltipContent: () => '',
  onDifferenceBadgeTooltipShow: () => {},
};

export default FunnelChart;
