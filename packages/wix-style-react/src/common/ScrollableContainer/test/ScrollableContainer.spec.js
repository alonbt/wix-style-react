import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/unit';
import { scrollableContainerDriverFactory } from '../ScrollableContainer.uni.driver';
import ScrollableContainer from '../ScrollableContainer';
import { getScrollAreaY } from '../scrollAreaLogic';
import { AreaY } from '../index';

describe('ScrollableContainer', () => {
  const render = createRendererWithUniDriver(scrollableContainerDriverFactory);

  afterEach(cleanup);

  it('should render the provided children', async () => {
    const children = <div data-hook={'children'} />;
    const { driver } = render(
      <ScrollableContainer>{children}</ScrollableContainer>,
    );
    expect(await driver.childExists('children')).toBe(true);
  });

  it('should call the `onScrollAreaChanged` method after container was mounted ', async () => {
    const onScrollAreaChangedSpy = jest.fn();
    render(
      <ScrollableContainer onScrollAreaChanged={onScrollAreaChangedSpy} />,
    );
    expect(onScrollAreaChangedSpy).toHaveBeenCalledTimes(1);
    expect(onScrollAreaChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({ area: { y: AreaY.NONE } }),
    );
  });

  it('should use received forwarded ref when passed while internal registering to scroll events still works', async () => {
    const testValue = 'test';
    const testRef = React.createRef();
    const onScrollAreaChangedSpy = jest.fn();
    render(
      <ScrollableContainer
        ref={testRef}
        onScrollAreaChanged={onScrollAreaChangedSpy}
      >
        {testValue}
      </ScrollableContainer>,
    );
    expect(onScrollAreaChangedSpy).toHaveBeenCalledTimes(1);
    expect(onScrollAreaChangedSpy).toHaveBeenCalledWith(
      expect.objectContaining({ area: { y: AreaY.NONE } }),
    );
    expect(testRef.current.textContent).toEqual(testValue);
  });

  describe('Scroll Logic', () => {
    it('should calculate the Y scroll area to `none` when clientHeight is equal to scrollHeight', async () => {
      const area = getScrollAreaY({
        scrollHeight: 50,
        clientHeight: 50,
        scrollTop: 0,
      });
      expect(area).toBe(AreaY.NONE);
    });

    it('should calculate the Y scroll area to `none` when clientHeight is greater than scrollHeight', async () => {
      const area = getScrollAreaY({
        scrollHeight: 50,
        clientHeight: 51,
        scrollTop: 0,
      });
      expect(area).toBe(AreaY.NONE);
    });

    it('should calculate the Y scroll area to `top`', async () => {
      const area = getScrollAreaY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 0,
      });
      expect(area).toBe(AreaY.TOP);
    });

    it('should calculate the Y scroll area to `middle`', async () => {
      const area = getScrollAreaY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 10,
      });
      expect(area).toBe(AreaY.MIDDLE);
    });

    it('should calculate the Y scroll area to `bottom`', async () => {
      const area = getScrollAreaY({
        scrollHeight: 100,
        clientHeight: 50,
        scrollTop: 50,
      });
      expect(area).toBe(AreaY.BOTTOM);
    });
  });
});
