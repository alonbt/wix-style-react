import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import { st, classes } from './InteractiveModeStar.st.css';
import { dataHooks, starRatingBarSizesInPx } from '../constants';

import StarFilledIcon from 'wix-ui-icons-common/StarFilled';
import StarIcon from 'wix-ui-icons-common/Star';

class InteractiveModeStar extends React.PureComponent {
  _onMouseEnter = () => {
    const { index } = this.props;
    this.props.onMouseEnter(index);
  };

  _onMouseLeave = () => {
    this.props.onMouseLeave();
  };

  _onClick = () => {
    const { index } = this.props;
    this.props.onClick(index);
  };

  _onFocus = () => {
    const { focusableOnFocus, index } = this.props;

    // We would like to change the rate caption label when focus / hover
    this.props.handleFocus(index);

    focusableOnFocus();
  };

  _onBlur = () => {
    const { focusableOnBlur } = this.props;

    // We would like to change the rate caption label when focus / hover
    this.props.handleBlur();

    focusableOnBlur();
  };

  render() {
    const {
      dataHook,
      selectedStarIndex,
      index,
      starsRatingBarSize,
      hoveredStarIndex,
    } = this.props;

    const isStarsHovered = hoveredStarIndex !== 0;
    const isCurrentStarHovered = hoveredStarIndex === index;

    // If the user hovers on a star the value should be compatible to the value of the hovered star
    // otherwise the value should be compatible to the selected value.
    const isFilledStar = isStarsHovered
      ? index <= hoveredStarIndex
      : index <= selectedStarIndex;

    const commonProps = {
      size: starRatingBarSizesInPx[starsRatingBarSize],
    };

    return (
      <button
        data-hook={dataHook}
        data-index={index}
        className={st(classes.root, this.props.className)}
        onClick={() => this._onClick(index)}
        onMouseEnter={() => this._onMouseEnter(index)}
        onMouseLeave={() => this._onMouseLeave()}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
      >
        {isFilledStar ? (
          <StarFilledIcon
            {...commonProps}
            data-hook={dataHooks.filledStar}
            className={st(classes.star, {
              filled: true,
              hovered: isCurrentStarHovered,
            })}
          />
        ) : (
          <StarIcon
            {...commonProps}
            data-hook={dataHooks.emptyStar}
            className={st(classes.star, {
              empty: true,
              hovered: isCurrentStarHovered,
            })}
          />
        )}
      </button>
    );
  }
}

InteractiveModeStar.displayName = 'InteractiveModeStar';

InteractiveModeStar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the star rating bar. Interactive mode must be 'large'. The default value for the read only mode is 'medium'. */
  starsRatingBarSize: PropTypes.oneOf(['large']),

  /** The star index. */
  index: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** The star rating bar’s selected rate. */
  selectedStarIndex: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** The star rating bar’s hovered star index. */
  hoveredStarIndex: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** A Handler for clicking on the star
   * ##### Signature:
   * function(rating: number) => void
   * * `rating`: 1 | 2 | 3 | 4 | 5
   */
  onClick: PropTypes.func,

  /** A Handler for mouse enter
   * ##### Signature:
   * function(rating: number) => void
   * * `rating`: 1 | 2 | 3 | 4 | 5
   */
  onMouseEnter: PropTypes.func,

  /** A Handler for mouse leave
   * ##### Signature:
   * function() => void
   */
  onMouseLeave: PropTypes.func,

  /** A Handler for focus
   * ##### Signature:
   * function() => void
   */
  handleFocus: PropTypes.func,

  /** A Handler for blur
   * ##### Signature:
   * function() => void
   */
  handleBlur: PropTypes.func,
};

export default withFocusable(InteractiveModeStar);
