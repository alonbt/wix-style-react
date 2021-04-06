import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const horizontalTimelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Gets the label text of timeline item by index
     * @param {number} timeline item index
     * @returns {Promise<string>} timeline item label text at index
     */
    getLabel: async idx =>
      await findByHook(
        base,
        `${dataHooks.horizontalTimelineLabel}-${idx}`,
      ).text(),
  };
};
