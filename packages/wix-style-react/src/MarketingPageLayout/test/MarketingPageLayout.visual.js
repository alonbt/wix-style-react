import React from 'react';
import { storiesOf } from '@storybook/react';
import MarketingPageLayout from '../MarketingPageLayout';
import { horizontalSize, verticalSize } from '../constants';
import {
  Button,
  MarketingPageLayoutContent,
  Text,
  Image,
  Avatar,
  TestimonialList,
  FeatureList,
} from 'wix-style-react';

const horizontalSizes = Object.values(horizontalSize);
const verticalSizes = Object.values(verticalSize);

const commonProps = {
  content: (
    <MarketingPageLayoutContent
      size="medium"
      overline="Coming Soon"
      title="Medium Size Content"
      content={
        <Text>
          <ul>
            <li>Brand your dashboard with a custom logo</li>
            <li>Remove Wix ads and promotions</li>
            <li>Promote your business when sharing in-progress work</li>
          </ul>
        </Text>
      }
      actions={<Button size="large">Contact Us</Button>}
    />
  ),
  image: <Image />,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'no content',
        props: {
          content: '',
        },
      },
      {
        it: 'no image',
        props: {
          image: '',
        },
      },
    ],
  },
  {
    describe: 'footers',
    its: [
      {
        it: 'no footer',
        props: {
          footer: '',
        },
      },
      {
        it: 'TestimonialList footer',
        props: {
          footer: (
            <TestimonialList
              testimonials={[
                {
                  id: '0001',
                  avatar: <Avatar name="Guy in glasses" size="size60" />,
                  text: 'I love it! This product is exactly what I needed.',
                  authorName: 'Guy in glasses',
                },
                {
                  id: '0002',
                  avatar: <Avatar name="Person with a hat" size="size60" />,
                  text: 'Amazing! It helped me to solve my problems.',
                  authorName: 'Person with a hat',
                },
                {
                  id: '0003',
                  avatar: <Avatar name="Smiling lady" size="size60" />,
                  text: 'A perfect tool for my every day tasks.',
                  authorName: 'Smiling lady',
                },
              ]}
            />
          ),
        },
      },
      {
        it: 'FeatureList footer',
        props: {
          footer: (
            <FeatureList
              features={[
                {
                  id: '0001',
                  image: <Image width={60} height={60} />,
                  title: 'Remove Wix Ads',
                  text:
                    "Enjoy a website that's completely your own brand by removing Wix ads.",
                },
                {
                  id: '0002',
                  image: <Image width={60} height={60} />,
                  title: 'Connect a Custom Domain',
                  text: 'Get your business found with a custom domain.',
                },
                {
                  id: '0003',
                  image: <Image width={60} height={60} />,
                  title: 'Accept Online Payment',
                  text:
                    'Let your customers and clients pay you online at checkout.',
                },
              ]}
            />
          ),
        },
      },
    ],
  },
  {
    describe: 'horizontalSize',
    its: horizontalSizes.map(horizontalSize => ({
      it: horizontalSize,
      props: { horizontalSize },
    })),
  },
  {
    describe: 'verticalSize',
    its: verticalSizes.map(verticalSize => ({
      it: verticalSize,
      props: { verticalSize },
    })),
  },
  {
    describe: 'removeImageHorizontalPadding',
    its: [
      {
        it: 'with removeImageHorizontalPadding',
        props: {
          removeImageHorizontalPadding: true,
        },
      },
      {
        it: 'without removeImageHorizontalPadding',
        props: {
          removeImageHorizontalPadding: false,
        },
      },
    ],
  },
  {
    describe: 'removeImageVerticalPadding',
    its: [
      {
        it: 'with removeImageVerticalPadding',
        props: {
          removeImageVerticalPadding: true,
        },
      },
      {
        it: 'without removeImageVerticalPadding',
        props: {
          removeImageVerticalPadding: false,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageLayout.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <MarketingPageLayout {...commonProps} {...props} />);
  });
});
