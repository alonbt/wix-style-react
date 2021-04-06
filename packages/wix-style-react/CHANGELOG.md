# Changelog

All notable changes are being documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes
1. **Docs** for documentation changes
1. **Lab** components and features that are still in a work in progress

## 9.98.0 - 2021-04-06
### Changed
- BusinessDashboard Theme | < IconButton /> - Changed inverted hover color [#7006](https://github.com/wix/wix-style-react/pull/7006)

### Fixed
- `<Page.Sticky/>` - fix `style` prop proptype [#7007](https://github.com/wix/wix-style-react/pull/7007)
-`<AnalyticsSummaryCard />` - fix typo in isTrendVisible types [#7001](https://github.com/wix/wix-style-react/pull/7001)

## 9.97.0 - 2021-04-05
### Deprecated
- `<Grid/>` - deprecate component

## 9.96.0 - 2021-03-31
### Added
- `<Calendar/>` - vietnamese localization [#6990](https://github.com/wix/wix-style-react/pull/6990)

## 9.95.0 - 2021-03-30
### Changed
- Typography - [Temporary] Use Arial for vietnamese (instead of Madefor)

### Fixed
- `<ListItemAction/>` - remove unexpected title attribute tooltip [#6974](https://github.com/wix/wix-style-react/pull/6974)
- `<TableListItem/>` - cannot stretch value to 100% [#6960](https://github.com/wix/wix-style-react/pull/6960)

### Added
- `<DropdownBase/>` - add onShow, onHide props [#6978](https://github.com/wix/wix-style-react/pull/6978)

## 9.94.0 - 2021-03-26
### Fixed
- `<DatePicker/>` - props excludePastDates and filterDate collide bugfix [#6956](https://github.com/wix/wix-style-react/pull/6956)
- `<TableListItem/>` - Fix TableActionCell visibility on hover [#6972](https://github.com/wix/wix-style-react/pull/6972)

### Changed
-  Themes | Business Dashboard - Button - update inverted button hover [#6957](https://github.com/wix/wix-style-react/pull/6957)

## 9.93.0 - 2021-03-22
### Added
- `<SocialPreview/>` - add support for twitter preview [#6922](https://github.com/wix/wix-style-react/pull/6922)
- BusinessDashboard Theme | Override Divider dark skin - [#6946](https://github.com/wix/wix-style-react/pull/6946)

## 9.92.0 - 2021-03-18
### Added
- `<Box/>` -  add gap prop [#6929](https://github.com/wix/wix-style-react/pull/6929)

### Fixed
- `<DropdownLayout />` - fix uni driver when using infinite scroll [#6937](https://github.com/wix/wix-style-react/pull/6937)
- Themes | Business Dashboard - Fix theme margin rule [#6934](https://github.com/wix/wix-style-react/pull/6934)

### Changed
- `<SidePanel.Header/>` - Changed tooltip content from string to node [#6938](https://github.com/wix/wix-style-react/pull/6938)
- `<PageSection />` - changed title from string to node [#6942](https://github.com/wix/wix-style-react/pull/6942)

## 9.91.0 - 2021-03-17
### Added
- `<SelectableAccordion />` -  add disabled property to items list [#6928](https://github.com/wix/wix-style-react/pull/6928)

### Changed
- `<Page/>` - change default min and max width according to new spec [#6794](https://github.com/wix/wix-style-react/pull/6794)

## 9.90.0 - 2021-03-16
### Added
- `<DatePicker />`-  add clear button prop [#6890](https://github.com/wix/wix-style-react/pull/6890)

### Changed
- Themes | Business Dashboard - Empty State children top margin [#6918](https://github.com/wix/wix-style-react/pull/6918)
- `<Radio/>` - change onChange type [#6921](https://github.com/wix/wix-style-react/pull/6921)

## 9.89.0 - 2021-03-15
### Fixed
- `<ModalPreviewLayout/>` - fix white tooltip [#6908](https://github.com/wix/wix-style-react/pull/6908)
- `<Radio/>` - a11y fixed in order for screen reader to be able to read label [#6904](https://github.com/wix/wix-style-react/pull/6904)
- `<TextButton/>` - add missing proptype value for "destructive" skin [#6915](https://github.com/wix/wix-style-react/pull/6915)
- Themes | Business Dashboard - Badge - Restore small badge styling override by theme [#6894](https://github.com/wix/wix-style-react/pull/6894)

### Added
- `<TableActionCell/>`- add primaryAction icon affixes [#2056](https://github.com/wix/wix-ui/pull/2056)
- Themes | Business Dashboard - Update thumbnail theme  [#6903](https://github.com/wix/wix-style-react/pull/6903)
- Themes | Business Dashboard - TableListItem - add theme [#6827](https://github.com/wix/wix-style-react/pull/6827)
- `<Calendar/>`- add `today` prop [#6911](https://github.com/wix/wix-style-react/pull/6911)
- `<DatePicker />`-  add readOnly prop and add examples to width prop [#6871](https://github.com/wix/wix-style-react/pull/6871)
- `<SelectorList />` - add method to reload data from dataSource [#6913](https://github.com/wix/wix-style-react/pull/6913)
- `<HorizontalTimeline/>`  - testkit - getLabel() method [#6826](https://github.com/wix/wix-style-react/pull/6826)

### Deprecated
- `<Skeleton/>` - deprecate component

## 9.88.0 - 2021-03-10
### Added
- `<Button />` - testkit -  expose `isPrefixIconExists` and `isSuffixIconExists` [6898](https://github.com/wix/wix-style-react/pull/6898)

### Fixed
- `<SectionHelper` - fix close button position [#6845](https://github.com/wix/wix-style-react/pull/6865)
- `<InputWithOptions/>` - use props.value for highlighting [#6895](https://github.com/wix/wix-style-react/pull/6895)
- `<Accordion/>` - fix item header on hover [#6883](https://github.com/wix/wix-style-react/pull/6883)
- `<Checkbox/>` - fix label when disabled [#6882](https://github.com/wix/wix-style-react/pull/6882)
- `<inputWithOptions/>` - fix onfocus triggered twice when suffix icon is clicked [#6873](https://github.com/wix/wix-style-react/pull/6873)
- Fix Stylable warnings [#6901](https://github.com/wix/wix-style-react/pull/6901)
- `<RadioGroup/>` - make arrows navigate between radio items [#6881](https://github.com/wix/wix-style-react/pull/6881)

## 9.87.0 - 2021-03-07
### Fixed
- `<Table/>`  - stop propogation for disabled checkbox [#6845](https://github.com/wix/wix-style-react/pull/6845)
- `<TableListItem/>` - enable ellipsis support for value property [#6868](https://github.com/wix/wix-style-react/pull/6868)
- `<Tooltip/>` - fix pupeeteer testkit [#6859](https://github.com/wix/wix-style-react/pull/6859)
- `<Avatar/>` - fix incorrect text style [#6848](https://github.com/wix/wix-style-react/pull/6848)
- `<PopoverMenu` - fix incorrect padding [#6860](https://github.com/wix/wix-style-react/pull/6860)

### Added
- `<DatePicker />` - add size prop [#6861](https://github.com/wix/wix-style-react/pull/6861)

### Deprecated
- `<NoBorderInput/>` - deprecate component [#6862](https://github.com/wix/wix-style-react/pull/6862)

### Changed
- `Themes | Business Dashboard` - Text - update colors [#6854](https://github.com/wix/wix-style-react/pull/6854)
- `<Table/>` - migrate to stylable [#6874](https://github.com/wix/wix-style-react/pull/6874)

## 9.86.0 - 2021-03-01
### Added
- `<Calendar/>` - add the missing locales [#6824](https://github.com/wix/wix-style-react/pull/6824)
- `<AddItem />` - added `icon` prop for illustrations [#6786](https://github.com/wix/wix-style-react/pull/6786)

### Changed
- `<RadioGroup/>` - refactor to use Radio component [#6767](https://github.com/wix/wix-style-react/pull/6767)

### Fixed
- `<Badge/>`-  fix font color when it is wider then max width [#6809](https://github.com/wix/wix-style-react/pull/6809)
- `<Badge/>`-  fix icon to correct size [#6823](https://github.com/wix/wix-style-react/pull/6823)
- `<Modal/>` - fix closing nested modals [#6839](https://github.com/wix/wix-style-react/pull/6839)
- `<Calendar />` - fix behavior when focusing on header and pressing arrows [##6846](https://github.com/wix/wix-style-react/pull/6846)
- `<RadioGroup/>` - fix puppeteer testkit - check not working [#6767](https://github.com/wix/wix-style-react/pull/6767)
- `<RadioGroup/>` - custom children are not stretched to full width [#6767](https://github.com/wix/wix-style-react/pull/6767)

## 9.85.0 - 2021-02-23
### Added
- `<Table/>`-  introduce predicate function for selectionDisabled for disabling certain rows from selecting [#6753](https://github.com/wix/wix-style-react/pull/6753)
- `<AvatarGroup/>`- new component [#6584](https://github.com/wix/wix-style-react/pull/6584)

### Changed
- `<Thumbnail/>` - change tiny text to bold [#6807](https://github.com/wix/wix-style-react/pull/6807)

### Fixed
- `<Input/>` - Fix styles for FireFox [#6808](https://github.com/wix/wix-style-react/pull/6808)

## 9.84.2 - 2021-02-21
### Added
- `Themes | Business Dashboard` - Updating list actions item disabled state [#6803](https://github.com/wix/wix-style-react/pull/6803)

### Fixed
- `DraftJsUtils` - FocusOnRichEditor extract element from unidriver [#6799](https://github.com/wix/wix-style-react/pull/6799), [#6804](https://github.com/wix/wix-style-react/pull/6804)

## 9.84.0 - 2021-02-21
### Added
- `<AddItem/>`- add `subtitle` prop [#6699](https://github.com/wix/wix-style-react/pull/6699)
- `<VariableInput/>` - add onFocus callback and focus to driver [#6797](https://github.com/wix/wix-style-react/pull/6797)

### Changed
- `<Calendar/>` - adjusting the date indication size [#6787](https://github.com/wix/wix-style-react/pull/6787)

### Fixed
- `<AddItem/>` - fixed `disabled` button background colour for `plain` theme [#6792](https://github.com/wix/wix-style-react/pull/6792)
- `<VariableInput/>` - Use regex.exec instead of matchAll [#6791](https://github.com/wix/wix-style-react/pull/6791)

## 9.83.0 - 2021-02-18
### Added
- `<PreviewWidget/>`- add `none` option for contentOutline [#6777](https://github.com/wix/wix-style-react/pull/6777)
- `<Timeline/>` - add `gap` prop [#6739](https://github.com/wix/wix-style-react/pull/6739)

### Fixed
- `<VariableInput />` - Fix emoji utf splitting issue [#6768](https://github.com/wix/wix-style-react/pull/6768)
- `<Modal/>` - Added screen prop typings [#6775](https://github.com/wix/wix-style-react/pull/6775)
- `<ListItemSelect/>` - fix type [#6778](https://github.com/wix/wix-style-react/pull/6778)

### Changed
- `Themes | Business Dashboard` -`<CounterBadge />` - revert newDashboard theme changes [#6743](https://github.com/wix/wix-style-react/pull/6743)

## 9.82.0 - 2021-02-17
### Fixed
- `<DatePicker/>` - fix types typo [#6740](https://github.com/wix/wix-style-react/pull/6740)

### Added
- `<PageSection/>` - new component [#6686](https://github.com/wix/wix-style-react/pull/6686)

## 9.81.0 - 2021-02-16
### Fixed
- `<PulseAnimation/>` - fix click on children [#6742](https://github.com/wix/wix-style-react/pull/6742)

### Added
- `<InputWithOptions/>` - add missing disabled prop to native select [#6749](https://github.com/wix/wix-style-react/pull/6749)

## 9.80.0 - 2021-02-10
### Added
- `Themes | Business Dashboard` - add `<CounterBadge/>` stylable rule to the theme  [#6721](https://github.com/wix/wix-style-react/pull/6721)
- `<MarketingLayout/>` - adding `direction` prop [#6691](https://github.com/wix/wix-style-react/pull/6691)
- `<PulseAnimation/>` - add new component [#6656](https://github.com/wix/wix-style-react/pull/6656)

### Fixed
- `<Animate/>` - rename prop (internal component) [#6730](https://github.com/wix/wix-style-react/pull/6730)

## 9.79.0 - 2021-02-08
### Added
- `<CounterBadge/>` - Add style for newDashboard theme [#6710](https://github.com/wix/wix-style-react/pull/6710)
- `<Calendar/>` - add an onMonthChange prop (register a listener to setMonth event) [#6716](https://github.com/wix/wix-style-react/pull/6716)

### Fixed
- `<RadioGroup>` - reverting changes from previous version [#6719](https://github.com/wix/wix-style-react/pull/6719)

## 9.78.1 - 2021-02-07
### Fixed
- `<RadioGroup/>` - [testkit] - fix legacy testkit [#6712](https://github.com/wix/wix-style-react/pull/6712)
- Readme - fix link to Storybook [#6711](https://github.com/wix/wix-style-react/pull/6711)

## 9.78.0 - 2021-02-04
### Changed
- `<DatePicker/>` - implement localization fixes [#6684](https://github.com/wix/wix-style-react/pull/6684)

### Fixed
- `<Tooltip/>` - scope classnames targeting to immediate child [#6700](https://github.com/wix/wix-style-react/pull/6700)

### Docs
- `<SelectorList/>` - fix testkit docs [#6703](https://github.com/wix/wix-style-react/pull/6703)

## 9.77.0 - 2021-02-03
### Added
- `<AddItem/>` - add support for tooltip [#6666](https://github.com/wix/wix-style-react/pull/6666)

### Fixed
- `<MarketingLayout/>` - fix height and width when align items stretch [#6698](https://github.com/wix/wix-style-react/pull/6698)
- `<RadioGroup />` - fix puppeteer testkit - `check` not working [#6649](https://github.com/wix/wix-style-react/pull/6649)
- `<RadioGroup/>` - custom children are not stretched to full width [#6649](https://github.com/wix/wix-style-react/pull/6649)

## Changed
- `<RadioGroup/>` - refactor to use <Radio/> component [#6649](https://github.com/wix/wix-style-react/pull/6649)

### Deprecated
- `<CustomModalLayout/>` - deprecate hideContentDividers prop [#6696](https://github.com/wix/wix-style-react/pull/6696)

## 9.76.0 - 2021-02-02
### Changed
- `<MarketingLayout/>` - made root flex when align items stretch [#6681](https://github.com/wix/wix-style-react/pull/6681)

### Fixed
- `<Input/>` - fix prefix/suffix break line [#6695](https://github.com/wix/wix-style-react/pull/6695)
- `<InputWithOptions/>` - fix unable to focus editable option [#6670](https://github.com/wix/wix-style-react/pull/6670)
- `<Table/>`, `<TableListItem/>`,`<SelectableAccordion/>`- reduce spacing corrections [#6668](https://github.com/wix/wix-style-react/pull/6668)
- `<Calendar/>` - Add A11Y example and make some changes according to Neil's review [#6655](https://github.com/wix/wix-style-react/pull/6655)

## 9.75.0 - 2021-02-01
### Added
- `<StatisticWidget/>` - reduce spacing (feature toggle) [#6661](https://github.com/wix/wix-style-react/pull/6661)
- `<Radio/>` - add getId() testkit method [#6662](https://github.com/wix/wix-style-react/pull/6662)

### Changed
- `<CarouselWIP/>` - change sides gradient width [#6657](https://github.com/wix/wix-style-react/pull/6657)

### Fixed
- `<SidebarBackButton/>` - Update animateArrow prop type to boolean [#6671](https://github.com/wix/wix-style-react/pull/6671)
- `<DatePicker/>` - fix UniDriver's open method on puppeteer [#6669](https://github.com/wix/wix-style-react/pull/6669)
- `<TableActionCell/>` - fix testkit initialization [#6678](https://github.com/wix/wix-style-react/pull/6678)

## 9.74.1 - 2021-01-28
### Fixed
- `<Calendar/>` - change arrows to buttons [#6635](https://github.com/wix/wix-style-react/pull/6635)
- `<Search/>` - fix flaky e2e test [#6654](https://github.com/wix/wix-style-react/pull/6654)
- `<InputWithOptions/>` - don't call onFocus when re-focusing input after selecting option [#6653](https://github.com/wix/wix-style-react/pull/6653)

### Added
- `<Card/>`- reduce spacing (feature toggle) [#6590](https://github.com/wix/wix-style-react/pull/6590)


## 9.74.0 - 2021-01-26
### Fixed
- `<Badge/>` and `<CounterBadge/>` - fix swedish letters get cut [#6637](https://github.com/wix/wix-style-react/pull/6637)
- `<InputWithOptions/>` - fix onBlur is called when selecting an option with the cursor [#6620](https://github.com/wix/wix-style-react/pull/6620)
- `<Calendar/>` - Fix ReactDayPicker warning [#6643](https://github.com/wix/wix-style-react/pull/6643)

### Added
- `<BaseModalLayout/>` - reduce spacing (feature toggle) [#6621](https://github.com/wix/wix-style-react/pull/6621)
- `<Accodrion/>` - reduce spacing (feature toggle) [#6615](https://github.com/wix/wix-style-react/pull/6615)
- `<Calendar/>` - change the header navigation order [#6605](https://github.com/wix/wix-style-react/pull/6605)
- `<Radio/>` - add value/style props and legacy driver [#6645](https://github.com/wix/wix-style-react/pull/6645)

### Docs
- `<AddressInput/>` - improve docs [#6604](https://github.com/wix/wix-style-react/pull/6604)

## 9.73.0 - 2021-01-25
### Added
- `<Calendar/>` - Add role="alert" to the wrapper container in Header [#6619](https://github.com/wix/wix-style-react/pull/6619)
- `<DatePicker/>` - add aria labels props and pass them to the Calendar [#6630](https://github.com/wix/wix-style-react/pull/6630)
- `<Calendar/>` - Add aria label to weekdayElement [#6633](https://github.com/wix/wix-style-react/pull/6633)
- `<CounterBadge/>` - Add light skin and shadow prop [#6614](https://github.com/wix/wix-style-react/pull/6614)
- `Themes | Business Dashboard` - LinearProgressBar error state [#6622](https://github.com/wix/wix-style-react/pull/6622)
- `Themes | Business Dashboard` - Tag - Set override only for lightOutlined and medium [#6554](https://github.com/wix/wix-style-react/pull/6554)
- `Themes | Business Dashboard` - VerticalTabsItem update [#6595](https://github.com/wix/wix-style-react/pull/6595)

### Fixed
- `<Sidebar/>` - fix gradient for inner menu [#6634](https://github.com/wix/wix-style-react/pull/6634)

### Changed
- `<AtlasAddressInput/>` - rename fallbackToManual to selectOnSubmit [#6625](https://github.com/wix/wix-style-react/pull/6625)

## 9.72.0 - 2021-01-22
### Changed
- `<Modal/>` - updated storybook examples with new prop `screen` [#6617](https://github.com/wix/wix-style-react/pull/6617)
- `Themes | Business Dashboard - Thumbnail` - Update box-shadow style on selected [#6575](https://github.com/wix/wix-style-react/pull/6575)

### Fixed
- `<Input/>` - fixed chrome autofill styles [#6586](https://github.com/wix/wix-style-react/pull/6586)
- `useCopyClipboard` - introduce browser api polyfills to cover CopyClipboard in JSDOM [#6628](https://github.com/wix/wix-style-react/pull/6628)

## 9.71.0 - 2021-01-21
### Added
- `<Modal/>`- add screen prop [#6556](https://github.com/wix/wix-style-react/pull/6556)
- `<Page/>`- reduce spacing (feature toggle)[#6609](https://github.com/wix/wix-style-react/pull/6609)
- `<Calendar/>`- Head - add aria-label and aria-labelledby to arrows [#6610](https://github.com/wix/wix-style-react/pull/6610)
- `<Calendar/>`- add a11y attributes to month and year dropdown in header [#6572](https://github.com/wix/wix-style-react/pull/6572)

### Fixed
- `<Card.Subheader/>`- reduce spacing (feature toggle)[#6592](https://github.com/wix/wix-style-react/pull/6592)

## 9.70.0 - 2021-01-20
### Added
- `<MarketingLayout/>`- reduce spacing (feature toggle) [#6568](https://github.com/wix/wix-style-react/pull/6568)
- `<AddressInput/>` - add highlighting [#6594](https://github.com/wix/wix-style-react/pull/6594)

### Changed
- `<CardFolderTab/>` - change name to node [#6598](https://github.com/wix/wix-style-react/pull/6598)
- VanillaTestkitParams.wrapper: `HTMLElement` -> `Element` [#6599](https://github.com/wix/wix-style-react/pull/6599)
- `<Badge/>` - change cursor to be inherit [#6596](https://github.com/wix/wix-style-react/pull/6596)
- `Themes | Business Dashboard - CustomModalLayout` - update scrollbar colors [#6574](https://github.com/wix/wix-style-react/pull/6574)
- `Themes | Business Dashboard - Text` - add error skin override [#6576](https://github.com/wix/wix-style-react/pull/6576)

### Changed
- `<Accordion/>` - Remove last item bottom shadow [#6597](https://github.com/wix/wix-style-react/pull/6597)

## 9.69.0 - 2021-01-18
### Added
- `<Calendar/>` -  Add day indication slot[#6495](https://github.com/wix/wix-style-react/pull/6495)
- `<DropdownLayout/>` - support puppeteer in mouseLeave function [#6469](https://github.com/wix/wix-style-react/pull/6469)
- `<AtlasAddressInput/>` - add fallbackToManual prop [#6566](https://github.com/wix/wix-style-react/pull/6566)

### Fixed
- `<Text/>` - fix cursor for inner links [#6571](https://github.com/wix/wix-style-react/pull/6571)
- `Themes | Business Dashboard` - fix checkbox hover [#6567](https://github.com/wix/wix-style-react/pull/6567)
- `<Calendar/>` - close month and year dropdown after selection [#6565](https://github.com/wix/wix-style-react/pull/6565)

## 9.68.0 - 2021-01-14
### Fixed
- `<Search/>` - fix clicking search icon to focus the input [#6550](https://github.com/wix/wix-style-react/pull/6550)

### Added
- `<AnalyticsLayout/>` - added rowItemsCount [#6548](https://github.com/wix/wix-style-react/pull/6548)
- `<AtlasAddressInput/>` - add onError prop for error handling [#6553](https://github.com/wix/wix-style-react/pull/6553)
- `<SkeletonGroup/>` - created new skeleton components [#6141](https://github.com/wix/wix-style-react/pull/6141)
- `<PopoverMenu/>` - pass isOpen prop to triggerElement [#6543](https://github.com/wix/wix-style-react/pull/6543)

### Changed
- `<ListItemAction/>` - allow events on disabled [#6560](https://github.com/wix/wix-style-react/pull/6560)

### Docs
- `<InputWithOptions/>` - expose existing class methods in types [#6549](https://github.com/wix/wix-style-react/pull/6549)

## 9.67.0 - 2021-01-13
### Added
- `Themes | Business Dashboard` - Tag - styling override [#6514](https://github.com/wix/wix-style-react/pull/6514)
- `Themes | Business Dashboard` - VerticalTabsItem styling [#6540](https://github.com/wix/wix-style-react/pull/6540)

### Fixed
- `<Tabs/>` - fix testing in puppeteer [#6533](https://github.com/wix/wix-style-react/pull/6533)
- `<InputWithOptions/>` - fix highlighting for builder options [#6538](https://github.com/wix/wix-style-react/pull/6538)

### Changed
- `<GoogleAddressInput/>` - migrate to Stylable [#6544](https://github.com/wix/wix-style-react/pull/6544)

## 9.66.0 - 2021-01-11
### Added
- `<Input/>` - add border prop [#6496](https://github.com/wix/wix-style-react/pull/6496)
- `<Accordion/>` - Add accordionSectionItem [#6475](https://github.com/wix/wix-style-react/pull/6475)
- `<DatePicker/>` - New Unidriver testkit [#6466](https://github.com/wix/wix-style-react/pull/6466)
- `<SidePanel/>` - adding support for noPadding [#6517](https://github.com/wix/wix-style-react/pull/6517)
- `Themes | Business Dashboard` - Checkbox - Add checkbox to dashboard storybook [#6511](https://github.com/wix/wix-style-react/pull/6511)
- `Themes | Business Dashboard` - Thumbnail - Style override [#6531](https://github.com/wix/wix-style-react/pull/6531)
- `<Table/>` - reduce spacing (feature toggle) and add `tiny` to `rowVerticalPadding` prop [#6488](https://github.com/wix/wix-style-react/pull/6488)

### Fixed
- `<MultiSelectCheckbox/>` - make delimiter parameter optional for getLabel and getLabelAt [#6537](https://github.com/wix/wix-style-react/pull/6537)
- `<AddressInput/>` - disable browser autofill [#6532](https://github.com/wix/wix-style-react/pull/6532)
- `<Tabs/>` - fix testing in puppeteer [#6533](https://github.com/wix/wix-style-react/pull/6533)

### Changed
- `<AtlasAddressInput/>` (WIP) - replace `headers` prop with `token` prop [#6527](https://github.com/wix/wix-style-react/pull/6527)

### Docs
- `<DatePicker/>` - Update locale example [#6529](https://github.com/wix/wix-style-react/pull/6529)

## 9.65.0 - 2021-01-08
### Added
- `<Accordion/>` - add bottom shadow to open item [#6509](https://github.com/wix/wix-style-react/pull/6509)
- `Themes | Business Dashboard` - LinearProgressBar - add standard skin color override [#6504](https://github.com/wix/wix-style-react/pull/6504)
- `Themes | Business Dashboard` - CloseButton - Add theme style [#6506](https://github.com/wix/wix-style-react/pull/6506)

### Fixed
- `<Tag/>` - prevent onClick firing when its undefined [#6521](https://github.com/wix/wix-style-react/pull/6521)

### Docs
- `<AddressInput/>` - move story to components category [#6508](https://github.com/wix/wix-style-react/pull/6508)

## 9.64.0 - 2021-01-07
### Added
- `<TableListItem/>`- reduce spacing (feature toggle) and add `tiny` to `verticalPadding` prop [#6470](https://github.com/wix/wix-style-react/pull/6470)
- `<Card.Subheader/>`- reduce spacing (feature toggle) [#6452](https://github.com/wix/wix-style-react/pull/6452)
- `<SelectableAccordion/>`- reduce spacing (feature toggle) and adding `verticalPadding` prop [#6479](https://github.com/wix/wix-style-react/pull/6479)
- `<FormField/>`- reduce spacing and deprecate `labelSize` prop [#6439](https://github.com/wix/wix-style-react/pull/6439)

### Changed
- `Themes | Business Dashboard` - Badge - add urgent skin color override [#6505](https://github.com/wix/wix-style-react/pull/6505)

### Fixed
- `<MultiSelectCheckbox/>` - <MultiSelectCheckbox/> - [testkit] fix getLabels and getLabelAt functions [#6482](https://github.com/wix/wix-style-react/pull/6482)

### Changed
- `<Tag/>` - migrate to stylable [#6432](https://github.com/wix/wix-style-react/pull/6432)

## 9.63.0 - 2021-01-06
### Added
- `Themes | Business Dashboard` - add 3 more colors [#6498](https://github.com/wix/wix-style-react/pull/6498)
- `<ColorPicker/> `- reduce spacing (feature toggle) [#6441](https://github.com/wix/wix-style-react/pull/6441)

### Fixed
- `<Sidebar/>` - fix inner div scrollbar to be hidden [#6499](https://github.com/wix/wix-style-react/pull/6499)
- `<Checkbox/>` - fix disabled prop overrides tooltipProps [#6486](https://github.com/wix/wix-style-react/pull/6486)

## 9.62.1 - 2021-01-05
### Fixed
- `<StatisticsWidget/>` - fixed padding for size tiny [#6472](https://github.com/wix/wix-style-react/pull/6472)
- `<Sidebar/>` - show gradient dynamically [#6471](https://github.com/wix/wix-style-react/pull/6471)

### Added
- `<GooglePreview>` - Add `titleMaxLines`, `descriptionMaxLines` and `skin` props [#6474](https://github.com/wix/wix-style-react/pull/6474)

### Changed
- `<InputArea>` - move cursor to end on autoFocus [#6483](https://github.com/wix/wix-style-react/pull/6483)
- `<AtlasAddressInput/>` - export component from subfolder [#6485](https://github.com/wix/wix-style-react/pull/6485)

### Internal
- Remove Axios [#6497](https://github.com/wix/wix-style-react/pull/6497)

## 9.61.0 - 2021-01-04
### Added
- `<Accordion/>` - Add items size prop [#6436](https://github.com/wix/wix-style-react/pull/6436)
- `<TableActionCell/>` - [Testkit] expose puppeteer testkit [#6476](https://github.com/wix/wix-style-react/pull/6476)
- `<AtlasAddressInput/>` - add additional props [#6447](https://github.com/wix/wix-style-react/pull/6447)

### Changed
- Updated typescript version to `^3.9.7` [#6467](https://github.com/wix/wix-style-react/pull/6467)
- `<AtlasAddressInput/>` - get place details on onSelect [#6481](https://github.com/wix/wix-style-react/pull/6481)

## 9.60.1 - 2020-12-30
### Fixed
- `<SelectorList/>` - css fix [#6465](https://github.com/wix/wix-style-react/pull/6465)

## 9.60.0 - 2020-12-30
### Added
- `<Accordion/>` - Add a `node` button type [#6459](https://github.com/wix/wix-style-react/pull/6459)
- `<FunnelChart>` - add `displayValue` prop [#6457](https://github.com/wix/wix-style-react/pull/6457)

### Fixed
- `<StyledNestableList/>` UI fixes, a11ty [#6416](https://github.com/wix/wix-style-react/pull/6416)
- `<AnalyticsLayout/>` - fix Cell export [#6456](https://github.com/wix/wix-style-react/pull/6456)

## 9.59.0 - 2020-12-28
### Fixed
- `<AtlasAddressInput/>` - remove export from index [#6451](https://github.com/wix/wix-style-react/pull/6451)

### Changed
- `<AddItem/>` - remove pointer events on disabled [#6449](https://github.com/wix/wix-style-react/pull/6449)
- `<Input/>` - trigger blur onWheel event when type=number [#6448](https://github.com/wix/wix-style-react/pull/6448)

## 9.58.0 - 2020-12-28
### Breaking
-  `<Animate/>`- refactor component to be internal component [#6426](https://github.com/wix/wix-style-react/pull/6426/)

### Added
- `<AnalyticsLayout/>` - new component [#6368](https://github.com/wix/wix-style-react/pull/6368)
- `<BounceAnimation/>`- new component [#6426](https://github.com/wix/wix-style-react/pull/6426/)
- `<AtlasAddressInput/>` - new component [#6428](https://github.com/wix/wix-style-react/pull/6428)

### Changed
- `<SelectorList>` - change padding when there is no search bar [#6434](https://github.com/wix/wix-style-react/pull/6434)
- `<Checkbox/>` - errorMessage prop depricated, tooltipContent and tooltipProps was added [#6438](https://github.com/wix/wix-style-react/pull/6438/)

## 9.57.0 - 2020-12-23
### Added
- Add Atlas autocomplete client [#6418](https://github.com/wix/wix-style-react/pull/6418)
- `<Radio/>`- add unidriver [#6420](https://github.com/wix/wix-style-react/pull/6420)
- `<RadioGroup/>` - add `selectionAreaSkin` and `selectionAreaPadding` props [#6408](https://github.com/wix/wix-style-react/pull/6408)
- `<Checkbox/>` - add `selectionAreaSkin` and `selectionAreaPadding` props [#6403](https://github.com/wix/wix-style-react/pull/6403)

### Changed
- `<AddressInput/>` - update to match design spec [#6400](https://github.com/wix/wix-style-react/pull/6400)
- `Themes | Business Dashboard` - updated circular progress bar colors [#6422](https://github.com/wix/wix-style-react/pull/6422)

### Fixed
- `<Collapse/>` - skip mount transition [#6424](https://github.com/wix/wix-style-react/pull/6424)

## 9.56.0 - 2020-12-21
### Added
- `<AnalyticsSummaryCard/>` - new component [#6312](https://github.com/wix/wix-style-react/pull/6312)
- `<Heading/>`- new spacing specification [#6360](https://github.com/wix/wix-style-react/pull/6360)
- `<WixStyleReactProvider/>` - new component and update typography mixins [#6360](https://github.com/wix/wix-style-react/pull/6360)
- `<StatisticsWidget/>` - add ellipsis to description for size tiny [#6350](https://github.com/wix/wix-style-react/pull/6350)

### Changed
- `<MarketingLayout/>` - update padding of size tiny with badge [#6390](https://github.com/wix/wix-style-react/pull/6390)

### Fixed
- `<Input/>` - Fixed onFocus called twice with autoFocus prop [#6409](https://github.com/wix/wix-style-react/pull/6409)

## 9.55.0 - 2020-12-16
### Changed
- `<Dropdown/>`- improve story page examples [#6387](https://github.com/wix/wix-style-react/pull/6387)

### Added
- `<Image/>` - showBorder prop [#6379](https://github.com/wix/wix-style-react/pull/6379)
- `<Image/>` - borderRadius prop [#6384](https://github.com/wix/wix-style-react/pull/6384)
- `<Table/>`- add 'small' vertical row padding support [#6399](https://github.com/wix/wix-style-react/pull/6399)

### Docs
- `<MultiSelect/>` - add onOptionsShow/Hide to prop-types [#6268](https://github.com/wix/wix-style-react/pull/6268)

### Fixed
- `<FormField/>` - fix label placement [#6392](https://github.com/wix/wix-style-react/pull/6392)

### Removed
- Revert "Add Atlas autocomplete client" [#6401](https://github.com/wix/wix-style-react/pull/6401)

## 9.54.0 - 2020-12-15
### Added
- Add Atlas autocomplete client [#6377](https://github.com/wix/wix-style-react/pull/6377)

### Fixed
- `<CustomModalLayout/>` - [types] fix subtitle type [#6395](https://github.com/wix/wix-style-react/pull/6395)
- `<Radio />` - fix stylable warning [#6394] (https://github.com/wix/wix-style-react/pull/6394)

## 9.53.0 - 2020-12-14
### Added
- `<CustomModal/>` - Expose title typography [#6380](https://github.com/wix/wix-style-react/pull/6380)
- `<ToggleButton/>` - add `destructive` and `success` skins [#6372](https://github.com/wix/wix-style-react/pull/6372)

### Fixed
- `<Search/>` - fixed the condition to update the on change function [#6386](https://github.com/wix/wix-style-react/pull/6386)
- `<BadgeSelect/>` - [testkit|types] fix missing method types [#6388](https://github.com/wix/wix-style-react/pull/6388)

## 9.52.0 - 2020-12-13
### Added
- `<CopyClipboard/>` - new component [#6367](https://github.com/wix/wix-style-react/pull/6367)
- `<Radio/>` - new component [#6326](https://github.com/wix/wix-style-react/pull/6326)
- `usePlacesAutocomplete` - new custom hook [#6324](https://github.com/wix/wix-style-react/pull/6324)
- `<DropdownBase/>` and `<DropdownLayout />` - add "getSelectedOptionId" to testkit [#6115](https://github.com/wix/wix-style-react/pull/6115)
- `<Card/>` - Expose divider props [#6378](https://github.com/wix/wix-style-react/pull/6378)

### Fixed
- `<Page/>` - fix broken css due to missing semicolon [#6374](https://github.com/wix/wix-style-react/pull/6374)
- `<BadgeSelectItem/>` - remove extra margin-right when subtitle is enabled and expose size and suffix props [#6330](https://github.com/wix/wix-style-react/pull/6330)

## 9.51.0 - 2020-12-10
### Changed
- `Themes | Business Dashboard` - Set default font weight to regular [#6362](https://github.com/wix/wix-style-react/pull/6362)

### Added
- `<AddressInputItem/>` - new component [#6191](https://github.com/wix/wix-style-react/pull/6191)
- `<Page/>` - Add scrollTo function [#6180](https://github.com/wix/wix-style-react/pull/6180)

### Fixed
- `<DatePicker/>` - Fix locale in TimeInput



## 9.50.0 - 2020-12-08
### Fixed
- `<NestableList/>` - fix issue with position fixed inside parent with transform [#6335](https://github.com/wix/wix-style-react/pull/6335)
- `<SelectorList/>` - [types] update renderToggleAllCheckbox name in type [#6354](https://github.com/wix/wix-style-react/pull/6354)
- `<Carousel/>` - Hide slick-track if it's width is undetermined [#6358](https://github.com/wix/wix-style-react/pull/6358)
- `<ListItemSection/>`- suffix fix [#6092](https://github.com/wix/wix-style-react/pull/6092)
- `<Page/>` - [types] fix FixedFooter type [#6363](https://github.com/wix/wix-style-react/pull/6363)


### Added
- `<DropdownBase/>` - expose lazy loading props [#6351](https://github.com/wix/wix-style-react/pull/6351)

## 9.49.0 - 2020-12-06
### Fixed
- `<Page/>` - fixed page crashing [#6349](https://github.com/wix/wix-style-react/pull/6349)

### Added
- `<Page/>` - add fixed footer [#6349](https://github.com/wix/wix-style-react/pull/6349)

## 9.48.0 - 2020-12-03
### Added
- `<Cell/>` - add rows prop [#6355](https://github.com/wix/wix-style-react/pull/6355)

### Changed
- `<MessageModalLayout/>` - [types] changed title to be node [#6339](https://github.com/wix/wix-style-react/pull/6339)

### Fixed
- `<Sidebar/>` - Fix missing scrollbar on inner menus [#6352](https://github.com/wix/wix-style-react/pull/6352)
- `<SelectorList/>` - [types] Added `selectAllText` and `deselectAllText` props [#6345](https://github.com/wix/wix-style-react/pull/6345)
- `Themes | Business Dashboard` - fixed PopoverMenu without arrow padding [#6338](https://github.com/wix/wix-style-react/pull/6338)
- Fix un-needed `import as` syntax to fix compatibility issue with webpack v5 [#6347](https://github.com/wix/wix-style-react/pull/6347)
- `<Collapse/>` - implement with wix-animations [#6208](https://github.com/wix/wix-style-react/pull/6208)

## 9.47.1 - 2020-12-02
### Fixed
`<TimeTable/>`- fix typo with styles [#6346](https://github.com/wix/wix-style-react/pull/6346)


## 9.47.0 - 2020-12-01
### Added
- `<DatePicker/>` - expose theming capabilities [#6195](https://github.com/wix/wix-style-react/pull/6195)
- Typography- add medium weight to Madefor typography and update components accordingly [#6256](https://github.com/wix/wix-style-react/pull/6256)

## 9.46.0 - 2020-11-30
### Added
- `<Carousel/>` - add `imagesPosition` and `imagesFit` props [#6328](https://github.com/wix/wix-style-react/pull/6328)

### Fixed
- `Themes | Business Dashboard` - fixed TextButton default skin color override & replace G20 theme color [#6334](https://github.com/wix/wix-style-react/pull/6334)

## 9.45.0 - 2020-11-29
### Added
- `<Tag/>` - add lightOutlined theme [#6319](https://github.com/wix/wix-style-react/pull/6319)
- `Themes | Business Dashboard` - feat(TextButton): add premium theme [#6318](https://github.com/wix/wix-style-react/pull/6318)
- `Themes | Business Dashboard` - add TrendIndicator component [#6325](https://github.com/wix/wix-style-react/pull/6325)
- `Themes | Business Dashboard` - Keep color when hovering dark disabled ButtonText [#6323](https://github.com/wix/wix-style-react/pull/6323)
- `<Box/>` - support space-separated spacing tokens  [#6281](https://github.com/wix/wix-style-react/pull/6281)

### Fixed
- `<Table/>` - [types] Add `content`to `infoTooltipProps` [#6315](https://github.com/wix/wix-style-react/pull/6315)

### Changed
- `<BadgeSelectItem />` - refactor storybook page [#6321](https://github.com/wix/wix-style-react/pull/6321)

## 9.44.0 - 2020-11-25
### Added
- `<TrendIndicator/>` - Add new component [#6305](https://github.com/wix/wix-style-react/pull/6305)
- `<Carousel/>` - Add showControlsShadow prop [#6301](https://github.com/wix/wix-style-react/pull/6301)
- `<Carousel/>` - Add controlsStartEnd prop [#6300](https://github.com/wix/wix-style-react/pull/6300)
- `<Carousel/>` - [Testkit] Add 'clickNext' and 'clickPrevious' [#6303](https://github.com/wix/wix-style-react/pull/6303)
- `<RadioGroup/>` - add name prop [#6313](https://github.com/wix/wix-style-react/pull/6313)

### Changed
- `<StatisticsWidget/>` - use TrendIndicator component [#6316](https://github.com/wix/wix-style-react/pull/6316)
- `Themes | Business Dashboard` - Adjustments to DropdownLayout & PopoverMenu [#6307](https://github.com/wix/wix-style-react/pull/6307)

## 9.43.0 - 2020-11-23
### Added
- `<MarketingLayout/>` - add badge and hiddenBadge props [#6273](https://github.com/wix/wix-style-react/pull/6273)
- `<MarketingLayout/>` - add size tiny [#6269](https://github.com/wix/wix-style-react/pull/6269)

### Fixed
- `Themes | Business Dashboard` - Misc Sidebar Fixes [#6295](https://github.com/wix/wix-style-react/pull/6295)
- `<InputArea/>` - fix rtl css [#6302](https://github.com/wix/wix-style-react/pull/6302)

### Deprecated
- `<Table/>` - deprecate hideHeader prop [#6255](https://github.com/wix/wix-style-react/pull/6255)

## 9.42.0 - 2020-11-22
### Added
- `<MarketingLayout/>` - add alignItems prop [#6275](https://github.com/wix/wix-style-react/pull/6275)
- `<BadgeSelectItem/>`- adding a uni driver [#6124](https://github.com/wix/wix-style-react/pull/6124)

### Changed
- `Themes | Business Dashboard` - changed focus ring color of Button, IconButton, TextButton [#6282](https://github.com/wix/wix-style-react/pull/6282)
- `Themes | Business Dashboard` - changed ListItemSelect color back to D20 [#6288](https://github.com/wix/wix-style-react/pull/6288)
- `Themes | Business Dashboard` - adjusted TextButton dark disabled color & light hover color [#6291](https://github.com/wix/wix-style-react/pull/6291)
- `Themes | Business Dashboard` - Changing Carousel icons size and pagination color [#6287](https://github.com/wix/wix-style-react/pull/6287)
- `<ListItemSelect/>` - implement styling using css instead of js [#6292](https://github.com/wix/wix-style-react/pull/6292)

### Fixed
- `<NestableList/>` - fix drag and drop with preventChangeDepth [#6286](https://github.com/wix/wix-style-react/pull/6286)

## 9.41.0 - 2020-11-19
### Added
- `<Card/>` - add withShadow prop [#6257](https://github.com/wix/wix-style-react/pull/6257)
- `<Text />` - added tooltipProps as a new prop [#6261](https://github.com/wix/wix-style-react/pull/6261)
- `Themes | Business Dashboard` - add Input theme [#6265](https://github.com/wix/wix-style-react/pull/6265)
- `Themes | Business Dashboard` - add EmptyState theme [#6262](https://github.com/wix/wix-style-react/pull/6262)
- `Themes | Business Dashboard` - add Loader theme [#6277](https://github.com/wix/wix-style-react/pull/6277)
- `Themes | Business Dashboard` - Modal [#6274](https://github.com/wix/wix-style-react/pull/6274)
- `Themes | Business Dashboard` - added box-shadow theming [#6263](https://github.com/wix/wix-style-react/pull/6263)
- `Themes | Business Dashboard` - UX fixes to CircularProgressBar, EmptyState, ListItemSelect, Tooltip, Loader & colors [#6279](https://github.com/wix/wix-style-react/pull/6279)

### Changed
- `<Modal/>` - migrate to stylable [#6266](https://github.com/wix/wix-style-react/pull/6266)
- `<Image/>` - Add className prop [#6272](https://github.com/wix/wix-style-react/pull/6272)

### Fixed
- `<GoogleAddressInput/>`- adding IDs to options recevied from client [#6258](https://github.com/wix/wix-style-react/pull/6258)
- `<TableListItem/>` - fix width/align not working [#6271](https://github.com/wix/wix-style-react/pull/6271)

## 9.40.0 - 2020-11-17
### Added
- `Themes | Business Dashboard` - add ListItemSelect theme [#6235](https://github.com/wix/wix-style-react/pull/6235)
- `Themes | Business Dashboard` - add Tooltip theme [#6220](https://github.com/wix/wix-style-react/pull/6220)
- `Themes | Business Dashboard` - add Badge theme [#6259](https://github.com/wix/wix-style-react/pull/6259)
- `Themes | Business Dashboard` - add ListItemAction, ListItemSection and PopoverMenu theme [#6228](https://github.com/wix/wix-style-react/pull/6228)

### Changed
- `<Page/>` - migrate to Stylable [#6241](https://github.com/wix/wix-style-react/pull/6241)
- `<Caption/>` - (internal refactor) - use design tokens instead of Text component [#6250](https://github.com/wix/wix-style-react/pull/6250)
- `Themes | Business Dashboard` - change the CircularProgressBar success icon [#6251](https://github.com/wix/wix-style-react/pull/6251))

## 9.39.0 - 2020-11-16
### Added
- `<PageFooter/>` - new component [#6215](https://github.com/wix/wix-style-react/pull/6215)

### Fixed
- `<Input/>` - fix overflow (FF only) [#6245](https://github.com/wix/wix-style-react/pull/6245)
- `<Accordion/>` - remove unwanted color background color [#6248](https://github.com/wix/wix-style-react/pull/6248)

### Changed
- `<NumberInput/>` - add hideStepper property [#6233](https://github.com/wix/wix-style-react/pull/6233)
- `Themes | Business Dashboard` - adjust Text & Button styles [#6240](https://github.com/wix/wix-style-react/pull/6240)
- `<DropdownLayout/>` - convert selectable option to `<ListItemSelect/>` [#6163](https://github.com/wix/wix-style-react/pull/6163)


## 9.38.0 - 2020-11-11
### Added
- `<AutoCompleteWithLabel/>` - Added maxHeightPixel property [#6217](https://github.com/wix/wix-style-react/pull/6217)

### Fixed
- `<SparklineChart/>` - fix highlightedAreaEffect issue [#6219](https://github.com/wix/wix-style-react/pull/6219)
- `<TimeInput/>` - fix hover/focus styles [#6230](https://github.com/wix/wix-style-react/pull/6230)
- `<Search/>` - fix css for small size [#6236](https://github.com/wix/wix-style-react/pull/6236)

### Changed
- `<SidebarSectionItem/>` - limit suffix size to 30% to support madeFor font [#6146](https://github.com/wix/wix-style-react/pull/6146)

## 9.37.0 - 2020-11-10
### Added
- `<Carousel/>` - Added `controlsSize` prop [#6182](https://github.com/wix/wix-style-react/pull/6182)
- `Themes | Business Dashboard` - adjust Heading, Text & TextButton styles [#6188](https://github.com/wix/wix-style-react/pull/6188)
- `Themes | Business Dashboard` - Add Carousel theme [#6194](https://github.com/wix/wix-style-react/pull/6194)
- `<Text/>` - Added listStyle prop [#6165](https://github.com/wix/wix-style-react/pull/6165)

### Changed
- `<Popover/>` - Rearrange testkit docs [#6210](https://github.com/wix/wix-style-react/pull/6210)
- `<CardHeader/>` - remove redundant div [#6209](https://github.com/wix/wix-style-react/pull/6209)

### Fixed
- `<BadgeOption/>` and `badgeSelectItemBuilder`- builder fixes and adding selected, hovered and disabled styles to the `BadgeOption` itself [#6166](https://github.com/wix/wix-style-react/pull/6166)
- `Themes | Business Dashboard` - correlate FontUpgrade with the theme active state [#6206](https://github.com/wix/wix-style-react/pull/6206)
- infra - lower the specific yoshi-stylable-dependencies minor version to a public one [#6211](https://github.com/wix/wix-style-react/pull/6211)
- Themes | Business Dashboard - adjust Button theme [#6203](https://github.com/wix/wix-style-react/pull/6203)

## 9.36.0 - 2020-11-09
### Added
- `Themes | Business Dashboard` - theme the `IconButton` component [#6187](https://github.com/wix/wix-style-react/pull/6187)

### Changed
- `<DropdownLayout/>`-  align driver and uni driver [#6184](https://github.com/wix/wix-style-react/pull/6184)

## 9.35.0 - 2020-11-08
### Added
- `<CircularProgressBar/>` - support custom label label + add Business Dashboard theme [#6192](https://github.com/wix/wix-style-react/pull/6192)

### Fixed
- `<DatePicker/>` - add the public methods to the index.d.ts file [#6189](https://github.com/wix/wix-style-react/pull/6189)
- `<CustomModalLayout/>` - fix top and bottom dividers [#6149](https://github.com/wix/wix-style-react/pull/6149)
- `<RichTextInputArea/>` and `<VariableInput/>` - prevent entering a text into rich text inputs from clearing the previous value [#6168](https://github.com/wix/wix-style-react/pull/6168)
- `<BadgeOption/>` and `badgeSelectItemBuilder`- adding visuals and fix types [#6196](https://github.com/wix/wix-style-react/pull/6196)

## 9.34.0 - 2020-11-06

### Added
- `<SparklineChart/>` - add onHover prop [#6178](https://github.com/wix/wix-style-react/pull/6178)
- `<TimeInput/>` - added showSeconds prop [#6186](https://github.com/wix/wix-style-react/pull/6186)

### Changed
- `<TimeInput/>` - replace css with stylable [#6177](https://github.com/wix/wix-style-react/pull/6177)
- `<ModalSelectorLayout/>` - implement using the new `<SelectorList/>` [#6171](https://github.com/wix/wix-style-react/pull/6171)

### Fixed
- `<SelectableAccordion/>` - Fix testkit types [#6181](https://github.com/wix/wix-style-react/pull/6181)
- `Themes | Business Dashboard` - fix CircularProgressBar styling [#6179](https://github.com/wix/wix-style-react/pull/6179)
- `<Search/>` - fix `onBlur` behaviour [#6169](https://github.com/wix/wix-style-react/pull/6169)

## 9.33.0 - 2020-11-04
### Added
- `<SelectorList/>` - new component [#6098](https://github.com/wix/wix-style-react/pull/6098)
- `<Carousel/>` - Add controlsPosition prop [#6164](https://github.com/wix/wix-style-react/pull/6164)
- `<Search/>` - Add highlight prop [#6174](https://github.com/wix/wix-style-react/pull/6174)
- `Themes | Business Dashboard` - Add theme for `LinearProgressBar` [#6136](https://github.com/wix/wix-style-react/pull/6136)
- `<Range/>` - add unidriver [#6170](https://github.com/wix/wix-style-react/pull/6170)

### Changed
- `Themes | Business Dashboard` - improve `Text` & `TextButton` [#6173](https://github.com/wix/wix-style-react/pull/6173)

### Deprecated
- Deprecated `<MessageBoxFunctionalLayout/>` and `<ModalSelectorLayout/>` modal layouts [#6150](https://github.com/wix/wix-style-react/pull/6150)

## 9.32.0 - 2020-11-02
### Added
- `Themes | Business Dashboard` - theme `Heading`, `Text` & `TextButton` [#6157](https://github.com/wix/wix-style-react/pull/6157)

### Changed
- `<DropdownLayout/>` and list builders-  adding `overrideOptionStyle` prop [#6151](https://github.com/wix/wix-style-react/pull/6151)

### Fixed
- `<ListItemSection/>` - Removed redundant margin [#6156](https://github.com/wix/wix-style-react/pull/6156)

### Docs
- `<TimeInput/>` - refactor story page [#6158](https://github.com/wix/wix-style-react/pull/6158)

## 9.31.0 - 2020-11-01
### Added
- `<CardFolderTabs/>` - new component [#6037](https://github.com/wix/wix-style-react/pull/6037)
- `<DatePicker/>` - RTL support [#6129](https://github.com/wix/wix-style-react/pull/6129)
- `<SectionHelper/>` - Added text button example to a story [#6153](https://github.com/wix/wix-style-react/pull/6153)

### Fixed
- `<Text/>` - add skin primary to definitions [#6155](https://github.com/wix/wix-style-react/pull/6155)
- `<ImageViewer/>` - Fix typo in docs [#6154](https://github.com/wix/wix-style-react/pull/6154/files)


## 9.30.0 - 2020-10-29
### Added
- `<AddressInput/>` – [Internal] New component [#6049](https://github.com/wix/wix-style-react/pull/6049)
- `<Layout/>` - Add rowHeight prop [#6135](https://github.com/wix/wix-style-react/pull/6135)

### Changed
- `Themes | Business Dashboard` - update theme color foundations [#6147](https://github.com/wix/wix-style-react/pull/6147)
- `<Dropdown/>` - use pointer type of cursor when mouse hovering over dropdown [#6138](https://github.com/wix/wix-style-react/pull/6138)
- `<VerticalTabs/>` - refactor story page [#6148](https://github.com/wix/wix-style-react/pull/6148)
- `<CustomModalLayout/>` - remove 3px content padding [#6132](https://github.com/wix/wix-style-react/pull/6132)

## 9.29.3 - 2020-10-28
### Fixed
- Themes - publish entry files [#6144](https://github.com/wix/wix-style-react/pull/6144)

## 9.29.2 - 2020-10-27
### Fixed
- `<CounterBadge/>` - fix medium counter badge content [#6134](https://github.com/wix/wix-style-react/pull/6134)
- `<Modal/>` - [Testkit] fix initialization when element is not found [#6137](https://github.com/wix/wix-style-react/pull/6137)

## 9.29.1 - 2020-10-26
### Changed
- `<DropdownLayout/>` and `<ListItemSelect/>`- revert PR [#6088](https://github.com/wix/wix-style-react/pull/6088).


## 9.29.0 - 2020-10-25
### Changed
- `<DropdownLayout/>` and `<ListItemSelect/>`- using builders for selectable option [#6088](https://github.com/wix/wix-style-react/pull/6088).

## 9.28.0 - 2020-10-25
### Changed
- `<Timeline/>` - use full width for content when no suffix [#6112](https://github.com/wix/wix-style-react/pull/6112)

### Fixed
- `<Tag/>` - fix hover color [#6114](https://github.com/wix/wix-style-react/pull/6114)
- `<Modal/>` - fix testkit when there's more than one modal [#6102](https://github.com/wix/wix-style-react/pull/6102)
- `badgeSelectItemBuilder` - fix style [#6121](https://github.com/wix/wix-style-react/pull/6121)
- `<Input/>`- adding missing comma Input.st.css [#6126](https://github.com/wix/wix-style-react/pull/6126)

## 9.27.0 - 2020-10-21
### Added
- `<AddItem/>` - add ariaLabel and ariaLabelledBy props for a11y [#6108](https://github.com/wix/wix-style-react/pull/6108)

### Changed
- `<FontUpgrade/>` - migrate to Stylable [#6095](https://github.com/wix/wix-style-react/pull/6095)

### Docs
- `badgeSelectBuilder`- adding the new props to the docs and improving subtitle example. [#6117](https://github.com/wix/wix-style-react/pull/6117)

## 9.26.0 - 2020-10-20
### Changed
- `<SectionHelper/>` - fix padding when no close button shown [#6097](https://github.com/wix/wix-style-react/pull/6097)
- `Charts utils` - remove Intl [#6113](https://github.com/wix/wix-style-react/pull/6113)

### Fixed
- `<ListItemSelect/>`- Fix Selected & highlighted styles [#6106](https://github.com/wix/wix-style-react/pull/6106)
- `<VariableInput/>` - implement `enterText ` UniDriver method for puppeteer [#6041](https://github.com/wix/wix-style-react/pull/6041)
- `<Input/>` - fix unidriver trigger change method [#6111](https://github.com/wix/wix-style-react/pull/6111)
- `<Input/>` - fix testkit `enterValue` method for uncontrolled inputs [#6101](https://github.com/wix/wix-style-react/pull/6101)
- `badgeSelectBuilder` and `listItemSelectBuilder` - fix builders [#6109](https://github.com/wix/wix-style-react/pull/6109)

## 9.25.0 - 2020-10-19
### Changed
- Update react to 16.13.1

## 9.24.0 - 2020-10-18
### Added
- Theming - create a "Business Dashboard" theme [#6082](https://github.com/wix/wix-style-react/pull/6082)
- `<AddItem/>` - Support customising icons with theming mechanism [#6079](https://github.com/wix/wix-style-react/pull/6079)

## 9.23.0 - 2020-10-15
### Fixed
- `<Animate/>`- fix animation execition [#6094](https://github.com/wix/wix-style-react/pull/6094)

### Added
- `<BadgeSelect/>` - add ellipsis to item builder [#6093](https://github.com/wix/wix-style-react/pull/6093)

## 9.22.0 - 2020-10-13
### Added
- `<Tabs/>` - added size small [#6083](https://github.com/wix/wix-style-react/pull/6083)

### Fixed
- `<StatisticsWidget/>` - add margin left to description info icon [#6087](https://github.com/wix/wix-style-react/pull/6087)
- `<Input/>` - fix unclickable area near arrow [#6086](https://github.com/wix/wix-style-react/pull/6086)
- `<Ellipsis/>` - fix endless render loop [#6085](https://github.com/wix/wix-style-react/pull/6085)

## 9.21.0 - 2020-10-13
### Fixed
- `<Table/>` - filter selected items when items are deleted [#6077](https://github.com/wix/wix-style-react/pull/6077)

### Changed
- `<DropdownLayout/>`- changed the visual design of title and divider [#6065](https://github.com/wix/wix-style-react/pull/6065)

### Added
- Cheatsheet- adding unit tests [#6066](https://github.com/wix/wix-style-react/pull/6066)
- `<StackedBarChart/>` - Add more custom props [#6075](https://github.com/wix/wix-style-react/pull/6075)
- `<StackedBarChart/>` - Y axis format [#6080](https://github.com/wix/wix-style-react/pull/6080)

### Docs
- `<Cheatsheet/>`- adding `Sparkline Chart`, `Selectable Accordion` and `StackedBarChart` examples [#6068](https://github.com/wix/wix-style-react/pull/6068)

## 9.20.0 - 2020-10-11
### Potential Breaking
- `<Page/>` - Change container to be flex [#6064](https://github.com/wix/wix-style-react/pull/6064)

## 9.19.1 - 2020-10-11
### Fixed
- `<AddItem/>` - Add a className for the Text and use it [#6067](https://github.com/wix/wix-style-react/pull/6067)
- `<ListItemAction/>` - Remove margin from root class [#6072](https://github.com/wix/wix-style-react/pull/6072)
-  `<BadgeSelect/>` - Add subtitle to BadgeSelectOptionType [#6074](https://github.com/wix/wix-style-react/pull/6074)

## 9.19.0 - 2020-10-11
### Added
- `<SparklineChart/>` - new component [#6000](https://github.com/wix/wix-style-react/pull/6000)
- `<StackedBarChart/>` - new component [#5902](https://github.com/wix/wix-style-react/pull/5902)
- `<BadgeSelect/>` - Added subtitle [#6057](https://github.com/wix/wix-style-react/pull/6057)

## 9.18.1 - 2020-10-08
### Fixed
- `<Dropzone/>` - Fix get file event handler [#6061](https://github.com/wix/wix-style-react/pull/6061)
- `<Page/>` - fix image blurry edges [#6063](https://github.com/wix/wix-style-react/pull/6063)

## 9.18.0 - 2020-10-07
### Added
- `<SelectableAccordion/>`- new component [#5987](https://github.com/wix/wix-style-react/pull/5987)

### Fixed
- `<Grid/>` - AutoAdjustedColumns - Ignore falsy children [#6053](https://github.com/wix/wix-style-react/pull/6053)
- `listItemEditableBuilder`- fixed types [#6055](https://github.com/wix/wix-style-react/pull/6055)
- `<Ellipsis/>` - tooltip value is not updated when changing the text content [#6024](https://github.com/wix/wix-style-react/pull/6024)

### Docs
- `<GoogleAddressInput/>` - change docs to sections [#6052](https://github.com/wix/wix-style-react/pull/6052)

## 9.17.0 - 2020-10-01
### Docs
- Improving FAQ and Troubleshooting docs [#5890](https://github.com/wix/wix-style-react/pull/5890)

### Changed
- `<DropdownLayout/>`- new story page, minor driver changes and deprecate `itemHeight` prop. [#5999](https://github.com/wix/wix-style-react/pull/5999)


## 9.16.0 - 2020-09-30
### Added
- Themes - create an EditorX theme [#6038](https://github.com/wix/wix-style-react/pull/6038)
- `<CounterBadge/>` - add size prop [#6031](https://github.com/wix/wix-style-react/pull/6031)

### Changed
- `<FunnelChart/>` - Change Tooltip function to expose index [#6021](https://github.com/wix/wix-style-react/pull/6021)
- `<DatePicker/>` - remove the interactive example from docs and generator [#6042](https://github.com/wix/wix-style-react/pull/6042)

### Fixed
- `<Table/>` - fix page sticky top calculation when there's no header [#6027](https://github.com/wix/wix-style-react/pull/6027)

## 9.15.0 - 2020-09-29
### Added
- `<VariableInput/>` - add readOnly prop [#6005](https://github.com/wix/wix-style-react/pull/6005)

### Changed
- Infra: replace `createReactContext` polyfill with the native one [#6034](https://github.com/wix/wix-style-react/pull/6034)
- Infra: create a separate entry file per theme [#6035](https://github.com/wix/wix-style-react/pull/6035)


### Docs
- `Icons` - use wix-ui-icons-common icon list in storybook [#6017](https://github.com/wix/wix-style-react/pull/6017)
- `<CustomModalLayout/>` - add dropdown example for storybook [#6026](https://github.com/wix/wix-style-react/pull/6026)

## 9.14.0 - 2020-09-23
### Added
- `<AreaChart/>` - new component [#5901](https://github.com/wix/wix-style-react/pull/5901)
- `<TableActionCell/>` - Add size prop [#5911](https://github.com/wix/wix-style-react/pull/5911)
- `<CounterBadge/>` Add `light` skin [#6003](https://github.com/wix/wix-style-react/pull/6003)

### Fixed
- `<Input/>` - fix incorrect status values from displaying an indicator [#6018](https://github.com/wix/wix-style-react/pull/6018)
- `<StatisticsWidget/>` - fixed description datahook [#6014](https://github.com/wix/wix-style-react/pull/6014)

### Deprecated
- `contactItemBuilder` && `<ContactItem/>`- deprecating component and builder [#6022](https://github.com/wix/wix-style-react/pull/6022)

## 9.13.0 - 2020-09-21
### Added
- Performance: add a "FailWhale" to indicate when bundling without tree-shaking [#6007](https://github.com/wix/wix-style-react/pull/6007)

### Fixed
- `<RadioGroup/>` - added RadioButtonDriver types to getRadioAtIndex driver method [#5981](https://github.com/wix/wix-style-react/pull/5981)
- `<CounterBadge/>` - align inner text [#6006](https://github.com/wix/wix-style-react/pull/6006)

## 9.12.0 - 2020-09-17
### Added
- `<Button/>` - add ellipsis prop [#5914](https://github.com/wix/wix-style-react/pull/5914)
- `<TextButton/>` - add ellipsis prop [#5945](https://github.com/wix/wix-style-react/pull/5945)
- `<MultiSelectCheckbox /> `- add option for controlled value [#5973](https://github.com/wix/wix-style-react/pull/5973)
- `<CustomModalLayout/>` - Adding support for `showFooterDivider` [#5983](https://github.com/wix/wix-style-react/pull/5983)
- `<ListItemAction/>` - add subtitle property [#5960](https://github.com/wix/wix-style-react/pull/5960)
- `<TableActionCell/>`- adding unidriver [#5963](https://github.com/wix/wix-style-react/pull/5963)

### Fixed
- `<TableActionCell/>` - Fix menu items get cut [#5992](https://github.com/wix/wix-style-react/pull/5992)
- `<Text/>` - add `primary` to `TextSkin` prop type [#5990](https://github.com/wix/wix-style-react/pull/5990)
- `<Timeline/>` - ordered list [#5989](https://github.com/wix/wix-style-react/pull/5989)
- `<Button/>` - inverted-skin color fix [#5991](https://github.com/wix/wix-style-react/pull/5991)

### Docs
- `<Collapse/>` - refactor story page [#5984](https://github.com/wix/wix-style-react/pull/5984)
- `<ColorPicker/>` - refactor story page [#5965](https://github.com/wix/wix-style-react/pull/5965)
- `<EmptyState/>` - refactor story page [#5979](https://github.com/wix/wix-style-react/pull/5979)

## 9.11.0 - 2020-09-16
### Breaking:
- `<ModalSelectorLayout/>` - use new `<CustomModalLayout/>` [#5831](https://github.com/wix/wix-style-react/pull/5831)

## 9.10.0 - 2020-09-16
### Fixed:
- `<Slider/>` - fix tooltip typography [#5974](https://github.com/wix/wix-style-react/pull/5974)

### Added:
- `<FunnelChart/>` - create new component [#5904](https://github.com/wix/wix-style-react/pull/5904)
- `<Ellipsis/>`- adding `maxLines` prop [#5885](https://github.com/wix/wix-style-react/pull/5885)

### Changed:
- `<PageHeader/>`- subtitle was changed to be max of two lines (with ellipsis) [#5964](https://github.com/wix/wix-style-react/pull/5964)
- `<BaseModalLayout/>` - Fix button content type [#5966](https://github.com/wix/wix-style-react/pull/5966)

### Fixed:
- `<BaseModalLayout />` - support nodes as buttons' children [#5958](https://github.com/wix/wix-style-react/pull/5958)

## 9.9.0 - 2020-09-10
### Added
- `<FontUpgrade/>` - [Testkit] Add isActive function [#5936](https://github.com/wix/wix-style-react/pull/5936)
- `<RichTextInputArea/>` - add puppeteer support for enterText testkit method [#5930](https://github.com/wix/wix-style-react/pull/5930)
- `<StatisticsWidget/>` - support content alignment using the alignItems prop [#5931](https://github.com/wix/wix-style-react/pull/5931)
- `<StatisticsWidget/>` - show dashes for empty values [#5935](https://github.com/wix/wix-style-react/pull/5935)

### fixed:
- `<RadioGroup/>`, `<MessageModelLayout/>`, `<CustomModalLayout/>`, `<BaseModalLayout/>` - support using dir="rtl" instead of className="rtl" [#5941](https://github.com/wix/wix-style-react/pull/5941)
- `<PageHeader/>`- fixing issue with back button on RTL [#5956](https://github.com/wix/wix-style-react/pull/5956)

### Docs:
- `<MessageModalLayout>` - move out from the WIP list [#5944](https://github.com/wix/wix-style-react/pull/5944)
- `<BadgeSelect/>` - refactor story page and some improvements [#5957](https://github.com/wix/wix-style-react/pull/5957)

## 9.8.0 - 2020-09-07
### Added
- `<Breadcrumbs />` - show ellipsis for long texts [#5843](https://github.com/wix/wix-style-react/pull/5843)
- `<MarketingPageLayout/>` - new component [#5909](https://github.com/wix/wix-style-react/pull/5909)

### Changed
- `<StatisticsWidget/>` - update description style to support tiny size [#5933](https://github.com/wix/wix-style-react/pull/5933)

### Fixed
- `<TextButton/>` - prevent the affection of a global css - "box-sizing" [#5917](https://github.com/wix/wix-style-react/pull/5917)
- `<CounterBadge/>` - prevent the affection of a global css - "box-sizing" [#5920](https://github.com/wix/wix-style-react/pull/5920)
- `<PopoverMenu/>` - fix type definition [#5922](https://github.com/wix/wix-style-react/pull/5922)
- `<CustomModalLayout/>` - fix the cutting overflow content bug [#5932](https://github.com/wix/wix-style-react/pull/5932)

### Docs
- `<Timeline/>`, `<ToggleButton/>`, `<CheckToggle/>`- Testkits descriptions and implementation improvement [#5906](https://github.com/wix/wix-style-react/pull/5906)

## 9.7.0 - 2020-09-02
### Breaking
- `<Input/>` - Deprecated testkit functions: `clickSuffix`, `hasPrefixClass`, `hasSuffixClass`, `hasSuffixesClass` `isMenuArrowLast` [#5657](https://github.com/wix/wix-style-react/pull/5657)

## 9.6.0 - 2020-09-01
### Added
- `<CustomModalLayout/>` and `<BaseModalLayout/>` - add legacy drivers [#5907](https://github.com/wix/wix-style-react/pull/5907)
- `<FloatingNotification/>` - add fullWidth prop [#5910](https://github.com/wix/wix-style-react/pull/5910)

### Changed
- `<FilePicker/>` - implement using <FileUpload/> [#5820](https://github.com/wix/wix-style-react/pull/5820)

### Fixed
- `<Notification/>` - fix ellipsis tooltip positioning [#5900](https://github.com/wix/wix-style-react/pull/5900)

### Breaking
- `<FilePicker/>` - [testkit] - remove `getInput` function

## 9.5.0 - 2020-08-31
### Added
- `<Thumbnail/>` - add contentAlignment prop [#5860](https://github.com/wix/wix-style-react/pull/5860)
- `<RichTextInputArea/>` - add spellCheck prop [#5887](https://github.com/wix/wix-style-react/pull/5887)
- `<InputArea/>` - add the `required` attribute [#5898](https://github.com/wix/wix-style-react/pull/5898)
- `<PreviewWidget/>`- adding option for scrollable content [#5897](https://github.com/wix/wix-style-react/pull/5897)

### Changed
- `<NumberInput/>` - Disable up/down ticker on strict [#5892](https://github.com/wix/wix-style-react/pull/5892)

### Fixed
- `<StarsRatingBar/>` - [testkit] fix getSelectedRating [#5905](https://github.com/wix/wix-style-react/pull/5905)

## 9.4.0 - 2020-08-27
### Added
- `<Timeline/>` - allow passing a node instead of string only in the item label [#5883](https://github.com/wix/wix-style-react/pull/5883)
- `<FeatureList/>` - new component [#5752](https://github.com/wix/wix-style-react/pull/5752)
- `<MarketingPageLayoutContent/>` - new component [#5838](https://github.com/wix/wix-style-react/pull/5838)
- `<RichTextInputArea />` - add minHeight prop [#5869](https://github.com/wix/wix-style-react/pull/5869)

### Fixed
- `<Collapse/>` - fix the animation bug [#5882](https://github.com/wix/wix-style-react/pull/5882)
- `<DropdownLayout/>` - fix the RTL css issue & update visual tests [#5881](https://github.com/wix/wix-style-react/pull/5881)
- `<Table/>`- fix `isDisplayingNothing` implementation in driver & unidriver [#5878](https://github.com/wix/wix-style-react/pull/5878)
- `<DropdownLayout/>` - (testkit) fix click outside [#5894](https://github.com/wix/wix-style-react/pull/5894)

## 9.3.0 - 2020-08-24

### Added
- `<AnnouncementModalLayout/>` - added help button [#5852](https://github.com/wix/wix-style-react/pull/5852)
- `<CustomModalLayout/>` - added help button [#5849](https://github.com/wix/wix-style-react/pull/5849)
- `<MessageModalLayout/>` - added help button [#5853](https://github.com/wix/wix-style-react/pull/5853)

### Changed
- `<AddItem/>` - change background color of disabled state for theme `plain` [#5866](https://github.com/wix/wix-style-react/pull/5866)
- `<MultiSelectCheckbox/>`- using builders instead of manually using `<ListItemSelect/>` and `<ListItemSection/>` [#5823](https://github.com/wix/wix-style-react/pull/5823)

## 9.2.0 - 2020-08-19

### Added
- `<TestimonialList/>` - new component [#5782](https://github.com/wix/wix-style-react/pull/5782)

### Changed
- `<Sidebar/>` - update divider color [#5858](https://github.com/wix/wix-style-react/pull/5858)

### Fixed
- `<ListItemSection/>` - fix title and subheader colors [#5841](https://github.com/wix/wix-style-react/pull/5841)
- `<VariableInput/>` - fix wrong display when there is "{" before a variable [#5808](https://github.com/wix/wix-style-react/pull/5808)

### Docs
- `Cheatsheet` - create internal components family [#5850](https://github.com/wix/wix-style-react/pull/5850)
- `<TableToolbar/>`- fixing story page of `TableToolbar`[#5789](https://github.com/wix/wix-style-react/pull/5789)

## 9.1.0 - 2020-08-18

### Added
- `<TableListItem/>` - new component [#5788](https://github.com/wix/wix-style-react/pull/5788)
- `<Input/>` - add test to getDisabled [#5842](https://github.com/wix/wix-style-react/pull/5842)

### Fixed
- `<FileUpload/>` - fix story page [#5833](https://github.com/wix/wix-style-react/pull/5833)
- `<VariableInput/>` - Add public methods to its d.ts [#5847](https://github.com/wix/wix-style-react/pull/5847)
- `<Heading/>` - fix madefor [#5854](https://github.com/wix/wix-style-react/pull/5854)

### Changed
- `<MultiSelectCheckbox/>` - fix `listItemSectionBuilder` from displaying capital letters [#5822](https://github.com/wix/wix-style-react/pull/5822)

## 9.0.0 - 2020-08-12

Upgrade Stylable version to 3
