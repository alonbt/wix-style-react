import { SyntheticEventData } from 'react-dom/test-utils';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface DataTableDriver extends BaseUniDriver {
  getRow: (rowIndex: number) => UniDriver;
  getRowsCount: () => Promise<number>;
  getRowsWithClassCount: (className: string) => Promise<number>;
  getRowsWithDataHook: (dataHookName: string) => Promise<any[]>;
  getRowWithDataHook: (dataHookName: string) => Promise<any>;
  getRowText: (index: number) => Promise<string[]>;
  getRowClasses: (index: number) => Promise<string[]>;
  getHeaderCell: (index: number) => Promise<any>;
  getHeaderCellStyle: (index: number) => Promise<string | null>;
  getHeaderCellWidth: (index: number) => Promise<string | null>;
  getCell: (rowIndex: number, cellIndex: number) => Promise<any>;
  getCellStyle: (rowIndex: number, colIndex: number) => Promise<string | null>;
  getCellWidth: (rowIndex: number, colIndex: number) => Promise<string | null>;
  isRowClickable: (index: number) => Promise<boolean>;
  isRowAnimated: (index: number) => Promise<boolean>;
  getTitles: () => Promise<string[]>;
  isDisplayingNothing: () => Promise<boolean>;
  isDisplayingHeaderOnly: () => Promise<boolean>;
  isDisplayingHeader: () => Promise<boolean>;
  hasChildWithId: (id: string) => Promise<boolean>;
  clickRow: (index: number, eventData?: SyntheticEventData) => Promise<void>;
  mouseEnterRow: (
    index: number,
    eventData?: SyntheticEventData,
  ) => Promise<void>;
  mouseLeaveRow: (
    index: number,
    eventData?: SyntheticEventData,
  ) => Promise<void>;
  hasRowDetails: (index: number) => Promise<number>;
  getRowDetailsText: (index: number) => Promise<string>;
  hasSortableTitle: (index: number) => Promise<boolean>;
  hasInfoIcon: (index: number) => Promise<boolean>;
  hasSortDescending: (index: number) => Promise<boolean>;
  clickSort: (index: number, eventData?: SyntheticEventData) => Promise<void>;
  getRowDetails: (index: number) => Promise<any>;
}
