import React from 'react';
import PropTypes from 'prop-types';

import ListItemSelect from '../ListItemSelect';
import Text from '../Text';
import Box from '../Box';
import LocationIcon from 'wix-ui-icons-common/Location';
import { st, classes } from './AddressInputItem.st.css';

/** This component is used to display an address item mainly in <AddressInput/> component. */
class AddressInputItem extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      secondaryLabel,
      optionLayout,
      mainLabel,
      suffix,
      prefix,
      disabled,
      selected,
      highlighted,
      onClick,
    } = this.props;

    const textProps = {
      tagName: 'div',
      ellipsis: true,
      skin: disabled ? 'disabled' : 'standard',
      light: selected,
    };

    return (
      <ListItemSelect
        dataHook={dataHook}
        className={st(classes.root, { optionLayout }, className)}
        subtitle={secondaryLabel}
        title={<Text {...textProps}>{mainLabel}</Text>}
        suffix={<Box>{suffix}</Box>}
        prefix={<Box>{prefix}</Box>}
        ellipsis
        disabled={disabled}
        selected={selected}
        highlighted={highlighted}
        onClick={onClick}
      />
    );
  }
}

export const addressInputItemBuilder = ({
  id,
  className,
  prefix,
  mainLabel,
  secondaryLabel,
  suffix,
  disabled,
  dataHook,
  optionLayout,
  onClick,
  displayLabel,
}) => ({
  id,
  disabled,
  overrideOptionStyle: true,
  label: displayLabel,
  value: ({ selected, hovered, ...rest }) => (
    <AddressInputItem
      optionLayout={optionLayout}
      dataHook={dataHook}
      className={className}
      prefix={prefix}
      mainLabel={mainLabel}
      secondaryLabel={secondaryLabel}
      suffix={suffix}
      selected={selected}
      highlighted={hovered}
      onClick={onClick}
      {...rest}
    />
  ),
});

AddressInputItem.displayName = 'AddressInputItem';

AddressInputItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** The main matched part of the address based on the search term.*/
  mainLabel: PropTypes.string,

  /** Address additional information. Usually contains region, country, etc.*/
  secondaryLabel: PropTypes.string,

  /** Sets the layout of `mainLabel` and `secondaryLabel`. The possible options can be either side by side: `single-line` or double lined: `double-line`*/
  optionLayout: PropTypes.oneOf(['single-line', 'double-line']),

  /** Will show the provided node as prefix.*/
  prefix: PropTypes.node,

  /**  Will show the provided node as the option suffix. */
  suffix: PropTypes.node,

  /** If true, the option is selected */
  selected: PropTypes.bool,

  /** If true, the option is highlighted */
  highlighted: PropTypes.bool,

  /** If true, the option is disabled */
  disabled: PropTypes.bool,

  /** Callback function triggered when option is clicked */
  onClick: PropTypes.func,
};

AddressInputItem.defaultProps = {
  optionLayout: 'single-line',
  prefix: <LocationIcon />,
};

export default AddressInputItem;
