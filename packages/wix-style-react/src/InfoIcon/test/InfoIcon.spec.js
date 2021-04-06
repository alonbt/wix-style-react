import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import InfoIcon from '../InfoIcon';
import { infoIconDriverFactory } from '../InfoIcon.uni.driver';

const defaultContent = 'Lorem ipsum? Dolor sit!';
const createInfoIcon = ({ content = defaultContent, ...rest } = {}) => (
  <InfoIcon content={content} {...rest} />
);

afterEach(() => {
  cleanup();
});

describe('InfoIcon', () => {
  const render = createRendererWithUniDriver(infoIconDriverFactory);

  it('should render', async () => {
    const { driver } = render(createInfoIcon());
    expect(await driver.exists()).toBe(true);
  });

  describe('content prop', () => {
    it('should set value', async () => {
      const { driver } = render(createInfoIcon());
      expect(await driver.getContent()).toBe(defaultContent);
    });
  });

  describe('size prop', () => {
    it('should have default value "medium"', async () => {
      const { driver } = render(createInfoIcon());
      expect(await driver.getSize()).toBe('medium');
    });

    it('should set value to "medium"', async () => {
      const { driver } = render(createInfoIcon({ size: 'medium' }));
      expect(await driver.getSize()).toBe('medium');
    });

    it('should set value to "small"', async () => {
      const { driver } = render(createInfoIcon({ size: 'small' }));
      expect(await driver.getSize()).toBe('small');
    });
  });
});
