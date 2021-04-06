import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { listItemSelectDriverFactory } from '../ListItemSelect/ListItemSelect.uni.driver';

export const badgeSelectItemDriverFactory = base => {
  const listItemSelectDriver = listItemSelectDriverFactory(base);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets the badge select item text
     * @return {Promise<string>}
     */
    getText: () => listItemSelectDriver.getTitle(),

    /**
     * Gets the badge select item subtitle
     * @return {Promise<string>}
     */
    getSubtitleText: () => listItemSelectDriver.getSubtitle(),
  };
};
