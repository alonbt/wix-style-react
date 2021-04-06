import React from 'react';
import { storiesOf } from '@storybook/react';
import FeatureList from '../FeatureList';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const commonProps = {
  features: [
    {
      image: <img width={60} height={60} />,
      title: 'Remove Wix Ads',
      text:
        "Enjoy a website that's completely your own brand by removing Wix ads.",
    },
    {
      image: <img width={60} height={60} />,
      title: 'Connect a Custom Domain',
      text: 'Get your business found with a custom domain.',
    },
    {
      image: <img width={60} height={60} />,
      title: 'Accept Online Payment',
      text: 'Let your customers and clients pay you online at checkout.',
    },
  ],
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
        it: 'no title',
        props: {
          features: [
            {
              image: <img width={60} height={60} />,
              text:
                "Enjoy a website that's completely your own brand by removing Wix ads.",
            },
            {
              image: <img width={60} height={60} />,
              text: 'Get your business found with a custom domain.',
            },
            {
              image: <img width={60} height={60} />,
              text:
                'Let your customers and clients pay you online at checkout.',
            },
          ],
        },
      },
      {
        it: 'no text',
        props: {
          features: [
            {
              image: <img width={60} height={60} />,
              title: 'Remove Wix Ads',
            },
            {
              image: <img width={60} height={60} />,
              title: 'Connect a Custom Domain',
            },
            {
              image: <img width={60} height={60} />,
              title: 'Accept Online Payment',
            },
          ],
        },
      },
      {
        it: 'no image',
        props: {
          features: [
            {
              title: 'Remove Wix Ads',
              text:
                "Enjoy a website that's completely your own brand by removing Wix ads.",
            },
            {
              title: 'Connect a Custom Domain',
              text: 'Get your business found with a custom domain.',
            },
            {
              title: 'Accept Online Payment',
              text:
                'Let your customers and clients pay you online at checkout.',
            },
          ],
        },
      },
    ],
  },
];

const rtlTests = [
  {
    describe: 'rtl',
    its: [
      {
        it: 'rtl',
        props: {},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FeatureList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <FeatureList {...commonProps} {...props} />);
  });
});

rtlTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${FeatureList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <RTLWrapper rtl>
        <FeatureList {...commonProps} {...props} />
      </RTLWrapper>
    ));
  });
});
