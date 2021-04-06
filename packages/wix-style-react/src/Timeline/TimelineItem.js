import React from 'react';
import PropTypes from 'prop-types';
import { FontUpgradeContext } from '../FontUpgrade/context';
import Text from '../Text';
import { classes, st, vars } from './TimelineItem.st.css';
import { dataHooks } from './constants';

import { isString } from '../utils/StringUtils';

/** A timeline item is a display of a timeline event */
class TimelineItem extends React.PureComponent {
  render() {
    const { idx, item, dataHook, gap } = this.props;

    return (
      <li className={classes.event} data-hook={dataHook}>
        <FontUpgradeContext.Consumer>
          {({ active: isMadefor }) => (
            <>
              <div className={classes.prefix}>
                {item.customPrefix ? (
                  <div
                    data-hook={`${dataHooks.timelineBulletIndicator}-${idx}`}
                  >
                    {item.customPrefix}
                  </div>
                ) : (
                  <div
                    data-hook={`${dataHooks.timelineDefaultPrefix}-${idx}`}
                    className={classes.defaultIndicator}
                  />
                )}
                <div className={classes.line} />
              </div>
              <div
                className={st(classes.label, { withSuffix: !!item.suffix })}
                style={{ [vars.marginBottom]: gap }}
              >
                {isString(item.label) ? (
                  <Text
                    dataHook={`${dataHooks.timelineLabel}-${idx}`}
                    weight={isMadefor ? 'thin' : 'normal'}
                    size="small"
                    className={classes.labelText}
                  >
                    {item.label}
                  </Text>
                ) : (
                  item.label
                )}
                {item.labelAction ? (
                  <div
                    className={classes.labelAction}
                    data-hook={`${dataHooks.timelineLabelAction}-${idx}`}
                  >
                    {item.labelAction}
                  </div>
                ) : null}
              </div>
              {item.suffix ? (
                <div
                  className={classes.suffix}
                  data-hook={`${dataHooks.timelineSuffix}-${idx}`}
                >
                  {isString(item.suffix) ? (
                    <Text
                      dataHook={`${dataHooks.timelineTextSuffix}-${idx}`}
                      weight={isMadefor ? 'thin' : 'normal'}
                      light
                      secondary
                      size="small"
                    >
                      {item.suffix}
                    </Text>
                  ) : (
                    item.suffix
                  )}
                </div>
              ) : null}
            </>
          )}
        </FontUpgradeContext.Consumer>
      </li>
    );
  }
}

TimelineItem.displayName = 'TimelineItem';

TimelineItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** timeline event item index*/
  idx: PropTypes.number,
  /** timeline event item */
  item: PropTypes.shape({
    /** event text - could be a node or a string */
    label: PropTypes.node,
    /** action element in the end of event text */
    labelAction: PropTypes.node,
    /**  TODO: still in development. custom bullet element like icon or avatar */
    customPrefix: PropTypes.node,
    /** suffix text or element placed on the right */
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  }).isRequired,
};

export default TimelineItem;
