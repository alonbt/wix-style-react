import { socialButtonDriverFactory as publicDriverFactory } from '../SocialButton.uni.driver';

export const socialButtonPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
