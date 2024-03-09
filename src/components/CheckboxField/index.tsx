import './CheckboxField.scss';
import { CheckboxProps } from '../../types';

function CheckboxField({ cost, desc, id, label, name, register, value }: CheckboxProps) {
  function labelNode() {
    return (
      label && (
        <label className="checkbox-field__label" htmlFor={id}>
          <span className="checkbox-field__label-inner">
            {label}
            <span className="checkbox-field__desc">{desc}</span>
          </span>
          <span className="checkbox-field__cost">{cost}</span>
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
