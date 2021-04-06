import React from 'react';
import PropTypes from 'prop-types';
import Add from 'wix-ui-icons-common/Add';
import uniqueId from 'lodash/uniqueId';

import { classes } from './FilePicker.st.css';
import FormField from '../FormField';
import TextButton from '../TextButton';
import Text from '../Text';
import FileUpload from '../FileUpload';

/**
 * # `<FilePicker/>`
 *
 * Component that opens system browser dialog for choosing files to upload
 */
class FilePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileName: props.subLabel,
    };
    this.id = props.id || uniqueId('file_picker_input_');
  }

  /** A callback which is invoked every time a file is chosen */
  onChooseFile(file) {
    const { maxSize, onChange } = this.props;

    if (file) {
      onChange(file);
      if (file.size <= maxSize) {
        this.setState({ selectedFileName: file.name });
      }
    }
  }

  render() {
    const {
      header,
      mainLabel,
      supportedFormats,
      error,
      errorMessage,
      name,
      dataHook,
    } = this.props;

    return (
      <FileUpload
        accept={supportedFormats}
        onChange={files => this.onChooseFile(files[0])}
        name={name}
      >
        {({ openFileUploadDialog }) => (
          <FormField label={header} dataHook={dataHook}>
            <label className={classes.label} onClick={openFileUploadDialog}>
              <div className={classes.icon}>
                <Add />
              </div>

              <div className={classes.content}>
                <TextButton dataHook="main-label">{mainLabel}</TextButton>
                <Text
                  className={classes.info}
                  size="small"
                  secondary
                  dataHook="sub-label"
                >
                  {this.state.selectedFileName}
                </Text>
                {error && (
                  <Text skin="error" size="small" dataHook="filePicker-error">
                    {errorMessage}
                  </Text>
                )}
              </div>
            </label>
          </FormField>
        )}
      </FileUpload>
    );
  }
}

FilePicker.displayName = 'FilePicker';

FilePicker.defaultProps = {
  mainLabel: 'Choose File',
  subLabel: 'No file chosen (Max size 5 MB)',
  onChange: () => {},
  supportedFormats: '*',
  errorMessage: '',
  maxSize: 5000000, // 5MB
};

FilePicker.propTypes = {
  /** Some text that will appear above the Icon */
  header: PropTypes.string,

  /** Callback function for when a file is uploaded */
  onChange: PropTypes.func,

  /** Some text that will appear as a main label besides the Icon */
  mainLabel: PropTypes.string,

  /** Some text that will appear as a sub label besides the Icon   */
  subLabel: PropTypes.string,

  /** supported formats separated by comma (.png, .pdf) */
  supportedFormats: PropTypes.string,

  /** Max size of file allowed */
  maxSize: PropTypes.number,

  /** should present error */
  error: PropTypes.bool,

  /** error message to present */
  errorMessage: PropTypes.string,

  /** id for the filePicker */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Name for inner input */
  name: PropTypes.string,

  /** Data attribute for testing purposes */
  dataHook: PropTypes.string,
};

export default FilePicker;
