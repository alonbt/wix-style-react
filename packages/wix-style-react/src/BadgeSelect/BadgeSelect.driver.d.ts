import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface BadgeSelectDriver extends BaseDriver {
  clickAtOption: (index: number) => void;
}
