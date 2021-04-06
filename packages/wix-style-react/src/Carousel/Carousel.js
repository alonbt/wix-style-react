import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeftLarge from 'wix-ui-icons-common/ChevronLeftLarge';
import ChevronRightLarge from 'wix-ui-icons-common/ChevronRightLarge';
import ChevronLeftLargeSmall from 'wix-ui-icons-common/ChevronLeftLargeSmall';
import ChevronRightLargeSmall from 'wix-ui-icons-common/ChevronRightLargeSmall';
import ChevronLeftSmall from 'wix-ui-icons-common/ChevronLeftSmall';
import ChevronRightSmall from 'wix-ui-icons-common/ChevronRightSmall';

// This is here and not in the test setup because we don't want consumers to need to run it as well
import '../common/match-media-register';
import Slider from 'react-slick';

import './Carousel.global.scss';
import { st, classes } from './Carousel.st.css';
import Pagination from './Pagination';
import SliderArrow from './SliderArrow';
import Loader from '../Loader';
import Proportion from '../Proportion';

const AUTOPLAY_SPEED = 2000;
const TRANSITION_SPEED = 600;
const dataHooks = {
  imagesContainer: 'images-container',
  carouselImage: 'carousel-img',
  loader: 'loader',
  prevButton: 'prev-button',
  nextButton: 'next-button',
  pageNavigation: index => `page-navigation-${index}`,
};

const WrappedSliderArrow = ({ currentSlide, slideCount, ...rest }) => (
  <SliderArrow {...rest} />
);

class Carousel extends React.Component {
  static displayName = 'Carousel';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A single CSS class name to be appended to the Carousel's wrapper element. */
    className: PropTypes.string,

    /** Array of objects where each contains the `src` of an image (in \<img src="your_src" /\>) */
    images: PropTypes.array,

    /** Sets the images position */
    imagesPosition: PropTypes.string,

    /** Sets the images fit */
    imagesFit: PropTypes.oneOf([
      'fill',
      'contain',
      'cover',
      'none',
      'scale-down',
    ]),

    /** Any element to render inside */
    children: PropTypes.node,

    /** Sets the skin of the arrow buttons */
    buttonSkin: PropTypes.oneOf(['standard', 'inverted', 'light']),

    /** Show a shadow for the carousel controls */
    showControlsShadow: PropTypes.bool,

    /** Images loop endlessly */
    infinite: PropTypes.bool,

    /** Auto-playing of images */
    autoplay: PropTypes.bool,

    /** Show dots */
    dots: PropTypes.bool,

    /** Variable width of children */
    variableWidth: PropTypes.bool,

    /** An index of the slide to start on */
    initialSlideIndex: PropTypes.number,

    /** Index change callback. `index => ...` */
    afterChange: PropTypes.func,

    /** Index change callback. `(oldIndex, newIndex) => ...` */
    beforeChange: PropTypes.func,

    /** Sets the arrows position */
    controlsPosition: PropTypes.oneOf(['sides', 'overlay', 'bottom', 'none']),

    /** Sets the arrows size */
    controlsSize: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Configure the start and end controls to be shown disabled or hidden. Relevant when infinite prop is set to false. */
    controlsStartEnd: PropTypes.oneOf(['disabled', 'hidden']),
  };

  static defaultProps = {
    infinite: true,
    dots: true,
    variableWidth: false,
    initialSlideIndex: 0,
    images: [],
    imagesPosition: 'center top',
    imagesFit: 'contain',
    buttonSkin: 'standard',
    controlsPosition: 'sides',
    controlsSize: 'medium',
    controlsStartEnd: 'disabled',
    showControlsShadow: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      sliderSettings: this._resolveSliderSettings(props),
      loadedImageCount: 0,
    };
  }

  render() {
    const {
      dataHook,
      className,
      images,
      children,
      controlsPosition,
      controlsSize,
      showControlsShadow,
    } = this.props;
    const { sliderSettings } = this.state;
    const hasImages = !children && images.length > 0;

    return (
      <div
        data-hook={dataHook}
        className={st(
          classes.root,
          { controlsPosition, controlsSize, showControlsShadow },
          className,
        )}
      >
        <Slider {...sliderSettings}>
          {children}
          {hasImages && this._renderImages(images)}
        </Slider>
      </div>
    );
  }

  leftIconByControlSize = controlSize => {
    switch (controlSize) {
      case 'tiny':
        return <ChevronLeftSmall />;
      case 'small':
        return <ChevronLeftLargeSmall />;
      default:
        return <ChevronLeftLarge />;
    }
  };

  rightIconByControlSize = controlSize => {
    switch (controlSize) {
      case 'tiny':
        return <ChevronRightSmall />;
      case 'small':
        return <ChevronRightLargeSmall />;
      default:
        return <ChevronRightLarge />;
    }
  };

  _resolveSliderSettings = ({
    infinite,
    autoplay,
    dots,
    variableWidth,
    buttonSkin,
    initialSlideIndex,
    afterChange,
    beforeChange,
    controlsPosition,
    controlsSize,
    controlsStartEnd,
  }) => {
    return {
      infinite,
      autoplay,
      speed: TRANSITION_SPEED,
      autoplaySpeed: AUTOPLAY_SPEED,
      initialSlide: initialSlideIndex,
      dots,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth,
      afterChange,
      beforeChange,
      nextArrow: (
        <WrappedSliderArrow
          dataHook={dataHooks.nextButton}
          buttonSkin={buttonSkin}
          arrowSize={controlsSize}
          icon={this.rightIconByControlSize(controlsSize)}
          controlsStartEnd={controlsStartEnd}
        />
      ),
      prevArrow: (
        <WrappedSliderArrow
          dataHook={dataHooks.prevButton}
          buttonSkin={buttonSkin}
          arrowSize={controlsSize}
          icon={this.leftIconByControlSize(controlsSize)}
          controlsStartEnd={controlsStartEnd}
        />
      ),
      arrows: controlsPosition !== 'none',
      appendDots: pages => {
        /*
         * originalClassName is a workaround for stylable API extend to work and pass an extendable className.
         * This is because react-slick overrides brutally the className prop with cloneElement().
         */
        return (
          <Pagination originalClassName={classes.pagination} pages={pages} />
        );
      },
      customPaging: i => (
        <div
          className={classes.pageNavigation}
          data-hook={dataHooks.pageNavigation(i)}
        >
          {i}
        </div>
      ),
    };
  };

  _renderImages = images => {
    const { imagesPosition, imagesFit } = this.props;
    return images.map((image, index) => (
      <Proportion
        key={`${index}${image.src}`}
        aspectRatio={Proportion.PREDEFINED_RATIOS.landscape}
      >
        <div
          className={classes.imageContainer}
          data-hook={dataHooks.imagesContainer}
          data-is-loading={this._isLoading()}
        >
          <img
            {...image}
            data-hook={dataHooks.carouselImage}
            className={classes.image}
            onLoad={() => this._onImageLoad()}
            style={{
              objectPosition: imagesPosition,
              objectFit: imagesFit,
              ...image.style,
            }}
          />
        </div>
        {this._isLoading() && (
          <div className={classes.loader}>
            <Loader dataHook="loader" size="small" />
          </div>
        )}
      </Proportion>
    ));
  };

  _onImageLoad() {
    this.setState(state => {
      const loadedImageCount = state.loadedImageCount + 1;

      return {
        loadedImageCount,
      };
    });
  }

  _isLoading() {
    return this.state.loadedImageCount < this.props.images.length;
  }
}

export default Carousel;
