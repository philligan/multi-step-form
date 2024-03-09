import './RadioField.scss';
import { RadioFieldProps } from '../../types';

function RadioField({ cost, icon, id, label, name, register, value }: RadioFieldProps) {
  function labelNode() {
    return (
      label && (
        <label className="radio-field__label" htmlFor={id}>
          {icon && (
            <span className="radio-field__icon" dangerouslySetInnerHTML={{ __html: icon }} />
          )}
          {label}
          <span className="radio-field__cost">{cost}</span>
        </label>
      )
    );
  }

  return (
    <div className="radio-field">
      <input
        {...register(name)}
        className="visually-hidden"
        id={id}
        name={name}
        type="radio"
        value={value}
      />
      {labelNode()}
    </div>
  );
}

export default RadioField;
