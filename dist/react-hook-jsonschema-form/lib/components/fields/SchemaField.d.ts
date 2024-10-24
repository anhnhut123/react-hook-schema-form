import { Methods } from "schema-form-core";
type Props = {
  name: string;
  schema: any;
  uiSchema?: any;
  methods: Methods;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  registry?: any;
  idSchema?: any;
  idPrefix?: string;
  idSeparator?: any;
};
declare const SchemaField: ({
  name,
  uiSchema,
  registry,
  methods,
  idPrefix,
  idSeparator,
  required,
  ...rest
}: Props) => JSX.Element | null;
export default SchemaField;
