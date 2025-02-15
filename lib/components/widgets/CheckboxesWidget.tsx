import { CommonProps } from "schema-form-core";

export { CheckboxesWidget };

function CheckboxesWidget({
  id,
  disabled,
  options,
  readonly,
  name,
  methods,
  schema,
  required,
}: CommonProps) {
  const { register } = methods;
  const { enumOptions, enumDisabled } = options;

  const fieldName = schema?.parentKey
    ? `${schema?.parentKey}.${name}`
    : `${name}`;

  return (
    <div className="checkboxes" id={id}>
      {enumOptions.map((option: any, index: number) => {
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) !== -1;
        const disabledCls =
          disabled || itemDisabled || readonly ? "disabled" : "";

        return (
          <div className="form-check" key={`${id}_${index}`}>
            <input
              type="checkbox"
              className="form-check-input"
              id={`${id}_${index}`}
              defaultValue={option.value}
              disabled={!!disabledCls}
              {...register(`${fieldName}`, {
                disabled: disabled || itemDisabled || readonly,
                required,
              })}
            />
            <label className="form-check-label" htmlFor={`${id}_${index}`}>
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
