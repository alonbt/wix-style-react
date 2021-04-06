import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { classes, st } from './HorizontalTimeline.st.css';
import { classes as iconsClasses } from './HorizontalTimelineIcons.st.css';
import { dataHooks } from './constants';
import StatusCompleteFilled from 'wix-ui-icons-common/StatusCompleteFilled';
import StatusAlertFilled from 'wix-ui-icons-common/StatusAlertFilled';
import Box from '../Box';

const textPropsBySkinMap = {
  dark: {},
  light: { secondary: true },
};

const defaultItemSkin = 'light';

class HorizontalTimeline extends React.PureComponent {
  render() {
    const { items, dataHook, className } = this.props;

    return (
      <div className={st(classes.root, {}, className)} data-hook={dataHook}>
        {items.map(({ label, width, skin, icon }, i) => {
          width = width || 'auto';
          skin = skin || defaultItemSkin;
          icon = icon || <HorizontalTimeline.DefaultIcon />;

          const nextItemSkin = items[i + 1] && items[i + 1].skin;

          return (
            <div className={classes.column} key={i} style={{ width }}>
              <div className={classes.item}>
                <div className={classes.topRow}>
                  <div className={st(classes.line, { skin })} />
                  <div className={classes.iconWrapper}>{icon}</div>
                  <div
                    className={st(classes.line, {
                      skin: nextItemSkin ? nextItemSkin : defaultItemSkin,
                    })}
                  />
                </div>

                <Box className={classes.label}>
                  <Text
                    size="tiny"
                    ellipsis
                    {...textPropsBySkinMap[skin]}
                    dataHook={`${dataHooks.horizontalTimelineLabel}-${i}`}
                  >
                    {label}
                  </Text>
                </Box>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

HorizontalTimeline.DefaultIcon = () => {
  return <div className={iconsClasses.upcomingIcon} />;
};

HorizontalTimeline.ActiveIcon = () => {
  return <div className={iconsClasses.activeIcon} />;
};

HorizontalTimeline.DestructiveIcon = () => {
  return <StatusAlertFilled className={iconsClasses.errorIcon} />;
};

HorizontalTimeline.CompleteIcon = () => {
  return <StatusCompleteFilled className={iconsClasses.completeIcon} />;
};

HorizontalTimeline.displayName = 'HorizontalTimeline';

HorizontalTimeline.DefaultIcon.displayName = 'HorizontalTimeline.DefaultIcon';
HorizontalTimeline.ActiveIcon.displayName = 'HorizontalTimeline.ActiveIcon';
HorizontalTimeline.DestructiveIcon.displayName =
  'HorizontalTimeline.DestructiveIcon';
HorizontalTimeline.CompleteIcon.displayName = 'HorizontalTimeline.CompleteIcon';

HorizontalTimeline.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /**
   * Timeline items
   *  * `skin ` - Affects the text and line colors, can be one of: 'dark' | 'light'.
   *  * `label` -  Text displayed below the icon.
   *  * `icon ` - An icon representing a timeline item.
   *  * `width ` - The width of the timeline item, can be percentage or pixels.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** item's skin */
      skin: PropTypes.oneOf(['dark', 'light']),
      /** item's text */
      label: PropTypes.string.isRequired,
      /** item's icon */
      icon: PropTypes.node,
      /** custom width for item */
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
};

HorizontalTimeline.defaultProps = {};

export default HorizontalTimeline;
