import React from 'react';
import Input from './Input';
import { st, classes } from './Input.st.css';
import DATA_ATTR from './DataAttr';
import { filterObject } from '../utils/filterObject';
import { FontUpgradeContext } from '../FontUpgrade/context';

class ThemedInput extends Input {
  // For testing purposes only
  _getDataAttr = () => {
    const {
      size,
      status,
      prefix,
      disabled,
      forceHover,
      forceFocus,
      noLeftBorderRadius,
      noRightBorderRadius,
    } = this.props;

    return filterObject(
      {
        [DATA_ATTR.SIZE]: size,
        [DATA_ATTR.STATUS]: status,
        [DATA_ATTR.PREFIX]: !!prefix,
        [DATA_ATTR.DISABLED]: !!disabled,
        [DATA_ATTR.HOVER]: !!forceHover,
        [DATA_ATTR.FOCUS]: !!(forceFocus || this.state.focus),
        [DATA_ATTR.LEFTBORDERRADIUS]: !!noLeftBorderRadius,
        [DATA_ATTR.RIGHTBORDERRADIUS]: !!noRightBorderRadius,
      },
      (key, value) => !!value,
    );
  };

  render() {
    const {
      size,
      dataHook,
      rtl,
      status,
      disabled,
      forceHover,
      forceFocus,
      border,
      roundInput,
      className,
      noLeftBorderRadius,
      noRightBorderRadius,
      readOnly,
    } = this.props;

    const placeholder = this.props.placeholder;
    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div
            className={st(
              classes.root,
              {
                isMadefor,
                size,
                hasFocus: forceFocus || this.state.focus,
                status,
                forceHover,
                readOnly,
                disabled,
                border: roundInput ? 'round' : border,
                noRightBorderRadius,
                noLeftBorderRadius,
              },
              className,
            )}
            dir={rtl ? 'rtl' : null}
            data-hook={dataHook}
            {...this._getDataAttr()}
          >
            {super.render({ placeholder })}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

ThemedInput.propTypes = {
  ...Input.propTypes,
};

export default ThemedInput;
