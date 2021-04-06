import React from 'react';
import { Animator } from 'wix-animations';
import PropTypes from 'prop-types';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import ChevronUp from 'wix-ui-icons-common/ChevronUp';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';
import Text from '../../Text';
import Button from '../../Button';
import TextButton from '../../TextButton';
import { buttonTypes, SHOW_LABEL, dataHooks } from '../constants';

import { st, classes } from './AccordionItem.st.css';

class AccordionItem extends React.PureComponent {
  static displayName = 'AccordionItem';

  static propTypes = {
    buttonType: PropTypes.oneOf(['textButton', 'button', 'node']),
    title: PropTypes.node,
    expandLabel: PropTypes.node,
    collapseLabel: PropTypes.node,
    showLabel: PropTypes.oneOf(['hover', 'always']),
    children: PropTypes.node,
    icon: PropTypes.node,
    open: PropTypes.bool,
    initiallyOpen: PropTypes.bool,
    disabled: PropTypes.bool,
    onToggle: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    skin: PropTypes.oneOf(['standard', 'light']),
    hideShadow: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    buttonType: 'textButton',
  };

  state = {
    hover: false,
  };

  _onMouseLeave = e => {
    const { disabled, onMouseLeave } = this.props;

    this.setState({ hover: false });
    !disabled && onMouseLeave && onMouseLeave(e);
  };

  _onMouseEnter = e => {
    const { disabled, onMouseEnter } = this.props;

    this.setState({ hover: true });
    !disabled && onMouseEnter && onMouseEnter(e);
  };

  _renderOpenButton = show => {
    const { expandLabel, buttonType, disabled } = this.props;
    const commonProps = {
      disabled,
      dataHook: dataHooks.toggleButton,
    };

    let label;

    if (buttonType === buttonTypes.node) {
      label = show && expandLabel;
    }

    if (buttonType === buttonTypes.button && expandLabel) {
      label = show && (
        <Button {...commonProps} size="small" children={expandLabel} />
      );
    }

    if (buttonType === buttonTypes.textButton) {
      label = (
        <TextButton
          {...commonProps}
          suffixIcon={<ChevronDown size="24px" />}
          children={show && expandLabel}
        />
      );
    }

    return label;
  };

  _renderCloseButton = show => {
    const { collapseLabel, buttonType, disabled } = this.props;
    const commonProps = {
      disabled,
      dataHook: dataHooks.toggleButton,
    };

    let label;

    if (buttonType === buttonTypes.node) {
      label = show && collapseLabel;
    }

    if (buttonType === buttonTypes.button && collapseLabel) {
      label = show && (
        <Button
          {...commonProps}
          size="small"
          priority="secondary"
          children={collapseLabel}
        />
      );
    }

    if (buttonType === buttonTypes.textButton) {
      label = (
        <TextButton
          {...commonProps}
          suffixIcon={<ChevronUp size="24px" />}
          children={show && collapseLabel}
        />
      );
    }

    return label;
  };

  _renderButton = () => {
    const { showLabel, buttonType, open } = this.props;
    const { hover } = this.state;
    let showLabelValue = showLabel;

    // Only for buttonType='button', showLabel should be 'always' by default.
    if (!showLabelValue) {
      showLabelValue =
        buttonType === buttonTypes.button
          ? SHOW_LABEL.always
          : SHOW_LABEL.hover;
    }

    if (showLabelValue === SHOW_LABEL.always) {
      return open
        ? this._renderCloseButton(true)
        : this._renderOpenButton(true);
    }

    if (showLabelValue === SHOW_LABEL.hover) {
      return open
        ? this._renderCloseButton(hover)
        : this._renderOpenButton(hover);
    }
  };

  render() {
    const {
      icon,
      title,
      open,
      children,
      onToggle,
      disabled,
      skin,
      hideShadow,
      className,
      size,
      last,
    } = this.props;
    const { hover } = this.state;

    return (
      <WixStyleReactContext.Consumer>
        {({ reducedSpacingAndImprovedLayout }) => (
          <div
            className={st(
              classes.root,
              {
                disabled,
                hover,
                open,
                skin,
                hideShadow,
                size,
                last,
                reducedSpacingAndImprovedLayout,
              },
              className,
            )}
          >
            <div data-hook={dataHooks.item}>
              <div
                onClick={!disabled ? onToggle : null}
                className={st(classes.header, { size })}
                data-hook="header"
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
              >
                {icon && (
                  <div className={classes.icon} data-hook="icon">
                    {icon}
                  </div>
                )}
                {title && (
                  <div className={classes.title} data-hook="titleContainer">
                    {typeof title === 'string' ? (
                      <Text dataHook="title" ellipsis weight="normal">
                        {title}
                      </Text>
                    ) : (
                      title
                    )}
                  </div>
                )}
                <div
                  className={classes.toggleButton}
                  data-hook="toggle-accordion-wrapper"
                  children={this._renderButton()}
                />
              </div>

              <Animator show={open} height>
                <div data-hook="children" className={classes.children}>
                  {children}
                </div>
              </Animator>
            </div>
          </div>
        )}
      </WixStyleReactContext.Consumer>
    );
  }
}

export default AccordionItem;
