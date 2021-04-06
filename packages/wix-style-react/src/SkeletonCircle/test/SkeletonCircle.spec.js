import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonCircle from '../SkeletonCircle';
import { skeletonCirclePrivateDriverFactory } from './SkeletonCircle.private.uni.driver';

import { SkeletonGroupContext } from '../../SkeletonGroup';

import { DEFAULT_DIAMETER } from '../constants';

describe(SkeletonCircle.displayName, () => {
  const render = createRendererWithUniDriver(
    skeletonCirclePrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should have default size', async () => {
    const { driver } = render(<SkeletonCircle />);

    expect(await driver.getDiameter()).toBe(DEFAULT_DIAMETER);
  });

  it('should have custom size', async () => {
    const { driver } = render(<SkeletonCircle diameter={'80px'} />);

    expect(await driver.getDiameter()).toBe('80px');
  });

  it('should have default light skin', async () => {
    const { driver } = render(<SkeletonCircle />);

    expect(await driver.getSkin()).toBe('light');
  });
});
