import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Timeline from '../Timeline';
import { timelinePrivateDriverFactory } from './Timeline.private.uni.driver';

describe(Timeline.displayName, () => {
  const render = createRendererWithUniDriver(timelinePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Timeline items={[]} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render timeline with basic item', async () => {
    const items = [
      {
        label: 'timeline item number 1',
      },
    ];
    const { driver } = render(<Timeline items={items} />);
    expect(await driver.getLabelText(0)).toEqual(items[0].label);
  });

  it('should render the provided `label` node', async () => {
    const items = [
      {
        label: <div data-hook="label-node">timeline item number 1</div>,
      },
    ];
    const { driver } = render(<Timeline items={items} />);

    expect(
      !!(await driver.element()).querySelector('[data-hook="label-node"]'),
    ).toBe(true);
  });

  it('should render timeline with text suffix', async () => {
    const items = [
      {
        label: 'timeline item number 1',
        suffix: 'suffix text',
      },
    ];
    const { driver } = render(<Timeline items={items} />);
    expect(await driver.getSuffixText(0)).toEqual(items[0].suffix);
  });

  it('should render timeline with suffix element', async () => {
    const items = [
      {
        label: 'timeline item number 1',
        suffix: <div>suffix node</div>,
      },
    ];
    const { driver } = render(<Timeline items={items} />);
    expect(await driver.getSuffixElement(0).text()).toEqual('suffix node');
  });

  it('should render timeline with label action element', async () => {
    const items = [
      {
        label: 'timeline item number 1',
        labelAction: <div>label node</div>,
      },
    ];
    const { driver } = render(<Timeline items={items} />);
    expect(await driver.getLabelActionElement(0).text()).toEqual('label node');
  });

  it('should render timeline with custom prefix element', async () => {
    const items = [
      {
        label: 'timeline item number 1',
        customPrefix: <div>custom prefix node</div>,
      },
    ];
    const { driver } = render(<Timeline items={items} />);
    expect(await driver.getBulletIndicatorElement(0).text()).toEqual(
      'custom prefix node',
    );
  });
});
