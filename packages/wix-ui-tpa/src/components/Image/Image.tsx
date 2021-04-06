import classnames from 'classnames';
import * as React from 'react';
import { Image as CoreImage } from 'wix-ui-core/image';
import { classes, st } from './Image.st.css';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import {
  calculateDimensions,
  resolveFocalPointCoordinates,
} from './ImageUtils';
import { RelativeMediaImage } from './RelativeMediaImage';
import { Text } from '../Text';
import {
  ImageProps,
  ResizeOptions,
  AspectRatioPresets,
  LoadingBehaviorOptions,
  HoverEffectOptions,
  FocalPointPresets,
} from './types';

type DefaultProps = Pick<ImageProps, 'resize' | 'errorMessage'>;

/** Image is a component to literally display an image - whether an absolute with full URL or a media platform item with relative URI */
export class Image extends React.Component<ImageProps> {
  static displayName = 'Image';
  static defaultProps: DefaultProps = {
    resize: ResizeOptions.contain,
    errorMessage: 'Image not found',
  };

  state = { isLoaded: false, boundingRectDimensions: null, isError: false };

  containerRef = React.createRef<HTMLDivElement>();
  imageRef = React.createRef<HTMLImageElement>();

  _onLoad = (event) => {
    const { onLoad } = this.props;

    if (!this.state.isLoaded) {
      this.setState({ isLoaded: true });
    }

    onLoad && onLoad(event);
  };

  _onError = (event) => {
    const { onError } = this.props;

    if (!this.state.isError) {
      this.setState({ isError: true });
    }

    onError && onError(event);
  };

  componentDidMount() {
    const { width, height, aspectRatio } = this.props;
    const { current: imageElement } = this.imageRef;

    // Updating the state in case it's rendered with SSR and the image is loaded on the client even before registering the `onLoad` event
    if (!this.state.isLoaded && imageElement?.complete) {
      this.setState({ isLoaded: true });
    }

    // Updating the state only if we don't have enough information to calculate the dimensions
    if (!(width && height) && !((width || height) && aspectRatio)) {
      const {
        width: boundingRectWidth,
        height: boundingRectHeight,
      } = this.containerRef.current?.getBoundingClientRect();

      this.setState({
        boundingRectDimensions: {
          width: boundingRectWidth,
          height: boundingRectHeight,
        },
      });
    }
  }

  render() {
    const {
      className,
      src,
      width,
      height,
      onLoad,
      onError,
      aspectRatio,
      resize,
      focalPoint,
      fluid,
      hoverEffect,
      loadingBehavior,
      errorMessage,
      ...imageProps
    } = this.props;
    const { isLoaded, boundingRectDimensions, isError } = this.state;

    const isAbsoluteUrl = src && src.match('^https?://');

    const aspectRatioAsNumber =
      typeof aspectRatio === 'number'
        ? aspectRatio
        : AspectRatioPresets[aspectRatio];

    // Taking the dimensions from props or from its bounding rectangle in case they're missing
    const sourceDimensions = {
      width: width || boundingRectDimensions?.width,
      height: height || boundingRectDimensions?.height,
    };

    // Calculating the dimensions considering the given values and aspect ratio
    const calculatedDimensions = calculateDimensions({
      ...sourceDimensions,
      aspectRatio: aspectRatioAsNumber,
    });

    const focalPointCoordinates =
      focalPoint && resolveFocalPointCoordinates(focalPoint);

    const hasLoadingBehavior = loadingBehavior === LoadingBehaviorOptions.blur;

    return (
      <div
        ref={this.containerRef}
        className={st(
          classes.root,
          resize === ResizeOptions.cover ? classes.cover : classes.contain,
          classnames(className, {
            [classes.fluid]: fluid,
            [classes.zoom]: hoverEffect === HoverEffectOptions.zoom,
            [classes.darken]: hoverEffect === HoverEffectOptions.darken,
            [classes.preload]: hasLoadingBehavior && !isLoaded,
            [classes.loaded]: hasLoadingBehavior && isLoaded,
            [classes.isError]: isError,
          }),
        )}
        {...(!fluid && {
          style: {
            // If fixed dimensions were passed, we set the calculated values to fit the container with the fixed image
            width: width && calculatedDimensions?.width,
            height: height && calculatedDimensions?.height,
          },
        })}
        data-hook={this.props['data-hook']}
      >
        {isAbsoluteUrl ? (
          <CoreImage
            src={src}
            className={classes.image}
            {...(calculatedDimensions && {
              nativeProps: {
                ...calculatedDimensions,
                ...(focalPointCoordinates && {
                  style: {
                    objectPosition: `${focalPointCoordinates.x}% ${focalPointCoordinates.y}%`,
                  },
                }),
              },
            })}
            nativeRef={this.imageRef}
            onLoad={this._onLoad}
            onError={this._onError}
            {...imageProps}
          />
        ) : (
          <RelativeMediaImage
            src={src}
            className={classes.image}
            sourceDimensions={sourceDimensions}
            containerDimensions={calculatedDimensions}
            focalPoint={focalPointCoordinates}
            isPlaceholderDisplayed={hasLoadingBehavior && !isLoaded}
            nativeRef={this.imageRef}
            onLoad={this._onLoad}
            onError={this._onError}
            {...imageProps}
          />
        )}
        {isError && (
          <div className={classes.errorWrapper} aria-hidden="true">
            <ErrorIcon className={classes.errorIcon} />
            <Text className={classes.errorMessage}>{errorMessage}</Text>
          </div>
        )}
      </div>
    );
  }
}
