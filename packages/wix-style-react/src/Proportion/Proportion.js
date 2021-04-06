import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Proportion.st.css';
import { PREDEFINED_RATIOS } from './ratios';

class Proportion extends React.PureComponent {
  static PREDEFINED_RATIOS = PREDEFINED_RATIOS;

  static displayName = 'Proportion';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** Children to render. */
    children: PropTypes.node.isRequired,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** Condition for wrapping content with Proportion or return original  */
    /** Predefined Proportion.square (1), Proportion.portrait (3/4), Proportion.cinema (16/9), Proportion.landscape (4/3), or a custom number (width / height) or 'none' for original size */
    aspectRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    aspectRatio: 1,
  };

  render() {
    const { dataHook, className, aspectRatio } = this.props;
    const aspectRatioHolder = this._getAspectRatioHolder();
    const disabled = aspectRatio === PREDEFINED_RATIOS.none ? true : false;
    const content = this._getContent(disabled);

    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        {!disabled && aspectRatioHolder}
        {content}
      </div>
    );
  }

  _getContent(disabled) {
    const { children } = this.props;
    return disabled ? (
      children
    ) : (
      <div className={classes.contentWrapper}>{children}</div>
    );
  }

  /**
   * This is based on Noam Rosenthal's (noamr@wix.com) solution
   * which can be found here: https://codeburst.io/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b
   *
   * The solution uses the fact that SVGs can maintain aspect ratio's natively.
   * In addition we use an img element for this solution to work correctly in IE
   * */
  _getAspectRatioHolder() {
    const { width, height } = this._getRatio();
    const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" />`;
    return (
      <img
        data-hook={'proportion-aspect'}
        className={classes.ratioHolder}
        src={`data:image/svg+xml,${encodeURIComponent(svg)}`}
      />
    );
  }

  _getRatio() {
    const { aspectRatio } = this.props;

    return {
      width: aspectRatio ? Math.round(aspectRatio * 100) : 100,
      height: 100,
    };
  }
}

export default Proportion;
