import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface RangeUniDriver extends BaseUniDriver {
  getInput: () => Promise<HTMLElement>;
  hasInput: () => Promise<boolean>;
  getLabel: () => Promise<HTMLElement>;
  hasLabel: () => Promise<boolean>;
}
