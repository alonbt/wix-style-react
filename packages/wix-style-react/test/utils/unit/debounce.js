/** Lodash debounce doesn't play nicely with jest fake timers,
 * so we provide a simplified debouncing function for unit test. */
export const debounce = (callback, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};
