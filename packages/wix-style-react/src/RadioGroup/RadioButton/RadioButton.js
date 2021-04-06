import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import classnames from 'classnames';
import { st, classes } from './RadioButton.st.css';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import Text from '../../Text';
import { dataHooks } from './constants';
import deprecationLog from '../../utils/deprecationLog';

class RadioButton extends React.PureComponent {
  static displayName = 'RadioGroup.Radio';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    vAlign: PropTypes.oneOf(['center', 'top']),
    name: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.object,
    lineHeight: PropTypes.string,
    tabIndex: PropTypes.number,

    /** Selection area emphasises the clickable area, none means no emphasis, hover is when the mouse is on the component, and always will show constantly */
    selectionArea: PropTypes.oneOf(['none', 'hover', 'always']),

    /** optional node to be rendered under label. Clicking it will not trigger `onChange` */
    content: PropTypes.node,
    className: PropTypes.string,

    /** Selection area skin emphasises the style of the clickable area for selectionArea ('hover' or 'always'),  filled (default) means selectionArea has backgound, outlined means selectionArea has outline */
    selectionAreaSkin: PropTypes.oneOf(['filled', 'outlined']),

    /** Selection area padding emphasises the padding of the clickable area, empty means default padding, not empty overrides the default padding*/
    selectionAreaPadding: PropTypes.string,
  };

  static defaultProps = {
    vAlign: 'center',
    content: null,
    tabIndex: 0,
  };

  constructor(props) {
    super(props);

    const prefix = props.name && `${props.name}_`;
    this.id = uniqueId(prefix);

    deprecationLog(
      `Using "<RadioButton/>" is deprecated. Instead, we advise you to use the newer "<Radio/>" component. Please refer to it's documentation.`,
    );
  }

  render() {
    const {
      dataHook,
      checked,
      children,
      content,
      disabled,
      lineHeight,
      name,
      onChange,
      style,
      vAlign,
      value,
      tabIndex,
      focusableOnFocus,
      focusableOnBlur,
      className,
      selectionAreaPadding,
    } = this.props;

    return (
      <div
        className={st(classes.focusableRadioButton, className)}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
        style={style}
        data-hook={dataHook}
      >
        <div
          className={classnames(classes.radioWrapper, {
            [classes.disabled]: disabled,
            [classes.checked]: checked,
          })}
          data-hook={dataHooks.RadioButtonWrapper}
          tabIndex={disabled ? null : tabIndex}
        >
          <input
            data-hook={dataHooks.RadioButtonInput}
            type="radio"
            name={name}
            value={value}
            id={this.id}
            checked={checked}
            disabled={disabled}
            onChange={() => (!checked && !disabled ? onChange(value) : null)}
          />

          <label
            data-hook={dataHooks.RadioButtonLabel}
            style={{ lineHeight }}
            htmlFor={this.id}
            className={classes.label}
          >
            <div
              className={classnames(classes.labelInner, {
                [classes.vcenter]: vAlign === 'center',
              })}
              style={{ padding: selectionAreaPadding }}
            >
              <div
                style={{ height: lineHeight }}
                className={classes.radioButtonWrapper}
                data-hook={dataHooks.RadioButtonRadio}
              >
                <div
                  className={classnames(classes.radio, {
                    [classes.radioButtonChecked]: checked,
                  })}
                />
              </div>

              {children && (
                <Text
                  className={classes.children}
                  data-hook={dataHooks.RadioButtonChildren}
                  tagName="div"
                  size="medium"
                  weight="thin"
                  secondary
                >
                  {children}
                </Text>
              )}
            </div>
          </label>
        </div>
        {content && (
          <div
            className={classes.content}
            data-hook={dataHooks.RadioButtonContent}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
}

export default withFocusable(RadioButton);
