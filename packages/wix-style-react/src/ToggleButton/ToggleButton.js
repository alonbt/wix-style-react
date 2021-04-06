import React, { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { st, classes } from './ToggleButton.st.css';
import Tooltip from '../Tooltip';
import Text from '../Text';
import { iconChildSize, dataHooks } from './constants';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

class Icon extends PureComponent {
  render() {
    const {
      children,
      size,
      shape,
      border,
      tooltipProps,
      tooltipDisabled,
      labelValue,
      labelPlacement,
      focusableOnBlur,
      focusableOnFocus,
      className,
    } = this.props;
    const iconSize = iconChildSize[size];
    const isLabelOutside = shape === 'round' && labelPlacement === 'end';

    const [icon, label] = React.Children.map(
      children,
      (children, child => child),
    );

    // TODO page is scrolled whenever icon focused and we press Space button

    return (
      children && (
        <Tooltip
          className={st(classes.tooltip)}
          {...tooltipProps}
          dataHook={dataHooks.tooltip}
          size="small"
          content={labelValue}
          disabled={tooltipDisabled || tooltipProps.disabled}
        >
          <span className={isLabelOutside ? classes.labelContainer : ''}>
            <div
              className={st(classes.icon, { size, border }, className)}
              tabIndex={1}
              onBlur={focusableOnBlur}
              onFocus={focusableOnFocus}
            >
              {cloneElement(icon, {
                width: iconSize,
                height: iconSize,
              })}
              {!isLabelOutside && label}
            </div>
            {isLabelOutside && label}
          </span>
        </Tooltip>
      )
    );
  }
}

const ToggleButtonIcon = withFocusable(Icon);

class ToggleButton extends PureComponent {
  static displayName = 'ToggleButton';
  static propTypes = {
    /** render as some other component or DOM tag */
    as: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.string,
    ]),
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: PropTypes.node,
    /** Button skins */
    skin: PropTypes.oneOf([
      'standard',
      'dark',
      'inverted',
      'destructive',
      'success',
    ]),
    /** Button size */
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
    /** Button shape */
    shape: PropTypes.oneOf(['square', 'round']),
    /** Label content */
    labelValue: PropTypes.node,
    /** Label placement */
    labelPlacement: PropTypes.oneOf(['tooltip', 'bottom', 'end']),
    /** Whether label should have ellipsis */
    labelEllipsis: PropTypes.bool,
    /** Click event handler  */
    onClick: PropTypes.func,
    /** Applies selected styles */
    selected: PropTypes.bool,
    /** Applies disabled styles */
    disabled: PropTypes.bool,
    /** Applies border */
    border: PropTypes.bool,
    /** String based data hook */
    dataHook: PropTypes.string,
    /** Tooltip props for label. Applied only when `labelPlacement` is `tooltip`. */
    tooltipProps: PropTypes.shape(TooltipCommonProps),
  };

  static defaultProps = {
    skin: 'standard',
    size: 'medium',
    shape: 'square',
    border: false,
    disabled: false,
    labelValue: '',
    labelPlacement: 'tooltip',
    labelEllipsis: false,
    tooltipProps: {
      placement: 'top',
    },
  };

  renderLabel = () => {
    const {
      disabled,
      size,
      labelValue,
      labelPlacement,
      labelEllipsis,
    } = this.props;
    return (
      <Text
        className={st(classes.label, { placement: labelPlacement, size })}
        disabled={disabled}
        dataHook={dataHooks.label}
        size="tiny"
        weight="thin"
        ellipsis={labelEllipsis}
      >
        {labelValue}
      </Text>
    );
  };
  render() {
    const {
      children,
      size,
      shape,
      skin,
      tooltipProps,
      labelValue,
      selected,
      dataHook,
      labelPlacement,
      labelEllipsis,
      disabled,
      border,
      ...rest
    } = this.props;

    return (
      <ButtonNext
        {...rest}
        className={st(classes.root, {
          disabled,
          selected,
          skin,
          labelPlacement,
          shape,
        })}
        tabIndex={-1}
        data-hook={dataHook}
        data-placement={labelPlacement}
        data-selected={selected}
        data-skin={skin}
        disabled={disabled}
      >
        <ToggleButtonIcon
          size={size}
          shape={shape}
          border={border}
          tooltipProps={tooltipProps}
          labelValue={labelValue}
          labelPlacement={labelPlacement}
          tooltipDisabled={labelPlacement !== 'tooltip'}
        >
          {children}
          {labelPlacement === 'end' ? this.renderLabel() : null}
        </ToggleButtonIcon>
        {labelPlacement === 'bottom' ? this.renderLabel() : null}
      </ButtonNext>
    );
  }
}
export default ToggleButton;
