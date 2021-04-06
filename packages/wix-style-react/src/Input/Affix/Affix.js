import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Affix.st.css';
import InputConsumer from '../InputConsumer';
import { FontUpgradeContext } from '../../FontUpgrade/context';

const Affix = ({ children, value }) => (
  <InputConsumer consumerCompName={Affix.displayName}>
    {({
      size,
      inPrefix,
      inSuffix,
      border,
      roundInput,
      disabled,
      onInputClicked,
    }) => (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div
            className={st(classes.root, {
              isMadefor,
              size,
              inPrefix,
              inSuffix,
              border: roundInput ? 'round' : border,
              disabled,
            })}
            onClick={onInputClicked}
            data-hook="custom-affix"
          >
            {value || children}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    )}
  </InputConsumer>
);

Affix.displayName = 'Input.Affix';
Affix.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
};

export default Affix;
