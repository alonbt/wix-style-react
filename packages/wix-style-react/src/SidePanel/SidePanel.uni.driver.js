import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { dividerDriverFactory } from '../Divider/Divider.uni.driver';
import { closeButtonDriverFactory } from '../CloseButton/CloseButton.uni.driver';
import { headingUniDriverFactory } from '../Heading/Heading.uni.driver';
import { infoIconDriverFactory } from '../InfoIcon/InfoIcon.uni.driver';

export const sidePanelDriverFactory = (base, body) => {
  const headerTitle = headingUniDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderTitle}"]`),
  );

  const headerTitleInfoIcon = infoIconDriverFactory(base, body, {
    dataHook: dataHooks.sidePanelHeaderTitleInfoIcon,
  });

  const headerDividerDriver = dividerDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderDivider}"]`),
  );

  const footerDividerDriver = dividerDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderDivider}"]`),
  );

  const closeButtonDriver = closeButtonDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderCloseButton}"]`),
  );

  return {
    ...baseUniDriverFactory(base),

    /** Click close the button */
    clickClose: () => closeButtonDriver.click(),

    /** Get title text */
    getTitleText: () => headerTitle.getText(),
    /** Get tooltip text */
    getTooltipContent: () => headerTitleInfoIcon.getContent(),
    /** Check if header divider exists */
    isHeaderDividerExists: () => headerDividerDriver.exists(),
    /** Check if close button exists */
    isCloseButtonExists: () => closeButtonDriver.exists(),
    /** Check if footer divider exists */
    isFooterDividerExists: () => footerDividerDriver.exists(),
  };
};
