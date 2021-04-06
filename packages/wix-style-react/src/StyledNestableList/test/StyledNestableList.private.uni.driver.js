import { styledNestableListDriverFactory as publicDriverFactory } from '../StyledNestableList.uni.driver';

export const styledNestableListPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
