import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useDebouncedCallback from './useDebouncedCallback';
import Box from '../../Box';
import Text from '../../Text';
import Button from '../../Button';
import { ButtonTestkit, TextTestkit } from '../../../testkit';
import { debounce } from '../../../test/utils/unit';

const dataHooks = {
  count: 'test-component-count',
  button: 'test-component-button',
};

const TestComponent = ({ onClick, debounceMs }) => {
  const [counter, setCounter] = useState(0);
  const debouncedIncreaseCounter = useDebouncedCallback(
    () => {
      const newCount = counter + 1;
      setCounter(newCount);
      if (onClick) {
        onClick(newCount);
      }
    },
    [onClick, counter, setCounter],
    debounceMs,
    // default lodash debounce doesn't work with jest fake timers
    debounce,
  );

  return (
    <Box>
      <Text dataHook={dataHooks.count}>{counter}</Text>
      <Button dataHook={dataHooks.button} onClick={debouncedIncreaseCounter}>
        Increase
      </Button>
    </Box>
  );
};

jest.useFakeTimers();

describe('useDebouncedCallback', () => {
  it('debounces calls to provided callback', async () => {
    const debounceDelay = 200;
    const onClick = jest.fn();
    const { container } = render(
      <TestComponent debounceMs={debounceDelay} onClick={onClick} />,
    );
    const buttonTestkit = ButtonTestkit({
      wrapper: container,
      dataHook: dataHooks.button,
    });
    const textTestkit = TextTestkit({
      wrapper: container,
      dataHook: dataHooks.count,
    });
    expect(await textTestkit.getText()).toBe('0');
    await buttonTestkit.click();
    await buttonTestkit.click();
    act(() => jest.advanceTimersByTime(debounceDelay));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenNthCalledWith(1, 1);
    expect(await textTestkit.getText()).toBe('1');
  });
  it('updates function when dependencies change', async () => {
    const debounceDelay = 200;
    const onClick = jest.fn();
    const { container } = render(
      <TestComponent debounceMs={debounceDelay} onClick={onClick} />,
    );
    const buttonTestkit = ButtonTestkit({
      wrapper: container,
      dataHook: dataHooks.button,
    });
    const textTestkit = TextTestkit({
      wrapper: container,
      dataHook: dataHooks.count,
    });
    await buttonTestkit.click();
    await buttonTestkit.click();
    act(() => jest.advanceTimersByTime(debounceDelay));
    await buttonTestkit.click();
    await buttonTestkit.click();
    act(() => jest.advanceTimersByTime(debounceDelay));
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenNthCalledWith(1, 1);
    expect(onClick).toHaveBeenNthCalledWith(2, 2);
    expect(await textTestkit.getText()).toBe('2');
  });
  it('creates new callback when debounce delay changes', async () => {
    const fn = jest.fn();
    const { result, rerender } = renderHook(({ debounceMs = 200 } = {}) =>
      useDebouncedCallback(fn, [], debounceMs, debounce),
    );
    const debouncedCallback = result.current;
    rerender({ debounceMs: 500 });
    // Callback was changed when debounce delay changed
    expect(result.current).not.toBe(debouncedCallback);
    result.current();
    jest.advanceTimersByTime(200);
    // debounce duration is now longer
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(300);
    expect(fn).toBeCalled();
  });
});
