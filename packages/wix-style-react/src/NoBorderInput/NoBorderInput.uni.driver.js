import inputUniDriverFactory from '../Input/Input.uni.driver';
import DataHooks from './dataHooks';

const noBorderInputUniDriverFactory = (base, body) => {
  const inputDriver = inputUniDriverFactory(base, body);

  return {
    ...inputDriver,
    getLabel: async () =>
      await base.$(`[data-hook="${DataHooks.label}"]`).text(),
    getStatusMessage: async () =>
      await base.$(`[data-hook="${DataHooks.statusMessage}"]`).text(),
  };
};

export default noBorderInputUniDriverFactory;
