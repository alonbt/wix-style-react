import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../../Tooltip';
import Heading from '../../Heading';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import { st, classes } from './FunnelBadge.st.css';
import { dataHooks } from '../constants';

class Badge extends PureComponent {
  render() {
    const {
      value,
      className,
      focusableOnBlur,
      focusableOnFocus,
      dataHook,
    } = this.props;
    return (
      <div
        className={st(classes.badge, className)}
        data-hook={dataHook}
        tabIndex={0}
        onBlur={focusableOnBlur}
        onFocus={focusableOnFocus}
      >
        <span className={classes.badgeContent}>
          <Heading appearance="H6" dataHook={dataHooks.badgeValue} light>
            {value}
          </Heading>
        </span>
      </div>
    );
  }
}

const FocusedBadge = withFocusable(Badge);

export const FunnelBadge = props => {
  const { tooltipContent, onTooltipShow, value } = props;
  return (
    <Tooltip
      dataHook={dataHooks.badgeTooltip}
      disabled={!tooltipContent}
      content={tooltipContent}
      onShow={onTooltipShow}
      moveBy={{ y: 2 }}
      textAlign="start"
    >
      <FocusedBadge value={value} dataHook={dataHooks.badge} />
    </Tooltip>
  );
};

FunnelBadge.propTypes = {
  /** Badge's value */
  value: PropTypes.string.isRequired,

  /** Tooltip content. Can be either string or renderable node */
  tooltipContent: PropTypes.node,

  /** Callback on tooltip content show event */
  onTooltipShow: PropTypes.func,
};
