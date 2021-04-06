import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './DropdownBase.st.css';
import Popover, { placements } from '../Popover';
import DropdownLayout from '../DropdownLayout';

class DropdownBase extends React.PureComponent {
  static displayName = 'DropdownBase';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** A css class to be applied to the component's root element */
    className: PropTypes.string,
    /** A controlled prop to control whether the Popover should be opened*/
    open: PropTypes.bool,
    /** The Popover's placement */
    placement: PropTypes.oneOf(placements),
    /** The Popover's appendTo */
    appendTo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Whether to show the Popover's arrow */
    showArrow: PropTypes.bool,
    /** Callback function to be called on outside click */
    onClickOutside: PropTypes.func,
    /** Callback function to be called on mouseEnter on the entire component */
    onMouseEnter: PropTypes.func,
    /** Callback function to be called on mouseEnter onMouseLeave the entire component */
    onMouseLeave: PropTypes.func,
    /** Callback function to be called when dropdown is opened */
    onShow: PropTypes.func,
    /** Callback function to be called when dropdown is closed */
    onHide: PropTypes.func,
    /** Callback function to be called when selecting an option. It's signature is `onSelect(selectedOption)` */
    onSelect: PropTypes.func,
    /**
     * popovers content is set to minnimum width of trigger element,
     * but it can expand up to the value of maxWidth.
     */
    dynamicWidth: PropTypes.bool,
    /** The minimum width applied to the list */
    minWidth: PropTypes.number,
    /** The maximum width applied to the list */
    maxWidth: PropTypes.number,
    /** maximum height of dropdown box */
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * The target component to be rendered. If a regular node is passed, it'll be rendered as-is.
     * If a function is passed, it's expected to return a React element. The function accepts an
     * object containing the following properties:
     *
     *  * `open` - will open the Popover
     *  * `close` - will close the Popover
     *  * `toggle` - will toggle the Popover
     *  * `isOpen` - indicates whether the items list is currently open
     *  * `delegateKeyDown` - the underlying DropdownLayout's keydown handler. It can be called
     *                        inside another keyDown event in order to delegate it.
     *  * `selectedOption` - the currently selected option
     *
     * Refer to the component documentation for more information.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /**
     * Array of objects. Objects must have an `id` and can can include value and node. If value is
     * '-', a divider will be rendered instead (dividers do not require and id).
     */
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          value: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string,
            PropTypes.func,
          ]).isRequired,
          disabled: PropTypes.bool,
          overrideStyle: PropTypes.bool,
        }),

        // A divider option without an id
        PropTypes.shape({
          value: PropTypes.oneOf(['-']),
        }),
      ]),
    ),

    /** The `id` of the selected option in the list */
    selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Dropdown container overflow value */
    overflow: PropTypes.string,

    /** Dropdown container tabindex value */
    tabIndex: PropTypes.number,

    /**
     * The `id` of the **initial** selected option in the list, will be used when the selection
     * behaviour is being controlled
     */
    initialSelectedId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** Dropdown content z-index */
    zIndex: PropTypes.number,

    /** moves dropdown content relative to the parent by x or y */
    moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),

    /**
     * Whether to enable the flip behaviour. This behaviour is used to flip the `<Popover/>`'s placement
     * when it starts to overlap the target element (`<Popover.Element/>`).
     */
    flip: PropTypes.bool,

    /**
     * Whether to enable the fixed behaviour. This behaviour is used to keep the `<Popover/>` at it's
     * original placement even when it's being positioned outside the boundary.
     */
    fixed: PropTypes.bool,

    /** stretches trigger element to its parent container width */
    fluid: PropTypes.bool,

    /** adds enter and exit animation */
    animate: PropTypes.bool,

    /** Scroll to the selected option on opening the dropdown */
    focusOnSelectedOption: PropTypes.bool,

    /** Set this prop for lazy loading of the dropdown layout items.*/
    infiniteScroll: PropTypes.bool,

    /** A callback called when more items are requested to be rendered. */
    loadMore: PropTypes.func,

    /** Whether there are more items to be loaded. */
    hasMore: PropTypes.bool,

    /** Scroll to the option on opening the dropdown */
    focusOnOption: PropTypes.number,
  };

  static defaultProps = {
    placement: 'bottom',
    appendTo: 'parent',
    showArrow: false,
    maxHeight: '260px',
    fluid: false,
    animate: false,
    onShow: () => {},
    onHide: () => {},
  };

  _dropdownLayoutRef = null;
  _shouldCloseOnMouseLeave = false;

  state = {
    open: this.props.open,
    selectedId: this.props.selectedId || this.props.initialSelectedId || -1,
  };

  /**
   * Return `true` if the `open` prop is being controlled
   */
  _isControllingOpen = (props = this.props) => {
    return typeof props.open !== 'undefined';
  };

  /**
   * Return `true` if the selection behaviour is being controlled
   */
  _isControllingSelection = (props = this.props) => {
    return (
      typeof props.selectedId !== 'undefined' &&
      typeof props.onSelect !== 'undefined'
    );
  };

  _open = () => {
    if (!this._isControllingOpen()) {
      this.setState({ open: true });
      this.props.onShow();
    }
  };

  _close = e => {
    if (this._isControllingOpen()) {
      return;
    }

    // If called within a `mouseleave` event on the target element, we would like to close the
    // popover only on the popover's `mouseleave` event
    if (e && e.type === 'mouseleave') {
      // We're not using `setState` since we don't want to wait for the next render
      this._shouldCloseOnMouseLeave = true;
    } else {
      this.setState({ open: false });
    }
    this.props.onHide();
  };

  _toggle = () => {
    !this._isControllingOpen() &&
      this.setState(({ open }) => {
        if (open) {
          this.props.onHide();
        } else {
          this.props.onShow();
        }

        return {
          open: !open,
        };
      });
  };

  _handleClickOutside = () => {
    const { onClickOutside } = this.props;

    this._close();
    onClickOutside && onClickOutside();
  };

  _handlePopoverMouseEnter = () => {
    const { onMouseEnter } = this.props;

    onMouseEnter && onMouseEnter();
  };

  _handlePopoverMouseLeave = () => {
    const { onMouseLeave } = this.props;

    if (this._shouldCloseOnMouseLeave) {
      this._shouldCloseOnMouseLeave = false;

      this.setState({
        open: false,
      });
    }

    onMouseLeave && onMouseLeave();
  };

  _handleSelect = selectedOption => {
    const newState = {};

    if (!this._isControllingOpen()) {
      newState.open = false;
    }

    if (!this._isControllingSelection()) {
      newState.selectedId = selectedOption.id;
    }

    this.setState(newState, () => {
      const { onSelect } = this.props;
      onSelect && onSelect(selectedOption);
    });
  };

  _handleClose = () => {
    if (this.state.open) {
      this._close();
    }
  };

  _getSelectedOption = selectedId => {
    return this.props.options.find(({ id }) => id === selectedId);
  };

  /**
   * Determine if a certain key should open the DropdownLayout
   */
  _isOpenKey = key => {
    return ['Enter', 'Spacebar', ' ', 'ArrowDown'].includes(key);
  };

  /**
   * A common `keydown` event that can be used for the target elements. It will automatically
   * delegate the event to the underlying <DropdownLayout/>, and will determine when to open the
   * dropdown depending on the pressed key.
   */
  _handleKeyDown = e => {
    if (this._isControllingOpen()) {
      return;
    }

    const isHandledByDropdownLayout = this._delegateKeyDown(e);

    if (!isHandledByDropdownLayout) {
      if (this._isOpenKey(e.key)) {
        this._open();
        e.preventDefault();
      }
    }
  };

  /*
   * Delegate the event to the DropdownLayout. It'll handle the navigation, option selection and
   * closing of the dropdown.
   */
  _delegateKeyDown = e => {
    if (!this._dropdownLayoutRef) {
      return false;
    }

    return this._dropdownLayoutRef._onKeyDown(e);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Keep internal state updated if needed
    if (
      this._isControllingOpen(nextProps) &&
      this.props.open !== nextProps.open
    ) {
      this.setState({ open: nextProps.open });
    }

    if (
      this._isControllingSelection(nextProps) &&
      this.props.selectedId !== nextProps.selectedId
    ) {
      this.setState({ selectedId: nextProps.selectedId });
    }
  }

  _renderChildren() {
    const { children } = this.props;
    const { selectedId, open } = this.state;

    if (!children) {
      return null;
    }

    return React.isValidElement(children)
      ? children // Returning the children as is when using in controlled mode
      : children({
          open: this._open,
          close: this._close,
          toggle: this._toggle,
          isOpen: Boolean(open),

          delegateKeyDown: this._delegateKeyDown,

          selectedOption: this._getSelectedOption(selectedId),
        });
  }

  render() {
    const {
      dataHook,
      placement,
      appendTo,
      showArrow,
      zIndex,
      moveBy,
      options,
      minWidth,
      maxWidth,
      fixed,
      flip,
      tabIndex,
      overflow,
      dynamicWidth,
      maxHeight,
      fluid,
      animate,
      className,
      focusOnSelectedOption,
      infiniteScroll,
      loadMore,
      hasMore,
      focusOnOption,
    } = this.props;

    const { open, selectedId } = this.state;

    return (
      <Popover
        {...this.props} // backward compatible for migration stylable 1 to stylable 3
        animate={animate}
        dataHook={dataHook}
        shown={open}
        placement={placement}
        dynamicWidth={dynamicWidth}
        appendTo={appendTo}
        showArrow={showArrow}
        zIndex={zIndex}
        moveBy={moveBy}
        onKeyDown={this._handleKeyDown}
        onMouseEnter={this._handlePopoverMouseEnter}
        onMouseLeave={this._handlePopoverMouseLeave}
        onClickOutside={this._handleClickOutside}
        fixed={fixed}
        flip={flip}
        fluid={fluid}
        className={st(
          classes.root,
          {
            withWidth: Boolean(minWidth || maxWidth),
            withArrow: showArrow,
          },
          className,
        )}
      >
        <Popover.Element>{this._renderChildren()}</Popover.Element>

        <Popover.Content>
          <div
            style={{
              minWidth,
              maxWidth,
            }}
          >
            <DropdownLayout
              dataHook="dropdown-base-dropdownlayout"
              className={classes.list}
              ref={r => (this._dropdownLayoutRef = r)}
              selectedId={selectedId}
              options={options}
              maxHeightPixels={maxHeight}
              onSelect={this._handleSelect}
              onClose={this._handleClose}
              tabIndex={tabIndex}
              inContainer
              visible
              overflow={overflow}
              focusOnSelectedOption={focusOnSelectedOption}
              infiniteScroll={infiniteScroll}
              loadMore={loadMore}
              hasMore={hasMore}
              focusOnOption={focusOnOption}
            />
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}

export default DropdownBase;
