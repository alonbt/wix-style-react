import { InputUniDriver } from '../Input/Input.uni.driver';

export interface NumberInputUniDriver extends InputUniDriver {
  clickOnIncrement: () => Promise<void>;
  clickOnDecrement: () => Promise<void>;
  isDownDisabled: () => Promise<boolean>;
  isUpDisabled: () => Promise<boolean>;
}
