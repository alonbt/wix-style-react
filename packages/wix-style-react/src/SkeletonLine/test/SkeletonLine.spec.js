import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SkeletonLine from '../SkeletonLine';
import { skeletonLinePrivateDriverFactory } from './SkeletonLine.private.uni.driver';

import { SkeletonGroupContext } from '../../SkeletonGroup';

import { DEFAULT_WIDTH } from '../constants';

describe(SkeletonLine.displayName, () => {
  const render = createRendererWithUniDriver(skeletonLinePrivateDriverFactory);

  afterEach(cleanup);

  it('should have default size', async () => {
    const { driver } = render(<SkeletonLine />);

    expect(await driver.getWidth()).toBe(DEFAULT_WIDTH);
  });

  it('should have custom size', async () => {
    const { driver } = render(<SkeletonLine width={'80px'} />);

    expect(await driver.getWidth()).toBe('80px');
  });

  it('should have default light skin', async () => {
    const { driver } = render(<SkeletonLine />);

    expect(await driver.getSkin()).toBe('light');
  });
});
