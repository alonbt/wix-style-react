import React from 'react';

import tabsDriverFactory from '../Tabs.driver';
import Tabs from '../Tabs';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';
import { tabsUniDriverFactory } from '../Tabs.uni.driver';
import tabsTypes from '../core/constants/tab-types';

describe('Tabs component', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(tabsDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(tabsUniDriverFactory));
  });

  function runTests(render) {
    function createComponent(props) {
      return render(<Tabs {...props} />).driver;
    }

    let items;

    beforeEach(() => {
      items = [
        { id: 0, title: 'Tab 0' },
        { id: 1, title: 'Tab 1', dataHook: 'tab-data-hook' },
        { id: 2, title: 'Tab 2' },
      ];
    });

    afterEach(cleanup);

    it('should render tabs with correct titles', async () => {
      const driver = createComponent({ items });
      const expected = items.map(item => item.title);

      expect(await driver.getTitles()).toEqual(expected);
    });

    it('should call onClick when tab is clicked', async () => {
      const onClick = jest.fn();
      const driver = createComponent({ items, onClick });

      await driver.clickTabAt(1);
      expect(onClick).toHaveBeenCalledWith(items[1]);
    });

    it('should mark tab as active', async () => {
      const driver = createComponent({ items, activeId: 2 });
      expect(await driver.getActiveTabIndex()).toBe(2);
    });

    it('should have data-hook', async () => {
      const driver = createComponent({ items, activeId: 2 });
      expect(await driver.getDataHook(1)).toBe('tab-data-hook');
    });

    it('should change active tab', async () => {
      const { driver, rerender } = render(<Tabs items={items} activeId={2} />);
      rerender(<Tabs items={items} activeId={1} />);
      expect(await driver.getActiveTabIndex()).toBe(1);
    });

    it('should have default type when not specified', async () => {
      const driver = createComponent({ items });
      expect(await driver.isDefaultType()).toBe(true);
    });

    it.each(tabsTypes)('should get %s style', async type => {
      const driver = createComponent({ items, type });
      expect(await driver.getItemsContainerType()).toEqual(type);
    });

    it('should set tab width, when selected type is Uniform Side', async () => {
      const width = '100px';
      const driver = createComponent({ items, width, type: 'uniformSide' });
      expect((await driver.getItemsWidth()).size).toBe(1);
      expect((await driver.getItemsWidth()).has(width)).toBe(true);
    });

    it('should show side content if defined via props', async () => {
      const sideContent = (
        <div>
          Click <a href="blah">here</a>!
        </div>
      );
      const driver = createComponent({ items, sideContent });

      expect(await driver.getSideContent()).toBeTruthy();
    });

    it('does not show side content if it is not passed via props', async () => {
      const driver = createComponent({ items });
      expect(await driver.getSideContent()).toBe(null);
    });

    it('should have divider by default', async () => {
      const driver = createComponent({ items });

      expect(await driver.hasDivider()).toBe(true);
    });

    it('should not have divider if props.divider is falsy', async () => {
      const driver = createComponent({ items, hasDivider: false });

      expect(await driver.hasDivider()).toBe(false);
    });

    it('should have divider if props.divider is truthy', async () => {
      const driver = createComponent({ items, hasDivider: true });

      expect(await driver.hasDivider()).toBe(true);
    });
  }
});
