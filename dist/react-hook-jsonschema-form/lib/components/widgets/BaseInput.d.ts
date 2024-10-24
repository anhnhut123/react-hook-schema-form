import { CommonProps } from "schema-form-core";
export { BaseInput };
declare function BaseInput({
  name,
  required,
  readonly,
  methods,
  uiSchema,
  disabled,
  type,
  schema,
}: CommonProps & {
  type: "text" | "number" | "date";
}): JSX.Element;
