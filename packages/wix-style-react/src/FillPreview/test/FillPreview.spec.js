import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import FillPreview from '../FillPreview';
import { fillPreviewPrivateDriverFactory } from './FillPreview.private.uni.driver';

describe('FillPreview', () => {
  const render = createRendererWithUniDriver(fillPreviewPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render with default props', async () => {
    const { driver } = render(<FillPreview />);
    expect(await driver.exists()).toBe(true);
    expect(await driver.isSelected()).toBe(false);
  });

  it('should call callback on click', async () => {
    const onClick = jest.fn();
    const { driver } = render(<FillPreview onClick={onClick} />);
    await driver.click();
    expect(onClick).toBeCalledTimes(1);
  });

  it('should render selected state', async () => {
    const { driver } = render(<FillPreview selected />);
    expect(await driver.isSelected()).toBe(true);
  });

  describe('`selected` prop', () => {
    it('should be selected [when] given', async () => {
      const { driver } = render(<FillPreview selected />);
      expect(await driver.isSelected()).toBe(true);
    });
  });
});
