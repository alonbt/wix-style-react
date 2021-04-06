const modalPrefix = 'preview-modal';
const navigationButtonSuffix = `navigation-button-tooltip`;

export const modalPreviewIDs = {
  overlay: `${modalPrefix}-overlay`,
  innerOverlay: `${modalPrefix}-inner-overlay`,
};

export const arrowsDirection = {
  rightArrow: 'right-arrow',
  leftArrow: 'left-arrow',
};

export const dataHooks = {
  modalPreviewActions: `${modalPrefix}-actions`,
  modalPreviewCloseButton: `${modalPrefix}-close-button`,
  modalPreviewTitle: `${modalPrefix}-title`,
  modalPreviewContent: `${modalPrefix}-content`,
  modalPreviewRightArrow: `${modalPrefix}-${arrowsDirection.rightArrow}`,
  modalPreviewLeftArrow: `${modalPrefix}-${arrowsDirection.leftArrow}`,
  nextNavigationButtonTooltip: `next-${navigationButtonSuffix}`,
  prevNavigationButtonTooltip: `prev-${navigationButtonSuffix}`,
  closeButtonTooltip: `close-button-tooltip`,
  ...modalPreviewIDs,
};
