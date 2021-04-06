import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonRectangle from '../SkeletonRectangle';
import { skeletonRectanglePrivateDriverFactory } from './SkeletonRectangle.private.uni.driver';

import { SkeletonGroupContext } from '../../SkeletonGroup';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../constants';

describe(SkeletonRectangle.displayName, () => {
  const render = createRendererWithUniDriver(
    skeletonRectanglePrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should have default size', async () => {
    const { driver } = render(<SkeletonRectangle />);

    expect(await driver.getWidth()).toBe(DEFAULT_WIDTH);
    expect(await driver.getHeight()).toBe(DEFAULT_HEIGHT);
  });

  it('should have custom size', async () => {
    const { driver } = render(
      <SkeletonRectangle width={'80px'} height={'60px'} />,
    );

    expect(await driver.getWidth()).toBe('80px');
    expect(await driver.getHeight()).toBe('60px');
  });

  it('should have default light skin', async () => {
    const { driver } = render(<SkeletonRectangle />);

    expect(await driver.getSkin()).toBe('light');
  });
});
