import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AreaChart from '../AreaChart';
import { areaChartPrivateDriverFactory } from './AreaChart.private.uni.driver';

describe(AreaChart.displayName, () => {
  const render = createRendererWithUniDriver(areaChartPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <AreaChart
        data={[
          {
            value: 5698,
            label: '12/9',
          },
          {
            value: 1170,
            label: '13/9',
          },
        ]}
      />,
    );

    expect(await driver.exists()).toBe(true);
  });
});
