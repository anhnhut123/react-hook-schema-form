import { CommonProps } from "schema-form-core";
export { SelectWidget };
declare function SelectWidget({
  name,
  schema,
  id,
  options,
  methods,
  required,
  disabled,
  readonly,
  multiple,
  placeholder,
}: CommonProps): JSX.Element;
