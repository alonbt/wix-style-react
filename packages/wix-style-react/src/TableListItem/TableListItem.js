import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import { st, classes } from './TableListItem.st.css';
import Checkbox from '../Checkbox';
import Box from '../Box';
import DragHandle from 'wix-ui-icons-common/system/DragAndDropLarge';
import DragHandleDisabled from 'wix-ui-icons-common/system/DragAndDropLockedLarge';
import { WixStyleReactContext } from '../WixStyleReactProvider/context';

export const VERTICAL_PADDING = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
};

const ALIGN = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const getWidthStyle = options =>
  options.reduce(
    (acc, { width }) =>
      `${acc} ${typeof width === 'number' ? width + 'px' : width || '1fr'}`,
    '',
  );

/** TableListItem */
const TableListItem = ({
  options,
  verticalPadding,
  checkbox,
  checkboxDisabled,
  checked,
  onCheckboxChange,
  draggable,
  focused,
  onBlur,
  dragDisabled,
  showDivider,
  onKeyUp,
  onClick,
  dragging,
  className,
  dataHook,
}) => {
  const DragHandleIcon = dragDisabled ? DragHandleDisabled : DragHandle;
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus();
    }
  }, [ref, focused]);
  return (
    <WixStyleReactContext.Consumer>
      {({ reducedSpacingAndImprovedLayout }) => (
        <div
          onClick={onClick}
          className={st(
            classes.root,
            {
              draggable: draggable && !dragDisabled,
              dragging,
              checked: checkbox && checked,
              showDivider,
              clickable: !!onClick,
              reducedSpacingAndImprovedLayout,
              verticalPadding,
            },
            className,
          )}
          data-hook={dataHook}
        >
          <Box>
            {draggable && (
              <div
                tabIndex={onKeyUp ? 0 : undefined}
                ref={ref}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                className={st(classes.dragHandle, {
                  disabled: dragDisabled,
                })}
                data-hook={dataHooks.tableListItemDragHandle}
              >
                <DragHandleIcon />
              </div>
            )}
            {checkbox && (
              <div
                className={classes.checkbox}
                data-hook={dataHooks.tableListItemCheckboxContainer}
                onClick={onCheckboxChange}
              >
                <Checkbox
                  checked={checked}
                  disabled={checkboxDisabled}
                  dataHook={dataHooks.tableListItemCheckbox}
                />
              </div>
            )}
            <div
              className={classes.optionsContainer}
              style={{
                gridTemplateColumns: getWidthStyle(options),
              }}
              data-hook={dataHooks.tableListItemOptionsContainer}
            >
              {options.map(({ value, align }, index) => (
                <div
                  className={st(classes.align, {
                    position: ALIGN[align],
                  })}
                  key={index}
                  data-hook={dataHooks.tableListItemValue}
                >
                  {value}
                </div>
              ))}
            </div>
          </Box>
        </div>
      )}
    </WixStyleReactContext.Consumer>
  );
};

TableListItem.displayName = 'TableListItem';

TableListItem.propTypes = {
  dataHook: PropTypes.string,
  className: PropTypes.string,

  /**
   width supports px/%/fr
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      align: PropTypes.oneOf([ALIGN.left, ALIGN.center, ALIGN.right]),
    }),
  ).isRequired,

  /**
    Extra space on top and bottom of list item
   */
  verticalPadding: PropTypes.oneOf([
    VERTICAL_PADDING.medium,
    VERTICAL_PADDING.small,
    VERTICAL_PADDING.tiny,
  ]),
  /**
   *
   */
  dragging: PropTypes.bool,
  /**
    Show checkbox
   */
  checkbox: PropTypes.bool,

  /**
    Disable checkbox
   */
  checkboxDisabled: PropTypes.bool,

  /**
    State of the checkbox
   */
  checked: PropTypes.bool,

  /**
    Called when checkbox is clicked
   */
  onCheckboxChange: PropTypes.func,

  /**
    Show drag handle
   */
  draggable: PropTypes.bool,

  /**
    Show disabled drag handle
   */
  dragDisabled: PropTypes.bool,

  /**
    Show divider on the bottom of the list item
   */
  showDivider: PropTypes.bool,
  /**
   * Called when item is lost focus
   */
  onBlur: PropTypes.func,
  /**
   * Called when item is focused, and key is pressed and released. Used for dnd via keyboard
   */
  onKeyUp: PropTypes.func,
  /**
   * Forces focus on drag handle
   */
  focused: PropTypes.bool,
  /**
    Called when the item is clicked
   */
  onClick: PropTypes.func,
};

TableListItem.defaultProps = {
  onCheckboxChange: () => {},
  verticalPadding: VERTICAL_PADDING.medium,
  checkbox: false,
  draggable: false,
  showDivider: false,
};

export default TableListItem;
