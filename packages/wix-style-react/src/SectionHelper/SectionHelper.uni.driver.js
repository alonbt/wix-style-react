import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';
import { Appearance } from './constants';

export const sectionHelperUniDriverFactory = base => {
  const actionButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="sectionhelper-action-btn"]'));
  const closeButtonDriver = () =>
    buttonDriverFactory(base.$('[data-hook="sectionhelper-close-btn"]'));
  const hasAppearance = async appearance =>
    (await base.attr('data-appearance')) === appearance;

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets the title text
     * @return {Promise<string>}
     */
    titleText: () => base.$('[data-hook="sectionhelper-title"]').text(),

    /**
     * Gets the action text
     * @return {Promise<string>}
     */
    actionText: () => actionButtonDriver().getButtonTextContent(),

    /**
     * Clicks the action
     * @return {Promise<void>}
     */
    clickAction: () => actionButtonDriver().click(),

    /**
     * Clicks the close button
     * @return {Promise<void>}
     */
    clickClose: () => closeButtonDriver().click(),

    /**
     * Checks whether the close button is displayed
     * @return {Promise<boolean>}
     */
    isCloseButtonDisplayed: () => closeButtonDriver().exists(),

    /**
     * Gets the text content
     * @return {Promise<string>}
     */
    textContent: () => base.text(),

    /**
     * Checks whether the component appears as "warning"
     * @return {Promise<boolean>}
     */
    isWarning: () => hasAppearance(Appearance.Warning),

    /**
     * Checks whether the component appears as "standard"
     * @return {Promise<boolean>}
     */
    isStandard: () => hasAppearance(Appearance.Standard),

    /**
     * Checks whether the component appears as "danger"
     * @return {Promise<boolean>}
     */
    isDanger: () => hasAppearance(Appearance.Danger),

    /**
     * Checks whether the component appears as "experimentalDark"
     * @return {Promise<boolean>}
     */
    isExperimentalDark: () => hasAppearance(Appearance.ExperimentalDark),

    /**
     * Checks whether the component appears as "success"
     * @return {Promise<boolean>}
     */
    isSuccess: () => hasAppearance(Appearance.Success),

    /**
     * Checks whether the component appears as "premium"
     * @return {Promise<boolean>}
     */
    isPremium: () => hasAppearance(Appearance.Premium),

    /**
     * Checks whether the component appears as "preview"
     * @return {Promise<boolean>}
     */
    isPreview: () => hasAppearance(Appearance.Preview),
  };
};
