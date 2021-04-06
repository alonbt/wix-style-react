import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Radio.st.css';
import Text from '../Text';
import { generateDataAttr } from '../utils/generateDataAttr';
import { dataHooks } from './constants';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

const Radio = ({
  dataHook,
  checked,
  disabled,
  label,
  id,
  name,
  value,
  focusableOnFocus,
  focusableOnBlur,
  onChange,
  alignItems,
  className,
  style,
}) => {
  const _onClick = event => {
    if (!disabled) {
      onChange({ value, ...event });
    }
  };

  const renderLabel = useMemo(() => {
    return (
      <Text tagName="div" size="medium" weight="thin" secondary>
        {label}
      </Text>
    );
  }, [label]);

  return (
    <div
      className={st(
        classes.root,
        {
          checked,
          disabled,
          alignItems,
        },
        className,
      )}
      {...generateDataAttr({ checked, disabled }, ['checked', 'disabled'])}
      style={style}
      data-hook={dataHook}
      onClick={_onClick}
      aria-checked={!!checked}
    >
      <input
        type="radio"
        className={classes.input}
        data-hook={dataHooks.input}
        disabled={disabled}
        checked={checked}
        value={value}
        name={name}
        id={id}
        onChange={() => null}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
      />
      <span className={classes.icon} data-hook={dataHooks.icon}></span>
      {label && (
        <label
          className={classes.label}
          data-hook={dataHooks.label}
          htmlFor={id}
        >
          {renderLabel}
        </label>
      )}
    </div>
  );
};

Radio.displayName = 'Radio';

Radio.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Defines if radio is checked */
  checked: PropTypes.bool,

  /** Applies disabled styles and prevents radio from being checked */
  disabled: PropTypes.bool,

  /** The label displayed with radio */
  label: PropTypes.node,

  /** Unique name of radio */
  name: PropTypes.node,

  /** Unique id of radio */
  id: PropTypes.string,

  /** The value which the radio represents */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** A callback when radio is selected */
  onChange: PropTypes.func,

  /** Radio alignment with label. Default is center */
  alignItems: PropTypes.oneOf(['top', 'center']),
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  alignItems: 'center',
  onChange: () => null,
};

export default withFocusable(Radio);
