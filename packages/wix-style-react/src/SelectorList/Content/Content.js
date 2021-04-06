import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './Content.st.css';
import { dataHooks } from '../SelectorList.helpers';
import Selector from '../../Selector';
import Loader from '../../Loader';
import InfiniteScroll from '../../utils/InfiniteScroll';
import Text from '../../Text';

const DEFAULT_EMPTY = (
  <div className={classes.defaultEmptyStateWrapper}>
    <Text>{"You don't have any items"}</Text>
  </div>
);

const ListItems = ({
  items,
  checkIsSelected,
  onToggle,
  imageSize,
  imageShape,
  multiple,
}) => {
  if (!items.length) {
    return null;
  }

  return (
    <ul data-hook={dataHooks.list} className={classes.list}>
      {items.map(item => (
        <Selector
          id={item.id}
          key={item.id}
          dataHook={dataHooks.selector}
          imageSize={imageSize}
          imageShape={imageShape}
          toggleType={multiple ? 'checkbox' : 'radio'}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          extraNode={
            item.extraNode
              ? item.extraNode
              : item.extraText && <Text secondary>{item.extraText}</Text>
          }
          subtitleNode={item.subtitleNode}
          belowNode={item.belowNode}
          showBelowNodeOnSelect={item.showBelowNodeOnSelect}
          isSelected={checkIsSelected(item)}
          isDisabled={item.disabled}
          onToggle={() => {
            !item.disabled && onToggle(item);
          }}
        />
      ))}
    </ul>
  );
};

const SelectorListContent = ({
  dataHook,
  items,
  onToggle,
  emptyState,
  renderNoResults,
  isLoading,
  checkIsSelected,
  isEmpty,
  noResultsFound,
  imageSize,
  imageShape,
  multiple,
  searchValue,
  loadMore,
  hasMore,
}) => {
  return (
    <div className={classes.content} data-hook={dataHook}>
      {isLoading && (
        <div className={classes.mainLoaderWrapper}>
          <Loader size="medium" dataHook={dataHooks.mainLoader} />
        </div>
      )}

      {isEmpty && (
        <div
          data-hook={dataHooks.emptyState}
          className={classes.emptyStateWrapper}
          children={emptyState}
        />
      )}

      {items.length > 0 && (
        <InfiniteScroll
          key={searchValue}
          loadMore={loadMore}
          hasMore={hasMore}
          useWindow={false}
          initialLoad={false}
          loader={
            <div className={classes.nextPageLoaderWrapper}>
              <Loader size="small" dataHook={dataHooks.nextPageLoader} />
            </div>
          }
        >
          <ListItems
            {...{
              items,
              checkIsSelected,
              onToggle,
              imageSize,
              imageShape,
              multiple,
            }}
          />
        </InfiniteScroll>
      )}

      {noResultsFound && (
        <div
          data-hook={dataHooks.noResultsFoundState}
          className={classes.noResultsFoundStateWrapper}
          children={renderNoResults(searchValue)}
        />
      )}
    </div>
  );
};

SelectorListContent.propTypes = {
  /** applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,

  /** array of selector items to show */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.node.isRequired,
      subtitle: PropTypes.string,
      extraText: PropTypes.string,
      extraNode: PropTypes.node,
      disabled: PropTypes.bool, // show item as disabled, dont count it in "select all", exclude from `onOk`
      selected: PropTypes.bool, // force item as selected
      image: PropTypes.node,
      subtitleNode: PropTypes.node,
      belowNode: PropTypes.node,
      showBelowNodeOnSelect: PropTypes.bool,
    }),
  ),

  /** callback to trigger when toggling a selector, receives SelectorList item */
  onToggle: PropTypes.func,

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

  /** whether list is loading */
  isLoading: PropTypes.bool,

  /** a function that receives an item and checks if it is selected */
  checkIsSelected: PropTypes.func.isRequired,

  /** whether list is empty */
  isEmpty: PropTypes.bool,

  /** whether list search found no matching items */
  noResultsFound: PropTypes.bool,

  /** Image icon size */
  imageSize: PropTypes.oneOf(['tiny', 'small', 'portrait', 'large', 'cinema']),

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

  /** display checkbox and allow multi selection */
  multiple: PropTypes.bool,

  /** search input value */
  searchValue: PropTypes.string.isRequired,

  /** A callback called when more items are requested to be rendered. */
  loadMore: PropTypes.func.isRequired,

  /** Whether there are more items to be loaded. */
  hasMore: PropTypes.bool,
};

SelectorListContent.defaultProps = {
  dataHook: dataHooks.content,
  emptyState: DEFAULT_EMPTY,
  renderNoResults: searchValue => (
    <div className={classes.defaultNoResultsFoundStateWrapper}>
      <Text>No items matched your search {`"${searchValue}"`}</Text>
    </div>
  ),
};

export default SelectorListContent;
