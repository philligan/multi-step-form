import './CheckboxField.scss';
import { CheckboxProps } from "../../types";

function CheckboxField({ desc, id, label, name, register, value }: CheckboxProps) {
  function labelNode() {
    return (
      label && (
        <label className="checkbox-field__label" htmlFor={id}>
          <span className="checkbox-field__label-inner">
            {label}
            <span className="checkbox-field__desc">{desc}</span>
          </span>
          {/* TODO: Hook-up dynamic cost */}
          <span className="checkbox-field__cost">+US$1</span>
        </label>
      )
    );
  }

  return (
    <div className="checkbox-field">
      <input
        {...register(name)}
        className="visually-hidden"
        id={id}
        name={name}
        type="checkbox"
        value={value}
      />
      {labelNode()}
    </div>
  );
}

export default CheckboxField;
