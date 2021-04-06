import { InputDriver } from '../Input/Input.driver';

export interface NoBorderInputDriver extends InputDriver {
  getLabel: () => string;
  getStatusMessage: () => string;
}
