import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface FormFieldUniDriver extends BaseUniDriver {
  element(): Promise<HTMLElement>;
  getChildren(): Promise<HTMLElement | null>;
  getLabel(): Promise<HTMLElement | null>;
  isRequired(): Promise<boolean>;
  getLengthLeft(): Promise<number | null>;
  isLengthExceeded(): Promise<boolean>;
  hasTooltip(): Promise<boolean>;
  getInfoContent(): Promise<string>;
  getSuffix(): Promise<HTMLElement | null>;
}
