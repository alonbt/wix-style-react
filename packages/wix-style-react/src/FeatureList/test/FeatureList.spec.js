import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FeatureList from '../FeatureList';
import { featureListPrivateDriverFactory } from './FeatureList.private.uni.driver';

describe(FeatureList.displayName, () => {
  const render = createRendererWithUniDriver(featureListPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<FeatureList />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render 3 features', async () => {
    const { driver } = render(
      <FeatureList
        features={[
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
        ]}
      />,
    );

    expect(await driver.getNumberOfFeatures()).toEqual(3);
  });

  describe('Feature', () => {
    describe('title', () => {
      it('should display title', async () => {
        const { driver } = render(
          <FeatureList
            features={[
              {
                image: <img width={60} height={60} />,
                title: 'Remove Wix Ads',
                text:
                  "Enjoy a website that's completely your own brand by removing Wix ads.",
              },
              {
                image: <img width={60} height={60} />,
                title: 'Accept Online Payment',
                text:
                  'Let your customers and clients pay you online at checkout.',
              },
            ]}
          />,
        );

        expect(await driver.hasFeatureTitle(1)).toEqual(true);
        expect(await driver.getFeatureTitle(1)).toEqual(
          'Accept Online Payment',
        );
      });

      it('should not display title', async () => {
        const { driver } = render(
          <FeatureList
            features={[
              {
                image: <img width={60} height={60} />,
                text:
                  "Enjoy a website that's completely your own brand by removing Wix ads.",
              },
            ]}
          />,
        );

        expect(await driver.hasFeatureTitle(0)).toEqual(false);
      });
    });

    describe('text', () => {
      it('should display text', async () => {
        const { driver } = render(
          <FeatureList
            features={[
              {
                image: <img width={60} height={60} />,
                title: 'Remove Wix Ads',
                text:
                  "Enjoy a website that's completely your own brand by removing Wix ads.",
              },
              {
                image: <img width={60} height={60} />,
                title: 'Accept Online Payment',
                text:
                  'Let your customers and clients pay you online at checkout.',
              },
            ]}
          />,
        );

        expect(await driver.hasFeatureText(1)).toEqual(true);
        expect(await driver.getFeatureText(1)).toEqual(
          'Let your customers and clients pay you online at checkout.',
        );
      });

      it('should not display text', async () => {
        const { driver } = render(
          <FeatureList
            features={[
              {
                image: <img width={60} height={60} />,
                title: 'Remove Wix Ads',
              },
            ]}
          />,
        );

        expect(await driver.hasFeatureText(0)).toEqual(false);
      });
    });

    describe('image', () => {
      it('should display image', async () => {
        const imgSrc =
          'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_300,h_200/c78d05b79ede429fb77c9d8ec4443b93.jpg';

        const { driver } = render(
          <FeatureList
            features={[
              {
                image: <img data-hook="feature-image-node" src={imgSrc} />,
                title: 'Remove Wix Ads',
                text:
                  "Enjoy a website that's completely your own brand by removing Wix ads.",
              },
            ]}
          />,
        );

        expect(
          await driver.hasFeatureImage(0, '[data-hook="feature-image-node"]'),
        ).toEqual(true);
      });

      it('should not display image', async () => {
        const { driver } = render(
          <FeatureList
            features={[
              {
                title: 'Remove Wix Ads',
                text:
                  "Enjoy a website that's completely your own brand by removing Wix ads.",
              },
            ]}
          />,
        );

        expect(await driver.hasFeatureImage(0)).toEqual(false);
      });
    });
  });
});
