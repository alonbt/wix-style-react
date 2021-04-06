import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import Radio from '../Radio/Radio';
import { st, classes } from './RadioGroup.st.css';
import { dataHooks } from './constants';

/**
 * component for easy radio group creation.
 *
 * similar to HTML `<input type="radio"/>` except you don't need to handle `name` or click handlers
 */
class RadioGroup extends React.PureComponent {
  _getSpacing(index) {
    const { display: orientation, spacing } = this.props;
    return orientation === 'vertical' && index > 0
      ? { marginTop: spacing }
      : orientation === 'horizontal' && index > 0
      ? { marginInlineStart: spacing }
      : {};
  }

  render() {
    const {
      dataHook,
      className,
      name,
      onChange,
      disabledRadios,
      value,
      vAlign,
      display: orientation,
      lineHeight,
      selectionArea,
      selectionAreaSkin,
      selectionAreaPadding,
    } = this.props;
    const uniqueName = name || uniqueId('RadioGroup_');
    return (
      <div
        role="radiogroup"
        data-hook={dataHook}
        className={st(
          classes.root,
          {
            orientation,
          },
          className,
        )}
        data-display={orientation}
        data-lineheight={lineHeight}
      >
        {React.Children.map(this.props.children, (radio, index) => {
          const checked = radio.props.value === value;
          const radioName = radio.props.name || uniqueName;
          const disabled =
            this.props.disabled ||
            disabledRadios.indexOf(radio.props.value) !== -1;
          const radioDataHook = `${dataHooks.RadioContainer}-${radio.props.value}`;
          return (
            <div
              className={st(classes.optionContainer, {
                selectionArea,
                selectionAreaSkin,
                checked,
                disabled,
              })}
              data-hook={dataHooks.RadioOptionContainer}
              style={this._getSpacing(index)}
            >
              <div className={classes.radioContainer} data-hook={radioDataHook}>
                <Radio
                  style={{
                    minHeight: lineHeight,
                    padding: selectionAreaPadding,
                  }}
                  className={classes.radio}
                  dataHook={radio.props.dataHook}
                  value={radio.props.value}
                  name={radioName}
                  id={uniqueId(`${radioName}_`)}
                  onChange={() => onChange(radio.props.value)}
                  alignItems={vAlign}
                  disabled={disabled}
                  checked={checked}
                  label={radio.props.children}
                />
              </div>

              {radio.props.content && (
                <div
                  className={classes.content}
                  data-hook={dataHooks.RadioContent}
                >
                  {radio.props.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Callback function when user selects a different value */
  onChange: PropTypes.func,

  /** Selected radio button value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** the values of the disabled radio buttons */
  disabledRadios: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  /** Positioning of the radio bottom compared to the label */
  vAlign: PropTypes.oneOf(['center', 'top']),

  /** Make the entire control disabled */
  disabled: PropTypes.bool,

  /** Display direction of the radios */
  display: PropTypes.oneOf(['vertical', 'horizontal']),

  /** Selection area emphasises the clickable area, none means no emphasis, hover is when the mouse is on the component, and always will show constantly */
  selectionArea: PropTypes.oneOf(['none', 'hover', 'always']),

  /** Selection area skin emphasises the style of the clickable area for selectionArea ('hover' or 'always'),  filled (default) means selectionArea has backgound, outlined means selectionArea has outline */
  selectionAreaSkin: PropTypes.oneOf(['filled', 'outlined']),

  /** Selection area padding emphasises the padding of the clickable area, empty means default padding, not empty overrides the default padding*/
  selectionAreaPadding: PropTypes.string,

  /** Sets RadioGroup items. Recommended to use with RadioGroup.Radio */
  children: PropTypes.node,

  /** Vertical spacing between radio buttons */
  spacing: PropTypes.string,

  /** Text line height */
  lineHeight: PropTypes.string,

  /** Controls html name attribute  */
  name: PropTypes.string,
};

RadioGroup.defaultProps = {
  disabledRadios: [],
  onChange: () => {},
  value: '',
  vAlign: 'center',
  display: 'vertical',
  lineHeight: '24px',
  selectionArea: 'none',
  selectionAreaSkin: 'filled',
};

RadioGroup.Radio = Radio;

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
