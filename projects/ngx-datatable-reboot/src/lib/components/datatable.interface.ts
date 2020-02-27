import { PipeTransform } from '@angular/core';
import { ValueGetter } from '../utils/column-prop-getters';

export enum ClickType {
  single = 'single',
  double = 'double'
}

export enum ColumnMode {
  standard = 'standard',
  flex = 'flex',
  force = 'force'
}

export enum ContextmenuType {
  header = 'header',
  body = 'body'
}

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

export enum SortType {
  single = 'single',
  multi = 'multi'
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

export interface SortPropDir {
  dir: SortDirection;
  prop: TableColumnProp;
}

/**
 * Column property that indicates how to retrieve this column's
 * value from a row.
 * 'a.deep.value', 'normalprop', 0 (numeric)
 */
export type TableColumnProp = string | number;

/** Column Type */
export interface TableColumn {
  /** Internal unique id */
  $$id?: string;

  /** Internal for column width distributions */
  $$oldWidth?: number;

  /** Internal for setColumnDefaults */
  $$valueGetter?: ValueGetter;

  /** Determines if column is checkbox */
  checkboxable?: boolean;

  /** Determines if the column is frozen to the left  */
  frozenLeft?: boolean;

  /** Determines if the column is frozen to the right */
  frozenRight?: boolean;

  /** The grow factor relative to other columns. Same as the flex-grow
   * API from http =//www.w3.org/TR/css3-flexbox/. Basically;
   * take any available extra width and distribute it proportionally
   * according to all columns' flexGrow values.
   */
  flexGrow?: number;

  /** Min width of the column */
  minWidth?: number;

  /** Max width of the column */
  maxWidth?: number;

  /** The default width of the column, in pixels */
  width?: number;

  /** Can the column be resized */
  resizeable?: boolean;

  /** Custom sort comparator */
  comparator?: any;

  /** Custom pipe transforms */
  pipe?: PipeTransform;

  /** Can the column be sorted */
  sortable?: boolean;

  /** Can the column be re-arranged by dragging */
  draggable?: boolean;

  /** Whether the column can automatically resize to fill space in the table. */
  canAutoResize?: boolean;

  /** Identifier for Column */
  colID?: string;

  /** Column name or label */
  name?: string;

  /** Property to bind to the row. Example:
   * `someField` or `some.field.nested`, 0 (numeric)
   * If left blank, will use the name as camel case conversion
   */
  prop?: TableColumnProp;

  /** Cell template ref */
  cellTemplate?: any;

  /** Header template ref */
  headerTemplate?: any;

  /** Tree toggle template ref */
  treeToggleTemplate?: any;

  /** CSS Classes for the cell */
  cellClass?: string | ((data: any) => string | any);

  /** CSS classes for the header */
  headerClass?: string | ((data: any) => string | any);

  /** Header checkbox enabled */
  headerCheckboxable?: boolean;

  /** Is tree displayed on this column */
  isTreeColumn?: boolean;

  /** Width of the tree level indent */
  treeLevelIndent?: number;

  /** Summary function */
  summaryFunc?: (cells: any[]) => any;

  /** Summary cell template ref */
  summaryTemplate?: any;
}

