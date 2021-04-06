import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import isFunction from 'lodash/isFunction';
import Heading from '../Heading';
import Tooltip from '../Tooltip';
import SparklineChart from '../SparklineChart';
import TrendIndicator from '../TrendIndicator';
import Text from '../Text';
import Loader from '../Loader';
import { st, classes } from './AnalyticsSummaryCard.st.css';
import { dataHooks } from './constants';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

const SPARKLINE_HEIGHT = 22;

/** Analytics Summary Card */
class AnalyticsSummaryCard extends React.PureComponent {
  state = {
    isHovered: false,
  };

  _handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  _handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  _handleClick = event => {
    const { onClick } = this.props;

    if (isFunction(onClick)) {
      onClick(event);
    }
  };

  _handleCTAClick = event => {
    const { onCTAClick } = this.props;

    event.stopPropagation();
    if (isFunction(onCTAClick)) {
      onCTAClick(event);
    }
  };

  _shouldShowCTA = () => {
    const { isLoading, ctaButton } = this.props;
    const { isHovered } = this.state;

    return !isLoading && ctaButton && isHovered;
  };

  _renderTitle = () => {
    const { title, titleTooltip } = this.props;

    return (
      <Tooltip placement="top" content={titleTooltip} disabled={!titleTooltip}>
        <span>{title}</span>
      </Tooltip>
    );
  };

  _renderValue = () => {
    const { value, valueTooltip } = this.props;

    if (valueTooltip) {
      return (
        <Tooltip placement="top" content={valueTooltip}>
          <Text tagName="span" weight="bold">
            {value}
          </Text>
        </Tooltip>
      );
    } else {
      return (
        <Text tagName="span" weight="bold">
          {value}
        </Text>
      );
    }
  };

  render() {
    const {
      dataHook,
      className,
      trend,
      isTrendVisible,
      invertedTrend,
      chartData,
      chartColorHex,
      chartWidth,
      isLoading,
      ctaButton,
      onClick,
      onChartHover,
      chartHighlightedStartingIndex,
      getChartTooltipContent,
      footer,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;

    const { isHovered } = this.state;
    const isClickable = isFunction(onClick);

    return (
      <div
        className={st(
          classes.root,
          {
            hovered: isHovered,
            clickable: isClickable,
          },
          className,
        )}
        data-hook={dataHook}
        onClick={this._handleClick}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
      >
        {/* Loader */}
        {isLoading && (
          <div className={classes.loader}>
            <Loader size="tiny" />
          </div>
        )}

        {/* CTA */}
        {this._shouldShowCTA() && (
          <div
            data-hook={dataHooks.analyticsSummaryCardCTA}
            className={st(classes.ctaButton)}
            onClick={this._handleCTAClick}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
          >
            {ctaButton}
          </div>
        )}

        <div>
          {/* Header */}
          <div
            className={st(classes.title)}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
          >
            <Heading appearance="H6">{this._renderTitle()}</Heading>
          </div>

          {/* Value & Trend */}
          <div className={classes.valueLineContainer}>
            <div className={classes.valueAndTrend}>
              {this._renderValue()}
              {isTrendVisible && (
                <TrendIndicator
                  className={classes.trend}
                  value={trend}
                  inverted={invertedTrend}
                />
              )}
            </div>

            {/* Sparkline Chart */}
            <div
              className={st(classes.sparkline)}
              onFocus={focusableOnFocus}
              onBlur={focusableOnBlur}
            >
              <SparklineChart
                dataHook={dataHooks.analyticsSummaryCardChart}
                onHover={onChartHover}
                data={chartData}
                color={chartColorHex}
                width={chartWidth}
                height={SPARKLINE_HEIGHT}
                highlightedStartingIndex={chartHighlightedStartingIndex}
                getTooltipContent={getChartTooltipContent}
              />
            </div>
          </div>
          <div className={st(classes.footer)}> {footer}</div>
        </div>
      </div>
    );
  }
}

AnalyticsSummaryCard.displayName = 'AnalyticsSummaryCard';

AnalyticsSummaryCard.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the title */
  title: PropTypes.string,

  /** Text for title tooltip */
  titleTooltip: PropTypes.string,

  /** Text Value */
  value: PropTypes.string,

  /** A number to be displayed as the trend, a positive number will be green with an arrow facing up and a negative number will be red with an arrow facing down */
  trend: PropTypes.number,

  /** Invert color and arrow direction of Trend. */
  invertedTrend: PropTypes.bool,

  /** Show/Hide Trend */
  isTrendVisible: PropTypes.bool,

  /** whether component is loading */
  isLoading: PropTypes.bool,

  /** CTA button React Node */
  ctaButton: PropTypes.node,

  /** fires when CTA button is clicked */
  onCTAClick: PropTypes.func,

  /**  Card would be clickable */
  onClick: PropTypes.func,

  /** fires when chart is hovered */
  onChartHover: PropTypes.func,

  /** Indicates the starting index of the highlighted area of the chart  */
  chartHighlightedStartingIndex: PropTypes.number,

  /** Chart width */
  chartWidth: PropTypes.number,

  /** Chart data */
  chartData: PropTypes.array,

  /** Chart tooltip content */
  getChartTooltipContent: PropTypes.func,

  /** Sets the color of the chart  */
  chartColorHex: PropTypes.string,

  /** Footer - Node  */
  footer: PropTypes.node,
};

AnalyticsSummaryCard.defaultProps = {
  isLoading: false,
  ctaButton: null,
  footer: null,
  onChartHover: noop,
  isTrendVisible: false,
  chartWidth: 69,
};

export default withFocusable(AnalyticsSummaryCard);
