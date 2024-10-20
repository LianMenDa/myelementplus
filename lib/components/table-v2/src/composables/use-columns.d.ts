import type { CSSProperties, Ref } from 'vue';
import type { TableV2Props } from '../table';
import type { AnyColumns, Column, KeyType } from '../types';
declare function useColumns(props: TableV2Props, columns: Ref<AnyColumns>, fixed: Ref<boolean>): {
    columns: import("vue").ComputedRef<{
        key: KeyType;
        align?: import("../types").Alignment | undefined;
        class?: string | import("../types").ClassNameGetter<any> | undefined;
        dataKey?: KeyType | undefined;
        fixed?: true | import("../constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("../types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("../types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("../types").HeaderCellRenderer<any> | undefined;
    }[]>;
    columnsStyles: import("vue").ComputedRef<Record<KeyType | undefined, CSSProperties>>;
    columnsTotalWidth: import("vue").ComputedRef<number>;
    fixedColumnsOnLeft: import("vue").ComputedRef<{
        key: KeyType;
        align?: import("../types").Alignment | undefined;
        class?: string | import("../types").ClassNameGetter<any> | undefined;
        dataKey?: KeyType | undefined;
        fixed?: true | import("../constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("../types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("../types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("../types").HeaderCellRenderer<any> | undefined;
    }[]>;
    fixedColumnsOnRight: import("vue").ComputedRef<{
        key: KeyType;
        align?: import("../types").Alignment | undefined;
        class?: string | import("../types").ClassNameGetter<any> | undefined;
        dataKey?: KeyType | undefined;
        fixed?: true | import("../constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("../types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("../types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("../types").HeaderCellRenderer<any> | undefined;
    }[]>;
    hasFixedColumns: import("vue").ComputedRef<number>;
    mainColumns: import("vue").ComputedRef<AnyColumns>;
    normalColumns: import("vue").ComputedRef<{
        key: KeyType;
        align?: import("../types").Alignment | undefined;
        class?: string | import("../types").ClassNameGetter<any> | undefined;
        dataKey?: KeyType | undefined;
        fixed?: true | import("../constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("../types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("../types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("../types").HeaderCellRenderer<any> | undefined;
    }[]>;
    visibleColumns: import("vue").ComputedRef<{
        key: KeyType;
        align?: import("../types").Alignment | undefined;
        class?: string | import("../types").ClassNameGetter<any> | undefined;
        dataKey?: KeyType | undefined;
        fixed?: true | import("../constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("../types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("../types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("../types").HeaderCellRenderer<any> | undefined;
    }[]>;
    getColumn: (key: KeyType) => {
        key: KeyType;
        align?: import("../types").Alignment | undefined;
        class?: string | import("../types").ClassNameGetter<any> | undefined;
        dataKey?: KeyType | undefined;
        fixed?: true | import("../constants").FixedDir | undefined;
        flexGrow?: import("csstype").GlobalsNumber | undefined;
        flexShrink?: import("csstype").GlobalsNumber | undefined;
        title?: string | undefined;
        hidden?: boolean | undefined;
        headerClass?: string | import("../types").HeaderClassGetter<any> | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        sortable?: boolean | undefined;
        width: number;
        cellRenderer?: import("../types").CellRenderer<any> | undefined;
        headerCellRenderer?: import("../types").HeaderCellRenderer<any> | undefined;
    } | undefined;
    getColumnStyle: (key: KeyType) => CSSProperties;
    updateColumnWidth: (column: Column<any>, width: number) => void;
    onColumnSorted: (e: MouseEvent) => void;
};
export { useColumns };
export declare type UseColumnsReturn = ReturnType<typeof useColumns>;
