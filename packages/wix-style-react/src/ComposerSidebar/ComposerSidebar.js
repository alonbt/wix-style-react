import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './ComposerSidebar.st.css';
import { dataHooks } from './constants';
import Box from '../Box';
import ToggleButton from '../ToggleButton';

/** ComposerSidebar */
class ComposerSidebar extends React.PureComponent {
  _renderItem(item) {
    const { selectedId, labelPlacement, size, onClick, className } = this.props;
    const { label, id, icon, disabled, rest } = item;
    const selected = selectedId === id;
    const onClickHandler = item.onClick || onClick;

    return (
      <div
        key={`sidebar-item-${id}`}
        className={st(classes.item, { labelPlacement }, className)}
      >
        <ToggleButton
          {...rest}
          dataHook={`composer-sidebar-item-${id}`}
          onClick={e => onClickHandler(e, { id, label })}
          shape="round"
          size={size}
          border
          skin="inverted"
          labelEllipsis
          disabled={disabled}
          selected={selected}
          labelValue={label}
          labelPlacement={labelPlacement}
        >
          {icon}
        </ToggleButton>
      </div>
    );
  }

  render() {
    const { items, dataHook, selectedId, className } = this.props;
    return (
      <Box
        className={className}
        height="100%"
        maxHeight="100%"
        dataHook={dataHook || dataHooks.composerSidebarContainer}
      >
        <div
          data-hook="composer-sidebar-items-container"
          data-selected-id={selectedId}
          className={classes.itemsContainer}
        >
          {items.map(item => this._renderItem(item))}
        </div>
      </Box>
    );
  }
}

ComposerSidebar.displayName = 'ComposerSidebar';

ComposerSidebar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Custom className for the base element */
  className: PropTypes.string,

  /** Different layout options. Places label to the right of the button or below it. */
  labelPlacement: PropTypes.oneOf(['bottom', 'end']),

  /** Size of the component */
  size: PropTypes.oneOf(['medium', 'large']),

  /** Selected item id */
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Array of button items to show on the sidebar */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    }),
  ),

  /** Default on click handler for items */
  onClick: PropTypes.func,
};

ComposerSidebar.defaultProps = {
  labelPlacement: 'end',
  selectedId: null,
  items: [],
  size: 'medium',
  onClick: () => {},
};

export default ComposerSidebar;
