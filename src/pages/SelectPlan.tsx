import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import {
  ActionWrapper,
  Button,
  FieldGroup,
  FormWrapper,
  RadioField,
  StepWrapper,
  Toggle,
} from '../components';
import { SelectPlan as config } from '../config';
import { CurrencyFormat } from '../helpers';
import { FieldProps } from '../types';

function SelectPlan() {
  const [state, setState]: any = useAppState();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: state,
    mode: 'onSubmit',
  });
  const saveData = (data: {}) => {
    setState({ ...state, ...data });
    navigate('/add-ons');
  };

  function handleToggle(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, toggle: event.target.value });
  }

  function cost(field: FieldProps) {
    if (state.toggle === 'yearly') {
      return (
        <>
          <span>
            {CurrencyFormat(field.costYearly)}
            <abbr title="per year">/yr</abbr>
          </span>
          <small>2 months free</small>
        </>
      );
    }
    return (
      <span>
        {CurrencyFormat(field.costMonthly)}
        <abbr title="per month">/mo</abbr>
      </span>
    );
  }

  return (
    <StepWrapper title={config.title} desc={config.desc}>
      <FormWrapper onSubmit={handleSubmit(saveData)}>
        <FieldGroup legend={config.fieldLegend} direction="row">
          {config.fields &&
            config.fields.map((field) => (
              <RadioField
                cost={cost(field)}
                icon={field.svgIcon}
                id={field.id}
                key={field.id}
                label={field.label}
                name={field.name}
                register={register}
                value={field.value}
              />
            ))}
        </FieldGroup>
        <Toggle
          handleToggle={handleToggle}
          optionOne={config.toggle.optionOne}
          optionTwo={config.toggle.optionTwo}
          register={register}
        />
        <ActionWrapper>
          <Link to="/">{config.ctaSecondary}</Link>
          <Button style="primary" type="submit">
            {config.ctaPrimary}
          </Button>
        </ActionWrapper>
      </FormWrapper>
    </StepWrapper>
  );
}

export default SelectPlan;
