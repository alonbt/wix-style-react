import React from 'react';
import PropTypes from 'prop-types';
import SelectorList from '../SelectorList';
import HeaderLayout from '../MessageBox/FunctionalLayout/HeaderLayout';
import FooterLayout from '../MessageBox/FunctionalLayout/FooterLayout';
import { classes } from './ModalSelectorLayout.st.css';
import deprecationLog from '../utils/deprecationLog';
import { dataHooks } from './ModalSelectorLayout.helpers';

/**
 * Use this component when needed to select one / multiple items having complex descriptions.
 * E.g.: choosing products to promote via ShoutOuts
 */
export default class ModalSelectorLayout extends React.PureComponent {
  static displayName = 'ModalSelectorLayout';

  static propTypes = {
    /** applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** Title of the modal */
    title: PropTypes.node,

    /** Fixed text displayed above the list */
    subtitle: PropTypes.node,

    /** OK button callback, called with the currently selected item  */
    onOk: PropTypes.func,

    /** X button callback */
    onClose: PropTypes.func,

    /** Cancel button callback */
    onCancel: PropTypes.func,

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

    /** Cancel button's text */
    cancelButtonText: PropTypes.string,

    /** OK button's text */
    okButtonText: PropTypes.string,

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
    noResultsFoundStateFactory: PropTypes.func,

    /** Number of items loaded each time the user scrolls down */
    itemsPerPage: PropTypes.number,

    /** Whether to display the search input or not */
    withSearch: PropTypes.bool,

    /** Search debounce in milliseconds */
    searchDebounceMs: PropTypes.number,

    /** Height CSS property, sets the height of the modal */
    height: PropTypes.string,

    /** Max-height CSS property, sets the maximum height of the modal. */
    maxHeight: PropTypes.string,

    /** display checkbox and allow multi selection */
    multiple: PropTypes.bool,

    /** string to be displayed in footer when `multiple` prop is used and no items are selected  */
    selectAllText: PropTypes.string,

    /** string to be displayed in footer when `multiple` prop is used and some or all items ar selected */
    deselectAllText: PropTypes.string,

    /** to disable confirm button */
    disableConfirmation: PropTypes.bool,

    /** callback that triggers on select and return selected item object*/
    onSelect: PropTypes.func,

    /** Used to display some side component in the footer.
     * Will override element select all in the footer when multiple=true */
    sideActions: PropTypes.node,
  };

  static defaultProps = {
    title: 'Choose Your Items',
    okButtonText: 'Select',
    cancelButtonText: 'Cancel',
    searchPlaceholder: 'Search...',
    imageSize: 'large',
    imageShape: 'rectangular',
    itemsPerPage: 50,
    withSearch: true,
    height: '100%',
    maxHeight: '100%',
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    disableConfirmation: false,
  };

  componentDidMount() {
    deprecationLog(
      `Using "<ModalSelectorLayout/>" is deprecated. Instead, we advise you to use the newer "<SelectorList/>" component in combination with "<CustomModalLayout/>". Please refer to it's documentation for an example.`,
    );
  }

  _getEnabledItems = items => items.filter(({ disabled }) => !disabled);

  render() {
    const {
      // SelectorList props
      dataSource,
      imageSize,
      imageShape,
      searchPlaceholder,
      emptyState,
      noResultsFoundStateFactory: renderNoResults,
      itemsPerPage,
      withSearch,
      searchDebounceMs,
      onSelect,
      multiple,
      subtitle,

      // Modal props
      dataHook,
      title,
      onClose,
      onCancel,
      onOk,
      height,
      maxHeight,
      cancelButtonText,
      okButtonText,
      disableConfirmation,
      sideActions,
    } = this.props;

    return (
      <SelectorList
        {...{
          dataSource,
          imageSize,
          imageShape,
          searchPlaceholder,
          emptyState,
          renderNoResults,
          itemsPerPage,
          withSearch,
          searchDebounceMs,
          onSelect,
          multiple,
          subtitle,
        }}
        dataHook={dataHooks.selectorList}
      >
        {({ renderList, renderToggleAllCheckbox, selectedItems }) => {
          const enabledItems = this._getEnabledItems(selectedItems);
          return (
            <div
              data-hook={dataHook}
              className={classes.modalContent}
              style={{ height, maxHeight }}
            >
              <HeaderLayout title={title} onCancel={onClose} />
              {renderList()}
              <FooterLayout
                onCancel={onCancel}
                onOk={() => onOk(multiple ? enabledItems : enabledItems[0])}
                cancelText={cancelButtonText}
                confirmText={okButtonText}
                enableOk={!disableConfirmation && !!selectedItems.length}
                children={!sideActions && multiple && renderToggleAllCheckbox()}
                sideActions={sideActions}
              />
            </div>
          );
        }}
      </SelectorList>
    );
  }
}
