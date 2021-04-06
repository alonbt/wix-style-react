import { radioButtonUniDriverFactory as publicDriverFactory } from './RadioButton.uni.driver';
import { ReactBase } from '../../../test/utils/unidriver';

export const radioButtonPrivateDriverFactory = (base, body) => {
  const reactBase = ReactBase(base);

  return {
    ...publicDriverFactory(base, body),
    /** trigger focus on the element */
    focus: reactBase.focus,
  };
};
