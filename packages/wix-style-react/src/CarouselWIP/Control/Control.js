import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';
import { SKIN_PRIORITY_MAP } from '../constants';

const Control = ({
  dataHook,
  className,
  onClick,
  icon,
  size,
  skin,
  disabled = false,
}) => (
  <IconButton
    dataHook={dataHook}
    className={className}
    onClick={onClick}
    size={size}
    skin={skin}
    disabled={disabled}
    priority={SKIN_PRIORITY_MAP[skin]}
  >
    {icon}
  </IconButton>
);

Control.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the control element */
  className: PropTypes.string,

  /** Click handler function for the control */
  onClick: PropTypes.func.isRequired,

  /** Icon to be rendered within the icon button */
  icon: PropTypes.element.isRequired,

  /** Size to pass to the icon button rendered */
  size: PropTypes.string,

  /** Skin to pass to the icon button rendered */
  skin: PropTypes.string,

  /** Disabled flag to pass to the icon button rendered */
  disabled: PropTypes.bool,
};

export default Control;
