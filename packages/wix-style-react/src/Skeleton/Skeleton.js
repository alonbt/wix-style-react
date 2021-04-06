import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Skeleton.st.css';
import { dataHooks } from './constants';
import deprecationLog from '../utils/deprecationLog';

/**
 * Skeleton is a “placeholder” component.
 * Used for filling up screen usually for when some async operation is ongoing.
 */
class Skeleton extends React.PureComponent {
  componentDidMount() {
    deprecationLog(
      `Using "<Skeleton/>" is deprecated. we advise you use <SkeletonGroup/> instead.`,
    );
  }

  render() {
    const { dataHook, content, alignment, spacing, className } = this.props;
    return (
      <div
        data-hook={dataHook}
        data-alignment={alignment}
        data-spacing={spacing}
        className={st(classes.root, { alignment, spacing }, className)}
      >
        {content.map(({ type, size }, key) => (
          <div
            key={key}
            data-hook={dataHooks.line}
            className={st(classes.line, { alignment, spacing })}
          >
            <div
              data-hook={dataHooks.chunk}
              data-type={type}
              data-size={size}
              className={st(classes.chunk, { size })}
            />
          </div>
        ))}
      </div>
    );
  }
}

Skeleton.displayName = 'Skeleton';

Skeleton.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A single CSS class name to be appended to the root element. */
  className: PropTypes.string,

  /** The type of the skeleton */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['line']).isRequired,
      size: PropTypes.oneOf(['small', 'medium', 'large', 'full']).isRequired,
    }),
  ).isRequired,

  /** The position of the indicating progress line */
  alignment: PropTypes.oneOf(['start', 'middle']),

  /** The space between the first and second lines */
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
};

Skeleton.defaultProps = {
  alignment: 'start',
  spacing: 'medium',
  content: [{ type: 'line', size: 'small' }],
};

export default Skeleton;
