import React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import SocialPreview from '../index';
import ImageViewer from '../../ImageViewer';

const defaultProps = {
  skin: 'social',
  size: 'large',
  title: 'Click me!',
  description: 'A description for the displayed item',
  previewUrl: 'www.site-name.com',
  media: (
    <ImageViewer
      width="100%"
      height="100%"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"
    />
  ),
};

const tests = [
  {
    it: 'basic',
    props: {},
  },
  {
    it: 'long texts',
    props: {
      title: 'Click me!'.repeat(27),
      description: 'a short description for a site'.repeat(8),
      previewUrl: 'www.site-name.com'.repeat(28),
    },
  },
  {
    it: 'twitter large',
    props: {
      skin: 'twitter',
      size: 'large',
    },
  },
  {
    it: 'twitter large long texts',
    props: {
      skin: 'twitter',
      size: 'large',
      title: 'Click me!'.repeat(27),
      description: 'a short description for a site'.repeat(20),
      previewUrl: 'www.site-name.com'.repeat(28),
    },
  },
  {
    it: 'twitter small',
    props: {
      skin: 'twitter',
      size: 'small',
      media: (
        <ImageViewer
          width="90px"
          height="90px"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"
        />
      ),
    },
  },
  {
    it: 'twitter small long texts',
    props: {
      skin: 'twitter',
      size: 'small',
      title: 'Click me!'.repeat(27),
      description: 'a short description for a site'.repeat(20),
      previewUrl: 'www.site-name.com'.repeat(28),
      media: (
        <ImageViewer
          width="90px"
          height="90px"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"
        />
      ),
    },
  },
];

const AsyncStoryWrapper = ({ onDone, ...rest }) => (
  <div style={{ width: '340px' }}>
    <SocialPreview onImageLoad={onDone} {...rest} />
  </div>
);

visualize('SocialPreview', () => {
  story('should render', () => {
    tests.forEach(({ it, props }) => {
      snap(it, done => (
        <AsyncStoryWrapper {...defaultProps} {...props} onDone={done} />
      ));
    });
  });
});
