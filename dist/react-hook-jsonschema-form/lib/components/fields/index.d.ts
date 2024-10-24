/// <reference types="react" />
declare const _default: {
  ArrayField: ({
    name,
    registry,
    schema,
    idSchema,
    uiSchema,
    required,
    readonly,
    disabled,
    idPrefix,
    idSeparator,
    methods,
    placeholder,
  }: import("schema-form-core").CommonProps) => JSX.Element;
  BooleanField: ({
    name,
    schema,
    registry,
    idSchema,
    uiSchema,
    readonly,
    required,
    disabled,
    methods,
  }: import("schema-form-core").CommonProps) => JSX.Element;
  DescriptionField: ({
    id,
    description,
  }: {
    id: string;
    description?:
      | string
      | import("react").ReactElement<
          any,
          string | import("react").JSXElementConstructor<any>
        >
      | undefined;
  }) => JSX.Element | null;
  ObjectField: ({
    name,
    uiSchema,
    required,
    readonly,
    disabled,
    methods,
    registry,
    idSchema,
    idPrefix,
    idSeparator,
    ...rest
  }: import("schema-form-core").CommonProps) => JSX.Element;
  SchemaField: ({
    name,
    uiSchema,
    registry,
    methods,
    idPrefix,
    idSeparator,
    required,
    ...rest
  }: {
    name: string;
    schema: any;
    uiSchema?: any;
    methods: import("schema-form-core").Methods;
    disabled?: boolean | undefined;
    readonly?: boolean | undefined;
    required?: boolean | undefined;
    registry?: any;
    idSchema?: any;
    idPrefix?: string | undefined;
    idSeparator?: any;
  }) => JSX.Element | null;
  NumberField: (props: import("schema-form-core").CommonProps) => JSX.Element;
  StringField: ({
    name,
    schema,
    uiSchema,
    required,
    registry,
    methods,
    ...rest
  }: import("schema-form-core").CommonProps) => JSX.Element;
  TitleField: ({
    id,
    title,
    required,
  }: {
    id?: string | undefined;
    title?: string | undefined;
    required?: boolean | undefined;
  }) => JSX.Element | null;
  NullField: () => null;
  UnsupportedField: () => JSX.Element;
};
export default _default;
