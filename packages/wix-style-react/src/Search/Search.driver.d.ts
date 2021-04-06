import { InputWithOptionsDriver } from '../InputWithOptions/InputWithOptions.driver';
import { OmitPolyfill } from '../common';

export interface SearchDriver
  extends OmitPolyfill<InputWithOptionsDriver, 'driver'> {
  driver: InputWithOptionsDriver['driver'] & {
    isExpandable: () => boolean;
    isCollapsed: () => boolean;
  };
}
