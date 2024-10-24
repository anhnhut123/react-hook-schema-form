export declare const ADDITIONAL_PROPERTY_FLAG = "__additional_property";
export declare const isObject: (thing: any) => boolean;
export declare const findSchemaDefinition: ($ref: string, rootSchema?: {}) => any;
export declare const getMatchingOption: (options: Array<any>) => number;
export declare const guessType: (value: any) => "object" | "array" | "string" | "null" | "boolean" | "number";
export declare const getSchemaType: (schema: any) => any;
/**
 * Recursively merge deeply nested schemas.
 * The difference between mergeSchemas and mergeObjects
 * is that mergeSchemas only concats arrays for
 * values under the "required" keyword, and when it does,
 * it doesn't include duplicate values.
 */
export declare const mergeSchemas: (obj1: any, obj2: any) => any;
export declare const resolveSchema: (schema: any, rootSchema?: {}) => any;
/** This function will create new "properties" items for each key in our formData */
export declare function stubExistingAdditionalProperties(schema: any, rootSchema?: {}): any;
export declare const retrieveSchema: (schema: any, rootSchema?: {}) => any;
export declare const getUiOptions: (uiSchema?: any) => {};
/**
 * This function checks if the given schema matches a single
 * constant value.
 */
export declare const isConstant: (schema: any) => any;
export declare const isSelect: (_schema: any, rootSchema?: {}) => boolean;
export declare const isMultiSelect: (schema: any, rootSchema?: {}) => boolean;
export declare const isFilesArray: (schema: any, uiSchema: any, rootSchema?: {}) => boolean;
export declare const getDisplayLabel: (schema: any, uiSchema: any, rootSchema: any) => boolean;
export declare const orderProperties: (properties: any, order?: Array<string>) => any;
export declare const getWidget: (schema: any, widget: any, registeredWidgets?: {}) => any;
export declare const toConstant: (schema: any) => any;
export declare const optionsList: (schema: any) => any;
export declare const hasWidget: (schema: any, widget: any, registeredWidgets?: {}) => boolean;
export declare const toIdSchema: (schema: any, id: string | null, rootSchema: any, idPrefix?: string, idSeparator?: string) => any;
export declare const mergeObjects: (obj1: any, obj2: any, concatArrays?: boolean) => any;
