import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AddressInputItem from '../AddressInputItem';
import { addressInputItemPrivateDriverFactory } from './AddressInputItem.private.uni.driver';

describe(AddressInputItem.displayName, () => {
  const renderAddressInputItem = (props = {}) => (
    <AddressInputItem {...props} />
  );
  const render = createRendererWithUniDriver(
    addressInputItemPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(renderAddressInputItem({}));

    expect(await driver.exists()).toBe(true);
  });

  it('should recieve props', async () => {
    const { driver } = render(
      renderAddressInputItem({
        mainLabel: 'label',
        secondaryLabel: 'secondary label',
        suffix: 'suffix',
        prefix: 'prefix',
      }),
    );

    expect(await driver.getMainLabelText()).toBe('label');
    expect(await driver.getSecondaryLabelText()).toBe('secondary label');
    expect(await (await driver.getSuffix()).text()).toBe('suffix');
    expect(await (await driver.getPrefix()).text()).toBe('prefix');
  });

  it('should trigger click callback', async () => {
    const onClick = jest.fn();
    const { driver } = render(renderAddressInputItem({ onClick }));

    expect(onClick).not.toHaveBeenCalled();
    await driver.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('should not trigger click callback when disabled', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      renderAddressInputItem({ disabled: true, onClick }),
    );

    await driver.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
