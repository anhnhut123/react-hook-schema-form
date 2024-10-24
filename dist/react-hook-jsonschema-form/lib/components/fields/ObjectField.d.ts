import { CommonProps } from "schema-form-core";
declare const ObjectField: ({
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
}: CommonProps) => JSX.Element;
export default ObjectField;
