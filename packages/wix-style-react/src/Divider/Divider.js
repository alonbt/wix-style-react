import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './Divider.st.css';
import { directions, skins } from './constants';

/** A component that separates content by a line horizontally or vertically */
class Divider extends React.PureComponent {
  static displayName = 'Divider';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Indicates whether to display the divider horizontally or vertically */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Sets the color of the divider */
    skin: PropTypes.oneOf([
      'light',
      'dark',
      'standard',
      'warning',
      'destructive',
      'success',
      'premium',
    ]),
  };

  static defaultProps = {
    direction: directions.horizontal,
    skin: skins.light,
  };

  render() {
    const { dataHook, className, direction, skin } = this.props;

    return (
      <hr
        data-hook={dataHook}
        className={st(classes.root, { direction, skin }, className)}
      />
    );
  }
}

export default Divider;
