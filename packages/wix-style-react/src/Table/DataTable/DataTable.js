import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import SortByArrowUp from 'wix-ui-icons-common/system/SortByArrowUp';
import SortByArrowDown from 'wix-ui-icons-common/system/SortByArrowDown';
import { Animator } from 'wix-animations';
import classNames from 'classnames';
import defaultTo from 'lodash/defaultTo';
import { VariableSizeList as List } from 'react-window';
import { ScrollSyncPane } from 'react-scroll-sync';
import { TooltipCommonProps } from '../../common/PropTypes/TooltipCommon';
import { WixStyleReactContext } from '../../WixStyleReactProvider/context';
import { st, classes } from './DataTable.st.css';
import InfiniteScroll from '../../utils/InfiniteScroll';
import InfoIcon from '../../InfoIcon';

import { virtualRowsAreEqual, getStickyColumnStyle } from './DataTable.utils';

export const DataTableHeader = props => {
  const {
    dataHook,
    horizontalScroll,
    leftShadowVisible,
    rightShadowVisible,
    stickyColumns,
  } = props;

  const wrapWithHorizontalScroll = table => (
    <div
      className={classNames(classes.scrollWrapper, {
        [classes.leftShadowVisible]: !!leftShadowVisible,
        [classes.rightShadowVisible]: !!rightShadowVisible,
        [classes.withStickyColumns]: !!stickyColumns,
      })}
    >
      <ScrollSyncPane>{table}</ScrollSyncPane>
    </div>
  );

  const table = (
    <div
      data-hook={dataHook}
      className={classNames({
        [classes.tableHeaderScrollContent]: horizontalScroll,
      })}
    >
      <table style={{ width: props.width }} className={classes.table}>
        <TableHeader {...props} />
      </table>
    </div>
  );

  return horizontalScroll ? wrapWithHorizontalScroll(table) : table;
};

DataTableHeader.propTypes = {
  width: PropTypes.string,
};

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    let state = { selectedRows: new Map() };
    if (props.infiniteScroll) {
      state = { ...state, ...this.createInitialScrollingState(props) };
    }
    this.state = state;
    this.contentRef = React.createRef();
    if (props.horizontalScroll && 'ResizeObserver' in window) {
      this.contentResizeObserver = new ResizeObserver(
        this._updateScrollShadows,
      );
    }
  }

  componentDidMount() {
    const { contentResizeObserver, contentRef } = this;
    if (contentResizeObserver && contentRef.current) {
      contentResizeObserver.observe(contentRef.current);
    }
  }

  componentWillUnmount() {
    const { contentResizeObserver, contentRef } = this;
    if (contentResizeObserver && contentRef.current) {
      contentResizeObserver.unobserve(contentRef.current);
    }
  }

  get style() {
    return classes;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let isLoadingMore = false;
    if (this.props.infiniteScroll && nextProps.data !== this.props.data) {
      if (nextProps.data instanceof Array && this.props.data instanceof Array) {
        isLoadingMore = true;
        const lastPage = this.calcLastPage(nextProps);
        const currentPage =
          this.state.currentPage < lastPage
            ? this.state.currentPage + 1
            : this.state.currentPage;
        this.setState({ lastPage, currentPage });
      }
      if (!isLoadingMore) {
        this.setState(this.createInitialScrollingState(nextProps));
      }
    }
  }

  _updateScrollShadows = () => {
    const { onUpdateScrollShadows } = this.props;
    if (!onUpdateScrollShadows) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = this.contentRef.current;
    const leftShadowVisible = scrollLeft > 0;
    const rightShadowVisible = scrollWidth - scrollLeft > clientWidth;

    onUpdateScrollShadows(leftShadowVisible, rightShadowVisible);
  };

  createInitialScrollingState(props) {
    return { currentPage: 0, lastPage: this.calcLastPage(props) };
  }

  render() {
    const {
      virtualized,
      data,
      showHeaderWhenEmpty,
      horizontalScroll,
      infiniteScroll,
      itemsPerPage,
    } = this.props;

    if (!data.length && !showHeaderWhenEmpty) {
      return null;
    }

    if (virtualized) {
      return this.renderVirtualizedTable(data);
    }

    const rowsToRender = infiniteScroll
      ? data.slice(0, (this.state.currentPage + 1) * itemsPerPage)
      : data;

    let table = this.renderTable(rowsToRender);
    if (horizontalScroll) {
      table = this.wrapWithHorizontalScroll(table);
    }
    if (infiniteScroll) {
      table = this.wrapWithInfiniteScroll(table);
    }

    return table;
  }

  wrapWithInfiniteScroll = table => {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={
          this.state.currentPage < this.state.lastPage || this.props.hasMore
        }
        loader={this.props.loader}
        useWindow={this.props.useWindow}
        scrollElement={this.props.scrollElement}
      >
        {table}
      </InfiniteScroll>
    );
  };

  wrapWithHorizontalScroll = table => {
    const { leftShadowVisible, rightShadowVisible, stickyColumns } = this.props;
    return (
      <div
        className={classNames(this.style.scrollWrapper, {
          [this.style.leftShadowVisible]: !!leftShadowVisible,
          [this.style.rightShadowVisible]: !!rightShadowVisible,
          [this.style.withStickyColumns]: !!stickyColumns,
        })}
      >
        <ScrollSyncPane>{table}</ScrollSyncPane>
      </div>
    );
  };

  renderTable = rowsToRender => {
    const { dataHook, showLastRowDivider, horizontalScroll } = this.props;
    const style = { width: this.props.width };
    return (
      <div
        data-hook={dataHook}
        {...(horizontalScroll
          ? {
              className: classes.tableBodyScrollContent,
              ref: this.contentRef,
              onScroll: this._updateScrollShadows,
            }
          : undefined)}
      >
        <table
          id={this.props.id}
          style={style}
          className={classNames(this.style.table, {
            [this.style.showLastRowDivider]: showLastRowDivider,
          })}
        >
          {!this.props.hideHeader && <TableHeader {...this.props} />}
          {this.renderBody(rowsToRender)}
        </table>
      </div>
    );
  };

  renderBody = rows => (
    <tbody>
      {rows.map((rowData, index) => this.renderRow(rowData, index))}
    </tbody>
  );

  onRowClick = (rowData, rowNum) => {
    const { onRowClick, rowDetails, isRowDisabled } = this.props;
    onRowClick && !isRowDisabled(rowData) && onRowClick(rowData, rowNum);
    rowDetails && this.toggleRowDetails(rowData);
  };

  renderRow = (rowData, rowNum, style) => {
    const {
      onRowClick,
      onMouseEnterRow,
      onMouseLeaveRow,
      rowDataHook,
      dynamicRowClass,
      isRowHighlight,
      rowDetails,
      rowClass,
      columns,
      selectedRowsIds,
      isRowSelected,
      isRowDisabled,
    } = this.props;
    const rowClasses = [rowClass];
    const key = defaultTo(rowData.id, rowNum);
    const optionalRowProps = {};

    const handlers = [
      { rowEventHandler: this.onRowClick, eventHandler: 'onClick' },
      { rowEventHandler: onMouseEnterRow, eventHandler: 'onMouseEnter' },
      { rowEventHandler: onMouseLeaveRow, eventHandler: 'onMouseLeave' },
    ];

    handlers.forEach(({ rowEventHandler, eventHandler }) => {
      if (rowEventHandler) {
        optionalRowProps[eventHandler] = event => {
          if (event.isDefaultPrevented()) {
            return;
          }
          rowEventHandler(rowData, rowNum);
        };
      }
    });

    if (onRowClick && !isRowDisabled(rowData)) {
      rowClasses.push(this.style.clickableDataRow);
    }

    if (rowDetails) {
      rowClasses.push(this.style.animatedDataRow);
    }

    if (rowDataHook) {
      if (typeof rowDataHook === 'string') {
        optionalRowProps['data-hook'] = rowDataHook;
      } else {
        optionalRowProps['data-hook'] = rowDataHook(rowData, rowNum);
      }
    }

    if (dynamicRowClass) {
      rowClasses.push(dynamicRowClass(rowData, rowNum));
    }

    if (isRowHighlight && isRowHighlight(rowData, rowNum)) {
      rowClasses.push(this.style.highlight);
    }

    if (
      isRowSelected
        ? isRowSelected(rowData, rowNum)
        : selectedRowsIds && selectedRowsIds.includes(key)
    ) {
      rowClasses.push(this.style.selected);
    }

    optionalRowProps.className = classNames(rowClasses);

    const rowsToRender = [
      <tr
        data-table-row="dataTableRow"
        style={style}
        key={key}
        {...optionalRowProps}
        data-animated={!!rowDetails ? true : null}
        data-clickable={onRowClick && !isRowDisabled(rowData) ? true : null}
      >
        {columns.map((column, colNum) =>
          this.renderCell(rowData, column, rowNum, colNum),
        )}
      </tr>,
    ];

    if (rowDetails) {
      const showDetails = !!this.state.selectedRows.get(rowData);

      rowsToRender.push(
        <tr key={`${key}_details`} className={this.style.rowDetails}>
          <td
            data-hook={`${rowNum}_details`}
            className={classNames(
              this.style.details,
              showDetails ? this.style.active : '',
            )}
            colSpan={columns.length}
          >
            <div className={this.style.rowDetailsInner}>
              <Animator show={showDetails} height>
                {rowDetails(rowData, rowNum)}
              </Animator>
            </div>
          </td>
        </tr>,
      );
    }

    return rowsToRender;
  };

  getCellClasses = ({
    column,
    colNum,
    rowData,
    reducedSpacingAndImprovedLayout,
  }) => {
    const { rowVerticalPadding, stickyColumns, rowDetails } = this.props;
    const { selectedRows } = this.state;

    return classNames({
      [this.style.important]: column.important,

      [this.style.largeVerticalPadding]: rowVerticalPadding === 'large',
      [this.style.mediumVerticalPadding]: rowVerticalPadding === 'medium',

      [this.style.newSmallVerticalPadding]:
        rowVerticalPadding === 'small' && reducedSpacingAndImprovedLayout,
      [this.style.smallVerticalPadding]:
        rowVerticalPadding === 'small' && !reducedSpacingAndImprovedLayout,

      [this.style.tinyVerticalPadding]: rowVerticalPadding === 'tiny',

      [this.style.alignStart]: column.align === 'start',
      [this.style.alignCenter]: column.align === 'center',
      [this.style.alignEnd]: column.align === 'end',

      [this.style.sticky]: colNum < stickyColumns,
      [this.style.lastSticky]: colNum === stickyColumns - 1,
      [this.style.stickyActionCell]: column.stickyActionCell,
      [this.style.hasRowDetails]: rowDetails,
      [this.style.rowDetailsExtended]:
        !!selectedRows.get(rowData) && rowDetails(rowData),

      [this.style
        .reducedSpacingAndImprovedLayout]: reducedSpacingAndImprovedLayout,
    });
  };

  renderCell = (rowData, column, rowNum, colNum) => {
    const { virtualized, stickyColumns, columns, hideHeader } = this.props;

    const width =
      (virtualized || rowNum === 0) && hideHeader ? column.width : undefined;

    const style =
      typeof column.style === 'function'
        ? column.style(column, rowData, rowNum)
        : column.style;

    const stickyColumnStyle =
      colNum < stickyColumns
        ? getStickyColumnStyle(columns, column)
        : undefined;

    return (
      <WixStyleReactContext.Consumer key={colNum}>
        {({ reducedSpacingAndImprovedLayout }) => {
          const cellClasses = this.getCellClasses({
            column,
            colNum,
            rowData,
            reducedSpacingAndImprovedLayout,
          });

          return (
            <td
              style={{
                ...style,
                ...stickyColumnStyle,
              }}
              width={width}
              className={cellClasses}
              onClick={
                column.onCellClick
                  ? event => column.onCellClick(column, rowData, rowNum, event)
                  : undefined
              }
            >
              {column.render && column.render(rowData, rowNum)}
            </td>
          );
        }}
      </WixStyleReactContext.Consumer>
    );
  };

  calcLastPage = ({ data, itemsPerPage }) =>
    Math.ceil(data.length / itemsPerPage) - 1;

  loadMore = () => {
    if (this.state.currentPage < this.state.lastPage) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else {
      this.props.loadMore && this.props.loadMore();
    }
  };

  toggleRowDetails = selectedRow => {
    const { selectedRows } = this.state;

    const allowMultipleRowDetails =
      this.props.allowMultiDetailsExpansion && !this.props.virtualized;

    const newSelectedRows = new Map([
      ...(allowMultipleRowDetails ? [...selectedRows] : []),
      [selectedRow, !selectedRows.get(selectedRow)],
    ]);

    this.setState({ selectedRows: newSelectedRows });
  };

  renderVirtualizedRow = ({ data, index, style }) =>
    this.renderRow(data.data[index], index, style)[0];

  renderVirtualizedMemoizedRow = memo(
    this.renderVirtualizedRow,
    virtualRowsAreEqual,
  );

  getVirtualRowHeight = () => this.props.virtualizedLineHeight;

  virtualizedTableElementWithRefForward = React.forwardRef((props, ref) =>
    this.renderVirtualizedTableElement({ ...props, ref }),
  );

  renderVirtualizedTableElement = ({ children, ...rest }) => {
    return (
      <table {...rest}>
        {<TableHeader {...this.props} />}
        {children}
      </table>
    );
  };

  renderVirtualizedTable = () => {
    const {
      dataHook,
      data,
      virtualizedTableHeight,
      virtualizedListRef,
    } = this.props;
    return (
      <div data-hook={dataHook}>
        <List
          ref={virtualizedListRef}
          className={classNames(this.style.table, this.style.virtualized)}
          height={virtualizedTableHeight}
          itemCount={data.length}
          itemData={this.props}
          width={'100%'}
          itemSize={this.getVirtualRowHeight}
          outerElementType={this.virtualizedTableElementWithRefForward}
          innerElementType={'tbody'}
        >
          {this.renderVirtualizedMemoizedRow}
        </List>
      </div>
    );
  };
}

class TableHeader extends Component {
  static propTypes = {
    onSortClick: PropTypes.func,
    thPadding: PropTypes.string,
    thHeight: PropTypes.string,
    thFontSize: PropTypes.string,
    thBorder: PropTypes.string,
    thColor: PropTypes.string,
    thOpacity: PropTypes.string,
    thLetterSpacing: PropTypes.string,
    thBoxShadow: PropTypes.string,
    columns: PropTypes.array,
    skin: PropTypes.oneOf(['standard', 'neutral']),
    leftShadowVisible: PropTypes.bool,
    rightShadowVisible: PropTypes.bool,
  };

  get style() {
    return classes;
  }

  renderSortingArrow = (sortDescending, colNum) => {
    if (sortDescending === undefined) {
      return null;
    }

    const Arrow = sortDescending ? SortByArrowDown : SortByArrowUp;

    return (
      <span data-hook={`${colNum}_title`} className={this.style.sortArrow}>
        <Arrow
          height={12}
          data-hook={sortDescending ? 'sort_arrow_dec' : 'sort_arrow_asc'}
        />
      </span>
    );
  };

  renderInfoTooltip = (tooltipProps, colNum) => {
    if (tooltipProps === undefined) {
      return null;
    }

    const { content, ...otherTooltipProps } = tooltipProps;
    return (
      <InfoIcon
        content={content}
        tooltipProps={otherTooltipProps}
        dataHook={`${colNum}_info_tooltip`}
        className={this.style.infoTooltipWrapper}
      />
    );
  };

  renderHeaderCell = (column, colNum) => {
    const { stickyColumns, columns } = this.props;
    const stickyColumnStyle =
      colNum < stickyColumns
        ? getStickyColumnStyle(columns, column)
        : undefined;

    const style = {
      width: column.width,
      padding: this.props.thPadding,
      height: this.props.thHeight,
      fontSize: this.props.thFontSize,
      border: this.props.thBorder,
      boxShadow: this.props.thBoxShadow,
      color: this.props.thColor,
      opacity: this.props.thOpacity,
      letterSpacing: this.props.thLetterSpacing,
      cursor: column.sortable === undefined ? 'auto' : 'pointer',
      ...stickyColumnStyle,
    };

    const optionalHeaderCellProps = {};

    if (column.sortable) {
      optionalHeaderCellProps.onClick = () =>
        this.props.onSortClick && this.props.onSortClick(column, colNum);
    }

    return (
      <th
        style={style}
        key={colNum}
        className={classNames(this.style.thText, {
          [this.style.thSkinStandard]:
            !this.props.skin || this.props.skin === 'standard',
          [this.style.thSkinNeutral]: this.props.skin === 'neutral',
          [this.style.sticky]: colNum < stickyColumns,
          [this.style.lastSticky]: colNum === stickyColumns - 1,
        })}
        {...optionalHeaderCellProps}
      >
        <div
          className={classNames(this.style.thContainer, {
            [this.style.alignStart]: !column.align || column.align === 'start',
            [this.style.alignCenter]: column.align === 'center',
            [this.style.alignEnd]: column.align === 'end',
          })}
        >
          {column.title}
          {this.renderSortingArrow(column.sortDescending, colNum)}
          {this.renderInfoTooltip(column.infoTooltipProps, colNum)}
        </div>
      </th>
    );
  };

  render() {
    return (
      <thead>
        <tr>{this.props.columns.map(this.renderHeaderCell)}</tr>
      </thead>
    );
  }
}

function validateData(props, propName) {
  if (props[propName]) {
    if (
      props[propName].constructor &&
      props[propName].constructor.name &&
      props[propName].constructor.name.toLowerCase().indexOf('array') > -1
    ) {
      return null;
    } else {
      return Error('Data element must be an array type');
    }
  }
  return null;
}

DataTable.defaultProps = {
  data: [],
  columns: [],
  selectedRowsIds: [],
  isRowSelected: null,
  showHeaderWhenEmpty: false,
  infiniteScroll: false,
  itemsPerPage: 20,
  width: '100%',
  loadMore: null,
  hasMore: false,
  loader: <div className="loader">Loading ...</div>,
  scrollElement: null,
  useWindow: true,
  rowVerticalPadding: 'medium',
  showLastRowDivider: true,
  virtualizedLineHeight: 60,
  skin: 'standard',
  horizontalScroll: false,
  stickyColumns: 0,
  isRowDisabled: () => false,
};

DataTable.propTypes = {
  dataHook: PropTypes.string,
  /** An id to pass to the table */
  id: PropTypes.string,
  /** The data to display. (If data.id exists then it will be used as the React key value for each row, otherwise, the rowIndex will be used) */
  data: validateData,
  /** Configuration of the table's columns. See table below */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
      render: PropTypes.func.isRequired,
      sortable: PropTypes.bool,
      infoTooltipProps: PropTypes.shape(TooltipCommonProps),
      sortDescending: PropTypes.bool,
      align: PropTypes.oneOf(['start', 'center', 'end']),
      important: PropTypes.bool,
      style: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      stickyActionCell: PropTypes.bool,
    }),
  ).isRequired,
  /** Should the table show the header when data is empty */
  showHeaderWhenEmpty: PropTypes.bool,
  /** A string data-hook to apply to all table body rows. or a func which calculates the data-hook for each row  - Signature: `(rowData, rowNum) => string` */
  rowDataHook: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** A class to apply to all table body rows */
  rowClass: PropTypes.string,
  /** A func that gets row data and returns a class(es) to apply to that specific row */
  dynamicRowClass: PropTypes.func,
  /** A func that gets row data and returns boolean if row is selected or not */
  isRowSelected: PropTypes.func,
  /** A func that gets row data and returns boolean if row is highlighted or not */
  isRowHighlight: PropTypes.func,
  /** A callback method to be called on row click. Signature: `onRowClick(rowData, rowNum)` */
  onRowClick: PropTypes.func,
  /** A callback method to be called on row mouse enter. Signature: `onMouseEnterRow(rowData, rowNum)` */
  onMouseEnterRow: PropTypes.func,
  /** A callback method to be called on row mouse leave. Signature: `onMouseLeaveRow(rowData, rowNum)` */
  onMouseLeaveRow: PropTypes.func,
  /** If true, table will not render all data to begin with, but will gradually render the data as the user scrolls */
  infiniteScroll: PropTypes.bool,
  /** If infiniteScroll is on, this prop will determine how many rows will be rendered on each load */
  itemsPerPage: PropTypes.number,
  /** The width of the fixed table. Can be in percentages or pixels. */
  width: PropTypes.string,
  /** Table styling. Supports `standard` and `neutral`. */
  skin: PropTypes.oneOf(['standard', 'neutral']),
  /** A callback when more items are requested by the user. */
  loadMore: PropTypes.func,
  /** Whether there are more items to be loaded. Event listeners are removed if false. */
  hasMore: PropTypes.bool,
  /** The loader to show when loading more items. */
  loader: PropTypes.node,
  /** Add scroll listeners to the window, or else, the component's parentNode. */
  useWindow: PropTypes.bool,
  /** Add scroll listeners to specified DOM Object. */
  scrollElement: PropTypes.object,
  /** Table cell vertical padding:
   * - `large`: 24px
   * - `medium`: 18px
   * - `small`: with the feature toggle: 15px, without the feature toggle: 12px
   * - `tiny`: 12px
   * */
  rowVerticalPadding: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thPadding: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thHeight: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thFontSize: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thBorder: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thColor: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thOpacity: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thBoxShadow: PropTypes.string,
  /** this prop is deprecated and should not be used
   * @deprecated
   */
  thLetterSpacing: PropTypes.string,
  /** Function that returns React component that will be rendered in row details section. Example: `rowDetails={(row, rowNum) => <MyRowDetailsComponent {...row} />}` */
  rowDetails: PropTypes.func,
  /** Allows to open multiple row details */
  allowMultiDetailsExpansion: PropTypes.bool,
  /** Should we hide the header of the table. */
  hideHeader: PropTypes.bool,
  /** A flag specifying weather to show a divider after the last row */
  showLastRowDivider: PropTypes.bool,
  /** ++EXPERIMENTAL++ virtualize the table scrolling for long list items */
  virtualized: PropTypes.bool,
  /** ++EXPERIMENTAL++ Set virtualized table height */
  virtualizedTableHeight: PropTypes.number,
  /** ++EXPERIMENTAL++ Set virtualized table row height */
  virtualizedLineHeight: PropTypes.number,
  /** ++EXPERIMENTAL++ Set ref on virtualized List containing table rows */
  virtualizedListRef: PropTypes.any,
  /** array of selected ids in the table. Note that `isRowSelected` prop provides greater selection logic flexibility and is recommended to use instead. */
  selectedRowsIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  /** A callback function called on each column title click. Signature `onSortClick(colData, colNum)` */
  onSortClick: PropTypes.func,
  /** a function which will be called for every row in `data` to specify if it should appear as disabled. Example: `isRowDisabled={(rowData) => !rowData.isEnabled}` */
  isRowDisabled: PropTypes.func,

  /* Horizontal scroll support props. */
  horizontalScroll: PropTypes.bool,
  stickyColumns: PropTypes.number,
  leftShadowVisible: PropTypes.bool,
  rightShadowVisible: PropTypes.bool,
  onUpdateScrollShadows: PropTypes.func,
};
DataTable.displayName = 'DataTable';

export default DataTable;
