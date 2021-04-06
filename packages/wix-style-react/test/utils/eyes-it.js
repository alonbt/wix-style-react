import eyes from 'eyes.it';

const DEFAULT_VIEWPORT_WIDTH = 1050;
const DEFAULT_VIEWPORT_HEIGHT = 1075;

export const defaultConfig = {
  enableSnapshotAtBrowserGet: false,
  width: DEFAULT_VIEWPORT_WIDTH,
  height: DEFAULT_VIEWPORT_HEIGHT,
};

/**
 * Create an instance of eyes.it with a default configure options.
 * All instances share the same eyes singleton which is already initialized.
 */
export function eyesItInstance(config) {
  /* eslint-disable no-restricted-globals */
  return new Proxy(eyes, {
    /* eslint-enable no-restricted-globals */
    get: (obj, prop) => {
      if (prop === 'it' || prop === 'fit') {
        return (msg, f, configArg) =>
          obj[prop](msg, f, {
            ...defaultConfig,
            ...config,
            ...configArg,
          });
      }
      return obj[prop];
    },
  });
}
