import React from 'react';
import PropTypes from 'prop-types';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import { st, classes } from './FacesRatingBar.st.css';
import { dataHooks, facesData } from './constants';

import Box from '../Box/Box';
import Tooltip from '../Tooltip/Tooltip';
import {
  FaceDisapointed,
  FaceFrowning,
  FaceNeutral,
  FaceSmiling,
  FaceGrining,
} from './icons/FaceIcons';

const faceIconsMap = {
  1: FaceDisapointed,
  2: FaceFrowning,
  3: FaceNeutral,
  4: FaceSmiling,
  5: FaceGrining,
};

/** A rating component that will enable the user to rate on a 1-5 scale. */
class FacesRatingBar extends React.PureComponent {
  state = {
    faceHoveredIndex: 0,
  };

  componentDidMount() {
    const { readOnly, value } = this.props;

    if (readOnly && value === 0) {
      throw new Error(
        'In readOnly mode the value couldn’t be 0. Please enter a value between 1 to 5.',
      );
    }
  }

  _onFaceClick = index => {
    this.props.onChange(index);
  };

  _onFaceMouseEnter = index => {
    this.setState({ faceHoveredIndex: index });
  };

  _onFaceMouseLeave = () => {
    this.setState({ faceHoveredIndex: 0 });
  };

  _onFaceFocus = (faceIndex, focusableProps) => {
    // We would like to change the faces color on focus / hover
    this.setState({ faceHoveredIndex: faceIndex });

    focusableProps.focusableOnFocus();
  };

  _onFaceBlur = focusableProps => {
    // We would like to change the faces color on focus / hover
    this.setState({ faceHoveredIndex: 0 });

    focusableProps.focusableOnBlur();
  };

  _shouldShowDescriptionValues = () => {
    const { readOnly, descriptionValues } = this.props;
    let shouldShowDescriptionValues = false;

    // Adding description values is not available in read only mode and it must be an array of strings at size 5.
    if (!readOnly && descriptionValues) {
      shouldShowDescriptionValues =
        Array.isArray(descriptionValues) && descriptionValues.length === 5;
    }

    return shouldShowDescriptionValues;
  };

  render() {
    const { dataHook, readOnly, value, descriptionValues } = this.props;
    const { faceHoveredIndex } = this.state;

    const showDescriptionValues = this._shouldShowDescriptionValues();

    return (
      <Box className={st(classes.root, {}, this.props)} dataHook={dataHook}>
        <Faces
          readOnly={readOnly}
          selectedIndex={value}
          hoveredIndex={faceHoveredIndex}
          showDescriptionValues={showDescriptionValues}
          descriptionValues={descriptionValues}
          onClick={this._onFaceClick}
          onMouseEnter={this._onFaceMouseEnter}
          onMouseLeave={this._onFaceMouseLeave}
          handleFocus={this._onFaceFocus}
          handleBlur={this._onFaceBlur}
        />
      </Box>
    );
  }
}

const Faces = ({
  readOnly,
  selectedIndex,
  hoveredIndex,
  showDescriptionValues,
  descriptionValues,
  onClick,
  onMouseEnter,
  onMouseLeave,
  handleFocus,
  handleBlur,
}) => {
  const facesArr = [];

  for (let i = 1; i <= 5; i++) {
    const isSelected = selectedIndex === i;
    const isHovered = hoveredIndex === i;
    const iconType = facesData[i].name;

    const commonProps = {
      key: i,
      faceIndex: i,
      isSelected,
      iconType,
    };

    const face = readOnly ? (
      <ReadOnlyModeFace {...commonProps} />
    ) : (
      <FocusableInteractiveModeFace
        {...commonProps}
        isHovered={isHovered}
        showDescriptionValues={showDescriptionValues}
        descriptionValues={descriptionValues}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
    );

    facesArr.push(face);
  }

  return facesArr;
};

const InteractiveModeFace = ({
  faceIndex,
  isSelected,
  iconType,
  isHovered,
  showDescriptionValues,
  descriptionValues,
  onClick,
  onMouseEnter,
  onMouseLeave,
  handleFocus,
  handleBlur,
  ...focusableProps
}) => {
  const IconTagName = faceIconsMap[faceIndex];
  const tooltipContent = showDescriptionValues
    ? descriptionValues[faceIndex - 1]
    : '';

  return (
    <button
      data-hook={dataHooks.face}
      data-index={faceIndex}
      data-selected={isSelected}
      className={st(classes.buttonWrapper)}
      onClick={() => onClick(faceIndex)}
      onMouseEnter={() => onMouseEnter(faceIndex)}
      onMouseLeave={onMouseLeave}
      onFocus={() => handleFocus(faceIndex, focusableProps)}
      onBlur={() => handleBlur(focusableProps)}
    >
      <div
        data-hook={dataHooks.face}
        data-selected={isSelected}
        className={st(classes.faceContainer, {
          type: 'interactive',
          hovered: isHovered,
          selected: isSelected,
          iconType: iconType,
        })}
      >
        <Tooltip
          dataHook={facesData[faceIndex].tooltipDataHook}
          content={tooltipContent}
          disabled={!showDescriptionValues}
        >
          <IconTagName width={22} height={22} />
        </Tooltip>
      </div>
    </button>
  );
};

const FocusableInteractiveModeFace = withFocusable(InteractiveModeFace);

const ReadOnlyModeFace = ({ faceIndex, isSelected, iconType }) => {
  const IconTagName = faceIconsMap[faceIndex];

  return (
    <div
      data-hook={dataHooks.face}
      data-selected={isSelected}
      className={st(classes.faceContainer, {
        type: 'readOnly',
        selected: isSelected,
        iconType: iconType,
      })}
    >
      <IconTagName />
    </div>
  );
};

FacesRatingBar.displayName = 'FacesRatingBar';

FacesRatingBar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** In read only mode rating cannot be changed. */
  readOnly: PropTypes.bool,

  /** Represent the rate value descriptions’ texts. Only when the array contains 5 strings, this faces rating bar will display the descriptions labels. */
  descriptionValues: PropTypes.arrayOf(PropTypes.string),

  /** The faces rating bar’s selected rate. In the readOnly mode the value couldn’t be 0. */
  value: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,

  /** A Handler for rating changes
   * ##### Signature:
   * function(rating: number) => void
   * * `rating`: 1 | 2 | 3 | 4 | 5
   */
  onChange: PropTypes.func,
};

FacesRatingBar.defaultProps = {
  readOnly: false,
  onChange: () => {},
};

export default FacesRatingBar;
