import { InputDriver } from '../Input/Input.driver';

export interface RangeDriver extends InputDriver {
  getInput: () => HTMLElement;
  hasInput: () => boolean;
  getLabel: () => HTMLElement;
  hasLabel: () => boolean;
}
