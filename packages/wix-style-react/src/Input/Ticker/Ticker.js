import React from 'react';
import PropTypes from 'prop-types';
import FormFieldSpinnerUp from 'wix-ui-icons-common/system/FormFieldSpinnerUp';
import FormFieldSpinnerDown from 'wix-ui-icons-common/system/FormFieldSpinnerDown';
import { st, classes } from './Ticker.st.css';
import InputConsumer from '../InputConsumer';
import { dataHooks } from './constants';

const Ticker = ({ onUp, onDown, upDisabled, downDisabled, dataHook }) => (
  <InputConsumer consumerCompName={Ticker.displayName}>
    {({ disabled, readOnly, size, border, roundInput }) => {
      const isUpDisabled = upDisabled || disabled || readOnly;
      const isDownDisabled = downDisabled || disabled || readOnly;
      return (
        <div
          className={st(classes.root, {
            size,
            border: roundInput ? 'round' : border,
          })}
          data-hook={dataHook}
        >
          <div
            data-hook={dataHooks.tickerUp}
            data-disabled={isUpDisabled}
            className={st(classes.up, { disabled: isUpDisabled })}
            onClick={isUpDisabled ? null : onUp}
          >
            <FormFieldSpinnerUp />
          </div>
          <div
            data-hook={dataHooks.tickerDown}
            data-disabled={isDownDisabled}
            className={st(classes.down, { disabled: isDownDisabled })}
            onClick={isDownDisabled ? null : onDown}
          >
            <FormFieldSpinnerDown />
          </div>
        </div>
      );
    }}
  </InputConsumer>
);

Ticker.displayName = 'Input.Ticker';

Ticker.propTypes = {
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  upDisabled: PropTypes.bool,
  downDisabled: PropTypes.bool,
  dataHook: PropTypes.string,
};

export default Ticker;
