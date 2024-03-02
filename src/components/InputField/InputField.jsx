import './InputField.scss';

function InputField({ error, id, label, name, options, register, type }) {
  const errorId = `error-${id}`;
  const ariaDescribedBy = error ? errorId : null;
  const inputClassNames = error ? 'input-field__node input-field__node--error' : 'input-field__node'

  function errorNode() {
    return error && (<div className="input-field__error" id={errorId}>
      <span className="visually-hidden">Error:</span> {error}
    </div>)
  }

  function labelNode() {
    return label && <label className="input-field__label" id={id}>{label}</label>
  }

  return (
    <div className="input-field">
      {labelNode()}
      {errorNode()}
      <input
        {...register(name, options)} 
        aria-describedby={ariaDescribedBy}
        className={inputClassNames}
        id={id}
        name={name} 
        type={type} />
    </div>
  );
}

export default InputField;
