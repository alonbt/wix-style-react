import { labelledElementDriverFactory as publicDriverFactory } from '../LabelledElement.uni.driver';
import { ReactBase } from '../../../test/utils/unidriver';
import DataHooks from '../dataHooks';

export const labelledElementPrivateDriverFactory = base => {
  const getLabel = () => base.$(`[data-hook="${DataHooks.label}"]`);

  return {
    ...publicDriverFactory(base),
    blur: inputDriver => ReactBase(inputDriver).blur(),
    getLabelForAttribute: () => getLabel().attr('for'),
  };
};
