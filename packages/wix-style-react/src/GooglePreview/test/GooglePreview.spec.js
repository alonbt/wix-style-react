import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import GooglePreview from '../GooglePreview';
import { googlePreviewPrivateDriverFactory } from './GooglePreview.private.uni.driver';

describe('GooglePreview', () => {
  const createDriver = createUniDriverFactory(
    googlePreviewPrivateDriverFactory,
  );

  it('should render the appropriate props', async () => {
    const driver = createDriver(
      <GooglePreview
        title="site name"
        previewUrl="www.site-name.com"
        description="site description"
      />,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.getTitle()).toEqual('site name');
    expect(await driver.getPreviewUrl()).toEqual('www.site-name.com');
    expect(await driver.getDescription()).toEqual('site description');
  });
});
