import React from 'react';
import PropTypes from 'prop-types';
import SelectorListContent from './Content';

import Box from '../Box';
import Search from '../Search';
import Text from '../Text';
import ToggleAllCheckbox from './ToggleAllCheckbox';
import { dataHooks } from './SelectorList.helpers';
import { st, classes } from './SelectorList.st.css';

/**
 * Use this component when needed to select one / multiple items having complex descriptions.
 * E.g.: choosing products to promote via ShoutOuts
 */
export default class SelectorList extends React.PureComponent {
  static displayName = 'SelectorList';

  static propTypes = {
    /** applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /**
     * paging function that should have a signature of
     * ```typescript
     * (searchQuery: string, offset: number, limit: number) =>
     * Promise<{
     *  items: Array<{
     *    id: number | string,
     *    title: node,
     *    subtitle?: string,
     *    extraText?: string,
     *    extraNode?: node,
     *    disabled?: boolean // show item as disabled, dont count it in "select all", exclude from `onOk`
     *    selected?: boolean // force item as selected
     *    image?: node
     *    subtitleNode?: node,
     *    belowNode?: node,
     *    showBelowNodeOnSelect?: boolean,
     *  }>,
     *  totalCount: number
     * }>
     * ```
     * `offset` - next requested item's index<br>
     * `limit` - number of items requested<br>
     * `totalCount` - total number of items that suffice the current search query
     * */
    dataSource: PropTypes.func.isRequired,

    /** Image icon size */
    imageSize: PropTypes.oneOf([
      'tiny',
      'small',
      'portrait',
      'large',
      'cinema',
    ]),

    /**
     * Image icon shape, `rectangular` or `circle`.<br>
     * NOTE: `circle` is not compatible with `imageSize` of `portrait` or `cinema`
     * */
    imageShape: (props, propName, componentName) => {
      if (
        ['portrait', 'cinema'].includes(props.imageSize) &&
        props[propName] === 'circle'
      ) {
        return new Error(
          `${componentName}: prop "imageSize" with value of "${props.imageSize}" is incompatible with prop imageShape with value of "circle" — use "rectangular" instead.`,
        );
      }
    },

    /** Placeholder text of the search input */
    searchPlaceholder: PropTypes.string,

    /**
     * Component/element that will be rendered when there is nothing to display,
     * i.e. empty `{items:[], totalCount: 0}` was returned on the first call to `dataSource`
     * */
    emptyState: PropTypes.node,

    /**
     * Function that will get the current `searchQuery` and should return the component/element
     * that will be rendered when there are no items that suffice the entered search query
     *  */
    renderNoResults: PropTypes.func,

    /** Number of items loaded each time the user scrolls down */
    itemsPerPage: PropTypes.number,

    /** Whether to display the search input or not */
    withSearch: PropTypes.bool,

    /** Search debounce in milliseconds */
    searchDebounceMs: PropTypes.number,

    /** Height classes property, sets the height of the list container */
    height: PropTypes.string,

    /** Max-height classes property, sets the maximum height of the list container. */
    maxHeight: PropTypes.string,

    /** display checkbox and allow multi selection */
    multiple: PropTypes.bool,

    /** callback that triggers on select and return selected item object*/
    onSelect: PropTypes.func,

    /** string to be displayed in footer when `multiple` prop is used and no items are selected  */
    selectAllText: PropTypes.string,

    /** string to be displayed in footer when `multiple` prop is used and some or all items ar selected */
    deselectAllText: PropTypes.string,

    /** amount of items to load on initial render or after search */
    initialAmountToLoad: PropTypes.number,

    /** Fixed text displayed above the list */
    subtitle: PropTypes.node,
  };

  static defaultProps = {
    searchPlaceholder: 'Search...',
    imageSize: 'large',
    imageShape: 'rectangular',
    itemsPerPage: 50,
    withSearch: true,
    height: '100%',
    maxHeight: '100%',
  };

  state = {
    isLoaded: false,
    isSearching: false,
    items: [],
    searchValue: '',
    selectedItems: [],
    noResultsFound: false,
    isEmpty: false,
  };

  componentDidMount() {
    this._loadInitialItems();
  }

  /** Resets list items and loads first page from dataSource while persisting searchValue */
  reloadInitialItems() {
    const searchValue = this.state.searchValue;

    this.setState({
      items: [],
      searchValue,
      isSearching: Boolean(searchValue),
    });

    this._loadInitialItems(searchValue);
  }

  _renderList = () => {
    const {
      dataHook,
      emptyState,
      renderNoResults,
      height,
      maxHeight,
      imageSize,
      imageShape,
      multiple,
    } = this.props;

    const {
      items,
      isLoaded,
      isEmpty,
      isSearching,
      searchValue,
      noResultsFound,
      selectedItems,
    } = this.state;

    const hasMore = this._hasMore();

    const contentProps = {
      items,
      selectedItems,
      onToggle: this._onToggle,
      emptyState,
      renderNoResults,
      isEmpty,
      isLoading: !isLoaded || isSearching,
      noResultsFound,
      imageSize,
      imageShape,
      multiple,
      loadMore: this._loadMore,
      hasMore,
      checkIsSelected: this._checkIsSelected,
      searchValue,
    };

    const shouldRenderSubheader = isLoaded && !isEmpty;

    return (
      <Box
        direction="vertical"
        overflow="hidden"
        {...{
          dataHook,
          height,
          maxHeight,
        }}
      >
        {shouldRenderSubheader && this._renderSubheader()}
        <SelectorListContent {...contentProps} />
      </Box>
    );
  };

  _renderSubheader = () => {
    const {
      subtitle,
      withSearch,
      searchDebounceMs,
      searchPlaceholder,
    } = this.props;
    const { searchValue } = this.state;

    return (
      <div
        className={st(classes.subheaderWrapper, {
          withSearch,
        })}
      >
        {subtitle && (
          <div className={classes.subtitleWrapper}>
            {typeof subtitle === 'string' ? (
              <Text dataHook={dataHooks.subtitle}>{subtitle}</Text>
            ) : (
              subtitle
            )}
          </div>
        )}
        {withSearch && (
          <Search
            dataHook={dataHooks.search}
            placeholder={searchPlaceholder}
            onChange={this._onSearchChange}
            onClear={this._onClear}
            debounceMs={searchDebounceMs}
            value={searchValue}
          />
        )}
      </div>
    );
  };

  _renderToggleAllCheckbox = () => {
    const { selectAllText, deselectAllText } = this.props;
    const { items, selectedItems } = this.state;

    const enabledItemsAmount = this._getEnabledItems(items).length;
    const selectedEnabledItemsAmount = this._getEnabledItems(selectedItems)
      .length;

    const checkboxProps = {
      selectAllText,
      deselectAllText,
      enabledItemsAmount,
      selectedEnabledItemsAmount,
      selectAll: this._selectAll,
      deselectAll: this._deselectAll,
    };

    return <ToggleAllCheckbox {...checkboxProps} />;
  };

  render() {
    const { children } = this.props;
    const { selectedItems } = this.state;

    if (typeof children === 'function') {
      return children({
        renderList: this._renderList,
        renderToggleAllCheckbox: this._renderToggleAllCheckbox,
        selectedItems,
      });
    }

    return this._renderList();
  }

  _updateSearchValue = searchValue =>
    this.setState(
      {
        searchValue,
        isSearching: true,
        items: [],
      },
      () => this._loadInitialItems(searchValue),
    );

  _onSearchChange = event => this._updateSearchValue(event.target.value);

  _onClear = () => this._updateSearchValue('');

  _checkIsSelected = item => {
    const { selectedItems } = this.state;
    return !!selectedItems.find(({ id }) => item.id === id);
  };

  _toggleItem = item => {
    const { multiple } = this.props;
    this.setState(({ selectedItems }) => ({
      selectedItems: multiple
        ? this._checkIsSelected(item)
          ? selectedItems.filter(({ id }) => item.id !== id)
          : selectedItems.concat(item)
        : [item],
    }));
  };

  _onToggle = item => {
    const { onSelect } = this.props;
    this._toggleItem(item);

    if (onSelect) {
      onSelect(item);
    }
  };

  _selectAll = () => {
    const { selectedItems, items } = this.state;
    const enabledItems = this._getEnabledItems(items);

    this.setState({ selectedItems: selectedItems.concat(enabledItems) });
  };

  _deselectAll = () =>
    this.setState(({ selectedItems }) => ({
      selectedItems: selectedItems.filter(({ disabled }) => disabled),
    }));

  _updateItems = ({ items: nextPageItems, totalCount, searchValue }) => {
    const { items, selectedItems } = this.state;
    // react only to the resolve of the relevant search
    if (searchValue !== this.state.searchValue) {
      return;
    }

    const newItems = [...items, ...nextPageItems];
    const newSelectedItems = selectedItems.concat(
      nextPageItems.filter(({ selected }) => selected),
    );
    const noResultsFound = newItems.length === 0 && Boolean(searchValue);
    const isEmpty = newItems.length === 0 && !searchValue;

    this.setState({
      items: newItems,
      selectedItems: newSelectedItems,
      isLoaded: true,
      isEmpty,
      isSearching: false,
      totalCount,
      noResultsFound,
    });
  };

  _loadInitialItems = (searchValue = '') => {
    const { dataSource, itemsPerPage } = this.props;
    const initialAmountToLoad = this.props.initialAmountToLoad || itemsPerPage;

    dataSource(searchValue, 0, initialAmountToLoad).then(dataSourceProps =>
      this._updateItems({
        ...dataSourceProps,
        searchValue,
      }),
    );
  };

  _loadMore = () => {
    const { dataSource, itemsPerPage } = this.props;
    const { items, searchValue } = this.state;

    dataSource(searchValue, items.length, itemsPerPage).then(dataSourceProps =>
      this._updateItems({
        ...dataSourceProps,
        searchValue,
      }),
    );
  };

  _hasMore() {
    const { items, isLoaded, totalCount, isSearching } = this.state;
    return (
      (items.length === 0 && !isLoaded) ||
      items.length < totalCount ||
      isSearching
    );
  }

  _getEnabledItems = items => items.filter(({ disabled }) => !disabled);
}
