declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    readonly title: import("../../../utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("../../../utils").EpPropFinalized<(new (...args: any[]) => import("./collapse").CollapseActiveName & {}) | (() => import("./collapse").CollapseActiveName) | ((new (...args: any[]) => import("./collapse").CollapseActiveName & {}) | (() => import("./collapse").CollapseActiveName))[], unknown, unknown, undefined, boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}, {
    /** @description current collapse-item whether active */
    isActive: import("vue").ComputedRef<boolean | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: import("../../../utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("../../../utils").EpPropFinalized<(new (...args: any[]) => import("./collapse").CollapseActiveName & {}) | (() => import("./collapse").CollapseActiveName) | ((new (...args: any[]) => import("./collapse").CollapseActiveName & {}) | (() => import("./collapse").CollapseActiveName))[], unknown, unknown, undefined, boolean>;
    readonly icon: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<(new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) | ((new (...args: any[]) => (string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>) & {}) | (() => string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
}>>, {
    readonly title: string;
    readonly disabled: boolean;
    readonly name: import("../../../utils").EpPropMergeType<(new (...args: any[]) => import("./collapse").CollapseActiveName & {}) | (() => import("./collapse").CollapseActiveName) | ((new (...args: any[]) => import("./collapse").CollapseActiveName & {}) | (() => import("./collapse").CollapseActiveName))[], unknown, unknown>;
}>, {
    title?(_: {}): any;
    icon?(_: {
        isActive: boolean | undefined;
    }): any;
    default?(_: {}): any;
}>;
export default _default;
declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
