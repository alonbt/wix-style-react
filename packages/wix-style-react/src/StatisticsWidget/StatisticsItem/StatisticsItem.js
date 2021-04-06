import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import InfoCircleSmall from 'wix-ui-icons-common/InfoCircleSmall';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';
import Heading from '../../Heading';
import Text from '../../Text';
import Tooltip from '../../Tooltip';
import TrendIndicator from '../../TrendIndicator';
import AdaptiveHeading from '../../utils/AdaptiveHeading';
import DataHooks from '../dataHooks';

import { st, classes } from './StatisticsItem.st.css';
import { SIZES } from '../constants';

class StatisticsItem extends React.PureComponent {
  static displayName = 'StatisticsItem';
  static defaultProps = {
    size: 'large',
    alignItems: 'center',
  };

  _getFocusableProps = () => {
    const { onClick, focusableOnFocus, focusableOnBlur } = this.props;

    return onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};
  };

  _getSpaceOrEnterHandler = handler => event => {
    const { key } = event;
    const isEnter = key === 'Enter';
    const isSpace = key === ' ';

    if (isEnter || isSpace) {
      handler(event);
      event.preventDefault();
    }
  };

  _renderValue = ({
    value,
    valueInShort,
    size,
    reducedSpacingAndImprovedLayout,
  }) => {
    const appearance =
      size === SIZES.tiny
        ? 'tiny'
        : reducedSpacingAndImprovedLayout
        ? 'H2'
        : 'H1';

    return (
      <AdaptiveHeading
        text={value || '-'}
        appearance={appearance}
        textInShort={valueInShort}
        dataHook={DataHooks.value}
      />
    );
  };

  _renderDescription = ({
    description,
    descriptionInfo,
    size,
    alignItems,
    reducedSpacingAndImprovedLayout,
  }) => {
    if (!description) {
      return null;
    }

    return (
      <div className={st(classes.description, { alignItems })}>
        {size === SIZES.tiny || reducedSpacingAndImprovedLayout ? (
          <Text
            ellipsis
            size="small"
            dataHook={DataHooks.description}
            secondary
          >
            {description}
          </Text>
        ) : (
          <Heading ellipsis dataHook={DataHooks.description} appearance="H5">
            {description}
          </Heading>
        )}
        {descriptionInfo && (
          <Tooltip
            textAlign="start"
            className={classes.tooltip}
            dataHook={DataHooks.tooltip}
            content={descriptionInfo}
          >
            <InfoCircleSmall
              className={classes.info}
              data-hook={DataHooks.info}
            />
          </Tooltip>
        )}
      </div>
    );
  };

  _renderPercents = ({ percentage, invertedPercentage }) => {
    if (percentage == null) {
      return null;
    }

    return (
      <TrendIndicator
        className={classes.percentage}
        dataHook={DataHooks.percentage}
        value={percentage}
        inverted={invertedPercentage}
      />
    );
  };

  render() {
    const {
      value,
      valueInShort,
      description,
      descriptionInfo,
      percentage,
      invertedPercentage,
      onClick,
      children,
      focusableOnFocus,
      focusableOnBlur,
      className,
      size,
      alignItems,
      ...rest
    } = this.props;

    const attrs = {
      ...this._getFocusableProps(),
      'data-hook': DataHooks.stat,
      onKeyDown: onClick ? this._getSpaceOrEnterHandler(onClick) : undefined,
      onClick,
      ...rest,
    };

    return (
      <WixStyleReactContext.Consumer>
        {({ reducedSpacingAndImprovedLayout }) => (
          <div
            {...attrs}
            className={st(
              classes.item,
              {
                clickable: !!onClick,
                size,
                alignItems,
                reducedSpacingAndImprovedLayout,
              },
              className,
            )}
          >
            {this._renderValue({
              value,
              valueInShort,
              size,
              reducedSpacingAndImprovedLayout,
            })}
            {this._renderDescription({
              description,
              descriptionInfo,
              size,
              alignItems,
              reducedSpacingAndImprovedLayout,
            })}
            {this._renderPercents({ percentage, invertedPercentage })}
            {children}
          </div>
        )}
      </WixStyleReactContext.Consumer>
    );
  }
}

export default withFocusable(StatisticsItem);
