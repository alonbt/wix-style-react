import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const timelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the label text of timeline item by index
     * @param {number} timeline item index
     * @returns {Promise<string>} timeline item label text at index
     */
    getLabelText: async idx =>
      await findByHook(base, `${dataHooks.timelineLabel}-${idx}`).text(),

    /**
     * Get the suffix text of timeline item  by index
     * @param {number} timeline item index
     * @returns {Promise<string>} timeline item suffix text at index
     */
    getSuffixText: async idx =>
      await findByHook(base, `${dataHooks.timelineTextSuffix}-${idx}`).text(),
  };
};
