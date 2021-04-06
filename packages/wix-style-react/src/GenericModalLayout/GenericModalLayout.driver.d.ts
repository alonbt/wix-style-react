import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface GenericModalLayoutDriver extends BaseDriver {
  isFullscreen: () => boolean;
}
