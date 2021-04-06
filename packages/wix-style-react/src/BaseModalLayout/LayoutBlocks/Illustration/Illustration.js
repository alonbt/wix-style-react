import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Illustration.st.css';
import { dataHooks } from '../../constants';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Illustration = ({ dataHook, className, children }) => {
  const {
    illustrationClassName,
    illustration = children,
  } = useBaseModalLayoutContext();

  return (
    (illustration && (
      <div
        data-hook={dataHook}
        className={st(classes.root, illustrationClassName, className)}
      >
        {typeof illustration === 'string' ? (
          <img
            className={classes.image}
            src={illustration}
            data-hook={dataHooks.illustrationSrc}
          />
        ) : (
          illustration
        )}
      </div>
    )) ||
    null
  );
};

Illustration.propTypes = {
  /** additional css classes */
  className: PropTypes.string,

  /** data hook for testing */
  dataHook: PropTypes.string,

  /** The illustration src or the illustration node itself */
  illustration: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Illustration.defaultProps = {};
