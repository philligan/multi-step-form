import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import { Button, CheckboxField, FieldGroup, FormWrapper, StepWrapper } from '../components';
import { AddOns as config } from '../config';
import { CurrencyFormat } from '../helpers';

function AddOns() {
  const [state, setState]: any = useAppState();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: state,
    mode: 'onSubmit',
  });

  // TODO: Change from 'any' type
  const saveData = (data: any) => {
    setState({ ...state, ...data });
    navigate('/summary');
  };

  function cost(field: any) {
    if (state.toggle === 'yearly') {
      return <>+{CurrencyFormat(field.costYearly)}</>;
    }
    return <>+{CurrencyFormat(field.costMonthly)}</>;
  }

  return (
    <StepWrapper title={config.title} desc={config.desc}>
      <FormWrapper onSubmit={handleSubmit(saveData)}>
        <FieldGroup direction="col" legend="Add-on options">
          {config.fields &&
            config.fields.map((field) => (
              <CheckboxField
                cost={cost(field)}
                id={field.id}
                label={field.label}
                desc={field.desc}
                name={field.name}
                register={register}
                value={field.value}
              />
            ))}
        </FieldGroup>
        {/* TODO: Move actions wrapper elsewhere - maybe slot? */}
        <div className="form-wrapper__actions">
          <Link to="/select-plan">{config.ctaSecondary}</Link>
          <Button style="primary" type="submit">
            {config.ctaPrimary}
          </Button>
        </div>
      </FormWrapper>
    </StepWrapper>
  );
}

export default AddOns;
