import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { InputUniDriver } from '../Input/Input.uni.driver';
import { DropdownLayoutUniDriver } from '../DropdownLayout/DropdownLayout.uni.driver';

export interface InputWithOptionsUniDriver extends BaseUniDriver {
  driver: {
    exists: () => Promise<boolean>;
    selectOptionById: (id: number | string) => Promise<void>;
    isReadOnly: InputUniDriver['getReadOnly'];
    isEditable: () => Promise<boolean>;
    isDisabled: InputUniDriver['isDisabled'];
    /** @deprecated  Should be private */
    inputWrapper: () => Promise<any>;
    focus: () => Promise<void>;
    blur: () => Promise<void>;
    pressKey: (key: string) => Promise<void>;
    outsideClick: () => Promise<void>;
  };
  inputDriver: InputUniDriver;
  dropdownLayoutDriver: DropdownLayoutUniDriver;
}
