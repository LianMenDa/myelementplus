import type { TableV2Props } from './table';
import type { TableGridInstance } from './table-grid';
declare function useTable(props: TableV2Props): {
    columns: import("vue").ComputedRef<{
        key: import("./types").KeyType;
        align?: import("./types").Alignment | undefined;
        class?: string | import("./types").ClassNameGetter<any> | undefined;
        dataKey?: import("./types").KeyType | undefined;
        fixed?: true | import("./constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("./types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: import("vue").CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("./types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("./types").HeaderCellRenderer<any> | undefined;
    }[]>;
    containerRef: import("vue").Ref<any>;
    mainTableRef: import("vue").Ref<TableGridInstance | undefined>;
    leftTableRef: import("vue").Ref<TableGridInstance | undefined>;
    rightTableRef: import("vue").Ref<TableGridInstance | undefined>;
    isDynamic: import("vue").ComputedRef<boolean>;
    isResetting: import("vue").ShallowRef<boolean>;
    isScrolling: import("vue").ShallowRef<boolean>;
    hasFixedColumns: import("vue").ComputedRef<number>;
    columnsStyles: import("vue").ComputedRef<Record<import("./types").KeyType | undefined, import("vue").CSSProperties>>;
    columnsTotalWidth: import("vue").ComputedRef<number>;
    data: import("vue").ComputedRef<any[]>;
    expandedRowKeys: import("vue").Ref<import("./types").KeyType[]>;
    depthMap: import("vue").Ref<Record<import("./types").KeyType, number>>;
    fixedColumnsOnLeft: import("vue").ComputedRef<{
        key: import("./types").KeyType;
        align?: import("./types").Alignment | undefined;
        class?: string | import("./types").ClassNameGetter<any> | undefined;
        dataKey?: import("./types").KeyType | undefined;
        fixed?: true | import("./constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("./types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: import("vue").CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("./types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("./types").HeaderCellRenderer<any> | undefined;
    }[]>;
    fixedColumnsOnRight: import("vue").ComputedRef<{
        key: import("./types").KeyType;
        align?: import("./types").Alignment | undefined;
        class?: string | import("./types").ClassNameGetter<any> | undefined;
        dataKey?: import("./types").KeyType | undefined;
        fixed?: true | import("./constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("./types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: import("vue").CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("./types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("./types").HeaderCellRenderer<any> | undefined;
    }[]>;
    mainColumns: import("vue").ComputedRef<import("./types").AnyColumns>;
    bodyWidth: import("vue").ComputedRef<number>;
    emptyStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    rootStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    headerWidth: import("vue").ComputedRef<number>;
    footerHeight: import("vue").ComputedRef<import("vue").CSSProperties>;
    mainTableHeight: import("vue").ComputedRef<number>;
    fixedTableHeight: import("vue").ComputedRef<number>;
    leftTableWidth: import("vue").ComputedRef<number>;
    rightTableWidth: import("vue").ComputedRef<number>;
    showEmpty: import("vue").ComputedRef<boolean>;
    getRowHeight: (rowIndex: number) => number;
    onColumnSorted: (e: MouseEvent) => void;
    onRowHovered: ({ hovered, rowKey }: import("./row").RowHoverParams) => void;
    onRowExpanded: ({ expanded, rowData, rowIndex, rowKey, }: import("./row").RowExpandParams) => void;
    onRowsRendered: (params: import("./grid").onRowRenderedParams) => void;
    onRowHeightChange: ({ rowKey, height, rowIndex }: import("./row").RowHeightChangedParams, fixedDir: import("./constants").FixedDir) => void;
    scrollTo: (params: import("./composables").ScrollPos) => void;
    scrollToLeft: (scrollLeft: number) => void;
    scrollToTop: (scrollTop: number) => void;
    scrollToRow: (row: number, strategy?: import("./composables").ScrollStrategy) => void;
    onScroll: (params: import("./composables").ScrollPos) => void;
    onVerticalScroll: ({ scrollTop }: import("./composables").ScrollPos) => void;
};
export { useTable };
export declare type UseTableReturn = ReturnType<typeof useTable>;
