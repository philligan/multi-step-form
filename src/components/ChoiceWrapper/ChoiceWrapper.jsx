import './ChoiceWrapper.scss';

function ChoiceWrapper({ children, legend }) {
  return (
    <fieldset className="choice-wrapper">
      <legend className="visually-hidden">{legend}</legend>
      <div className="choice-wrapper__fields">{children}</div>
    </fieldset>
  );
}

export default ChoiceWrapper;
