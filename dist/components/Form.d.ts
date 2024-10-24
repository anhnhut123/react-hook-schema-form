import React from "react";
import { JSONSchema7 } from "jsonschema7";
import { Methods } from "schema-form-core";
export { Form };
type Props = {
  schema: JSONSchema7;
  uiSchema?: any;
  fields?: any;
  widgets?: any;
  methods: Methods;
  onSubmit?: (data: any) => void;
  buttons?: React.ReactElement;
  ArrayFieldTemplate?: any;
  ObjectFieldTemplate?: any;
  FieldTemplate?: any;
  submitText?: string;
  enableReinitialize?: boolean;
  formContext?: any;
};
declare function Form({
  onSubmit,
  submitText,
  children,
  ...rest
}: React.PropsWithChildren<Props>): JSX.Element;
