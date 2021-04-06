import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import TextButton from '../TextButton';
import { st, classes } from './VerticalTabsItem.st.css';
import { FontUpgradeContext } from '../FontUpgrade/context';
import VerticalTabsContext from '../VerticalTabs/VerticalTabsContext';

/** Internal Component to be used by VerticalTabs */
class VerticalTabsItem extends React.PureComponent {
  static displayName = 'VerticalTabsItem';

  static propTypes = {
    /** type of vertical tab item. can be of the following: 'tab' (default), 'action', 'title' */
    type: PropTypes.oneOf(['tab', 'action', 'title']),

    /** Data attribute for testing purposes */
    dataHook: PropTypes.string,

    /** Prefix Icon - should be <code>Icon</code>*/
    prefixIcon: PropTypes.node,

    /** Suffix Icon - should be <code>Icon</code> or <code>IconButton</code> with the <code>size="tiny"</code> prop*/
    suffixIcon: PropTypes.node,

    /** Children - only single child is allowed here */
    children: PropTypes.node,

    /** Disabled */
    disabled: PropTypes.bool,

    /** identifier to help identify the current selected tab */
    id: PropTypes.number,
  };

  static defaultProps = {
    type: 'tab',
  };

  _renderText({ isMadefor }) {
    const { children, type, disabled } = this.props;
    const { size } = this.context;
    const isTitle = type === 'title';
    const commonProps = {
      weight: isMadefor ? 'thin' : 'normal',
      size: isTitle ? 'small' : size,
      dataHook: 'vertical-tabs-item-text',
    };
    return type === 'action' ? (
      <TextButton {...commonProps} disabled={disabled}>
        {children}
      </TextButton>
    ) : (
      <Text
        className={classes.text}
        light={isTitle}
        secondary={isTitle}
        skin={disabled ? 'disabled' : 'standard'}
        {...commonProps}
      >
        {children}
      </Text>
    );
  }

  _renderPrefix() {
    const { prefixIcon, type } = this.props;
    const { size } = this.context;
    return React.cloneElement(prefixIcon, {
      size: size === 'medium' ? 24 : 18,
      'data-hook': 'vertical-tabs-item-prefix-icon',
      className: st(classes.prefixIcon, { action: type === 'action' }),
    });
  }

  _renderSuffix() {
    const { suffixIcon } = this.props;
    const { size } = this.context;
    return React.cloneElement(suffixIcon, {
      size: size === 'medium' ? 24 : 18,
      className: classes.suffixIcon,
      'data-hook': 'vertical-tabs-item-suffix-icon',
    });
  }

  render() {
    const {
      id,
      dataHook,
      disabled,
      prefixIcon,
      suffixIcon,
      tabIndex,
      type,
    } = this.props;
    const selected =
      !!id && !!this.context.activeTabId && id === this.context.activeTabId;
    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div
            className={st(classes.root, {
              disabled,
              action: type === 'action',
              title: type === 'title',
              suffixIcon: !!suffixIcon,
              prefixIcon: !!prefixIcon,
              selected,
            })}
            id={id}
            tabIndex={tabIndex}
            ref={ref => (this.innerComponentRef = ref)}
            data-hook={dataHook}
            onClick={!disabled ? () => this.context.onChange(id) : undefined}
          >
            {prefixIcon && this._renderPrefix()}
            {this._renderText({ isMadefor })}
            {suffixIcon && this._renderSuffix()}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

VerticalTabsItem.contextType = VerticalTabsContext;
export default VerticalTabsItem;
