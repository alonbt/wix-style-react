import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { fireEvent } from '@testing-library/react';
import Animate from '../Animate';
import { animateDriverFactory } from '../Animate.uni.driver';

describe(Animate.displayName, () => {
  const render = createRendererWithUniDriver(animateDriverFactory);

  afterEach(cleanup);

  const requiredProps = {
    children: <div />,
  };

  it('should render', async () => {
    const { driver } = render(<Animate {...requiredProps} />);
    expect(await driver.exists()).toBe(true);
  });

  describe('animation', () => {
    it('should fire onEnd callback when defined', async () => {
      const props = {
        active: true,
        onEnd: jest.fn(),
      };

      const { driver } = render(<Animate {...requiredProps} {...props} />);
      const animateElement = await driver.element();
      fireEvent.animationEnd(animateElement);

      expect(props.onEnd).toHaveBeenCalled();
    });

    it('should fire onStart callback when defined', async () => {
      const props = {
        active: true,
        onStart: jest.fn(),
      };

      const { driver } = render(<Animate {...requiredProps} {...props} />);
      const animateElement = await driver.element();
      fireEvent.animationStart(animateElement);

      expect(props.onStart).toHaveBeenCalled();
    });
  });
});
