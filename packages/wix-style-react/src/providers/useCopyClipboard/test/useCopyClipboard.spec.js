import { act, renderHook } from '@testing-library/react-hooks';
import {
  selectionBehaviorPolyfill,
  rangePolyfill,
} from '../../../../testkit/polyfills';
import useCopyClipboard from '../useCopyClipboard';

describe('useCopyClipboard', () => {
  beforeEach(() => {
    selectionBehaviorPolyfill.install();
    rangePolyfill.install();
    document.execCommand = jest.fn(() => true);
  });

  it('should call copy command', async () => {
    const { result } = renderHook(() =>
      useCopyClipboard({ value: 'https://www.wix.com' }),
    );
    await act(async () => {
      (await result.current).copyToClipboard();
    });
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('should reset state manually when reset function called', async () => {
    const { result } = renderHook(() =>
      useCopyClipboard({ value: 'https://www.wix.com' }),
    );
    await act(async () => {
      (await result.current).copyToClipboard();
    });
    expect((await result.current).isCopied).toBe(true);
    await act(async () => {
      (await result.current).reset();
    });
    expect((await result.current).isCopied).toBe(null);
  });

  it('should reset state after set initial interval', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() =>
      useCopyClipboard({
        value: 'https://www.wix.com',
        resetTimeout: 100,
      }),
    );
    await act(async () => {
      (await result.current).copyToClipboard();
    });
    expect((await result.current).isCopied).toBe(true);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    await act(async () => {
      jest.runAllTimers();
    });
    expect((await result.current).isCopied).toBe(null);
  });
});
