import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const facesRatingBarDriverFactory = (base, body) => {
  const getFaces = () => base.$$(`[data-hook="${dataHooks.face}"]`);

  return {
    ...baseUniDriverFactory(base, body),

    /** Select the faces rating bar value */
    selectRating: async id => base.$(`[data-index="${id}"]`).click(),

    /** Return the selected rating (a number between 0 to 5) */
    getSelectedRating: async () => {
      let selectedRatingIndex = 0;

      const facesDataSelectedArr = await (await getFaces()).map(item =>
        item.attr('data-selected'),
      );

      // The faces indexes are from 1 to 5 while the array indexes are from 0 to 4
      selectedRatingIndex =
        facesDataSelectedArr.findIndex(selected => selected === 'true') + 1;

      return selectedRatingIndex;
    },
  };
};
