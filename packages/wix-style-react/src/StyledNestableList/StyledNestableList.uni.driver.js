import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const styledNestableListDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
