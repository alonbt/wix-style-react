import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';

import Skeleton from './Skeleton';
import skeletonDriverFactory from './Skeleton.driver';
import { skeletonUniDriverFactory } from './Skeleton.uni.driver';

const content = [
  { type: 'line', size: 'small' },
  { type: 'line', size: 'large' },
  { type: 'line', size: 'medium' },
  { type: 'line', size: 'full' },
];

describe('[sync]', () => {
  runTests(createRendererWithDriver(skeletonDriverFactory));
});

describe('[async]', () => {
  runTests(createRendererWithUniDriver(skeletonUniDriverFactory));
});

function runTests(render) {
  afterEach(cleanup);

  describe('Skeleton', () => {
    describe('with default props', () => {
      it(`should have ${content.length} placeholder lines`, async () => {
        const { driver } = render(<Skeleton {...{ content }} />);
        expect(await driver.getNumLines()).toBe(content.length);
      });

      it('should have medium spacing by default', async () => {
        const { driver } = render(<Skeleton {...{ content }} />);
        expect(await driver.hasSpacing('medium')).toBe(true);
      });

      it('should have lines with expected sizes', async () => {
        const { driver } = render(<Skeleton {...{ content }} />);
        expect(await driver.hasSizes(content.map(({ size }) => size))).toBe(
          true,
        );
      });
    });

    describe('`alignment` prop', () => {
      it('should align to middle', async () => {
        const { driver } = render(
          <Skeleton {...{ content, alignment: 'middle' }} />,
        );
        expect(await driver.hasAlignment('middle')).toBe(true);
      });
    });
  });
}
