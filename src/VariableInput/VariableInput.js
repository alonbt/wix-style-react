import React from 'react';
import { string, func, shape, oneOf, node, bool, number } from 'prop-types';
import { Editor, EditorState } from 'draft-js';

import EditorUtilities from './EditorUtilities';
import {
  sizeTypes,
  inputToTagsSize,
  statusTypes,
  dataHooks,
} from './constants';
import ErrorIndicator from '../ErrorIndicator';
import WarningIndicator from '../WarningIndicator';
import styles from './VariableInput.st.css';

/** Input with variables as tags */
class VariableInput extends React.PureComponent {
  static displayName = 'VariableInput';

  static propTypes = {
    /** A single CSS class name to be appended to the Input's wrapper element. */
    className: string,
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: string,
    /** When set to true this component is disabled */
    disabled: bool,
    /** Initial value to display in the editor */
    initialValue: string,
    /** Callback function for changes while typing.
     * `onChange(value: String): void` */
    onChange: func,
    /** Callback funciton when focusing out. Also, after calling `insertVariable()`
     * `onSubmit(value: String): void` */
    onSubmit: func,
    /** Use to display a status indication for the user.*/
    status: oneOf(['error', 'warning']),
    /** The status (error/warning) message to display when hovering the status icon, if not given or empty there will be no tooltip*/
    statusMessage: node,
    /** Placeholder to display in the editor */
    placeholder: string,
    /** Set height of component that fits the given number of rows */
    rows: number,
    /** Specifies the size of the input and variables*/
    size: oneOf(['small', 'medium', 'large']),
    /** Component will parse the variable keys, and convert them to tag bubble on blur and while using insertVariable.
     * For each key variableParser will be called and should return a proper text for that key or false in case the key is invalid.
     * `variableParser(key: String): String|boolean` */
    variableParser: func,
    /** Template for variables, will search and replace variables with the given prefix and suffix */
    variableTemplate: shape({
      prefix: string,
      suffix: string,
    }),
  };
  static defaultProps = {
    initialValue: '',
    rows: 1,
    size: sizeTypes.medium,
    statusMessage: '',
    variableParser: () => {},
    variableTemplate: {
      prefix: '{{',
      suffix: '}}',
    },
  };
  constructor(props) {
    super(props);
    const { size, disabled } = props;
    const decorator = EditorUtilities.decoratorFactory({
      tag: { size: this._inputToTagSize(size), disabled },
    });
    this.state = {
      editorState: EditorState.createEmpty(decorator),
    };
  }
  componentDidMount() {
    const { initialValue } = this.props;
    this._setStringValue(initialValue, editorState => {
      this.setState({
        editorState: EditorState.moveSelectionToEnd(editorState),
      });
    });
  }
  _renderIndicator = (status, statusMessage) => {
    switch (status) {
      case statusTypes.error:
        return (
          <span className={styles.indicatorWrapper}>
            <ErrorIndicator
              dataHook={dataHooks.error}
              errorMessage={statusMessage}
            />
          </span>
        );
      case statusTypes.warning:
        return (
          <span className={styles.indicatorWrapper}>
            <WarningIndicator
              dataHook={dataHooks.warning}
              warningMessage={statusMessage}
            />
          </span>
        );
      default:
        return;
    }
  };
  render() {
    const {
      dataHook,
      rows,
      size,
      disabled,
      placeholder,
      status,
      statusMessage,
    } = this.props;
    return (
      <div
        data-hook={dataHook}
        {...styles('root', { disabled, size, status }, this.props)}
        style={{ '--rows': rows }}
      >
        <Editor
          ref="editor"
          editorState={this.state.editorState}
          onChange={this._onEditorChange}
          placeholder={placeholder}
          onBlur={() => setTimeout(this._onBlur, 0)}
          readOnly={disabled}
        />
        {this._renderIndicator(status, statusMessage)}
      </div>
    );
  }
  _inputToTagSize = inputSize => {
    return inputToTagsSize[inputSize] || VariableInput.defaultProps.size;
  };
  _onBlur = () => {
    const { editorState } = this.state;
    const {
      variableTemplate: { prefix, suffix },
    } = this.props;
    if (EditorUtilities.hasUnparsedEntity(editorState, prefix, suffix)) {
      this._setStringValue(
        EditorUtilities.convertToString({
          editorState,
          prefix,
          suffix,
        }),
        () => {
          this._onSubmit();
        },
      );
    } else {
      this._onSubmit();
    }
  };
  _onSubmit = () => {
    const {
      onSubmit = () => {},
      variableTemplate: { prefix, suffix },
    } = this.props;
    const { editorState } = this.state;
    const value = EditorUtilities.convertToString({
      editorState,
      prefix,
      suffix,
    });
    onSubmit(value);
  };
  _onChange = () => {
    const {
      onChange = () => {},
      variableTemplate: { prefix, suffix },
    } = this.props;
    const { editorState } = this.state;
    onChange(
      EditorUtilities.convertToString({
        editorState,
        prefix,
        suffix,
      }),
    );
  };
  _onEditorChange = editorState => {
    this._setEditorState(editorState, () => {
      this._onChange();
    });
  };
  _setEditorState = (editorState, onStateChanged = () => {}) => {
    const updateEditorState = EditorUtilities.moveToEdge(editorState);
    this.setState({ editorState: updateEditorState }, () => {
      onStateChanged();
    });
  };
  _setStringValue = (str, afterUpdated = () => {}) => {
    const {
      variableParser = () => {},
      variableTemplate: { prefix, suffix },
    } = this.props;
    const { editorState } = this.state;
    const content = EditorUtilities.stringToContentState({
      str,
      variableParser,
      prefix,
      suffix,
    });
    const updatedEditorState = EditorUtilities.pushAndKeepSelection({
      editorState,
      content,
    });
    this._setEditorState(updatedEditorState, () => {
      afterUpdated(updatedEditorState);
    });
  };
  /** Set value to display in the input */
  setValue = value => {
    this._setStringValue(value, () => {
      this._onSubmit();
    });
  };
  /** Insert variable at the input cursor position */
  insertVariable = value => {
    const { variableParser } = this.props;
    const { editorState } = this.state;
    const text = variableParser(value) || value;
    const newState = EditorUtilities.insertEntity(editorState, { text, value });
    this._setEditorState(newState, () => {
      this._onSubmit();
    });
  };
}
export default VariableInput;
