import { InputWithOptionsUniDriver } from '../InputWithOptions/InputWithOptions.uni.driver';
import { OmitPolyfill } from '../common';

export interface SearchUniDriver
  extends OmitPolyfill<InputWithOptionsUniDriver, 'driver'> {
  driver: InputWithOptionsUniDriver['driver'] & {
    isExpandable: () => Promise<boolean>;
    isCollapsed: () => Promise<boolean>;
  };
}
