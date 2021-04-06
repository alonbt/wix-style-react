import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import StackedBarChart from '../StackedBarChart';
import { stackedBarChartPrivateDriverFactory } from './StackedBarChart.private.uni.driver';

describe(StackedBarChart.displayName, () => {
  const render = createRendererWithUniDriver(
    stackedBarChartPrivateDriverFactory,
  );

  const data = [
    { label: 'Jan 20', values: [500, 200] },
    { label: 'Feb 20', values: [200, 700] },
    { label: 'Mar 20', values: [0, 400] },
    { label: 'Apr 20', values: [900, 100] },
    { label: 'Mai 20', values: [300, 300] },
    { label: 'Jun 20', values: [400, 300] },
    { label: 'Jul 20', values: [100, 100] },
    { label: 'Aug 20', values: [0, 0] },
    { label: 'Sep 20', values: [800, 0] },
    { label: 'Oct 20', values: [600, 300] },
    { label: 'Nov 20', values: [200, 300] },
    { label: 'Dec 20', values: [300, 200] },
  ];

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<StackedBarChart data={data} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render tooltips', async () => {
    const template = 'tooltip';
    const observer = jest.fn();
    const tooltipTemplate = item => {
      observer(item);
      return template;
    };
    const { driver } = render(
      <StackedBarChart data={data} tooltipTemplate={tooltipTemplate} />,
    );

    expect(await driver.getTooltipContentAt(4)).toBe(template);
    expect(observer).toHaveBeenCalledTimes(data.length);
  });
});
