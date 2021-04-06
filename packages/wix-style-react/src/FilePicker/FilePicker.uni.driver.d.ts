import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

interface FilePickerUniDriver extends BaseUniDriver {
  hasError: () => Promise<boolean>;
  errorMessage: () => Promise<string>;
  getSubLabel: () => Promise<string>;
  getMainLabel: () => Promise<string>;
  getName: () => Promise<any>;
}
