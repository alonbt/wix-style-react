import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import ListItemEditable from '../ListItemEditable';
import { listItemEditablePrivateDriverFactory } from './ListItemEditable.private.uni.driver';

describe('ListItemEditable', () => {
  const render = createRendererWithUniDriver(
    listItemEditablePrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <ListItemEditable onApprove={jest.fn()} onCancel={jest.fn()} />,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should not render, driver should not fail initializing', async () => {
    const { driver } = render();

    expect(await driver.exists()).toBe(false);
  });

  it('should render placeholder text when have no value', async () => {
    const placeholder = 'some placeholder';
    const { driver } = render(
      <ListItemEditable
        onApprove={jest.fn()}
        onCancel={jest.fn()}
        placeholder={placeholder}
      />,
    );
    expect(await driver.getPlaceholder()).toBe(placeholder);
  });

  it('should show disabled confirm button when have no value', async () => {
    const { driver } = render(
      <ListItemEditable onApprove={jest.fn()} onCancel={jest.fn()} />,
    );
    expect(await driver.isApproveButtonDisabled()).toBe(true);
  });

  describe('when value is entered', () => {
    it('should show enabled confirm button', async () => {
      const { driver } = render(
        <ListItemEditable onApprove={jest.fn()} onCancel={jest.fn()} />,
      );
      await driver.enterText('some text');
      expect(await driver.isApproveButtonDisabled()).toBe(false);
    });

    it('should call onApprove with the input value when clicked', async () => {
      const onApprove = jest.fn();
      const inputValue = 'some value';
      const { driver } = render(
        <ListItemEditable onCancel={jest.fn()} onApprove={onApprove} />,
      );
      await driver.enterText(inputValue);
      await driver.clickApprove();

      expect(onApprove).toHaveBeenCalledWith(inputValue);
    });
  });

  it('should call onCancel when clicked', async () => {
    const onCancel = jest.fn();
    const { driver } = render(
      <ListItemEditable onApprove={jest.fn()} onCancel={onCancel} />,
    );
    await driver.clickCancel();

    expect(onCancel).toHaveBeenCalled();
  });

  describe('tooltips', () => {
    it('should render cancel button tooltip', async () => {
      const cancelButtonTooltipContent = 'cancel tooltip';
      const { driver } = render(
        <ListItemEditable
          cancelButtonTooltipContent={cancelButtonTooltipContent}
          onApprove={jest.fn()}
          onCancel={jest.fn()}
        />,
      );

      expect(await driver.getCancelButtonTooltipText()).toBe(
        cancelButtonTooltipContent,
      );
    });

    it('should not show tooltip when approve button is disabled', async () => {
      const approveButtonTooltipContent = 'approve tooltip';
      const { driver } = render(
        <ListItemEditable
          approveButtonTooltipContent={approveButtonTooltipContent}
          onApprove={jest.fn()}
          onCancel={jest.fn()}
        />,
      );

      expect(await driver.getApproveButtonTooltipText()).toBe(null);
    });

    it('should show tooltip when approve button is enabled', async () => {
      const approveButtonTooltipContent = 'approve tooltip';
      const { driver } = render(
        <ListItemEditable
          approveButtonTooltipContent={approveButtonTooltipContent}
          onApprove={jest.fn()}
          onCancel={jest.fn()}
        />,
      );

      await driver.enterText('some text');
      expect(await driver.getApproveButtonTooltipText()).toBe(
        approveButtonTooltipContent,
      );
    });

    it('should not show cancel button tooltip if tooltip prop is not provided', async () => {
      const { driver } = render(
        <ListItemEditable onApprove={jest.fn()} onCancel={jest.fn()} />,
      );

      expect(await driver.getCancelButtonTooltipText()).toBe(null);
    });

    it('should not show approve button tooltip if tooltip prop is not provided', async () => {
      const { driver } = render(
        <ListItemEditable onApprove={jest.fn()} onCancel={jest.fn()} />,
      );

      await driver.enterText('some text');
      expect(await driver.getApproveButtonTooltipText()).toBe(null);
    });
  });

  describe('status attribute', () => {
    it('should have no status', async () => {
      const { driver } = render(
        <ListItemEditable onApprove={jest.fn()} onCancel={jest.fn()} />,
      );

      expect(await driver.hasStatus('error')).toBe(false);
    });

    it.each([
      { status: 'error' },
      { status: 'warning' },
      { status: 'loading' },
    ])('should display status when %p', async test => {
      const { driver } = render(
        <ListItemEditable
          onApprove={jest.fn()}
          onCancel={jest.fn()}
          {...test}
        />,
      );

      expect(await driver.hasStatus(test.status)).toBe(true);
      expect(await driver.getStatusMessage()).toBeNull();
    });

    it.each([
      { status: 'error', statusMessage: 'Error Message' },
      { status: 'warning', statusMessage: 'Warning Message' },
      { status: 'loading', statusMessage: 'Loading Message' },
    ])('should display status with message when %p', async test => {
      const { driver } = render(
        <ListItemEditable
          onApprove={jest.fn()}
          onCancel={jest.fn()}
          {...test}
        />,
      );

      expect(await driver.hasStatus(test.status)).toBe(true);
      expect(await driver.getStatusMessage()).toBe(test.statusMessage);
    });
  });
});
