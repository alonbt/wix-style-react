import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const copyClipboardDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
