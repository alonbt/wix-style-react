import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const fileUploadDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
