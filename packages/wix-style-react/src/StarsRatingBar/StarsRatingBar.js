import React from 'react';
import PropTypes from 'prop-types';
import { FontUpgradeContext } from '../FontUpgrade/context';
import { st, classes } from './StarsRatingBar.st.css';
import {
  dataHooks,
  starIndexes,
  starRatingBarSizes,
  starRatingBarSizesInPx,
} from './constants';

import Text from '../Text';
import InteractiveModeStar from './components/InteractiveModeStar';

import StarFilledIcon from 'wix-ui-icons-common/StarFilled';

/** Star Rating Component  */
class StarsRatingBar extends React.PureComponent {
  constructor(props) {
    super(props);

    const starsRatingBarSize = this._getStarsRatingBarSize();

    this.state = {
      starsRatingBarSize,
      hoveredStarIndex: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.size !== this.props.size) {
      const starsRatingBarSize = this._getStarsRatingBarSize();
      this.setState({ starsRatingBarSize });
    }
  }

  _getStarsRatingBarSize = () => {
    const { readOnly } = this.props;

    return readOnly
      ? this._getReadOnlyModeStarsSize()
      : this._getInteractiveModeStarsSize();
  };

  _getReadOnlyModeStarsSize = () => {
    const { size } = this.props;
    return size ? size : starRatingBarSizes.medium;
  };

  _getInteractiveModeStarsSize = () => {
    //  In interactive mode the size must be 'large'
    return starRatingBarSizes.large;
  };

  _onStarIconClick = ratingValue => {
    this.props.onChange(ratingValue);
  };

  _onMouseEnter = ratingValue => {
    this.setState({ hoveredStarIndex: ratingValue });
  };

  _onMouseLeave = () => {
    this.setState({ hoveredStarIndex: 0 });
  };

  _handleFocus = ratingValue => {
    // We would like to change the rate caption label when focus / hover
    this.setState({ hoveredStarIndex: ratingValue });
  };

  _handleBlur = () => {
    // We would like to change the rate caption label when focus / hover
    this.setState({ hoveredStarIndex: 0 });
  };

  _renderStars = () => {
    const { readOnly, value } = this.props;
    const { starsRatingBarSize, hoveredStarIndex } = this.state;

    return Object.values(starIndexes).map(ratingValue => {
      return readOnly ? (
        this._renderReadOnlyModeStar(ratingValue)
      ) : (
        <InteractiveModeStar
          className="InteractiveModeStar"
          key={ratingValue}
          starsRatingBarSize={starsRatingBarSize}
          index={ratingValue}
          selectedStarIndex={value}
          hoveredStarIndex={hoveredStarIndex}
          onClick={this._onStarIconClick}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
          handleFocus={this._handleFocus}
          handleBlur={this._handleBlur}
        />
      );
    });
  };

  _renderReadOnlyModeStar = ratingValue => {
    const { readOnly, value } = this.props;
    const { starsRatingBarSize } = this.state;

    const isFilledStar = ratingValue <= value;
    const dataHook = isFilledStar ? dataHooks.filledStar : dataHooks.emptyStar;
    return (
      <StarFilledIcon
        key={ratingValue}
        data-hook={dataHook}
        className={st(classes.star, {
          readOnly,
          filled: isFilledStar,
          empty: !isFilledStar,
        })}
        size={starRatingBarSizesInPx[starsRatingBarSize]}
      />
    );
  };

  _shouldShowRateCaption = () => {
    const { readOnly, descriptionValues } = this.props;
    let shouldShowRateCaption = false;

    if (descriptionValues) {
      const isValidRateCaption =
        Array.isArray(descriptionValues) && descriptionValues.length === 5;

      if (readOnly) {
        // Adding description values is not available in read only mode
        shouldShowRateCaption = false;
      } else {
        // Description values must be an array of strings at size 5
        shouldShowRateCaption = isValidRateCaption;
      }
    }

    return shouldShowRateCaption;
  };

  _renderRateCaption = ({ isMadefor }) => {
    const { descriptionValues, value } = this.props;
    const { hoveredStarIndex } = this.state;
    const isStarsHovered = hoveredStarIndex !== 0;

    let rateCaptionCurrentLabel = '';

    // If the user hovers on a star the label should be compatible to the value of the hovered star
    // otherwise the label should be compatible to the selected value.
    if (isStarsHovered) {
      rateCaptionCurrentLabel = descriptionValues[hoveredStarIndex - 1];
    } else {
      rateCaptionCurrentLabel = value === 0 ? '' : descriptionValues[value - 1];
    }

    return (
      <div className={classes.rateCaption}>
        <Text
          dataHook={dataHooks.ratingCaption}
          ellipsis
          size="small"
          weight={isMadefor ? 'normal' : 'bold'}
          secondary
        >
          {rateCaptionCurrentLabel}
        </Text>
      </div>
    );
  };

  render() {
    const { dataHook, className } = this.props;

    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <div data-hook={dataHook} className={st(classes.root, className)}>
            <div className={classes.starsContainer}>{this._renderStars()}</div>
            {this._shouldShowRateCaption()
              ? this._renderRateCaption({ isMadefor })
              : null}
          </div>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

StarsRatingBar.displayName = 'StarsRatingBar';

StarsRatingBar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the star rating bar. Interactive mode must be 'large'. The default value for the read only mode is 'medium'. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),

  /** In read only mode rating cannot be changed. */
  readOnly: PropTypes.bool,

  /** Represent the rate value labels. Only when the array contains 5 strings, this star rating bar will display the rate caption labels. */
  descriptionValues: PropTypes.arrayOf(PropTypes.string),

  /** The star rating bar’s selected rate. */
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** A Handler for rating changes
   * ##### Signature:
   * function(rating: number) => void
   * * `rating`: 1 | 2 | 3 | 4 | 5
   */
  onChange: PropTypes.func,
};

StarsRatingBar.defaultProps = {
  readOnly: false,
  onChange: () => {},
};

export default StarsRatingBar;
