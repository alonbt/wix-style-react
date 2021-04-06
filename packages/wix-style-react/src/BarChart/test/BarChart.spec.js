import React from 'react';

import { cleanup, createRendererWithUniDriver } from '../../../test/utils/unit';

import BarChart from '../BarChart';
import { barChartPrivateDriverFactory } from './BarChart.private.uni.driver';

describe('BarChart', () => {
  const render = createRendererWithUniDriver(barChartPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const items = [];
    const { driver } = render(<BarChart statistics={items} />);

    expect(await driver.exists()).toBe(true);
  });

  describe('one item', () => {
    let items;
    let driver;

    beforeEach(() => {
      items = [
        {
          value: 200,
          description: 'first description',
          descriptionInfo: 'first descriptionInfo',
        },
      ];
      driver = render(<BarChart items={items} />).driver;
    });

    it('should render ', async () => {
      expect(await driver.getItemsCount()).toBe(1);
    });

    it('should render value when there is no label', async () => {
      expect(await driver.getValue(0)).toBe('200');
    });

    it('should render value based on props', async () => {
      items = [{ value: 100 }];
      driver = render(<BarChart items={items} />).driver;

      expect(await driver.getValue(0)).toBe('100');
    });

    it('should render caption', async () => {
      items[0].label = 'myCaption';
      driver = render(<BarChart items={items} />).driver;

      expect(await driver.getValue(0)).toBe('myCaption');
    });

    it('should render short caption', async () => {
      items[0].label = 'My long caption';
      items[0].labelShort = 'caption';
      driver = render(<BarChart items={items} />).driver;

      expect(await driver.getValue(0)).toBe('My long caption');
      expect(await driver.getValueInShort(0)).toBe('caption');
    });

    it('should render description', async () => {
      expect(await driver.getDescription(0)).toBe('first description');
    });

    it('should render tooltip with additional info on hover', async () => {
      expect(await driver.getDescriptionInfo(0)).toBe('first descriptionInfo');
    });

    it('should call onDescriptionInfo shown', async () => {
      const onDescriptionInfoShown = jest.fn();

      driver = render(
        <BarChart
          items={items}
          onDescriptionInfoShown={onDescriptionInfoShown}
        />,
      ).driver;

      await driver.getDescriptionInfo(0);
      expect(onDescriptionInfoShown).toBeCalled();
    });
  });

  describe('multiple items', () => {
    let items;
    let driver;

    beforeEach(() => {
      items = [
        {
          value: 100,
          description: 'first description',
          descriptionInfo: 'first descriptionInfo',
        },
        {
          value: 200,
          label: '$200',
          description: 'first description',
          descriptionInfo: 'first descriptionInfo',
        },
        {
          value: 300,
          description: 'first description',
          descriptionInfo: 'first descriptionInfo',
        },
      ];
      driver = render(<BarChart items={items} />).driver;
    });

    it('should render 3 items', async () => {
      expect(await driver.getItemsCount()).toBe(3);
    });

    it('should sort items', async () => {
      expect(await driver.getValue(0)).toBe('300');
      expect(await driver.getValue(1)).toBe('$200');
      expect(await driver.getValue(2)).toBe('100');
    });
  });
});
