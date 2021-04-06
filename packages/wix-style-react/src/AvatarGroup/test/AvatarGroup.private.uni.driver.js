import { avatarGroupDriverFactory as publicDriverFactory } from '../AvatarGroup.uni.driver';

export const avatarGroupPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
