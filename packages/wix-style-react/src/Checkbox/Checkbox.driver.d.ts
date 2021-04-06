import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { CheckboxLabelSize } from './index';

export interface CheckboxDriver extends BaseDriver {
  click: () => void;
  focus: () => void;
  blur: () => void;
  /**
   * Focus related testing is done in e2e tests only.
   * @deprecated
   */
  hasFocusState(): string | null;
  isChecked(): boolean;
  isDisabled(): boolean;
  isIndeterminate(): boolean;
  isTooltipEnabled(): Promise<boolean>;
  hasError(): boolean;
  getLabel(): string;
  getLabelSize(): CheckboxLabelSize;
  getErrorMessage(): Promise<string>;
  getTooltipContent(): Promise<string>;
}
