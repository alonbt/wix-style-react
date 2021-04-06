import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { FontUpgradeContext } from '../FontUpgrade/context';
import { st, classes } from './ListItemAction.st.css';
import Text from '../Text';
import Box from '../Box';

/** ListItemAction */
class ListItemActionComponent extends React.PureComponent {
  static displayName = 'ListItemAction';

  static propTypes = {
    /** render as some other element */
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.string,
    ]),

    /** Data attribute for testing purposes */
    dataHook: PropTypes.string,

    /** Item theme (standard, dark, destructive) */
    skin: PropTypes.oneOf(['standard', 'dark', 'destructive']),

    /** Text Size (small, medium) */
    size: PropTypes.oneOf(['small', 'medium']),

    /** Prefix Icon */
    prefixIcon: PropTypes.node,

    /** When present, it specifies that a button should automatically get focus when the page loads. */
    autoFocus: PropTypes.bool,

    /** should the text get ellipsed with tooltip, or should it get broken into lines when it reaches the end of its container */
    ellipsis: PropTypes.bool,

    /** Title */
    title: PropTypes.string.isRequired,

    /** If true, the item is highlighted */
    highlighted: PropTypes.bool,

    /** Disabled */
    disabled: PropTypes.bool,

    /** Tooltip floating modifiers */
    tooltipModifiers: PropTypes.object,

    /** On Click */
    onClick: PropTypes.func,

    /** Text of the list item subtitle */
    subtitle: PropTypes.string,
  };

  focus() {
    if (this.innerComponentRef) {
      this.innerComponentRef.focus();
    }
  }

  _renderText = ({ isMadefor }) => {
    const {
      title,
      size,
      ellipsis,
      tooltipModifiers,
      subtitle,
      disabled,
    } = this.props;

    return (
      <Box direction="vertical" className={classes.textBox} width="100%">
        <Text
          className={st(classes.text, { subtitle: Boolean(subtitle) })}
          dataHook="list-item-action-title"
          size={size}
          ellipsis={ellipsis}
          weight={isMadefor ? 'thin' : 'normal'}
          placement="right"
          skin={disabled ? 'disabled' : 'standard'}
          {...tooltipModifiers}
        >
          {title}
        </Text>

        {subtitle && (
          <Text
            dataHook="list-item-action-subtitle"
            secondary
            size="small"
            ellipsis={ellipsis}
            weight={isMadefor ? 'thin' : 'normal'}
            placement="right"
            skin={disabled ? 'disabled' : 'standard'}
            light={!disabled}
          >
            {subtitle}
          </Text>
        )}
      </Box>
    );
  };

  _renderPrefix = () => {
    const { prefixIcon, size, subtitle } = this.props;
    return React.cloneElement(prefixIcon, {
      size: size === 'medium' ? 24 : 18,
      className: st(classes.prefixIcon, { subtitle: Boolean(subtitle) }),
      'data-hook': 'list-item-action-prefix-icon',
    });
  };

  static defaultProps = {
    as: 'button',
    skin: 'standard',
    size: 'medium',
    highlighted: false,
  };

  render() {
    const {
      dataHook,
      disabled,
      skin,
      prefixIcon,
      onClick,
      focusableOnFocus,
      focusableOnBlur,
      as: Component,
      tabIndex,
      onKeyDown,
      autoFocus,
      highlighted,
      className,
      subtitle,
      ...others
    } = this.props;

    // since we're spreading the "rest" props, we don't want to pass
    const { selected, hovered, ellipsis, title, ...rest } = others;

    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <Component
            {...rest}
            className={st(
              classes.root,
              { skin, disabled, highlighted, ellipsis },
              className,
            )}
            data-skin={skin}
            data-disabled={disabled}
            tabIndex={tabIndex}
            ref={ref => (this.innerComponentRef = ref)}
            autoFocus={autoFocus}
            onFocus={focusableOnFocus}
            onBlur={focusableOnBlur}
            type={Component === 'button' ? 'button' : undefined}
            data-hook={dataHook}
            onKeyDown={!disabled ? onKeyDown : undefined}
            onClick={!disabled ? onClick : undefined}
          >
            {prefixIcon && this._renderPrefix()}
            {this._renderText({ isMadefor })}
          </Component>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

export const ListItemAction = withFocusable(ListItemActionComponent);

export const listItemActionBuilder = ({
  title,
  prefixIcon,
  onClick,
  id,
  disabled,
  skin,
  size,
  dataHook,
  as,
  tabIndex,
  autoFocus,
  className,
  ellipsis,
  subtitle,
  ...rest
}) => ({
  id,
  disabled,
  overrideOptionStyle: true,
  value: ({ hovered }) => (
    <ListItemAction
      {...rest}
      ellipsis={ellipsis}
      className={className}
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      as={as}
      onClick={onClick}
      dataHook={dataHook}
      title={title}
      prefixIcon={prefixIcon}
      skin={skin}
      size={size}
      highlighted={hovered}
      disabled={disabled}
      subtitle={subtitle}
    />
  ),
});
