import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import HorizontalTimeline from '../HorizontalTimeline';
import { horizontalTimelinePrivateDriverFactory } from './HorizontalTimeline.private.uni.driver';

describe(HorizontalTimeline.displayName, () => {
  const render = createRendererWithUniDriver(
    horizontalTimelinePrivateDriverFactory,
  );
  const items = [
    {
      label: 'active-icon',
      skin: 'dark',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    {
      label: 'default-icon',
      skin: 'dark',
      icon: <HorizontalTimeline.DefaultIcon />,
    },
    {
      label: 'complete-icon',
      skin: 'dark',
      icon: <HorizontalTimeline.CompleteIcon />,
    },
    {
      label: 'destructive-icon',
      skin: 'dark',
      icon: <HorizontalTimeline.DestructiveIcon />,
    },
  ];

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<HorizontalTimeline items={items} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should be able to get label text', async () => {
    const { driver } = render(<HorizontalTimeline items={items} />);

    expect(await driver.getLabel(0)).toEqual(items[0].label);
  });
});
