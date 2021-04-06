export { isClassExists, makeControlled } from 'wix-ui-test-utils/react-helpers';

export const findBaseByHook = (base, hook) => base.$(`[data-hook*="${hook}"]`);
export const findBaseByExactHook = (base, hook) =>
  base.$(`[data-hook="${hook}"]`);

export const findByHook = (element, hook) =>
  element.querySelector(`[data-hook*="${hook}"]`);

export const resolveIn = timeout =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, timeout);
  });

export const ASSET_PREFIX = 'http://localhost/';

/**
 * Formatting all your dataHooks object properties to their query syntax ie. `[data-hook="${value}"]`
 * @param dataHooks
 */
export const getFormattedDataHooks = dataHooks => {
  const formattedDataHooks = {};
  Object.entries(dataHooks).map(
    ([entry, value]) => (formattedDataHooks[entry] = `[data-hook="${value}"]`),
  );
  return formattedDataHooks;
};
