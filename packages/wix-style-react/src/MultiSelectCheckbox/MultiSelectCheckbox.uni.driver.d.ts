import { InputWithOptionsUniDriver } from '../InputWithOptions/InputWithOptions.uni.driver';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { OmitPolyfill } from '../common';

export interface MultiSelectCheckboxUniDriver
  extends OmitPolyfill<InputWithOptionsUniDriver, 'driver'> {
  driver: {
    getNumOfLabels: () => Promise<number>;
    getLabels: (delimiter?: string) => Promise<string[]>;
    getLabelAt: (index: number, delimiter?: string) => Promise<string>;
  } & Pick<InputWithOptionsUniDriver, 'driver'> &
    BaseUniDriver;
}
