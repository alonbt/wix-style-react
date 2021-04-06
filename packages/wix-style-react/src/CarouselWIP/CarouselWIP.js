import React from 'react';
import PropTypes from 'prop-types';
import { st, classes, vars } from './CarouselWIP.st.css';
import { ChevronLeftSmall, ChevronRightSmall } from 'wix-ui-icons-common';
import Loader from '../Loader';
import Control from './Control';
import Slide from './Slide';
import {
  CONTROLS_START_END,
  SLIDING_TYPE,
  ALIGNMENT,
  DATA_HOOKS,
  AUTOPLAY_SPEED,
} from './constants';
import { isWhollyInView, animate, nop, normalizeIndex } from './utils';

/** The carousel component creates a slideshow for cycling through a series of content. */
class CarouselWIP extends React.PureComponent {
  static displayName = 'CarouselWIP';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** Any element to render inside */
    children: PropTypes.node,

    /** Array of objects where each contains the `src` of an image (in \<img src="your_src" /\>) */
    images: PropTypes.array,

    /** Sets the skin of the arrow buttons */
    controlsSkin: PropTypes.oneOf(['standard', 'inverted', 'light']),

    /** Show a shadow for the carousel controls */
    showControlsShadow: PropTypes.bool,

    /** Images loop endlessly */
    infinite: PropTypes.bool,

    /** An index of the slide to start on */
    initialSlideIndex: PropTypes.number,

    /** Index change callback. `index => ...` */
    afterChange: PropTypes.func,

    /** Index change callback. `(oldIndex, newIndex) => ...` */
    beforeChange: PropTypes.func,

    /** Sets the arrows position */
    controlsPosition: PropTypes.oneOf(['sides', 'overlay', 'bottom', 'none']),

    /** Sets the arrows position */
    controlsSize: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Configure the start and end controls to be shown disabled or hidden. Relevant when infinite prop is set to false. */
    controlsStartEnd: PropTypes.oneOf(['disabled', 'hidden']),

    /** Sliding behaviour type for the carousel */
    slidingType: PropTypes.oneOf([
      'align-to-start',
      'reveal-one',
      'reveal-chunk',
    ]),

    /** Number of pixels for showing "peeking" cards on the edges of the carousel */
    startEndOffset: PropTypes.number,

    /** Number of pixels dividing between slides */
    gutter: PropTypes.number,

    /** Color for the gradients on the sides of the carousel */
    sidesGradientColor: PropTypes.string,

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

    /** Auto-playing of images */
    autoplay: PropTypes.bool,

    /** Hide dots */
    hideDots: PropTypes.bool,

    // TODO: implement prop
    /** 🚧 Variable width of children */
    variableWidth: PropTypes.bool,
  };

  static defaultProps = {
    children: [],
    infinite: true,
    controlsSkin: 'standard',
    controlsStartEnd: 'disabled',
    showControlsShadow: false,
    images: [],
    initialSlideIndex: 0,
    controlsPosition: 'sides',
    controlsSize: 'medium',
    slidingType: 'align-to-start',
    startEndOffset: 0,
    gutter: 0,
    hideDots: false,
    autoplay: false,
  };

  constructor(props) {
    super(props);

    this.loadingImagesCount = 0;
    this.state = {
      visibleSlides: [],
      isAnimating: false,
      isLoading: false,
      isLeftArrowDisabled: true,
      isRightArrowDisabled: true,
      isShowStartGradient: false,
      isShowEndGradient: false,
    };
  }

  componentDidMount() {
    const { initialSlideIndex, images, autoplay } = this.props;

    this.childCount =
      this.carousel && this.carousel.children
        ? this.carousel.children.length
        : images.length;
    this._setImagesOnLoadHandlers();
    if (!this.loadingImagesCount) {
      this._slideTo({ index: initialSlideIndex, immediate: true }).catch(nop);
      this._setVisibleSlides();
    }

    this._setAutoplayTimer(autoplay);
  }

  componentDidUpdate(prevProps) {
    const { autoplay } = this.props;

    if (prevProps.autoplay !== autoplay) this._setAutoplayTimer(autoplay);
  }

  // Need to wait for images to load so we know which images are visible
  // Adding onLoad and onError callbacks to all images under the component
  _setImagesOnLoadHandlers = () => {
    Array.from(this.carousel.children).forEach(child => {
      const childImages = Array.from(child.getElementsByTagName('img'));
      childImages.forEach(img => {
        this.setState({ isLoading: true });
        this.loadingImagesCount++;
        img.onload = this._onImageLoad;
        img.onerror = this._onImageLoad;
      });
    });
  };

  _onImageLoad = () => {
    const { initialSlideIndex } = this.props;

    this.loadingImagesCount--;
    if (!this.loadingImagesCount) {
      this.setState({ isLoading: false });
      this._slideTo({
        index: initialSlideIndex,
        immediate: true,
      }).catch(nop);
    }
  };

  _setAutoplayTimer = active => {
    clearInterval(this.autoplayTimer);

    if (active) this.autoplayTimer = setInterval(this._next, AUTOPLAY_SPEED);
  };

  _setVisibleSlides = () => {
    const { props, carousel, childCount } = this;
    const { infinite } = props;
    const firstVisibleChild = Math.max(
      Array.from(carousel.children).findIndex(child =>
        isWhollyInView(carousel)(child),
      ),
      0,
    );
    const lastVisibleChild = Math.max(
      Array.from(carousel.children).findIndex(
        (child, i, children) =>
          isWhollyInView(carousel)(child) &&
          (i === children.length - 1 ||
            !isWhollyInView(carousel)(children[i + 1])),
      ),
      0,
    );
    this.setState({
      visibleSlides: [firstVisibleChild, lastVisibleChild],
      isLeftArrowDisabled: !infinite && firstVisibleChild === 0,
      isRightArrowDisabled: !infinite && lastVisibleChild === childCount - 1,
      isShowStartGradient: firstVisibleChild > 0,
      isShowEndGradient: lastVisibleChild < childCount - 1,
    });
  };

  _slideTo = (
    { index, alignTo, immediate } = {
      index: 0,
      alignTo: ALIGNMENT.LEFT,
      immediate: false,
    },
  ) => {
    if (this.childCount === 0) {
      return Promise.reject('No children to slide to');
    }
    if (!this.carousel) {
      return Promise.reject('The Carousel is not mounted');
    }
    const {
      afterChange,
      beforeChange,
      easing,
      animationDuration: duration,
      infinite,
      startEndOffset,
    } = this.props;
    const { children, scrollLeft, offsetWidth } = this.carousel;
    const slideIndex = normalizeIndex(index, this.childCount, infinite);
    const { visibleSlides } = this.state;
    const [firstVisibleSlide, lastVisibleSlide] = visibleSlides;

    let delta;
    if (alignTo === ALIGNMENT.RIGHT) {
      delta =
        children[slideIndex].offsetWidth -
        (offsetWidth - children[slideIndex].offsetLeft) -
        scrollLeft +
        startEndOffset;
    } else {
      delta = children[slideIndex].offsetLeft - scrollLeft - startEndOffset;
    }
    if (firstVisibleSlide !== slideIndex && beforeChange) {
      beforeChange(firstVisibleSlide, index);
    }

    this.setState({ isAnimating: true });
    return new Promise((res, _) => {
      if (immediate) {
        this.carousel.scrollLeft = children[slideIndex].offsetLeft;
        return res();
      } else {
        const originalOverflowX = 'hidden';
        const prop = 'scrollLeft';
        return res(
          animate(this.carousel, {
            prop,
            delta,
            easing,
            duration,
            originalOverflowX,
          }),
        );
      }
    })
      .then(() => {
        this.setState({ isAnimating: false });
        this._setVisibleSlides();
        if (firstVisibleSlide !== slideIndex && afterChange) {
          return afterChange(slideIndex);
        }
      })
      .catch(_ => {
        this._setVisibleSlides();
        this.setState({ isAnimating: false });
      });
  };

  _next = () => {
    const { slidingType, infinite } = this.props;
    const { visibleSlides } = this.state;
    const [firstVisibleSlide, lastVisibleSlide] = visibleSlides;

    let nextSlide, alignTo;
    if (
      [SLIDING_TYPE.REVEAL_CHUNK, SLIDING_TYPE.REVEAL_ONE].includes(slidingType)
    ) {
      if (lastVisibleSlide === this.childCount - 1) {
        nextSlide = infinite ? 0 : lastVisibleSlide;
      } else {
        nextSlide = lastVisibleSlide + 1;
      }
      alignTo =
        slidingType === SLIDING_TYPE.REVEAL_CHUNK
          ? ALIGNMENT.LEFT
          : ALIGNMENT.RIGHT;
    } else {
      if (firstVisibleSlide === this.childCount - 1) {
        nextSlide = infinite ? 0 : firstVisibleSlide;
      } else {
        nextSlide = firstVisibleSlide + 1;
      }
      alignTo = ALIGNMENT.LEFT;
    }

    if (nextSlide === this.childCount - 1) {
      this.setState({ isRightArrowDisabled: true, isShowEndGradient: false });
    }
    if (firstVisibleSlide === 0) {
      this.setState({ isLeftArrowDisabled: false, isShowStartGradient: true });
    }
    return this._slideTo({ index: nextSlide, alignTo });
  };

  _prev = () => {
    const { slidingType, infinite } = this.props;
    const { visibleSlides } = this.state;
    const [firstVisibleSlide, lastVisibleSlide] = visibleSlides;

    let prevSlide, alignTo;
    if (
      [SLIDING_TYPE.REVEAL_CHUNK, SLIDING_TYPE.REVEAL_ONE].includes(slidingType)
    ) {
      if (firstVisibleSlide === 0) {
        prevSlide = infinite ? this.childCount - 1 : firstVisibleSlide;
      } else {
        prevSlide = firstVisibleSlide - 1;
      }
      alignTo =
        slidingType === SLIDING_TYPE.REVEAL_CHUNK
          ? ALIGNMENT.RIGHT
          : ALIGNMENT.LEFT;
    } else {
      if (firstVisibleSlide === 0) {
        prevSlide = infinite ? this.childCount - 1 : 0;
      } else {
        prevSlide = firstVisibleSlide - 1;
      }
      alignTo = ALIGNMENT.LEFT;
    }

    if (prevSlide === 0) {
      this.setState({ isLeftArrowDisabled: true, isShowStartGradient: false });
    }
    if (lastVisibleSlide === this.childCount - 1) {
      this.setState({ isRightArrowDisabled: false, isShowEndGradient: true });
    }
    return this._slideTo({ index: prevSlide, alignTo });
  };

  _setRef = r => {
    this.carousel = r;
  };

  _renderLeftControl = () => {
    const { isLeftArrowDisabled } = this.state;
    const {
      controlsPosition,
      controlsStartEnd,
      controlsSize,
      controlsSkin,
    } = this.props;

    return (
      controlsPosition !== 'none' &&
      (!isLeftArrowDisabled ||
        controlsStartEnd === CONTROLS_START_END.DISABLED) && (
        <Control
          dataHook={DATA_HOOKS.prevButton}
          onClick={this._prev}
          icon={<ChevronLeftSmall />}
          size={controlsSize}
          skin={controlsSkin}
          disabled={isLeftArrowDisabled}
          className={st(classes.control, classes.prev)}
        />
      )
    );
  };

  _renderRightControl = () => {
    const { isRightArrowDisabled } = this.state;
    const {
      controlsPosition,
      controlsStartEnd,
      controlsSize,
      controlsSkin,
    } = this.props;

    return (
      controlsPosition !== 'none' &&
      (!isRightArrowDisabled ||
        controlsStartEnd === CONTROLS_START_END.DISABLED) && (
        <Control
          dataHook={DATA_HOOKS.nextButton}
          onClick={this._next}
          icon={<ChevronRightSmall />}
          size={controlsSize}
          skin={controlsSkin}
          disabled={isRightArrowDisabled}
          className={st(classes.control, classes.next)}
        />
      )
    );
  };

  _renderSlides = () => {
    const { images, children, gutter, imagesPosition, imagesFit } = this.props;

    const slide = ({ i, image, child }) => (
      <Slide
        dataHook={DATA_HOOKS.child}
        key={`slide-${i}`}
        role="listitem"
        width="auto"
        gutter={i > 0 ? `${gutter}px` : ''}
        image={image}
        children={child}
        imagePosition={imagesPosition}
        imageFit={imagesFit}
      />
    );

    return (
      <div className={classes.carousel} role="list" ref={this._setRef}>
        {children.length
          ? React.Children.map(children, (child, i) => slide({ i, child }))
          : images.map((image, i) => slide({ i, image }))}
      </div>
    );
  };

  _renderLoader = () => (
    <div className={classes.loader}>
      <Loader dataHook={DATA_HOOKS.loader} size="small" />
    </div>
  );

  _renderDots = () => {
    const { children, images } = this.props;
    const { visibleSlides } = this.state;
    const [firstVisibleSlide, lastVisibleSlide] = visibleSlides;
    const slidesCount = children.length || images.length || 0;

    return (
      <div className={classes.dots}>
        {Array(slidesCount)
          .fill(0)
          .map((_, index) => (
            <div
              data-hook={DATA_HOOKS.pageNavigation(index)}
              key={index}
              className={st(classes.dot, {
                active: index >= firstVisibleSlide && index <= lastVisibleSlide,
              })}
              onClick={() => {
                if (index < firstVisibleSlide || index > lastVisibleSlide)
                  this._slideTo({
                    index,
                    alignTo:
                      index > firstVisibleSlide
                        ? ALIGNMENT.RIGHT
                        : ALIGNMENT.LEFT,
                  });
              }}
            />
          ))}
      </div>
    );
  };

  _renderStartGradient = () => <div className={classes.start} />;

  _renderEndGradient = () => <div className={classes.end} />;

  render() {
    const {
      dataHook,
      className,
      controlsPosition,
      controlsSize,
      showControlsShadow,
      sidesGradientColor,
      hideDots,
    } = this.props;
    const { isShowStartGradient, isShowEndGradient, isLoading } = this.state;
    const showSidesGradients = !!sidesGradientColor;

    return isLoading ? (
      this._renderLoader()
    ) : (
      <div
        data-hook={dataHook}
        className={st(
          classes.root,
          {
            controlsPosition,
            controlsSize,
            showControlsShadow,
            showSidesGradients,
          },
          className,
        )}
        style={{ [vars.sidesGradientColor]: sidesGradientColor }}
      >
        <div style={{ position: 'relative' }}>
          {showSidesGradients &&
            isShowStartGradient &&
            this._renderStartGradient()}
          {this._renderLeftControl()}
          {this._renderSlides()}
          {this._renderRightControl()}
          {showSidesGradients && isShowEndGradient && this._renderEndGradient()}
        </div>
        {!hideDots && this._renderDots()}
      </div>
    );
  }

  componentWillUnmount() {
    this._setAutoplayTimer(false);
  }
}

export default CarouselWIP;
