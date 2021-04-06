import { InputWithOptionsDriver } from '../InputWithOptions/InputWithOptions.driver';
import { OmitPolyfill } from '../common';

export interface MultiSelectCheckboxDriver
  extends OmitPolyfill<InputWithOptionsDriver, 'driver'> {
  driver: {
    getNumOfLabels: () => number;
    getLabels: (delimiter?:string) => string[];
    getLabelAt: (index: number, delimiter?:string) => string;
  } & Pick<InputWithOptionsDriver, 'driver'>;
}
