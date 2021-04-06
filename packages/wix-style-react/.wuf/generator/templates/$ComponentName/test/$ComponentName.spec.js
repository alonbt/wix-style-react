import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import <%= ComponentName %> from '../<%= ComponentName %>';
import { <%= componentName %>PrivateDriverFactory } from './<%= ComponentName %>.private.uni.driver';

describe(<%= ComponentName %>.displayName, () => {
  const render = createRendererWithUniDriver(
    <%= componentName %>PrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<<%= ComponentName %> />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<<%= ComponentName %> />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<<%= ComponentName %> buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
