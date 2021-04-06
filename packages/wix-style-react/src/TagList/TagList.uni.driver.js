import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';
import { tagUniDriverFactory } from '../Tag/Tag.uni.driver';
import dataHooks from './dataHooks';

export const tagListDriverFactory = (base, body) => {
  const actionButton = buttonDriverFactory(
    base.$(`[data-hook="${dataHooks.actionButton}"]`),
  );
  const toggleMoreButton = buttonDriverFactory(
    base.$(`[data-hook="${dataHooks.toggleMoreButton}"]`),
  );

  return {
    ...baseUniDriverFactory(base, body),

    /** Get the action button label */
    actionButtonLabel: () => actionButton.getButtonTextContent(),
    /** Click action button */
    clickActionButton: () => actionButton.click(),
    /** Get if action button exists */
    actionButtonExists: () => actionButton.exists(),

    /** Get the toggle more button label */
    toggleMoreButtonLabel: () => toggleMoreButton.getButtonTextContent(),
    /** Click toggle more button */
    clickToggleMoreButton: () => toggleMoreButton.click(),
    /** Get if toggle more button exists */
    toggleMoreButtonExists: () => toggleMoreButton.exists(),

    /** Remove tag by id */
    removeTag: id => tagUniDriverFactory(base.$(`#${id}`)).removeTag(),
  };
};
