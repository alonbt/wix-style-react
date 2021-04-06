import React from 'react';
import { st, classes } from './RichTextToolbarButton.st.css';
import Tooltip from '../../Tooltip';

const RichTextToolbarButton = ({
  dataHook,
  onClick,
  tooltipText,
  isActive,
  isDisabled,
  children,
}) => (
  <Tooltip content={tooltipText}>
    <button
      type="button"
      data-active={isActive}
      data-hook={dataHook}
      className={st(classes.button, {
        disabled: isDisabled,
        active: !isDisabled && isActive,
      })}
      onClick={isDisabled ? undefined : onClick}
    >
      {children}
    </button>
  </Tooltip>
);

export default RichTextToolbarButton;
