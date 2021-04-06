import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { analyticsSummaryCardPrivateDriverFactory } from './AnalyticsSummaryCard.private.uni.driver';
import AnalyticsSummaryCard from '../AnalyticsSummaryCard';

const getAnalyticsComponent = props => {
  return (
    <AnalyticsSummaryCard
      chartColorHex="#3899ec"
      chartData={[
        {
          label: new Date('2020-09-03T21:00:00.000Z'),
          value: 3,
        },
        {
          label: new Date('2020-09-04T21:00:00.000Z'),
          value: 17,
        },
        {
          label: new Date('2020-09-05T21:00:00.000Z'),
          value: 18,
        },
      ]}
      chartWidth={169}
      ctaButton={<button>button</button>}
      footer={<div> This is footer</div>}
      trend={12}
      title="Sessions"
      titleTooltip="tooltip"
      value="1,9K"
      valueTooltip="1,943"
      {...props}
    />
  );
};

describe(AnalyticsSummaryCard.displayName, () => {
  const render = createRendererWithUniDriver(
    analyticsSummaryCardPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(getAnalyticsComponent());

    expect(await driver.exists()).toBe(true);
  });

  it('should click', async () => {
    const onClick = jest.fn();
    const { driver } = render(getAnalyticsComponent({ onClick }));

    await driver.click();
    expect(onClick).toBeCalled();
  });

  it('should click CTA', async () => {
    const onCTAClick = jest.fn();
    const { driver } = render(getAnalyticsComponent({ onCTAClick }));

    await driver.clickCTA();
    expect(onCTAClick).toBeCalled();
  });
});
