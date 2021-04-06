import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayout from '../MarketingPageLayout';
import { marketingPageLayoutPrivateDriverFactory } from './MarketingPageLayout.private.uni.driver';

describe(MarketingPageLayout.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageLayoutPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<MarketingPageLayout />);

    expect(await driver.exists()).toBe(true);
  });

  describe('content', () => {
    it('should display content', async () => {
      const { driver } = render(
        <MarketingPageLayout content={<div>content</div>} />,
      );

      expect(await driver.hasContent()).toBe(true);
    });

    it('should not display content', async () => {
      const { driver } = render(<MarketingPageLayout />);

      expect(await driver.hasContent()).toBe(false);
    });
  });

  describe('image', () => {
    it('should display image', async () => {
      const { driver } = render(<MarketingPageLayout image={<img />} />);

      expect(await driver.hasImage()).toBe(true);
    });

    it('should not display image', async () => {
      const { driver } = render(<MarketingPageLayout />);

      expect(await driver.hasImage()).toBe(false);
    });
  });

  describe('footer', () => {
    it('should display footer', async () => {
      const { driver } = render(
        <MarketingPageLayout footer={<div>footer</div>} />,
      );

      expect(await driver.hasFooter()).toBe(true);
    });

    it('should not display footer', async () => {
      const { driver } = render(<MarketingPageLayout />);

      expect(await driver.hasFooter()).toBe(false);
    });
  });
});
