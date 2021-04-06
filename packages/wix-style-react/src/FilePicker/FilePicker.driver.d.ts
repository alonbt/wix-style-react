import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface FilePickerDriver extends BaseDriver {
  hasError: () => boolean;
  errorMessage: () => string;
  getSubLabel: () => string;
  getMainLabel: () => string;
  getName: () => string;
}
