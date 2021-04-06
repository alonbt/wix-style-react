import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface RadioDriver extends BaseDriver {
  keyDown(key: string): void;
  click(): void;
  getValue(): string;
  getName(): string;
  getId(): string;
  iconExists(): boolean;
  labelExists(): boolean;
  isChecked(): boolean;
  isDisabled(): boolean;
}
