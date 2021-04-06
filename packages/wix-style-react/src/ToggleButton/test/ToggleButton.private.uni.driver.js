import { toggleButtonDriverFactory } from '../ToggleButton.uni.driver';
import { tooltipDriverFactory } from '../../Tooltip/Tooltip.uni.driver';

export const toggleButtonPrivateDriverFactory = (base, body) => {
  const tooltipTestkit = tooltipDriverFactory(
    base.$('[data-hook="toggle-button-tooltip"]'),
    body,
  );

  return {
    ...toggleButtonDriverFactory(base, body),
    getIconSize: async () =>
      await base.$('[data-hook="toggleButton-icon"]').attr('height'),
    mouseEnter: async () => await tooltipTestkit.mouseEnter(),
    tooltipExists: async () => await tooltipTestkit.tooltipExists(),
  };
};
