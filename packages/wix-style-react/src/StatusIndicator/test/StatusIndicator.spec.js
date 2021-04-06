import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import StatusIndicator from '../StatusIndicator';
import { statusIndicatorPrivateDriverFactory } from './StatusIndicator.private.uni.driver';

describe('StatusIndicator', () => {
  const render = createRendererWithUniDriver(
    statusIndicatorPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<StatusIndicator />);

    expect(await driver.exists()).toBe(true);
  });

  it('is error', async () => {
    const status = 'error';
    const { driver } = render(<StatusIndicator status={status} />);

    expect(await driver.getStatus()).toBe(status);
  });

  it('is warning', async () => {
    const status = 'warning';
    const { driver } = render(<StatusIndicator status={status} />);

    expect(await driver.getStatus()).toBe(status);
  });

  it('is loading', async () => {
    const status = 'loading';
    const { driver } = render(<StatusIndicator status={status} />);

    expect(await driver.getStatus()).toBe(status);
  });

  it('with no message', async () => {
    const { driver } = render(<StatusIndicator />);

    expect(await driver.hasMessage()).toBe(false);
  });

  it('with message', async () => {
    const message = 'Hello World';
    const { driver } = render(<StatusIndicator message={message} />);

    expect(await driver.hasMessage()).toBe(true);
    expect(await driver.getMessage()).toBe(message);
  });
});
