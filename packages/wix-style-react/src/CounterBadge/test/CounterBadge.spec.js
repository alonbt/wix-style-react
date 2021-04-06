import React from 'react';
import HeartFilled from 'wix-ui-icons-common/HeartFilled';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { SIZES } from '../constants';

import CounterBadge from '../CounterBadge';
import { counterBadgePrivateDriverFactory } from './CounterBadge.private.uni.driver';

describe('CounterBadge', () => {
  const render = createRendererWithUniDriver(counterBadgePrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<CounterBadge />);

    expect(await driver.exists()).toBe(true);
  });

  describe('content', () => {
    it('should match - number', async () => {
      const content = 0;
      const { driver } = render(<CounterBadge children={content} />);

      expect(Number(await driver.getContent())).toBe(content);
    });

    it('should match - string', async () => {
      const content = 'hello';
      const { driver } = render(<CounterBadge children={content} />);

      expect(await driver.getContent()).toBe(content);
    });

    it('should match - node', async () => {
      const contentDataHook = 'content-data-hook';
      const content = <HeartFilled data-hook={contentDataHook} />;
      const { driver } = render(<CounterBadge children={content} />);

      expect(await driver.getContent()).toContain(contentDataHook);
    });
  });

  describe('size', () => {
    it.each(Object.values(SIZES))(
      'should render %s counter badge',
      async size => {
        const contentDataHook = 'content-data-hook';
        const content = <HeartFilled data-hook={contentDataHook} />;
        const { driver } = render(
          <CounterBadge children={content} size={size} />,
        );

        expect(await driver.getContent()).toContain(contentDataHook);
      },
    );
  });
});
