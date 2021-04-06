import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './AvatarGroup.st.css';
import Avatar from '../Avatar';
import Divider from '../Divider';
import MoreIndicator from './moreIndicator/MoreIndicator';
import { dataHooks } from './constants';

const getRandomColorPattern = () => {
  const patternColor = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
  ];
  const firstIndex = Math.floor(Math.random() * 6); // get random number between 0 to 5
  const lastIndex = firstIndex + 6;
  return patternColor.slice(firstIndex, lastIndex);
};
const myPatternColors = getRandomColorPattern();
const getAvatarColor = ({ index, color }) => {
  let colorIndex = index;
  if (color) {
    return color;
  }

  while (colorIndex > 5) {
    colorIndex = colorIndex - 6;
  }
  return myPatternColors[colorIndex];
};
const setAvatarCompPropsArr = (items, avatarSize, itemsMaxLength) => {
  // gets the items prop from avatarGroup component and set it with the proper prop for avatar component such as size, shape etc.
  const avatarItems = items.map((item, index) => {
    const { ariaLabel, color, imgProps, name, text, placeholder, title } = item;

    const size = avatarSize === 'small' ? 'size24' : 'size30';
    const shape = 'circle';
    const avatarColor = getAvatarColor({ index, color });
    return {
      size,
      shape,
      ariaLabel,
      color: avatarColor,
      imgProps,
      name,
      text,
      placeholder,
      title,
    };
  });
  const avatars = avatarItemsLenghtHandler(
    avatarItems,
    avatarItems.length,
    itemsMaxLength,
    avatarSize,
  );
  return avatars;
};
const avatarItemsLenghtHandler = (items, itemsLength, maxItems, avatarSize) => {
  const moreItemAvatar = {
    text: `${itemsLength - maxItems + 1}+`,
    size: avatarSize === 'small' ? 'size24' : 'size30',
    isMoreItem: true,
  };

  if (itemsLength > maxItems && maxItems >= 2) {
    items.length = maxItems;
    items[maxItems - 1] = moreItemAvatar;
  }
  return items;
};

/** AvatarGroup */
const AvatarGroup = ({
  dataHook,
  className,
  type,
  items,
  maxItems,
  size,
  showDivider,
}) => {
  if (items === undefined) return null;
  const avatarSize = size === 'small' ? 'small' : 'medium';
  const itemsMaxLength = maxItems < 2 ? 2 : maxItems;
  const avatarCompArr = setAvatarCompPropsArr(
    items,
    avatarSize,
    itemsMaxLength,
  );
  return (
    <div
      className={st(classes.root, { size: avatarSize, type }, className)}
      data-hook={dataHook}
    >
      {avatarCompArr.map((item, index) => {
        const key = `${Object.values(item)}`;
        if (item.isMoreItem) {
          return (
            <div key={key} className={classes.avatarContainer}>
              <MoreIndicator
                {...item}
                size={avatarSize}
                key={key}
                className={st(classes.moreItemContainer, {
                  type,
                  size: avatarSize,
                })}
              />
            </div>
          );
        }
        return (
          <React.Fragment key={key}>
            <div className={classes.avatarContainer}>
              <Avatar {...item} dataHook={dataHooks.avatarGroupItem} />
            </div>
            {index === 0 && showDivider && avatarCompArr.length > 1 && (
              <Divider
                direction={'vertical'}
                className={st(classes.divider, { size: avatarSize, type })}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

AvatarGroup.propTypes = {
  /**
   * Applies a data-hook HTML attribute that can be used in the tests
   */
  dataHook: PropTypes.string,

  /**
   * Allows to apply a CSS class to the component’s root element
   */
  className: PropTypes.string,

  /**
   * Changes the way avatars are displayed inside the group.
   */
  type: PropTypes.oneOf(['stretched', 'condensed']),

  /**
   * Changes the size of avatars in the group
   */
  size: PropTypes.oneOf(['medium', 'small']),

  /**
   * Separates the first avatar with a divider  from the rest of the group
   */
  showDivider: PropTypes.bool,

  /**
   * Sets the maximum number of avatars to be displayed. Number which exceeds this limit will be hidden under the “N+” item.
   */
  maxItems: PropTypes.number,

  /**
   * Use to pass an array of avatars
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(['A1', 'A2', 'A3', 'A4', 'A5', 'A6']),
      imgProp: PropTypes.object,
      name: PropTypes.string,
      text: PropTypes.string,
      placeholder: PropTypes.node,
      title: PropTypes.string,
    }),
  ).isRequired,
};

AvatarGroup.defaultProps = {
  type: 'stretched',
  size: 'medium',
  showDivider: false,
  maxItems: 5,
};

export default AvatarGroup;
