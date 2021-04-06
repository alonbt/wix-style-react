export const THEMES = {
  standard: 'standard',
  error: 'error',
  success: 'success',
  warning: 'warning',
  premium: 'premium',
};

export const ACTION_BUTTON_TYPES = {
  textLink: 'textLink',
  button: 'button',
};

const prefix = 'notification';

export const dataHooks = {
  notificationContent: `${prefix}-content`,
  notificationCloseButton: `${prefix}-close-button`,
  notificationLabel: `${prefix}-label`,
  notificationCtaButton: `${prefix}-cta-button`,
};

export const TYPE_POSITIONS_MAP = {
  relative: 'global',
  absolute: 'local',
  fixed: 'sticky',
};
