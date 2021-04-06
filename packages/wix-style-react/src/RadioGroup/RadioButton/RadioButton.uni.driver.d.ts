import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface RadioButtonUniDriver extends BaseUniDriver {
  check: () => Promise<void>;
  isChecked: () => Promise<boolean>;
  isDisabled: () => Promise<boolean>;
  getLabel: () => Promise<string>;
  getLabelElement: () => Promise<Element>;
  getValue: () => Promise<string>;
  getTabIndex: () => Promise<string | null>;
  getContent: () => Promise<HTMLElement>;
}
