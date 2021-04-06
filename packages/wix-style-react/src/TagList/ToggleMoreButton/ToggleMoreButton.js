import React from 'react';
import PropTypes from 'prop-types';
import TagListAction from '../TagListAction';
import Tooltip from '../../Tooltip';
import { classes } from '../TagList.st.css';

const ToggleMoreButton = ({
  toggleMoreButton,
  onClick,
  amountOfHiddenTags,
  isExpanded,
  dataHook,
}) => {
  const { label, tooltipContent, tooltipProps, ...props } = toggleMoreButton(
    amountOfHiddenTags,
    isExpanded,
  );

  const button = (
    <TagListAction {...props} dataHook={dataHook} onClick={onClick}>
      {label}
    </TagListAction>
  );

  if (tooltipContent) {
    return (
      <Tooltip
        content={tooltipContent}
        className={classes.item}
        {...tooltipProps}
      >
        {button}
      </Tooltip>
    );
  }
  return button;
};

ToggleMoreButton.displayName = 'ToggleMoreButton';

ToggleMoreButton.propTypes = {
  toggleMoreButton: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  amountOfHiddenTags: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool,
  dataHook: PropTypes.string,
};

export default ToggleMoreButton;
