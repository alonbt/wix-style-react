import { InputUniDriver } from '../Input/Input.uni.driver';

export interface NoBorderInputUniDriver extends InputUniDriver {
  getLabel: () => Promise<string>;
  getStatusMessage: () => Promise<string>;
}
