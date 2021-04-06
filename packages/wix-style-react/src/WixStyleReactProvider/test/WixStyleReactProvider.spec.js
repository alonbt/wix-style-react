import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { featuresMap } from '../constants';
import WixStyleReactProvider from '../WixStyleReactProvider';
import { wixStyleReactProviderPrivateDriverFactory } from './WixStyleReactProvider.private.uni.driver';

describe(WixStyleReactProvider.displayName, () => {
  const render = createRendererWithUniDriver(
    wixStyleReactProviderPrivateDriverFactory,
  );

  afterEach(cleanup);

  describe('Layout and Spacing', () => {
    it('should return true if feature is active', async () => {
      const { driver } = render(
        <WixStyleReactProvider
          features={{ reducedSpacingAndImprovedLayout: true }}
        />,
      );
      expect(
        await driver.isFeatureActive(
          featuresMap.reducedSpacingAndImprovedLayout,
        ),
      ).toBe(true);
    });

    it('should return false if feature is inactive', async () => {
      const { driver } = render(
        <WixStyleReactProvider
          features={{ reducedSpacingAndImprovedLayout: false }}
        />,
      );
      expect(
        await driver.isFeatureActive(
          featuresMap.reducedSpacingAndImprovedLayout,
        ),
      ).toBe(false);
    });
  });

  it('should have className', async () => {
    const className = 'some-class-name';
    const { driver } = render(<WixStyleReactProvider className={className} />);
    expect((await driver.element()).className).toContain(className);
  });

  it.each(['span', 'div'])('should be a %p element', async element => {
    const { driver } = render(<WixStyleReactProvider as={element} />);
    expect((await driver.element()).tagName).toBe(element.toUpperCase());
  });
});
