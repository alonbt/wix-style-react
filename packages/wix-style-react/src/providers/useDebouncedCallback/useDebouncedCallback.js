import { useCallback, useEffect, useRef } from 'react';
import _debounce from 'lodash/debounce';

/** A hook for creating a debounced callback function */
const useDebouncedCallback = (
  /** any function you want to debounce */
  cb,
  /** dependencies your callback relies on.
   * Callback will be reevaluated when dependencies change -
   * (same as React's useCallback hook) */
  dependencies,
  /** debounce timeout in milliseconds (default: 200) */
  debounceMs = 200,
  /** (callback: Function, debounceMs: number) => Function
   * allow passing a custom debounce function (default: lodash debounce) */
  debounceFn = _debounce,
) => {
  const callbackRef = useRef(cb);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(
    debounceFn((...args) => {
      callbackRef.current(...args);
    }, debounceMs),
    [debounceMs],
  );
  // update callback function when its dependencies change
  useEffect(() => {
    callbackRef.current = cb;
  }, [cb, dependencies]);

  return debouncedCallback;
};

export default useDebouncedCallback;
