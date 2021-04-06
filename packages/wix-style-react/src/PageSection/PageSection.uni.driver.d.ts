import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface PageSectionUniDriver extends BaseUniDriver {
  getTitleText: () => Promise<string>;
  isTitleExists: () => Promise<boolean>;
  getSubtitleText: () => Promise<string>;
  isSubtitleExists: () => Promise<boolean>;
  isActionsBarExists: () => Promise<boolean>;
}
