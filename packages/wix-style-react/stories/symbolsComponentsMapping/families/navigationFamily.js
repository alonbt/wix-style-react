import { navigationSymbols } from '../symbols';
import { navigationComponentsNames as componentsNames } from '../components';

/**
 * Symbol => Component 6
 */
export const navigationSymbolsToComponents = {
  [navigationSymbols.sidebarMenu]: [
    componentsNames.Sidebar,
    componentsNames.SidebarHeader,
    componentsNames.SidebarDivider,
    componentsNames.SidebarSectionItem,
    componentsNames.SidebarSectionTitle,
    componentsNames.SidebarBackButton,
  ],

  [navigationSymbols.treeNavigation]: [],

  [navigationSymbols.textTabs]: [componentsNames.Tabs],

  [navigationSymbols.verticalTabs]: [
    componentsNames.VerticalTabs,
    componentsNames.VerticalTabsItem,
  ],

  [navigationSymbols.topBar]: [],

  [navigationSymbols.stepper]: [componentsNames.Stepper],

  [navigationSymbols.composerHeader]: [componentsNames.ComposerHeader],

  [navigationSymbols.composerSidebar]: [componentsNames.ComposerSidebar],

  [navigationSymbols.pagination]: [componentsNames.Pagination],
};
