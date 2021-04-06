import React from 'react';
import IconButton from '../../IconButton';
import Tooltip from '../../Tooltip';
import Text from '../../Text';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import { arrowsDirection, dataHooks } from '../constants';
import { classes } from '../ModalPreviewLayout.st.css';
import classNames from 'classnames';

const tooltipProps = {
  [arrowsDirection.rightArrow]: {
    dataHook: dataHooks.nextNavigationButtonTooltip,
    placement: 'right',
  },
  [arrowsDirection.leftArrow]: {
    dataHook: dataHooks.prevNavigationButtonTooltip,
    placement: 'left',
  },
};

const iconButtonProps = {
  [arrowsDirection.leftArrow]: {
    dataHook: dataHooks.modalPreviewLeftArrow,
    children: <ChevronLeft />,
  },
  [arrowsDirection.rightArrow]: {
    dataHook: dataHooks.modalPreviewRightArrow,
    children: <ChevronRight />,
  },
};

const NavigationButton = ({ direction, tooltipText, onClick }) => (
  <div className={classNames(classes.navigationButton, classes[direction])}>
    <Tooltip
      disabled={!tooltipText}
      className={classes.modalTooltip}
      appendTo="scrollParent"
      content={<Text children={tooltipText} />}
      {...tooltipProps[direction]}
    >
      <IconButton
        as="button"
        skin="transparent"
        onClick={onClick}
        {...iconButtonProps[direction]}
      />
    </Tooltip>
  </div>
);

export default NavigationButton;
