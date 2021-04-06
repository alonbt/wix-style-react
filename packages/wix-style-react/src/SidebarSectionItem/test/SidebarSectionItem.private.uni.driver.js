import publicDriverFactory, {
  getPrefix,
  getSuffix,
} from '../SidebarSectionItem.uni.driver';

import { findByHook } from '../../../test/utils/unidriver';

export default base => {
  return {
    ...publicDriverFactory(base),

    hasChevron: async () => await findByHook(base, `chevron`).exists(),
    hasPrefix: () => getPrefix(base).exists(),
    hasSuffix: () => getSuffix(base).exists(),
  };
};
