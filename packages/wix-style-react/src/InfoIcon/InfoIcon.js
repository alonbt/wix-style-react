import React from 'react';
import PropTypes from 'prop-types';
import InfoCircle from 'wix-ui-icons-common/InfoCircle';
import InfoCircleSmall from 'wix-ui-icons-common/InfoCircleSmall';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

import Tooltip from '../Tooltip';
import { st, classes } from './InfoIcon.st.css';
import { getTooltipDataHook } from './utils';

const iconComponentBySizeMap = {
  small: InfoCircleSmall,
  medium: InfoCircle,
};

const InfoIcon = ({ dataHook, content, size, tooltipProps, className }) => {
  const Icon = iconComponentBySizeMap[size];
  return (
    <div
      className={st(classes.root, className)}
      data-size={size}
      data-hook={dataHook}
    >
      <Tooltip
        {...tooltipProps}
        content={content}
        dataHook={getTooltipDataHook(dataHook)}
      >
        <Icon className={classes.icon} />
      </Tooltip>
    </div>
  );
};

InfoIcon.displayName = 'InfoIcon';

InfoIcon.propTypes = {
  /** Hook for testing purposes. */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Icon size. */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Tooltip content. */
  content: PropTypes.node.isRequired,

  /** Props for `<Tooltip/>` component. */
  tooltipProps: PropTypes.shape(TooltipCommonProps),
};

InfoIcon.defaultProps = {
  size: 'medium',
};

export default InfoIcon;
