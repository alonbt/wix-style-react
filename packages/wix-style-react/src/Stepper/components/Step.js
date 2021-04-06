import React from 'react';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import { FontUpgradeContext } from '../../FontUpgrade/context';
import Text from '../../Text';
import StepMarker from './StepMarker';
import { Type, StepType, DataHook } from '../constants';
import { st, classes } from './Step.st.css';

class Step extends React.PureComponent {
  static displayName = 'Step';
  static defaultProps = {
    type: StepType.Normal,
  };

  state = {
    isHovered: false,

    // Used to update <Text ellipsis> when CSS transition has ended
    // (otherwise the logic to show/hide tooltip will not be applied)
    transitionSequence: 1,
  };

  _handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  _handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  _handleTransitionEnd = event => {
    const { transitionSequence } = this.state;
    if (event.propertyName === 'flex-shrink') {
      this.setState({ transitionSequence: transitionSequence + 1 });
    }
  };

  _handleClick = () => {
    this._isClickable() && this.props.onClick();
  };

  _isClickable = () => {
    const { onClick, type, active } = this.props;
    return type !== StepType.Disabled && !active && !!onClick;
  };

  _getFocusProps = () => {
    const { onClick, focusableOnFocus, focusableOnBlur, type } = this.props;

    if (onClick && type !== StepType.Disabled) {
      return {
        onFocus: focusableOnFocus,
        onBlur: focusableOnBlur,
        tabIndex: 0,
      };
    }

    return { tabIndex: -1 };
  };

  render() {
    const {
      type,
      styleType,
      active,
      last,
      number,
      text,
      className,
      ...otherProps
    } = this.props;
    const { isHovered, transitionSequence } = this.state;
    const isClickable = this._isClickable();

    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <button
            className={st(
              classes.root,
              {
                isMadefor,
                type,
                styleType,
                selected: active,
                hovered: isHovered,
                clickable: isClickable,
              },
              className,
            )}
            data-hook={DataHook.Step}
            data-type={type}
            data-active={active}
            onMouseEnter={this._handleMouseEnter}
            onMouseLeave={this._handleMouseLeave}
            onClick={this._handleClick}
            onTransitionEnd={this._handleTransitionEnd}
            {...this._getFocusProps()}
          >
            <div className={classes.content}>
              <StepMarker
                number={number}
                active={active}
                type={type}
                styleType={styleType}
                hovered={isHovered && isClickable}
                className={classes.marker}
              />
              <Text
                key={transitionSequence}
                ellipsis
                weight={isMadefor ? 'thin' : 'normal'}
                size={styleType === Type.Text ? 'medium' : 'small'}
                showTooltip={!active}
                dataHook={DataHook.StepText}
                className={classes.text}
              >
                {text}
              </Text>
            </div>
            {!last && <ChevronRight className={classes.arrow} />}
          </button>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

export default withFocusable(Step);
