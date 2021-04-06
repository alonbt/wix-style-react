import { renderHook, cleanup } from '@testing-library/react-hooks';
import useIsMounted from './useIsMounted';

describe('useIsMounted', () => {
  const renderHelper = () => renderHook(() => useIsMounted()).result.current;

  it('should return a function', () => {
    const isMounted = renderHelper();
    expect(isMounted).toBeInstanceOf(Function);
  });
  describe('isMounted', () => {
    it('should return true if component is active', () => {
      const isMounted = renderHelper();
      expect(isMounted()).toBe(true);
    });
    it('should return false if component was unmounted', async () => {
      const isMounted = renderHelper();
      await cleanup(); // unmounts all hooks
      expect(isMounted()).toBe(false);
    });
  });
});
