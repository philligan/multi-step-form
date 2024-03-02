import './Stepper.scss';
import { useLocation } from "react-router-dom";

function Stepper() {
  const location = useLocation();
  const routes = [
    {
      desc: 'Step 1',
      id: 'step1',
      title: 'Your info',
      url: '/'
    },
    {
      desc: 'Step 2',
      id: 'step2',
      title: 'Select Plan',
      url: '/select-plan'
    },
    {
      desc: 'Step 3',
      id: 'step3',
      title: 'Add-ons',
      url: '/add-ons'
    },
    {
      desc: 'Step 4',
      id: 'step4',
      title: 'Summary',
      url: '/summary'
    }
  ]
  const activeIndex = routes.findIndex(route => route.url === location.pathname);

  function ariaCurrent(stepIndex) {
    if (stepIndex < activeIndex) {
      return 'complete';
    } else if (stepIndex === activeIndex) {
      return 'step';
    }
    return false;
  }

  function steps() {
    return routes.map(function(step, stepIndex) {
      return (
        <li aria-current={ariaCurrent(stepIndex)} className="stepper__item" key={step.id}>
          <span className='stepper__text'>
            <span className="stepper__title">{step.title}</span>
            <span className="stepper__desc">{step.desc}</span>
          </span>
        </li>
      );
    });
  }

  return (
    <ol className="stepper">
      {steps()}
    </ol>
  );
}

export default Stepper;
