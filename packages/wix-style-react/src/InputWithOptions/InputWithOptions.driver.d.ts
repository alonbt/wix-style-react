import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { InputDriver } from '../Input/Input.driver';
import { DropdownLayoutDriver } from '../DropdownLayout/DropdownLayout.driver';

export interface InputWithOptionsDriver extends BaseDriver {
  inputDriver: InputDriver;
  dropdownLayoutDriver: DropdownLayoutDriver;
  driver: {
    exists: () => boolean;
    selectOptionById: (id: string | number) => void;
    isReadOnly: () => boolean;
    isEditable: () => boolean;
    isDisabled: () => boolean;
    inputWrapper: () => HTMLElement;
    focus: () => void;
    blur: () => void;
    pressKey: (key: string) => void;
    outsideClick: () => void;
  };
}
