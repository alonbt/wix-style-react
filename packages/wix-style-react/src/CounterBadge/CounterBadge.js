import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './CounterBadge.st.css';
import Caption from '../Text/Caption';
import Text from '../Text/Text';
import { dataHooks } from './constants';

const MAX_NUMBER = 100;

/** CounterBadge */
class CounterBadge extends React.PureComponent {
  _renderNumberContent = n => (n < MAX_NUMBER ? n : `${MAX_NUMBER - 1}+`);

  _renderCounterBadgeContent = (size, content) =>
    size === 'small' ? (
      <Caption
        caption="c1"
        light
        dataHook={dataHooks.content}
        className={classes.text}
      >
        {content}
      </Caption>
    ) : (
      <Text
        dataHook={dataHooks.content}
        size="tiny"
        weight="bold"
        light
        className={classes.text}
      >
        {content}
      </Text>
    );

  render() {
    const {
      dataHook,
      size,
      skin,
      children,
      className,
      showShadow,
    } = this.props;
    const custom = isNaN(children);
    const longNumber = !custom && Number(children) >= MAX_NUMBER;

    const content = custom
      ? children
      : this._renderNumberContent(Number(children));

    return (
      <div
        className={st(
          classes.root,
          { skin, custom, size, longNumber, showShadow },
          className,
        )}
        data-hook={dataHook}
      >
        {this._renderCounterBadgeContent(size, content)}
      </div>
    );
  }
}

CounterBadge.displayName = 'CounterBadge';

CounterBadge.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Any element to be rendered inside */
  children: PropTypes.node,

  /** The component's look and feel */
  skin: PropTypes.oneOf([
    'general',
    'standard',
    'neutralStandard',
    'danger',
    'warning',
    'urgent',
    'success',
    'light',
  ]),

  /** The component's size. Can be small or medium */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Makes the card have a box-shadow style */
  showShadow: PropTypes.bool,
};

CounterBadge.defaultProps = {
  skin: 'general',
  size: 'small',
  showShadow: false,
};

export default CounterBadge;
