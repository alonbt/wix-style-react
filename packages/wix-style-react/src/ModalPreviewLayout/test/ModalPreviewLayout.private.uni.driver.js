import { modalPreviewLayoutDriverFactory as publicDriverFactory } from '../ModalPreviewLayout.uni.driver';
import { dataHooks } from '../constants';
import { tooltipDriverFactory } from '../../Tooltip/Tooltip.uni.driver';

export const modalPreviewLayoutPrivateDriverFactory = (base, body) => {
  const getByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const rightArrow = () => getByDataHook(dataHooks.modalPreviewRightArrow);
  const leftArrow = () => getByDataHook(dataHooks.modalPreviewLeftArrow);

  return {
    ...publicDriverFactory(base),

    clickNextNavigationButton: rightArrow().click,

    clickPrevNavigationButton: leftArrow().click,

    getNextTooltipDriver: () => {
      const element = getByDataHook(dataHooks.nextNavigationButtonTooltip);
      return tooltipDriverFactory(element, body);
    },

    getPrevTooltipDriver: () => {
      const element = getByDataHook(dataHooks.prevNavigationButtonTooltip);
      return tooltipDriverFactory(element, body);
    },

    getCloseTooltipDriver: () => {
      const element = getByDataHook(dataHooks.closeButtonTooltip);
      return tooltipDriverFactory(element, body);
    },
  };
};
