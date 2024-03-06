import './FieldGroup.scss';

function FieldGroup({ children, direction, legend }) {
  const fieldsClassName = `choice-wrapper__fields choice-wrapper__fields--${direction}`;
  return (
    <fieldset className="choice-wrapper">
      <legend className="visually-hidden">{legend}</legend>
      <div className={fieldsClassName}>{children}</div>
    </fieldset>
  );
}

export default FieldGroup;
