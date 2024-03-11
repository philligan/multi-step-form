import './StepWrapper.scss';
import { StepWrapperProps } from '../../types';

function StepWrapper({ children, desc, title }: StepWrapperProps) {
  return (
    <div className="step-wrapper">
      <div className="step-wrapper__head">
        <h1 className="step-wrapper__title">{title}</h1>
        <p className="step-wrapper__desc">{desc}</p>
      </div>
      {children}
    </div>
  );
}

export default StepWrapper;
