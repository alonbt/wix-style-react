import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';

/** A wrapper component to support native file upload */
class FileUpload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    const {
      dataHook,
      className,
      children,
      multiple,
      accept,
      capture,
      name,
      onChange,
    } = this.props;

    return (
      <label className={className} data-hook={dataHook}>
        {children({
          openFileUploadDialog: event => {
            // Open the file upload dialog
            this.inputRef.current.click();

            // In case the click event comes from a non-button element
            if (event) {
              event.preventDefault();
            }
          },
        })}

        {/* An invisible input type="file" in order to open a file upload dialog */}
        <input
          type="file"
          data-hook={dataHooks.input}
          style={{ display: 'none' }}
          ref={this.inputRef}
          multiple={multiple}
          accept={accept}
          capture={capture}
          name={name}
          onChange={event => onChange(event.target.files)}
        />
      </label>
    );
  }
}

FileUpload.displayName = 'FileUpload';

FileUpload.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Children render prop
   * ##### signature:
   * function({ openFileUpload }): element
   * * `openFileUpload`: A function that will open a file upload dialog upon trigger.
   * * return: A react element
   */
  children: PropTypes.func.isRequired,

  /** Allow uploading multiple files */
  multiple: PropTypes.bool,

  /** set file types to accept */
  accept: PropTypes.string,

  /** specifies which camera to use for capture of image or video data */
  capture: PropTypes.oneOf(['user', 'environment']),

  /** A form data name to be submitted along with the control's value */
  name: PropTypes.string,

  /** input onChange callback */
  onChange: PropTypes.func.isRequired,
};

FileUpload.defaultProps = {
  multiple: false,
  accept: '',
  capture: 'user',
};

export default FileUpload;
