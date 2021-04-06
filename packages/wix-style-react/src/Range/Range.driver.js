import inputDriverFactory from '../Input/Input.driver';
import { DATA_HOOKS } from './constants';

const rangeDriverFactory = ({ element }) => {
  const getElementByDataHook = dataHook =>
    element.querySelector(`[data-hook='${dataHook}']`);

  const label = () => getElementByDataHook(DATA_HOOKS.label);
  const input = () => getElementByDataHook(DATA_HOOKS.inputWrapper);

  return {
    ...inputDriverFactory({ element }),
    getInput: input,
    hasInput: () => !!input().childNodes[0],
    getLabel: label,
    hasLabel: () => !!label,
  };
};

export default rangeDriverFactory;
