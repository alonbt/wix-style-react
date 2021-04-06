import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { ThemeProviderConsumerBackwardCompatible } from '../ThemeProvider/ThemeProviderConsumerBackwardCompatible';
import Image from '../Image';

import AddItemLarge from 'wix-ui-icons-common/system/AddItemLarge';
import AddItemMedium from 'wix-ui-icons-common/system/AddItemMedium';
import AddItemSmall from 'wix-ui-icons-common/system/AddItemSmall';
import Add from 'wix-ui-icons-common/Add';

import Tooltip from '../Tooltip';
import Text from '../Text';
import AddMedia from 'wix-ui-icons-common/system/AddMedia';
import { dataHooks } from './constants';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

import { st, classes } from './AddItem.st.css';
import { isString } from '../utils/StringUtils';

const AddItemButtonIcons = {
  tiny: ({ className }) => <Add className={className} width="26" height="26" />,
  small: AddItemSmall,
  medium: AddItemMedium,
  large: AddItemLarge,
  image: ({ className }) => (
    <AddMedia className={className} width="31" height="31" />
  ),
};

const illustrationDimensions = {
  tiny: { height: 24, width: 24 },
  small: { height: 60, width: 60 },
  medium: { height: 120, width: 120 },
  large: { height: 120, width: 120 },
};

const tooltipPlacementByAlignment = {
  left: 'top-start',
  right: 'top-end',
};

class AddItem extends Component {
  static displayName = 'AddItem';
  static propTypes = {
    /** any renderable node or a render function. In case of a render function, text styles will not be applied. */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** apply disabled styles */
    disabled: PropTypes.bool,

    /** the theme of component */
    theme: PropTypes.oneOf(['dashes', 'plain', 'filled', 'image']),

    /** switching content alignment  */
    alignItems: PropTypes.oneOf(['center', 'right', 'left']),

    /** size to control icon and spacing  */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']),

    /** click event handler  */
    onClick: PropTypes.func,

    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** When provided, hover will display a tooltip */
    tooltipContent: PropTypes.node,

    /** Tooltip props */
    tooltipProps: PropTypes.shape(TooltipCommonProps),

    /** Displays the plus icon */
    showIcon: PropTypes.bool,

    /** Removes padding */
    removePadding: PropTypes.bool,

    /** sets the border-radius css property on the button element */
    borderRadius: PropTypes.string,

    /** Defines a string value that labels the add item element */
    ariaLabel: PropTypes.string,

    /** Identifies the element that labels the add item element */
    ariaLabelledby: PropTypes.string,

    /** Subtitle of the component */
    subtitle: PropTypes.node,

    /** The illustraion icon src or node */
    icon: PropTypes.node,
  };

  static defaultProps = {
    theme: 'dashes',
    size: 'tiny',
    alignItems: 'center',
    showIcon: true,
    removePadding: false,
  };

  _renderDefaultIcon = () => {
    const { size, theme } = this.props;

    const isImageIcon = theme === 'image';

    return (
      <ThemeProviderConsumerBackwardCompatible
        defaultIcons={{
          AddItemButton: AddItemButtonIcons,
        }}
      >
        {({ icons }) => {
          const Icon = icons.AddItemButton[isImageIcon ? 'image' : size];
          return <Icon className={classes.icon} />;
        }}
      </ThemeProviderConsumerBackwardCompatible>
    );
  };

  _renderIllustration = () => {
    const { icon, size } = this.props;

    return (
      <Image
        className={classes.illustration}
        fit="contain"
        src={icon}
        {...illustrationDimensions[size]}
      />
    );
  };

  _renderIcon = () => {
    const { icon } = this.props;

    if (!icon) {
      return this._renderDefaultIcon();
    }

    return isString(icon) ? this._renderIllustration() : icon;
  };

  _renderText = () => {
    const { children, theme, size } = this.props;

    if (!children || theme === 'image') {
      return null;
    }

    const textSize = size === 'tiny' ? 'small' : 'medium';

    return (
      <div className={st(classes.textWrapper, { size })}>
        {typeof children === 'function' ? (
          children()
        ) : (
          <Text
            className={classes.textContent}
            weight="thin"
            skin="standard"
            size={textSize}
            dataHook={dataHooks.itemText}
            ellipsis
          >
            {children}
          </Text>
        )}
      </div>
    );
  };

  _renderSubtitle = () => {
    const { size, subtitle } = this.props;

    return (
      subtitle && (
        <Text
          className={st(classes.subtitle, { size })}
          size="small"
          dataHook={dataHooks.itemSubtitle}
        >
          {subtitle}
        </Text>
      )
    );
  };

  _renderContent = () => {
    const { theme, alignItems, size, disabled, showIcon } = this.props;

    return (
      <div
        className={st(classes.contentContainer, {
          theme,
          size,
          alignItems,
          disabled,
        })}
      >
        <div className={st(classes.content, { size })}>
          {showIcon && this._renderIcon()}
          {this._renderText()}
        </div>
        {this._renderSubtitle()}
      </div>
    );
  };

  _getTooltipProps = () => {
    const { tooltipProps = {}, theme, tooltipContent, alignItems } = this.props;
    const content = tooltipProps.content || tooltipContent;
    const isImageTheme = theme === 'image';

    return {
      disabled: !content,
      content,
      flip: !isImageTheme,
      moveBy: { y: isImageTheme ? -12 : 0 },
      placement: tooltipPlacementByAlignment[alignItems] || 'top',
      ...tooltipProps,
    };
  };

  render() {
    const {
      dataHook,
      onClick,
      disabled,
      theme,
      focusableOnFocus,
      focusableOnBlur,
      removePadding,
      borderRadius,
      className,
      ariaLabel,
      ariaLabelledBy,
      size,
      alignItems,
    } = this.props;

    return (
      <Tooltip
        className={classes.tooltip}
        dataHook={dataHook}
        {...this._getTooltipProps()}
      >
        <button
          className={st(
            classes.root,
            { theme, size, removePadding, borderRadius, disabled, alignItems },
            className,
          )}
          style={borderRadius && { borderRadius }}
          disabled={disabled}
          data-hook={dataHooks.addItem}
          type="button"
          onClick={onClick}
          onFocus={focusableOnFocus}
          onBlur={focusableOnBlur}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
        >
          {this._renderContent()}
        </button>
      </Tooltip>
    );
  }
}

export default withFocusable(AddItem);
