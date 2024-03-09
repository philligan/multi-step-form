import { useState } from 'react';
import './Toggle.scss';
import { ToggleProps } from '../../types';

function Toggle({ handleToggle, optionOne, optionTwo }: ToggleProps) {
  const [activeId, setActiveId] = useState(optionOne.id);

  function labelCssClassName(optionId: string) {
    if (activeId === optionId) {
      return 'toggle__label toggle__label--active';
    }
    return 'toggle__label';
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setActiveId(event.target.id);
    handleToggle(event);
  }

  return (
    <div className="toggle">
      <label className={labelCssClassName(optionOne.id)} htmlFor={optionOne.id}>
        {optionOne.label}
      </label>
      <span className="toggle__wrapper">
        <input
          onChange={changeHandler}
          aria-describedby="themeLabel"
          className="toggle__input toggle__input--one"
          id={optionOne.id}
          name={optionOne.name}
          type="radio"
          value={optionOne.value}
        />
        <input
          onChange={changeHandler}
          aria-describedby="themeLabel"
          className="toggle__input toggle__input--two"
          id={optionTwo.id}
          name={optionTwo.name}
          type="radio"
          value={optionTwo.value}
        />
        <span aria-hidden="true" className="toggle__background" />
        <span aria-hidden="true" className="toggle__switcher" />
      </span>
      <label className={labelCssClassName(optionTwo.id)} htmlFor={optionTwo.id}>
        {optionTwo.label}
      </label>
    </div>
  );
}

export default Toggle;
