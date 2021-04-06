import React from 'react';
import PropTypes from 'prop-types';
import Add from 'wix-ui-icons-common/Add';
import Delete from 'wix-ui-icons-common/Delete';
import Selector from '../Selector';
import Text from '../Text';
import Button from '../Button';
import IconButton from '../IconButton';
import TextButton from '../TextButton';
import EditableRow from './EditableRow/EditableRow';
import { classes } from './EditableSelector.st.css';
import { dataHooks } from './constants';

class EditableSelector extends React.PureComponent {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** The editable selector's title */
    title: PropTypes.string,
    /** Specifies the type of the toggle */
    toggleType: PropTypes.oneOf(['checkbox', 'radio']),
    /** Text for the add new row button */
    newRowLabel: PropTypes.string,
    /** Text for the edit button */
    editButtonText: PropTypes.string,
    /** New option added callback function */
    onOptionAdded: PropTypes.func,
    /** Option edited callback function */
    onOptionEdit: PropTypes.func,
    /** Option deleted callback function */
    onOptionDelete: PropTypes.func,
    /** Option toggled callback function */
    onOptionToggle: PropTypes.func,
    /** Array of objects:
     * * `title` - the title of the option.
     * * `isSelected` - whether this option is selected or not.
     */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        isSelected: PropTypes.bool,
      }),
    ),
  };

  static defaultProps = {
    toggleType: 'checkbox',
    newRowLabel: 'New Row',
    editButtonText: 'Edit',
  };

  state = {
    addingNewRow: false,
    editingRow: null,
  };

  _addNewRow = () => {
    this.setState({ addingNewRow: true, editingRow: false });
  };

  _editItem = index => {
    this.setState({ editingRow: index, addingNewRow: false });
  };

  _deleteItem = index => {
    this.props.onOptionDelete && this.props.onOptionDelete({ index });
  };

  _onNewOptionApprove = ({ newTitle, index }) => {
    if (this.state.addingNewRow) {
      this.props.onOptionAdded && this.props.onOptionAdded({ newTitle });
    } else {
      this.props.onOptionEdit && this.props.onOptionEdit({ newTitle, index });
    }
    this.setState({
      addingNewRow: false,
      editingRow: null,
    });
  };

  _onNewOptionCancel = () => {
    this.setState({
      addingNewRow: false,
      editingRow: null,
    });
  };

  _onOptionToggle = id => {
    this.props.onOptionToggle && this.props.onOptionToggle(id);
  };

  _renderInput = (title, index) => {
    return (
      <EditableRow
        key={index}
        dataHook={dataHooks.editRowWrapper}
        onApprove={newTitle => this._onNewOptionApprove({ newTitle, index })}
        onCancel={() => this._onNewOptionCancel()}
        newOption={title}
      />
    );
  };

  render() {
    const {
      dataHook,
      title,
      newRowLabel,
      editButtonText,
      toggleType,
    } = this.props;
    let { options } = this.props;
    options = options || [];
    return (
      <div data-hook={dataHook}>
        {title && (
          <div className={classes.title} data-hook={dataHooks.title}>
            <Text weight="normal">{title}</Text>
          </div>
        )}
        <div>
          {options.map((option, index) =>
            this.state.editingRow === index ? (
              this._renderInput(option.title, index)
            ) : (
              <div
                data-hook={dataHooks.row}
                className={classes.row}
                key={index}
              >
                <Selector
                  dataHook={dataHooks.item}
                  id={index}
                  title={option.title}
                  isSelected={option.isSelected}
                  toggleType={toggleType}
                  onToggle={id => this._onOptionToggle(id)}
                  className={classes.editableSelectorItem}
                />
                <div className={classes.optionMenu}>
                  <IconButton
                    onClick={() => this._deleteItem(index)}
                    dataHook={dataHooks.deleteItem}
                    type="button"
                    size="small"
                    skin="inverted"
                  >
                    <span>
                      <Delete />
                    </span>
                  </IconButton>
                  <div className={classes.editRow}>
                    <Button
                      onClick={() => this._editItem(index)}
                      dataHook={dataHooks.editItem}
                      size="small"
                    >
                      {editButtonText}
                    </Button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        {this.state.addingNewRow && this._renderInput()}
        <div className={classes.newRowButton}>
          <TextButton
            as="a"
            underline="none"
            onClick={this._addNewRow}
            prefixIcon={<Add className={classes.icon} />}
            dataHook={dataHooks.newRowButtonText}
          >
            {newRowLabel}
          </TextButton>
        </div>
      </div>
    );
  }
}

EditableSelector.displayName = 'EditableSelector';

export default EditableSelector;
