import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface PageDriver extends BaseDriver {
  hasClass: (className: string) => boolean;
  backgroundImageExists: () => boolean;
  gradientClassNameExists: () => boolean;
  tailExists: () => boolean;
  gradientContainerHeight: () => string;
  getPageHtml: () => string;
}
