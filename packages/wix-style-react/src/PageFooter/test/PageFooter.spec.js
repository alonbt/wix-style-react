import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import PageFooter from '../PageFooter';
import { pageFooterPrivateDriverFactory } from './PageFooter.private.uni.driver';

describe(PageFooter.displayName, () => {
  const render = createRendererWithUniDriver(pageFooterPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<PageFooter />);

    expect(await driver.exists()).toBe(true);
  });
});
