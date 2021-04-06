import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SocialButton from '../SocialButton';
import { socialButtonPrivateDriverFactory } from './SocialButton.private.uni.driver';

describe('SocialButton', () => {
  const render = createRendererWithUniDriver(socialButtonPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SocialButton />);
    expect(await driver.exists()).toBe(true);
  });

  describe('prop `text`', () => {
    it('should be same [when] given', async () => {
      const text = 'Share On Facebook';
      const { driver } = render(<SocialButton text={text} />);
      expect(await driver.getText()).toBe(text);
    });
  });

  describe('prop `onClick`', () => {
    it('should be called [when] clicked', async () => {
      const onClick = jest.fn();
      const { driver } = render(<SocialButton onClick={onClick} />);
      await driver.click();

      expect(onClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not be called [when] component is disabled', async () => {
      const onClick = jest.fn();
      const { driver } = render(<SocialButton disabled onClick={onClick} />);
      await driver.click();

      expect(onClick).not.toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
