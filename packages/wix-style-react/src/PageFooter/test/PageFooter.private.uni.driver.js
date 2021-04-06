import { pageFooterDriverFactory as publicDriverFactory } from '../PageFooter.uni.driver';

export const pageFooterPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
