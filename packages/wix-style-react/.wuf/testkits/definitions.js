/*
 * This file exports object with config for component testkits.
 * Ideally there should be no config, it is used for cases that are not following convention.
 *
 * this is temporary and should be treated as a TODO list of things to fix (make consistent)
 */

module.exports = {
  BadgeSelect: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  BaseModalLayout: {
    skipSanityTest: true,
    noTestkit: true,
  },

  Table: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  TableActionCell: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  MultiSelect: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method
  },

  MultiSelectCheckbox: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true, // testkit does not have root `exists` method
  },

  DragAndDrop: { skipSanityTest: true, noTestkit: true },
  DragDropContextProvider: { skipSanityTest: true, noTestkit: true },

  EndorseContentLayout: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true,
  },

  GoogleAddressInput: {
    skipSanityTest: true,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit: true,
  },

  Grid: { skipSanityTest: true, noTestkit: true },
  Layout: { skipSanityTest: true, noTestkit: true },
  MessageBox: { skipSanityTest: true, noTestkit: true },

  Heading: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
    puppeteerTypeImportName: 'HeadingPuppeteerDriver',
  },

  Header: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    // TODO: this is actually  Card.Header, but is exported just as header
    testkitPath: '../src/Card/Header/Header.driver',
    skipSanityTest: true,
    exportName: 'CardHeader',

    protractorTestkitPath: '../src/Card/Header/Header.uni.driver',
    protractorTestkitExportName: 'cardHeaderTestkitFactory',

    puppeteerTestkitPath: '../src/Card/Header/Header.uni.driver',
    puppeteerTestkitExportName: 'cardHeaderTestkitFactory',

    unidriverPath: '../src/Card/Header/Header.uni.driver',
  },

  Page: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,
  },

  PageHeader: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,
    puppeteerTestkitPath: '../src/PageHeader/PageHeader.uni.driver',
  },

  Popover: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  TableToolbar: { skipSanityTest: true, noTestkit: true },
  Collapse: { skipSanityTest: true, noTestkit: true },
  Card: { skipSanityTest: true, noTestkit: true },
  Composite: { skipSanityTest: true, noTestkit: true },

  Text: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerLegacyTestkit: true,
    puppeteerTypeImportName: 'TextPuppeteerDriver',
  },

  Calendar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitPath: '../src/Calendar/Calendar.uni.driver',
  },

  CalendarPanel: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    puppeteerTestkitPath: '../src/CalendarPanel/CalendarPanel.uni.driver',
  },

  ContactItemBuilder: {
    skipSanityTest: true,
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    protractorTestkitPath:
      '../src/ContactItemBuilder/ContactItemBuilder.uni.driver',

    puppeteerTestkitPath:
      '../src/ContactItemBuilder/ContactItemBuilder.uni.driver',
  },

  Draggable: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/DragAndDrop/Draggable/Draggable.driver',
    skipSanityTest: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
    noUnidriver: true,
  },

  EditableRow: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/EditableSelector/EditableRow/EditableRow.driver',
    skipSanityTest: true,
    protractorTestkitPath:
      '../src/EditableSelector/EditableRow/EditableRow.uni.driver',

    puppeteerTestkitPath:
      '../src/EditableSelector/EditableRow/EditableRow.uni.driver',

    unidriverPath:
      '../src/EditableSelector/EditableRow/EditableRow.uni.driver',
  },

  FieldLabelAttributes: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/FieldLabelAttributes/FieldLabelAttributes.driver',
    skipSanityTest: true,
    noPuppeteerTestkit: true,
    noUnidriver: true,
  },

  Carousel: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  CarouselWIP: {
    exportName: 'CarouselWIP',
    protractorTestkitExportName: 'carouselWIP',
    puppeteerTestkitExportName: 'carouselWIP',
  },

  Input: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  DatePicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true
  },

  Dropdown: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  RadioButton: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/RadioGroup/RadioButton/RadioButton.driver',
    protractorTestkitPath:
      '../src/RadioGroup/RadioButton/RadioButton.protractor.driver',
    skipSanityTest: true,
    puppeteerTestkitPath:
      '../src/RadioGroup/RadioButton/RadioButton.uni.driver',
    unidriverPath:
      '../src/RadioGroup/RadioButton/RadioButton.uni.driver',
  },

  Radio: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  RadioGroup: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  MessageBoxMarketerialLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,

    testkitPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.driver',
    protractorTestkitPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver',

    puppeteerTestkitPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver',

    unidriverPath:
      '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver',
  },

  MessageBoxFunctionalLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    skipSanityTest: true,

    testkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.driver',

    protractorTestkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.protractor.driver',

    puppeteerTestkitPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver',

    unidriverPath:
      '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver',
  },

  CardSubheader: {
    testkitPath: '../src/Card/Subheader/Subheader.uni.driver',
    unidriverPath: '../src/Card/Subheader/Subheader.uni.driver',
    skipSanityTest: true,
    exportName: 'CardSubheader',
    protractorTestkitExportName: 'subheaderTestkitFactory',

    puppeteerTestkitExportName: 'subheaderTestkitFactory',
  },

  ListItemAction: {
    protractorTestkitExportName: 'ListItemActionTestkitFactory',

    puppeteerTestkitExportName: 'ListItemActionTestkitFactory',
  },

  Selector: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    testkitPath: '../src/Selector/Selector.driver',
    noProtractorTestkit: true,
    noPuppeteerTestkit: true, // was not exported before automation, keeping that way for now
  },

  LinearProgressBar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  CircularProgressBar: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  NoBorderInput: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  Modal: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    protractorTestkitPath: '../src/Modal/Modal.uni.driver',
  },

  ModalSelectorLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  TimeInput: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    protractorTestkitPath: '../src/TimeInput/TimeInput.uni.driver',
  },

  Notification: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorTestkitPath: '../src/Notification/Notification.uni.driver',

    puppeteerTestkitPath: '../src/Notification/Notification.uni.driver',
  },

  Skeleton: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  SortableList: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
    noUnidriver: true,
  },

  NestableList: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noProtractorTestkit: true,
    noPuppeteerTestkit: true,
    noUnidriver: true,
  },

  Badge: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  FloatingHelper: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  FormField: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  ToggleSwitch: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Highlighter: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
    noPuppeteerTestkit: true,
  },

  ColorPicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  FilePicker: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Checkbox: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Loader: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  InputArea: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Search: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  AutoComplete: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  EditableSelector: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  Tag: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  InputWithOptions: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Breadcrumbs: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  DropdownLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  EmptyState: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Tabs: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  AddItem: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  ImageViewer: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
  },

  SectionHelper: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  GenericModalLayout: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Slider: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  Range: {
    vanillaLegacyTestkit: true,
    enzymeLegacyTestkit: true,
    protractorLegacyTestkit: true,
  },

  AutoCompleteWithLabel: {
    namedProtractorTestkitExport: true,
    namedPuppeteerTestkitExport: true,
  },

  Themes: {
    skipSanityTest: true,
    noTestkit: true,
  },

  ThemeProvider: {
    skipSanityTest: true,
    noTestkit: true,
  },

  FailWhale: {
    skipSanityTest: true,
    noTestkit: true,
  }
};
