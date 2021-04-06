import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Image from '../Image';
import { imagePrivateDriverFactory } from './Image.private.uni.driver';

describe('Image', () => {
  const render = createRendererWithUniDriver(imagePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Image />);
    expect(await driver.exists()).toBe(true);
  });
});
