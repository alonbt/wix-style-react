declare const useDebouncedCallback: <Callback>(
  cb: Callback,
  dependencies: any[],
  debounceMs?: number,
  debounceFn?: (callback: Function, debounceMs: number) => Function,
) => Callback;

export default useDebouncedCallback;
