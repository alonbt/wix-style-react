import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SparklineChart from '../SparklineChart';
import { sparklineChartPrivateDriverFactory } from './SparklineChart.private.uni.driver';

const data = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
];

describe(SparklineChart.displayName, () => {
  const render = createRendererWithUniDriver(
    sparklineChartPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<SparklineChart data={data} />);

    expect(await driver.exists()).toBe(true);
  });
});
