import "./FieldLabel.scss";

function FieldLabel({ children, id }) {
  return <label className="field-label" for={id}>{children}</label>;
}

export default FieldLabel;
