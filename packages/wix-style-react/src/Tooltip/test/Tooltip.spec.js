import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Tooltip from '../Tooltip';
import { tooltipPrivateDriverFactory } from './Tooltip.private.uni.driver';

import Button from '../../Button';
import { SIZES } from '../constants';

describe('Tooltip', () => {
  const render = createRendererWithUniDriver(tooltipPrivateDriverFactory);

  const children = <Button>content</Button>;

  const tooltip = (props = {}) => {
    return (
      <Tooltip enterDelay={0} content="string" children={children} {...props} />
    );
  };

  afterEach(() => {
    cleanup();
  });

  describe('`content` prop', () => {
    it('should render string inside tooltip element [when] string is given', async () => {
      const kiddo = 'string';
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.getTooltipText()).toBe('string');
    });
    it('should render string inside tooltip element [when] react element is given', async () => {
      const kiddo = <div>string</div>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.getTooltipText()).toBe('string');
    });
  });

  describe('`children` is disabled', () => {
    it('should not show tooltip on mouse enter [when] given react component', async () => {
      const kiddo = <Button disabled>Disabled</Button>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(false);
    });
    it('should not show tooltip on mouse enter [when] react element', async () => {
      const kiddo = <button disabled>Disabled</button>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(false);
    });
  });

  describe('`disabled` prop', () => {
    it('should show tooltip on mouse enter [when] not given && children is not disabled', async () => {
      const kiddo = <Button>Disabled</Button>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(true);
    });

    it('should not show tooltip on mouse enter [when] given true', async () => {
      const kiddo = <Button>Disabled</Button>;
      const { driver } = render(tooltip({ children: kiddo, disabled: true }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(false);
    });

    it('should not show tooltip on mouse enter [when] not given but children is disabled', async () => {
      const kiddo = <button disabled>Disabled</button>;
      const { driver } = render(tooltip({ children: kiddo }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(false);
    });

    it('should show tooltip on mouse enter [when] given false && children is disabled', async () => {
      const kiddo = <button disabled>Disabled</button>;
      const { driver } = render(tooltip({ children: kiddo, disabled: false }));
      await driver.mouseEnter();
      expect(await driver.tooltipExists()).toBe(true);
    });
  });

  describe('`size` prop', () => {
    describe('hasSize driver', () => {
      const sizes = Object.values(SIZES);

      it.each(sizes)(
        'should return true when tooltip has size %s',
        async size => {
          const props = {
            size,
          };

          const { driver } = await render(tooltip({ ...props }));

          expect(await driver.hasSize(size)).toEqual(true);
        },
      );

      it('should return false when tooltip does not have the correct size', async () => {
        const props = {
          size: SIZES.medium,
        };

        const { driver } = await render(tooltip({ ...props }));

        expect(await driver.hasSize(SIZES.small)).toEqual(false);
      });
    });
  });
});
