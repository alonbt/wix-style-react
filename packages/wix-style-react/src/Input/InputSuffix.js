import React from 'react';
import PropTypes from 'prop-types';
import DropDownArrow from 'wix-ui-icons-common/system/DropDownArrow';
import CloseButton from '../CloseButton';
import StatusIndicator from '../StatusIndicator';
import { classes } from './Input.st.css';
import Box from '../Box';
import { dataHooks } from './constants';

const isFixVisible = fix => fix.isVisible;

const suffixRules = {
  inputStatusSuffix: ({ status, disabled }) => status && !disabled,
  clearButton: ({ isClearButtonVisible }) => isClearButtonVisible,
  menuArrow: ({ menuArrow }) => menuArrow,
  customSuffix: ({ suffix }) => !!suffix,
};

const getVisibleSuffixCount = args =>
  Object.keys(suffixRules)
    .map(key => suffixRules[key])
    .map(fn => fn(args))
    .filter(x => x).length;

const InputSuffix = ({
  statusMessage,
  status,
  disabled,
  onIconClicked,
  isClearButtonVisible,
  onClear,
  clearButtonSize,
  menuArrow,
  suffix,
  tooltipPlacement,
}) => {
  const suffixes = [
    {
      // Close Button
      component: key => (
        <div key={key} className={classes.clearButtonWrapper}>
          <CloseButton
            dataHook="input-clear-button"
            skin="standardFilled"
            size={clearButtonSize}
            onClick={onClear}
            className={classes.clearButton}
          />
        </div>
      ),
      isVisible: suffixRules.clearButton({ isClearButtonVisible }),
    },
    {
      // Status Indicator
      component: key => (
        <div key={key} className={classes.statusWrapper}>
          <StatusIndicator
            dataHook={dataHooks.status}
            status={status}
            message={statusMessage}
            tooltipPlacement={tooltipPlacement}
          />
        </div>
      ),
      isVisible: suffixRules.inputStatusSuffix({ status, disabled }),
    },
    {
      // Custom Suffix
      component: key =>
        React.isValidElement(suffix) ? (
          React.cloneElement(suffix, { key })
        ) : (
          <div className={classes.suffix} key={key}>
            {suffix}
          </div>
        ),
      isVisible: suffixRules.customSuffix({ suffix }),
    },
    {
      // Dropdown Arrow
      component: key => (
        <div
          key={key}
          data-hook={dataHooks.menuArrow}
          className={classes.menuArrow}
          disabled={disabled}
          onClick={onIconClicked}
        >
          <DropDownArrow />
        </div>
      ),
      isVisible: suffixRules.menuArrow({ menuArrow }),
    },
  ].filter(isFixVisible);

  return (
    <Box dataHook={dataHooks.suffixes} className={classes.suffixes}>
      {suffixes.map((s, key) => s.component(key))}
    </Box>
  );
};

InputSuffix.propTypes = {
  suffixes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func.isRequired,
      isVisible: PropTypes.bool.isRequired,
    }),
  ),
  statusMessage: PropTypes.node,
  status: PropTypes.oneOf(['loading', 'error', 'warning']),
  disabled: PropTypes.bool,
  onIconClicked: PropTypes.func,
  isClearButtonVisible: PropTypes.bool,
  onClear: PropTypes.func,
  clearButtonSize: PropTypes.oneOf(['small', 'medium']),
  menuArrow: PropTypes.bool,
  suffix: PropTypes.node,
  tooltipPlacement: PropTypes.string,
};

export default InputSuffix;
export { getVisibleSuffixCount };
