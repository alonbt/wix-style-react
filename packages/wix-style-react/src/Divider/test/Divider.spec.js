import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Divider from '../Divider';
import { dividerPrivateDriverFactory } from './Divider.private.uni.driver';

describe('Divider', () => {
  const render = createRendererWithUniDriver(dividerPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Divider />);

    expect(await driver.exists()).toBe(true);
  });
});
