import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';

import CustomModalLayout from '../CustomModalLayout';
import { customModalLayoutPrivateDriverFactory } from './CustomModalLayout.private.uni.driver';
import { customModalLayoutDriverFactory } from '../CustomModalLayout.legacy.driver';

describe('CustomModalLayout', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(customModalLayoutDriverFactory));
  });

  describe('[async]', () => {
    runTests(
      createRendererWithUniDriver(customModalLayoutPrivateDriverFactory),
    );
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should render the Header component when header-related props are passed', async () => {
      const title = 'some title';
      const { driver } = render(<CustomModalLayout title={title} />);
      expect(await driver.getTitleText()).toBe(title);
    });

    it('should render the Content component with provided children', async () => {
      const children = <div data-hook={'children'} />;
      const { driver } = render(
        <CustomModalLayout>{children}</CustomModalLayout>,
      );
      expect(await driver.childExists('children')).toBe(true);
    });

    it('should render the Footer component when footer-related props are passed', async () => {
      const pButtonText = 'pButtonText';
      const { driver } = render(
        <CustomModalLayout primaryButtonText={pButtonText} />,
      );
      const pButtonDriver = await driver.getPrimaryButtonDriver();
      expect(await pButtonDriver.exists()).toBe(true);
    });

    it('should render the Footnote component when footnote-related props are passed', async () => {
      const footnoteNode = <div data-hook={'footnote'} />;
      const { driver } = render(<CustomModalLayout footnote={footnoteNode} />);
      expect(await driver.childExists('footnote')).toBe(true);
    });
  }
});
