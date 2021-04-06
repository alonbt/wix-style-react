import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import { dataHooks } from '../constants';
import { classes } from '../Notification.st.css';
import { EllipsisCommonProps } from '../../common/PropTypes/EllipsisCommon';
import { FontUpgradeContext } from '../../FontUpgrade/context';

const TextLabel = ({ children, ...ellipsisProps }) => (
  <FontUpgradeContext.Consumer>
    {({ active: isMadefor }) => (
      <div className={classes.label}>
        <Text
          weight={isMadefor ? 'normal' : 'thin'}
          {...ellipsisProps}
          light
          dataHook={dataHooks.notificationLabel}
        >
          {children}
        </Text>
      </div>
    )}
  </FontUpgradeContext.Consumer>
);

TextLabel.propTypes = {
  children: PropTypes.node,
  ...EllipsisCommonProps,
};

TextLabel.defaultProps = {
  ellipsis: true,
  placement: 'bottom',
};

TextLabel.displayName = 'Notification.TextLabel';

export default TextLabel;
