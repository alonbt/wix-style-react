import { facesRatingBarDriverFactory as publicDriverFactory } from '../FacesRatingBar.uni.driver';
import { tooltipDriverFactory } from '../../Tooltip/Tooltip.uni.driver';
import { facesData } from '../constants';

export const facesRatingBarPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    getCurrentTooltipDriver: index => {
      const currentTooltipSelector = `[data-hook="${facesData[index].tooltipDataHook}"]`;
      const element = base.$(currentTooltipSelector);
      return tooltipDriverFactory(element, body);
    },
  };
};
