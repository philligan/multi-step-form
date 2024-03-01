import './Stepper.scss';

function Stepper() {
  return (
    <ol className="stepper">
      <li aria-current="step" className="stepper__item">
        <span className='stepper__text'>
          <span className="stepper__title">Step 1</span>
          <span className="stepper__desc">Your info</span>
        </span>
      </li>
      <li aria-current="false" className="stepper__item">
        <span className='stepper__text'>
          <span className="stepper__title">Step 2</span>
          <span className="stepper__desc">Select plan</span>
        </span>
      </li>
      <li aria-current="false" className="stepper__item">
        <span className='stepper__text'>
          <span className="stepper__title">Step 3</span>
          <span className="stepper__desc">Add-ons</span>
        </span>
      </li>
      <li aria-current="false" className="stepper__item">
        <span className='stepper__text'>
          <span className="stepper__title">Step 4</span>
          <span className="stepper__desc">Summary</span>
        </span>
      </li>
    </ol>
  );
}

export default Stepper;
