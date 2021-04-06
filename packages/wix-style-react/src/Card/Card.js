import React from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Header from './Header';
import Subheader from './Subheader';
import Divider from './Divider';
import { st, classes } from './Card.st.css';

const Card = ({
  stretchVertically,
  showShadow,
  hideOverflow,
  className,
  children,
  controls,
  dataHook,
}) => (
  <div
    className={st(
      classes.card,
      { stretchVertically, hideOverflow, showShadow },
      className,
    )}
    children={children}
    data-hook={dataHook}
  >
    {controls && <div className={classes.controls}>{controls}</div>}
    {children}
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
  /** any node to render inside card */
  children: PropTypes.node,
  /** any node that controls card e.g. a close button */
  controls: PropTypes.node,
  /** makes the card stretch to max height in a container */
  stretchVertically: PropTypes.bool,
  /** makes the card have a box-shadow style */
  showShadow: PropTypes.bool,
  /** makes the card's overflow content to be hidden */
  hideOverflow: PropTypes.bool,
  /** additional css classes */
  className: PropTypes.string,
  dataHook: PropTypes.string,
};

Card.defaultProps = {
  stretchVertically: false,
  showShadow: false,
};

Card.Content = Content;
Card.Header = Header;
Card.Divider = Divider;
Card.Subheader = Subheader;

export default Card;
