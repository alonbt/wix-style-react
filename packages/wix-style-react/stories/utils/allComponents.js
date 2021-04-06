import * as Icons from 'wix-ui-icons-common';
import * as SystemIcons from 'wix-ui-icons-common/system';
import * as wsr from '../../src/index';
import * as editorX from '../../src/Themes/editorX';
import * as businessDashboard from '../../src/Themes/businessDashboard';
import * as floatingPanels from '../../src/Themes/floatingPanels';
import AtlasAddressInput from '../../src/AtlasAddressInput';
import { StorybookComponents } from 'wix-storybook-utils/StorybookComponents';
import { theme as businessDashboardTheme } from '../../src/Themes/businessDashboard';
import { theme as editorXTheme } from '../../src/Themes/editorX';
import { theme as floatingPanelsTheme } from '../../src/Themes/floatingPanels';

export const themes = {
  businessDashboardTheme,
  editorXTheme,
  floatingPanelsTheme,
};

// Internal Wix components which depend on private Wix dependencies
const privateComponents = {
  AtlasAddressInput,
};

/*
 * This object contains all wix-style-react components including icons
 * It is used mainly for documentation in LiveCodeExample and code section.
 */
const defaultComponents = {
  ...wsr,
  ...privateComponents,
  ...themes,
  StorybookComponents,
  Icons,
  SystemIcons,
};

export default defaultComponents;

export const floatingPanelsComponents = {
  ...defaultComponents,
  ...floatingPanels,
};

export const editorXComponents = {
  ...defaultComponents,
  ...editorX,
};

export const businessDashboardComponents = {
  ...defaultComponents,
  ...businessDashboard,
};
