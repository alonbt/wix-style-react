import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Footnote.st.css';
import Divider from '../../../Divider';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Footnote = ({ dataHook, className, children }) => {
  const {
    footnoteClassName,
    footnote = children,
  } = useBaseModalLayoutContext();

  return (
    (footnote && (
      <div
        data-hook={dataHook}
        className={st(classes.root, footnoteClassName, className)}
      >
        <Divider />
        <div className={classes.innerContent}>{footnote}</div>
      </div>
    )) ||
    null
  );
};

Footnote.displayName = 'BaseModalLayout.Footnote';

Footnote.propTypes = {
  /** additional css classes */
  className: PropTypes.string,

  /** data hook for testing */
  dataHook: PropTypes.string,

  /** a footnote node, to be rendered at the very bottom of the modal */
  footnote: PropTypes.node,
};
