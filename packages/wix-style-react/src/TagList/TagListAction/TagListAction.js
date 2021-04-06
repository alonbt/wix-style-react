import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { st, classes } from '../TagList.st.css';

const TagListAction = ({ className, ...rest }) => (
  <Button className={st(classes.item, className)} {...rest} />
);

TagListAction.displayName = 'TagListAction';

TagListAction.propTypes = {
  dataHook: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

TagListAction.defaultProps = {
  size: 'tiny',
  skin: 'inverted',
};

export default TagListAction;
