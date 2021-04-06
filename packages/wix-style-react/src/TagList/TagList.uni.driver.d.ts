import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { TagUniDriver } from '../Tag/Tag.uni.driver';

export interface TagListUniDriver extends BaseUniDriver {
  actionButtonLabel: () => Promise<string>;
  clickActionButton: () => Promise<void>;
  actionButtonExists: () => Promise<boolean>;
  toggleMoreButtonLabel: () => Promise<string>;
  clickToggleMoreButton: () => Promise<void>;
  toggleMoreButtonExists: () => Promise<boolean>;
  removeTag: (id: string) => Promise<void>;
}
