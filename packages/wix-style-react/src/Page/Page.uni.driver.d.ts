import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface PageUniDriver extends BaseUniDriver {
  hasClass: (name: string) => Promise<boolean>;
  backgroundImageExists: () => Promise<boolean>;
  gradientClassNameExists: () => Promise<boolean>;
  tailExists: () => Promise<boolean>;
  gradientContainerHeight: () => Promise<string>;
  getPageHtml: () => Promise<any>;
}
