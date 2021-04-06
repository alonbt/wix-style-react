import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AnalyticsLayout from '../AnalyticsLayout';
import { analyticsLayoutPrivateDriverFactory } from './AnalyticsLayout.private.uni.driver';

describe(AnalyticsLayout.displayName, () => {
  const render = createRendererWithUniDriver(
    analyticsLayoutPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(
      <AnalyticsLayout items={[1, 2, 3, 4, 5, 6, 7, 8]}>
        {(item, index) => {
          return (
            <AnalyticsLayout.Cell key={index}>
              <div style={{ padding: 20 }}>item {item}</div>
            </AnalyticsLayout.Cell>
          );
        }}
      </AnalyticsLayout>,
    );

    expect(await driver.exists()).toBe(true);
  });
});
