import React from 'react';
import { st, classes } from './BadgeSelectItem.st.css';
import PropTypes from 'prop-types';
import ListItemSelect from '../ListItemSelect';

const BadgeSelectItem = props => {
  const {
    dataHook,
    skin,
    text,
    subtitle,
    ellipsis,
    selected,
    highlighted,
    disabled,
    className,
    size,
    suffix,
  } = props;

  const prefix = <div className={st(classes.marker, { skin })} />;

  return (
    <ListItemSelect
      className={st(classes.root, className)}
      title={text}
      ellipsis={ellipsis}
      dataHook={dataHook}
      prefix={prefix}
      selected={selected}
      highlighted={highlighted}
      disabled={disabled}
      subtitle={subtitle}
      size={size}
      suffix={suffix}
    />
  );
};

BadgeSelectItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** The text to be rendered within the badge. */
  text: PropTypes.node.isRequired,
  /** The secondary text to be rendered within the badge. */
  subtitle: PropTypes.string,
  /** The badge's skin. See the <Badge/> story for the full list of available skins. */
  skin: PropTypes.string.isRequired,
  /** Should the text and subtitle get ellipsis with tooltip, or should it get broken into lines when it reaches the end of its container */
  ellipsis: PropTypes.bool,
  /** If true, the item is selected */
  selected: PropTypes.bool,
  /** If true, the item is highlighted */
  highlighted: PropTypes.bool,
  /** If true, the item is disabled */
  disabled: PropTypes.bool,
  /** Any suffix */
  suffix: PropTypes.node,
  /** Changing text size */
  size: PropTypes.oneOf(['small', 'medium']),
};

export default BadgeSelectItem;

export const badgeSelectItemBuilder = ({
  id,
  className,
  text,
  skin,
  subtitle,
  ellipsis,
  disabled,
  dataHook,
  size,
  suffix,
}) => ({
  id,
  disabled,
  overrideOptionStyle: true,
  value: ({ selected, hovered, disabled }) => (
    <BadgeSelectItem
      dataHook={dataHook}
      className={className}
      skin={skin}
      text={text}
      subtitle={subtitle}
      ellipsis={ellipsis}
      selected={selected}
      highlighted={hovered}
      disabled={disabled}
      size={size}
      suffix={suffix}
    />
  ),
});
