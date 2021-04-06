import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FloatingNotification from '../FloatingNotification';
import { floatingNotificationPrivateDriverFactory } from '../FloatingNotification.private.uni.driver';

describe('FloatingNotification', () => {
  const someText = 'someText';
  const someButtonLabel = 'someButtonLabel';
  const someButtonOnClick = jest.fn();
  const render = createRendererWithUniDriver(
    floatingNotificationPrivateDriverFactory,
  );

  const createDriver = props => render(<FloatingNotification {...props} />);

  afterEach(() => {
    someButtonOnClick.mockRestore();
    cleanup();
  });

  it('should render text', async () => {
    const { driver } = createDriver({
      text: someText,
    });

    expect(await driver.getText()).toEqual(someText);
  });

  it('should allow rendering button', async () => {
    const { driver } = createDriver({
      buttonProps: {
        label: someButtonLabel,
        onClick: someButtonOnClick,
      },
    });

    expect(await driver.getButtonLabel()).toEqual(someButtonLabel);
    await driver.clickButton();
    expect(someButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should allow rendering text button', async () => {
    const { driver } = createDriver({
      textButtonProps: {
        label: someButtonLabel,
        onClick: someButtonOnClick,
      },
    });

    expect(await driver.getTextButtonLabel()).toEqual(someButtonLabel);
    await driver.clickTextButton();
    expect(someButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render prefixIcon when one is given', () => {
    const { getByText } = createDriver({
      prefixIcon: <div>HELLO PREFIX ICON</div>,
    });

    expect(getByText('HELLO PREFIX ICON')).toBeTruthy();
  });

  it('should accept "as", "href", "target" attributes for button', async () => {
    const someAs = 'a';
    const someHref = 'someHref';
    const target = 'some-button-target';
    const { driver } = createDriver({
      buttonProps: {
        label: someButtonLabel,
        as: someAs,
        href: someHref,
        target,
      },
    });

    expect(await driver.isButtonAs(someAs)).toEqual(true);
    expect(await driver.getButtonHref()).toEqual(someHref);
    expect(await driver.getButtonAttr('target')).toEqual(target);
  });

  it('should accept "as" and "href" attributes for text button', async () => {
    const someAs = 'a';
    const someHref = 'someHref';
    const target = 'some-text-button-target';
    const { driver } = createDriver({
      textButtonProps: {
        label: someButtonLabel,
        as: someAs,
        href: someHref,
        target,
      },
    });

    expect(await driver.isTextButtonAs(someAs)).toEqual(true);
    expect(await driver.getTextButtonHref()).toEqual(someHref);
    expect(await driver.getTextButtonAttr('target')).toEqual(target);
  });
});
