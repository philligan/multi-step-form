import './StepWrapper.scss';
import { StepWrapperProps } from '../../types'

function StepWrapper({ children, desc, title }: StepWrapperProps) {
  return <div className="step-wrapper">
    <h2 className="step-wrapper__title">{title}</h2>
    <p className="step-wrapper__desc">{desc}</p>
    {children}
  </div>;
}

export default StepWrapper;
