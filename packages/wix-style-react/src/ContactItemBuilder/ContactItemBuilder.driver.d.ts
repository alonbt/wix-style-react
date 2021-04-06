import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface ContactItemBuilderDriver extends BaseDriver {
  getTitle: () => string;
  getSubtitle: () => string;
}
