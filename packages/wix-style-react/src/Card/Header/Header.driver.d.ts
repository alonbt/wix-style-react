import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface HeaderDriver extends BaseDriver {
  title(): string;
  subtitle(): string;
}
