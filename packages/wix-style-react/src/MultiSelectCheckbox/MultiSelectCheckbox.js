import React from 'react';
import PropTypes from 'prop-types';
import InputWithOptions from '../InputWithOptions/InputWithOptions';
import Input from '../Input';
import { classes } from './MultiSelectCheckbox.st.css';
import { listItemSelectBuilder } from '../ListItemSelect';
import { listItemSectionBuilder } from '../ListItemSection';

const OPEN_DROPDOWN_CHARS = ['Enter', 'ArrowDown', 'Space', ' '];

class MultiSelectCheckbox extends InputWithOptions {
  createOptions(options) {
    return options.map(option => {
      if (this._isUsingCustomRenderFunction(option)) {
        return this._patchOptionWithSelectionMechanism(option);
      } else if (this._isDivider(option)) {
        return listItemSectionBuilder({
          type: 'divider',
          ...option,
        });
      } else {
        const builder = listItemSelectBuilder({
          ...option,
          checkbox: true,
          title: option.value,
          label: option.label,
        });
        return this._patchOptionWithSelectionMechanism(builder);
      }
    });
  }

  _patchOptionWithSelectionMechanism(option) {
    const value = option.value;

    return {
      ...option,
      value: props =>
        value({
          ...props,
          selected: this.isSelectedId(option.id),
        }),
    };
  }

  _isUsingCustomRenderFunction({ value }) {
    return typeof value === 'function';
  }

  _isDivider({ value }) {
    return value === '-';
  }

  isSelectedId(optionId) {
    return this.props.selectedOptions.indexOf(optionId) !== -1;
  }

  dropdownAdditionalProps() {
    return {
      options: this.createOptions(this.props.options),
      closeOnSelect: false,
      selectedHighlight: false,
    };
  }

  selectedOptionsToText() {
    return this.props.selectedOptions
      .map(selectedOption =>
        this.props.options.find(option => option.id === selectedOption),
      )
      .filter(selectedOption => selectedOption)
      .map(this.props.valueParser)
      .join(this.props.delimiter);
  }

  inputAdditionalProps() {
    const value =
      this.props.value !== undefined
        ? this.props.value
        : this.selectedOptionsToText();

    return {
      readOnly: false,
      disableEditing: true,
      inputElement: <Input textOverflow="ellipsis" disableEditing />,
      value,
    };
  }

  inputClasses() {
    return classes.showPointer;
  }

  _onSelect(option) {
    this.showOptions();

    if (this.closeOnSelect()) {
      this.setState({ showOptions: false });
    }

    // The option object is not the original since it was injected a checkbox
    const originalOption = this.props.options.find(op => option.id === op.id);
    if (this.isSelectedId(originalOption.id)) {
      this.props.onDeselect &&
        this.props.onDeselect(originalOption.id, originalOption);
    } else {
      this.props.onSelect &&
        this.props.onSelect(originalOption.id, originalOption);
    }
  }

  _onInputClicked(event) {
    this.state.showOptions ? this.hideOptions() : this.showOptions();
    if (this.props.onInputClicked) {
      this.props.onInputClicked(event);
    }
  }

  _onKeyDown(event) {
    if (OPEN_DROPDOWN_CHARS.includes(event.key)) {
      event.preventDefault();
      this.showOptions();
    }

    this.dropdownLayout && this.dropdownLayout._onKeyDown(event);
  }

  _onFocus(e) {
    if (this.props.disabled) {
      return;
    }
    this._focused = true;
    this.setState({ isEditing: false });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }
}

MultiSelectCheckbox.displayName = 'MultiSelectCheckbox';

MultiSelectCheckbox.propTypes = {
  ...InputWithOptions.propTypes,

  /** Array of objects. Objects must have an Id and can can include *value* and *node*. If value is '-', a divider will be rendered instead. */
  options: PropTypes.array,

  /** The selected options ids. */
  selectedOptions: PropTypes.array,

  /** A callback function called whenever the user selects a single option. The function receives the id of the selected option as the first argument, and the actual option object as the second argument.. */
  onSelect: PropTypes.func,

  /** A callback function to be called when an option was unchecked. The function receives the id of the unselected option as the first argument, and the actual option object as the second argument. */
  onDeselect: PropTypes.func,

  /** delimiter between the selected options that will be displayed in the input. */
  delimiter: PropTypes.string,
};

MultiSelectCheckbox.defaultProps = {
  ...InputWithOptions.defaultProps,
  delimiter: ', ',
  selectedOptions: [],
  closeOnSelect: false,
  valueParser: option => option.label || option.value,
};

export default MultiSelectCheckbox;
