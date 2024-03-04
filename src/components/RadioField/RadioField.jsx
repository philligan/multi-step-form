import './RadioField.scss';

function InputField({ id, label, name, register, value }) {
  function labelNode() {
    return (
      label && (
        <label className="radio-field__label" htmlFor={id}>
          {/* TODO: Add SVG component or sprite */}
          <svg
            className="radio-field__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40">
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E"></circle>
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"></path>
            </g>
          </svg>
          {label}
          {/* TODO: Hook-up dynamic cost */}
          <span className="radio-field__cost">US$9/mo</span>
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

export default InputField;
