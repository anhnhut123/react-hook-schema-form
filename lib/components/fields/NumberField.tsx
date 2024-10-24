import { CommonProps } from "schema-form-core";

const NumberField = (props: CommonProps) => {
  const { StringField } = props.registry.fields;
  return <StringField type="number" {...props} />;
};

export default NumberField;
