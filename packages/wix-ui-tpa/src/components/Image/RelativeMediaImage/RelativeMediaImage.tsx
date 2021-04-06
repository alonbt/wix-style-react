import * as React from 'react';
import { MediaImage } from 'wix-ui-core/media-image';
import { Dimensions, ImageProps } from '../types';
import { classes, st } from './RelativeMediaImage.st.css';
import { TPAComponentsConsumer } from '../../TPAComponentsConfig';

interface RelativeMediaImageProps extends Omit<ImageProps, 'width' | 'height'> {
  sourceDimensions: Dimensions;
  containerDimensions: Dimensions;
  isPlaceholderDisplayed?: boolean;
  // When adding isSEOBot - scaling configuration is ignored and the image dimensions will remain as specified.
  isSEOBot?: boolean;
  nativeRef?: React.Ref<HTMLImageElement>;
}

const Placeholder = ({
  src,
  className,
  sourceDimensions,
  containerDimensions,
  focalPoint,
  isSEOBot,
  ...imageProps
}: RelativeMediaImageProps) => (
  <MediaImage
    mediaPlatformItem={{
      uri: src,
      ...sourceDimensions,
      options: {
        focalPoint,
        filters: {
          blur: 3,
        },
        isSEOBot,
      },
    }}
    className={className}
    {...containerDimensions}
    {...imageProps}
  />
);

export class RelativeMediaImage extends React.Component<RelativeMediaImageProps> {
  render() {
    const {
      src,
      className,
      sourceDimensions,
      containerDimensions,
      isPlaceholderDisplayed,
      focalPoint,
      onLoad,
      nativeRef,
      ...imageProps
    } = this.props;

    return (
      containerDimensions && (
        <TPAComponentsConsumer>
          {({ seo }) => (
            <>
              {isPlaceholderDisplayed && (
                <Placeholder
                  src={src}
                  className={st(classes.placeholder, className)}
                  sourceDimensions={sourceDimensions}
                  containerDimensions={containerDimensions}
                  focalPoint={focalPoint}
                  nativeRef={nativeRef}
                  isSEOBot={seo}
                  {...imageProps}
                />
              )}
              <MediaImage
                mediaPlatformItem={{
                  uri: src,
                  ...sourceDimensions,
                  options: {
                    focalPoint,
                    isSEOBot: seo,
                  },
                }}
                className={st(classes.root, className)}
                onLoad={onLoad}
                {...containerDimensions}
                {...imageProps}
              />
            </>
          )}
        </TPAComponentsConsumer>
      )
    );
  }
}
