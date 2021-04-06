import React from 'react';
import Hint from 'wix-ui-icons-common/Hint';

import Box from '../../Box';

export const InfoChild = ({ text }) => (
  <Box minHeight="30px" verticalAlign="middle" fontSize="18px">
    <Hint size="54px" color="#89cff8" />
    <Box marginLeft={2}>{text}</Box>
  </Box>
);

export const controlsPositionExample = `
<Carousel
  buttonSkin="inverted"
  controlsPosition="bottom"
  controlsSize="medium"
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const controlsStartEndHidden = `
<Carousel
  buttonSkin="inverted"
  controlsPosition="overlay"
  controlsSize="medium"
  infinite={false}
  controlsStartEnd="hidden"
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const autoplayExample = `
<Carousel
  autoplay
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const withoutDotsExample = `
<Carousel
  dots={false}
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const controlsShadowExample = `
<Carousel
  buttonSkin="inverted"
  controlsPosition="overlay"
  controlsSize="medium"
  showControlsShadow
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;

export const variableWidthExample = `
<Carousel variableWidth={true}>
  <Box width="300px" height="100px" backgroundColor="red" />
  <Box width="200px" height="100px" backgroundColor="green" />
  <Box width="350px" height="100px" backgroundColor="blue" />
</Carousel>
`;

export const imagesPositionExample = `
<Carousel
  imagesPosition="middle"
  images={[
    {
      src:
        'https://static.wixstatic.com/media/11062b_536b8e53eb3c4dcb9c22d6637f2151eb~mv2.jpg',
    },
    {
      src:
        'https://static.wixstatic.com/media/34e014437d48427abc101826cc1a06c5.jpg',
    },
    {
      src:
        'https://static.wixstatic.com/media/11062b_a958b47908bf413fb6eb65874c0ba2aa~mv2.jpeg',
    },
  ]}
/>
`;

export const imagesFitExample = `
() => {
  const images = [
    {
      src:
        'https://static.wixstatic.com/media/11062b_536b8e53eb3c4dcb9c22d6637f2151eb~mv2.jpg',
    },
    {
      src:
        'https://static.wixstatic.com/media/34e014437d48427abc101826cc1a06c5.jpg',
    },
    {
      src:
        'https://static.wixstatic.com/media/11062b_a958b47908bf413fb6eb65874c0ba2aa~mv2.jpeg',
    },
  ];
  return (
    <Layout>
      <Cell span={6}>
        <Box marginBottom="SP2">
          <Heading appearance="H3">Contain</Heading>
        </Box>
        <Carousel
          imagesFit="contain"
          images={images}
        />
      </Cell>
      <Cell span={6}>
        <Box marginBottom="SP2">
          <Heading appearance="H3">Cover</Heading>
        </Box>
        <Carousel
          imagesFit="cover"
          images={images}
        />
      </Cell>
      <Cell span={6}>
        <Box marginBottom="SP2">
          <Heading appearance="H3">Fill</Heading>
        </Box>
        <Carousel
          imagesFit="fill"
          images={images}
        />
      </Cell>
      <Cell span={6}>
        <Box marginBottom="SP2">
          <Heading appearance="H3">None</Heading>
        </Box>
        <Carousel
          imagesFit="none"
          images={images}
        />
      </Cell>
      <Cell span={6}>
        <Box marginBottom="SP2">
          <Heading appearance="H3">Scale Down</Heading>
        </Box>
        <Carousel
          imagesFit="scale-down"
          images={images}
        />
      </Cell>
    </Layout>
  );
}
`;
