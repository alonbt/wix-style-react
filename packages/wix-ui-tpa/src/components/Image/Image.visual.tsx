import * as React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import { delay } from '../../test/utils';
import { Image, ImageProps } from './';
import { classes } from './Image.visual.st.css';
import {
  AspectRatioPresets,
  FocalPointPresets,
  LoadingBehaviorOptions,
  ResizeOptions,
} from './types';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

const stories: { name: string; src: string; invalidSrc: string }[] = [
  {
    name: 'Absolute URL',
    src:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
    invalidSrc: 'https://invalid.something/resource.jpg',
  },
  {
    name: 'Relative Media URI',
    src: 'c5f754_dd75514d14fa4057b4f4a6cc8ce7add3~mv2.jpg',
    invalidSrc: 'invalid-resource.jpg',
  },
];

type ImageWithWrapperProps = ImageProps & {
  wrapperStyle?: React.CSSProperties;
};

class ImageWithWrapper extends React.Component<ImageWithWrapperProps> {
  async _handleError(onError) {
    await delay(500);
    onError();
  }

  render() {
    const { onError, wrapperStyle, ...imageProps } = this.props;
    const style = {
      width: 480,
      height: 360,
      ...wrapperStyle,
    };

    return (
      <div style={style}>
        <Image {...imageProps} onError={() => this._handleError(onError)} />
      </div>
    );
  }
}

visualize('Image', () => {
  stories.forEach(({ name, src, invalidSrc }) => {
    story(name, () => {
      snap('default', (done) => <ImageWithWrapper src={src} onLoad={done} />);
      snap('with onError', (done) => (
        <ImageWithWrapper src={invalidSrc} onError={done} />
      ));
      snap('with blurry loading', (done) => (
        <ImageWithWrapper
          src={src}
          loadingBehavior={LoadingBehaviorOptions.blur}
          onLoad={done}
        />
      ));

      story('with dimensions', () => {
        snap('as fixed', (done) => (
          <ImageWithWrapper src={src} width={300} height={225} onLoad={done} />
        ));
        snap('as fixed width and aspectRatio', (done) => (
          <ImageWithWrapper
            src={src}
            width={300}
            aspectRatio={1}
            onLoad={done}
          />
        ));
        snap('as fixed height and aspectRatio', (done) => (
          <ImageWithWrapper
            src={src}
            height={300}
            aspectRatio={1}
            onLoad={done}
          />
        ));
      });

      story('with aspectRatio', () => {
        snap('as square', (done) => (
          <ImageWithWrapper
            src={src}
            aspectRatio={AspectRatioPresets.square}
            onLoad={done}
          />
        ));
        snap('as cinema', (done) => (
          <ImageWithWrapper
            src={src}
            aspectRatio={AspectRatioPresets.cinema}
            onLoad={done}
          />
        ));
        snap('as landscape', (done) => (
          <ImageWithWrapper
            src={src}
            aspectRatio={AspectRatioPresets.landscape}
            onLoad={done}
          />
        ));
        snap('as custom number', (done) => (
          <ImageWithWrapper src={src} aspectRatio={1.5} onLoad={done} />
        ));
      });

      story('with resize', () => {
        snap('as contain', (done) => (
          <ImageWithWrapper
            src={src}
            width={300}
            height={250}
            resize={ResizeOptions.contain}
            onLoad={done}
          />
        ));
        snap('as cover', (done) => (
          <ImageWithWrapper
            src={src}
            width={300}
            height={250}
            resize={ResizeOptions.cover}
            onLoad={done}
          />
        ));
      });

      story('with focalPoint', () => {
        snap('as preset', (done) => (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 250px)',
              gridTemplateRows: 'repeat(3, 150px)',
            }}
          >
            {Object.values(FocalPointPresets).map((focalPoint, index) => (
              <ImageWithWrapper
                key={`${focalPoint.x}, ${focalPoint.y}`}
                src={src}
                width={200}
                height={100}
                resize={ResizeOptions.cover}
                focalPoint={focalPoint}
                onLoad={done}
              />
            ))}
          </div>
        ));
        snap('as custom', (done) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ImageWithWrapper
              src={src}
              width={300}
              height={100}
              resize={ResizeOptions.cover}
              focalPoint={{ x: 0, y: 20 }}
              onLoad={done}
            />
            <ImageWithWrapper
              src={src}
              width={50}
              height={200}
              resize={ResizeOptions.cover}
              focalPoint={{ x: 30, y: 0 }}
              onLoad={done}
            />
          </div>
        ));
      });

      story('with fluid', () => {
        snap('as full viewport', (done) => (
          <ImageWithWrapper
            src={src}
            width={480}
            height={360}
            resize={ResizeOptions.cover}
            fluid
            onLoad={done}
            wrapperStyle={{ width: '100%' }}
          />
        ));
        snap('as half viewport', (done) => (
          <ImageWithWrapper
            src={src}
            width={480}
            height={360}
            resize={ResizeOptions.cover}
            fluid
            onLoad={done}
            wrapperStyle={{ width: '50%' }}
          />
        ));
      });

      story('with wiring', () => {
        snap('override background color', (done) => (
          <ImageWithWrapper
            src={src}
            width={480}
            height={360}
            className={classes.backgroundColorOverride}
            onLoad={done}
          />
        ));
        snap('override border', (done) => (
          <ImageWithWrapper
            src={src}
            width={480}
            height={360}
            className={classes.borderOverride}
            onLoad={done}
          />
        ));
        snap('override border radius', (done) => (
          <ImageWithWrapper
            src={src}
            width={480}
            height={360}
            className={classes.borderRadiusOverride}
            onLoad={done}
          />
        ));
        snap('override opacity', (done) => (
          <ImageWithWrapper
            src={src}
            width={480}
            height={360}
            className={classes.opacityOverride}
            onLoad={done}
          />
        ));
      });
    });
  });

  story(stories[1].name, () => {
    snap('with seo', (done) => (
      <TPAComponentsProvider value={{ seo: true }}>
        <ImageWithWrapper
          src={stories[1].src}
          width={480}
          height={360}
          onLoad={done}
        />
      </TPAComponentsProvider>
    ));
  });
});
