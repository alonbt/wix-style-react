import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/unit';

import FluidColumns from '../FluidColumns';
import { fluidColumnsDriverFactory } from '../FluidColumns.uni.driver';

describe(FluidColumns.displayName, () => {
  const render = createRendererWithUniDriver(fluidColumnsDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <FluidColumns>
        <div>item1</div>
      </FluidColumns>,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should render 3 items', async () => {
    const { driver } = render(
      <FluidColumns>
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </FluidColumns>,
    );

    expect(await driver.getNumberOfItems()).toEqual(3);
  });
});
