import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import Input from '../Input';
import { classes } from './InputWithTags.st.css';
import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';
import SortableList from '../SortableList/SortableList';
import defaultDndStyles from '../dnd-styles';
import StatusIndicator from '../StatusIndicator';
import DropDownArrow from 'wix-ui-icons-common/system/DropDownArrow';

class InputWithTags extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.select = this.select.bind(this);
    this.renderReorderableTag = this.renderReorderableTag.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);

    this.state = { inputValue: '', inputHasFocus: false };
  }

  componentDidMount() {
    this.props.autoFocus && this.props.onFocus();
  }

  handleClick(e) {
    if (!this.props.disabled) {
      this.input.focus();
      this.props.onInputClicked && this.props.onInputClicked(e);
    }
  }

  handleInputFocus(e) {
    this.setState({ inputHasFocus: true });
    this.props.onFocus && this.props.onFocus(e);
  }

  handleInputBlur(e) {
    this.setState({ inputHasFocus: false });
    this.props.onBlur && this.props.onBlur(e);
  }

  render() {
    const {
      tags,
      onRemoveTag,
      onReorder,
      placeholder,
      status,
      statusMessage,
      disabled,
      delimiters,
      mode,
      size,
      ...inputProps
    } = this.props;

    const { inputHasFocus: hasFocus } = this.state;
    const isSelectMode = mode === 'select';

    const className = classNames(classes.inputWithTagsContainer, {
      [classes.disabled]: disabled,
      [classes[status]]: status,
      [classes.readOnly]: isSelectMode,
      [classes.hasFocus]: hasFocus && !disabled,
      [classes.hasMaxHeight]:
        !isUndefined(this.props.maxHeight) ||
        !isUndefined(this.props.maxNumRows),
      [classes.sizeSmall]: size === 'small',
      [classes.sizeLarge]: size === 'large',
    });

    /* eslint-disable no-unused-vars */
    const {
      onManuallyInput,
      inputElement,
      closeOnSelect,
      predicate,
      onClickOutside,
      fixedHeader,
      fixedFooter,
      dataHook,
      onFocus,
      withSelection,
      onBlur,
      menuArrow,
      onInputClicked,
      ...desiredProps
    } = inputProps;

    let rowMultiplier;
    if (tags.length && tags[0].size === 'large') {
      rowMultiplier = 47;
    } else {
      rowMultiplier = 35;
    }
    const maxHeight =
      this.props.maxHeight ||
      this.props.maxNumRows * rowMultiplier ||
      'initial';
    return (
      <div
        className={className}
        data-status={status}
        style={{ maxHeight }}
        onClick={this.handleClick}
        data-hook={this.props.dataHook}
        data-focus={(hasFocus && !disabled) || null}
      >
        {onReorder ? (
          <SortableList
            contentClassName={classes.tagsContainer}
            items={tags}
            onDrop={onReorder}
            renderItem={this.renderReorderableTag}
          />
        ) : (
          tags.map(({ label, ...rest }) => (
            <Tag
              key={rest.id}
              dataHook="tag"
              disabled={disabled}
              onRemove={onRemoveTag}
              className={classes.tag}
              {...rest}
            >
              {label}
            </Tag>
          ))
        )}
        <span
          className={classNames(classes.input, !tags.length)}
          data-hook="inner-input-with-tags"
        >
          <div
            className={classNames(classes.hiddenDiv, {
              [classes.smallFont]: size === 'small',
            })}
          >
            {this.state.inputValue}
          </div>

          <Input
            size={size}
            width={this.props.width}
            ref={input => (this.input = input)}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            placeholder={tags.length === 0 ? placeholder : ''}
            {...desiredProps}
            dataHook="inputWithTags-input"
            disabled={disabled}
            disableEditing={isSelectMode}
            onChange={e => {
              if (!delimiters.includes(e.target.value)) {
                this.setState({ inputValue: e.target.value });
                desiredProps.onChange && desiredProps.onChange(e);
              }
            }}
            withSelection
            prefix={
              this.props.customSuffix &&
              !this.props.hideCustomSuffix &&
              !this.state.inputHasFocus && (
                <span
                  data-hook="custom-suffix"
                  className={classes.customSuffix}
                >
                  {this.props.customSuffix}
                </span>
              )
            }
          />
        </span>

        {/* Suffixes */}
        <div className={classes.inputSuffix}>
          {/* Status Indicator */}
          {!disabled && ['error', 'warning', 'loading'].includes(status) && (
            <div className={classes.statusIndicator}>
              <StatusIndicator
                status={status}
                message={statusMessage}
                dataHook="input-status"
              />
            </div>
          )}

          {/* Arrow */}
          {isSelectMode && (
            <div className={classes.menuArrow} data-hook="input-menu-arrow">
              <DropDownArrow />
            </div>
          )}
        </div>
      </div>
    );
  }

  renderReorderableTag({
    item: { id, label, ...itemProps },
    previewStyles,
    isPlaceholder,
    isPreview,
    ...rest
  }) {
    const { onRemoveTag, disabled } = this.props;
    const _classes = classNames(classes.tag, {
      [defaultDndStyles.itemPlaceholder]: isPlaceholder,
      [classes.draggedTagPlaceholder]: isPlaceholder,
      [defaultDndStyles.itemPreview]: isPreview,
      [classes.draggedTag]: isPreview,
    });

    return (
      <div style={previewStyles}>
        <Tag
          id={id}
          dataHook="tag"
          disabled={disabled}
          className={_classes}
          onRemove={onRemoveTag}
          {...itemProps}
          {...rest}
        >
          {label}
        </Tag>
      </div>
    );
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  select() {
    this.input.select();
  }

  clear() {
    this.input.clear();
  }
}

InputWithTags.propTypes = {
  onRemoveTag: PropTypes.func,
  tags: PropTypes.array,
  onReorder: PropTypes.func,
  maxHeight: PropTypes.string,
  maxNumRows: PropTypes.number,
  onKeyDown: PropTypes.func,
  dataHook: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onInputClicked: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,

  /** The status of the input */
  status: PropTypes.oneOf(['error', 'warning', 'loading']),

  /** Text to be shown in the status icon tooltip */
  statusMessage: PropTypes.string,
  mode: PropTypes.oneOf(['select']),
  delimiters: PropTypes.array,
  width: PropTypes.string,
  customSuffix: PropTypes.node,
  hideCustomSuffix: PropTypes.bool,
};

InputWithTags.defaultProps = {
  onRemoveTag: () => {},
  tags: [],
  placeholder: '',
  delimiters: [],
};

export default InputWithTags;
