import React from 'react';
import Heading from '../../Heading';
import { classes } from '../MarketingLayout.st.css';
import { isString } from '../../utils/StringUtils';
import { MARKETING_LAYOUT_TITLE } from '../dataHooks';
import { SIZES } from '../constants';
import PropTypes from 'prop-types';

const Title = ({ children, appearance }) => (
  <div className={classes.title}>
    {isString(children) ? (
      appearance === SIZES.tiny ? (
        <div data-hook={MARKETING_LAYOUT_TITLE}>{children}</div>
      ) : (
        <Heading dataHook={MARKETING_LAYOUT_TITLE} appearance={appearance}>
          {children}
        </Heading>
      )
    ) : (
      <div data-hook={MARKETING_LAYOUT_TITLE}>{children}</div>
    )}
  </div>
);

Title.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.string,
};

export default Title;
