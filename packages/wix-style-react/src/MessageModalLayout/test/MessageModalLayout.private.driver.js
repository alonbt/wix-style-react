import { dataHooks } from '../../BaseModalLayout/constants';

export const messageModalLayoutPrivateDriverFactory = ({ element }) => {
  return {
    _scrollContentTo: y => {
      element
        .querySelector(`[data-hook="${dataHooks.contentWrapper}"]`)
        .scroll(0, y);
    },
  };
};
