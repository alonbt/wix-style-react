import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TrendIndicator from '../TrendIndicator';
import { trendIndicatorPrivateDriverFactory } from './TrendIndicator.private.uni.driver';

describe(TrendIndicator.displayName, () => {
  const render = createRendererWithUniDriver(
    trendIndicatorPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<TrendIndicator value={10} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should not render when value NaN', async () => {
    const { driver } = render(<TrendIndicator value={NaN} />);

    expect(await driver.exists()).toBe(false);
  });

  it('should render positive value', async () => {
    const { driver } = render(<TrendIndicator value={10} />);

    expect(await driver.getTrendValue()).toEqual(10);
    expect(await driver.isTrendIndicatorIconUp()).toEqual(true);
    expect(await driver.isTrendIndicatorIconDown()).toEqual(false);
  });

  it('should render negative value', async () => {
    const { driver } = render(<TrendIndicator value={-23} />);

    expect(await driver.getTrendValue()).toEqual(23);
    expect(await driver.isTrendIndicatorIconUp()).toEqual(false);
    expect(await driver.isTrendIndicatorIconDown()).toEqual(true);
  });

  it('should render 0 as neutral value', async () => {
    const { driver } = render(<TrendIndicator value={0} />);

    expect(await driver.getTrendValue()).toEqual(0);
    expect(await driver.hasTrendIndicatorIcon()).toEqual(false);
  });

  it('should render inverted positive value', async () => {
    const { driver } = render(<TrendIndicator value={10} inverted />);

    expect(await driver.getTrendValue()).toEqual(10);
    expect(await driver.isTrendIndicatorIconUp()).toEqual(true);
    expect(await driver.isTrendIndicatorIconDown()).toEqual(false);
  });

  it('should render inverted negative value', async () => {
    const { driver } = render(<TrendIndicator value={-23} inverted />);

    expect(await driver.getTrendValue()).toEqual(23);
    expect(await driver.isTrendIndicatorIconUp()).toEqual(false);
    expect(await driver.isTrendIndicatorIconDown()).toEqual(true);
  });
});
