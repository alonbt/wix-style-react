import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import Tooltip from '../../Tooltip';
import { st, classes } from './ToggleIcon.st.css';

const Icon = ({
  'data-click': dataClick,
  selected,
  onClick,
  focusableOnFocus,
  focusableOnBlur,
  children,
  className,
  ...rest
}) => (
  <button
    {...rest}
    className={st(classes.button, { selected }, className)}
    data-click={dataClick}
    data-hook="toggle-icon"
    data-selected={selected}
    onClick={onClick}
    onFocus={focusableOnFocus}
    onBlur={focusableOnBlur}
    type="button"
  >
    {children}
  </button>
);

const FocusableIcon = withFocusable(Icon);

class ToggleIcon extends React.Component {
  static displayName = 'SegmentedToggle.Icon';

  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    value: PropTypes.string,
    tooltipText: PropTypes.string,
    disabled: PropTypes.bool,
  };

  render() {
    const {
      children,
      selected,
      tooltipText,
      focusableOnFocus,
      focusableOnBlur,
      onClick,
      dataHook,
      'data-click': dataClick,
      ...rest
    } = this.props;
    return (
      <Tooltip
        className={st(classes.tooltip)}
        dataHook={dataHook}
        appendTo="window"
        placement="top"
        content={tooltipText}
        timeout={0}
      >
        <FocusableIcon
          {...rest}
          selected={selected}
          data-click={dataClick}
          onClick={onClick}
          onFocus={focusableOnFocus}
          onBlur={focusableOnBlur}
        >
          {children}
        </FocusableIcon>
      </Tooltip>
    );
  }
}

export default ToggleIcon;
