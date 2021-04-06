import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FunnelChart from '../FunnelChart';
import { funnelChartPrivateDriverFactory } from './FunnelChart.private.uni.driver';

describe(FunnelChart.displayName, () => {
  const render = createRendererWithUniDriver(funnelChartPrivateDriverFactory);
  const dataExample = [
    { value: 1000, label: 'visits' },
    { value: 800, label: 'views' },
    { value: 400, label: 'cart' },
  ];

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const data = [
      { value: 1000, label: 'visits' },
      { value: 800, label: 'views' },
    ];
    const { driver } = render(<FunnelChart data={data} />);

    expect(await driver.exists()).toBe(true);
  });

  describe('multiple items', () => {
    it('data should contains atleast 2 items', async () => {
      const data = [{ value: 1000, label: 'visits' }];
      const driver = render(<FunnelChart data={data} />).driver;
      expect(await driver.exists()).toBe(false);
    });

    it('should render 3 items with correct values & labels', async () => {
      const driver = render(<FunnelChart data={dataExample} />).driver;
      expect(await driver.exists()).toBe(true);
      expect(await driver.getItemsCount()).toBe(3);
      expect(await driver.getValueAt(0)).toBe('1000');
      expect(await driver.getLabelAt(0)).toBe('visits');
      expect(await driver.getValueAt(1)).toBe('800');
      expect(await driver.getLabelAt(1)).toBe('views');
      expect(await driver.getValueAt(2)).toBe('400');
      expect(await driver.getLabelAt(2)).toBe('cart');
    });

    it('should render 3 items with display values and values', async () => {
      const dataValues = [
        { value: 2000, label: 'visits', displayValue: '2K' },
        { value: 300000, label: 'views', displayValue: '300K' },
        { value: 150, label: 'cart' },
      ];
      const driver = render(<FunnelChart data={dataValues} />).driver;
      expect(await driver.exists()).toBe(true);
      expect(await driver.getItemsCount()).toBe(3);
      expect(await driver.getValueAt(0)).toBe('2K');
      expect(await driver.getLabelAt(0)).toBe('visits');
      expect(await driver.getValueAt(1)).toBe('300K');
      expect(await driver.getLabelAt(1)).toBe('views');
      expect(await driver.getValueAt(2)).toBe('150');
      expect(await driver.getLabelAt(2)).toBe('cart');
    });

    it('should not render badges', async () => {
      const driver = render(
        <FunnelChart data={dataExample} hideDifferenceBadge />,
      ).driver;
      expect(await driver.exists()).toBe(true);
      expect(await driver.getDifferenceFromDataAt(0)).toBe(null);
    });

    it('should calculate percentage badge', async () => {
      const driver = render(<FunnelChart data={dataExample} />).driver;
      expect(await driver.exists()).toBe(true);
      expect(await driver.getDifferenceFromDataAt(0)).toBe('80%');
      expect(await driver.getDifferenceFromDataAt(1)).toBe('50%');
    });

    it('should not render badge after the last item', async () => {
      const driver = render(<FunnelChart data={dataExample} />).driver;
      expect(await driver.exists()).toBe(true);
      expect(await driver.getDifferenceFromDataAt(2)).toBe(null);
    });

    it('should render badges tooltips', async () => {
      const driver = render(
        <FunnelChart
          data={dataExample}
          differenceBadgeTooltipContent={({ currentIndex, difference }) =>
            `${difference} from ${dataExample[currentIndex].label} moved to ${
              dataExample[currentIndex + 1].label
            }`
          }
        />,
      ).driver;
      expect(await driver.exists()).toBe(true);
      expect(await driver.getDifferenceTooltipFromDataAt(0)).toBe(
        '80% from visits moved to views',
      );
    });
  });
});
