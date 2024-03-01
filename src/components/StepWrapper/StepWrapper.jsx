import './StepWrapper.scss';

function StepWrapper({ children, desc, title }) {
  return <div className="step-wrapper">
    <h2 className="step-wrapper__title">{title}</h2>
    <p className="step-wrapper__desc">{desc}</p>
    {children}
  </div>;
}

export default StepWrapper;
