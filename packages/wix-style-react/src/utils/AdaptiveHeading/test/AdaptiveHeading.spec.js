import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/unit';

import AdaptiveHeading from '../AdaptiveHeading';
import { adaptiveHeadingDriverFactory } from '../AdaptiveHeading.uni.driver';

describe('AdaptiveHeading', () => {
  const render = createRendererWithUniDriver(adaptiveHeadingDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <AdaptiveHeading text="text" textInShort="short" />,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should render heading when there is no short version', async () => {
    const { driver } = render(<AdaptiveHeading text="text" />);

    expect(await driver.getText()).toBe('text');
    expect(await driver.getShortText()).toBeNull();
  });

  it('should render long and short versions', async () => {
    const { driver } = render(
      <AdaptiveHeading text="long" textInShort="short" />,
    );

    expect(await driver.getText()).toBe('long');
    expect(await driver.getShortText()).toBe('short');
  });

  it('should render h1 by default', async () => {
    const { driver } = render(
      <AdaptiveHeading text="long" textInShort="short" />,
    );

    expect(await driver.getAppearance()).toBe('H1');
  });

  it('should render h2', async () => {
    const { driver } = render(
      <AdaptiveHeading text="long" textInShort="short" appearance="H2" />,
    );

    expect(await driver.getAppearance()).toBe('H2');
  });

  it('should render h6', async () => {
    const { driver } = render(
      <AdaptiveHeading text="long" textInShort="short" appearance="H6" />,
    );

    expect(await driver.getAppearance()).toBe('H6');
  });

  it('should render a span element when appearance is "tiny"', async () => {
    const { driver } = render(
      <AdaptiveHeading text="long" textInShort="short" appearance="tiny" />,
    );

    expect(await driver.getAppearance()).toBe('SPAN');
  });
});
