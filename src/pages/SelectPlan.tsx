import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import { Button, FieldGroup, FormWrapper, RadioField, StepWrapper, Toggle } from '../components';
import { SelectPlan as config } from '../config';

function SelectPlan() {
  const [state, setState]: any = useAppState();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: state,
    mode: 'onSubmit',
  });
  // TODO: Change from 'any' type
  const saveData = (data: any) => {
    setState({ ...state, ...data });
    navigate('/add-ons');
  };

  function handleToggle(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, toggle: event.target.value });
  }

  function cost(field: any) {
    if (state.toggle === 'yearly') {
      return field.costYearly;
    }
    return field.costMonthly;
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
        />
        {/* TODO: Move actions wrapper elsewhere - maybe slot? */}
        <div className="form-wrapper__actions">
          <Button style="secondary" type="button">
            {config.ctaSecondary}
          </Button>
          <Button style="primary" type="submit">
            {config.ctaPrimary}
          </Button>
        </div>
      </FormWrapper>
    </StepWrapper>
  );
}

export default SelectPlan;
