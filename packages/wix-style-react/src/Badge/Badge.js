import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable';
import { generateDataAttr } from '../utils/generateDataAttr';
import { SKIN, TYPE, SIZE } from './constants';
import { st, classes } from './Badge.st.css';
import Caption from '../Text/Caption';

class Badge extends React.PureComponent {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,
    /** A css class to be applied to the component's root element */
    className: PropTypes.string,
    /** variation of the component structure */
    type: PropTypes.oneOf(['solid', 'outlined', 'transparent']),
    /** color indication of the component */
    skin: PropTypes.oneOf([
      'general',
      'standard',
      'danger',
      'success',
      'neutral',
      'warning',
      'urgent',
      'neutralLight',
      'neutralStandard',
      'neutralSuccess',
      'neutralDanger',
      'premium',
      'warningLight',
    ]),
    /** component size */
    size: PropTypes.oneOf(['medium', 'small']),
    /** usually an icon to appear at the beginning of the text */
    prefixIcon: PropTypes.node,
    /** usually an icon to appear at the end of the text */
    suffixIcon: PropTypes.node,
    /** callback function called when badge is clicked */
    onClick: PropTypes.func,
    /** forces an uppercase letters */
    uppercase: PropTypes.bool,

    focusableOnFocus: PropTypes.func,
    focusableOnBlur: PropTypes.func,

    /** the text to display in the badge */
    children: PropTypes.node,
  };
  static displayName = 'Badge';

  static defaultProps = {
    type: TYPE.solid,
    skin: SKIN.general,
    size: SIZE.medium,
    uppercase: true,
  };

  getProps = () => {
    // that's what you pay for using HOCs...
    const { focusableOnFocus, focusableOnBlur, ...rest } = this.props;
    return rest;
  };

  _getFocusableProps = () => {
    // add focusable hooks only when badge is clickable
    const { onClick, focusableOnFocus, focusableOnBlur } = this.props;
    return onClick
      ? {
          onFocus: focusableOnFocus,
          onBlur: focusableOnBlur,
          tabIndex: 0,
        }
      : {};
  };

  render() {
    const {
      children,
      prefixIcon,
      suffixIcon,
      onClick,
      dataHook,
      className,
      ...rest
    } = this.getProps();

    return (
      <div
        data-hook={dataHook}
        onClick={onClick}
        {...this._getFocusableProps()}
        className={st(
          classes.root,
          { clickable: !!onClick, ...rest },
          className,
        )}
        {...generateDataAttr(this.props, ['type', 'skin', 'size', 'uppercase'])}
        data-clickable={!!onClick}
        /* TODO: this prop used to come from stylable v1 spread and is used for testing. Update component testkit to use stylable testkit instead */
        data-is-inverted={rest['data-is-inverted']}
      >
        {prefixIcon &&
          React.cloneElement(prefixIcon, {
            className: classes.prefix,
            'data-prefix-icon': true,
          })}
        <Caption className={classes.text} caption="c1" ellipsis>
          {children}
        </Caption>
        {suffixIcon &&
          React.cloneElement(suffixIcon, {
            className: classes.suffix,
            'data-suffix-icon': true,
          })}
      </div>
    );
  }
}

export default withFocusable(Badge);
