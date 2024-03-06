import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../state';

import Button from '../components/Button/Button';
import FormWrapper from '../components/FormWrapper/FormWrapper';
import StepWrapper from '../components/StepWrapper/StepWrapper';
import RadioField from '../components/RadioField/RadioField';
import FieldGroup from '../components/FieldGroup/FieldGroup';

function SelectPlan() {
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors }
  } = useForm({
    defaultValues: state,
    mode: 'onSubmit',
  });
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate('/add-ons');
  };
  const resetData = () => {
    reset();
    navigate('/');
  };

  return (
    <StepWrapper title="Select your plan" desc="You have the option of monthly or yearly billing.">
      <FormWrapper onSubmit={handleSubmit(saveData)} onReset={resetData}>
        <FieldGroup legend="Plan options" direction="row">
          <RadioField
            id="plan-arcade"
            label="Arcade"
            name="plan"
            register={register}
            value="arcade"
          />
          <RadioField
            id="plan-advanced"
            label="Advanced"
            name="plan"
            register={register}
            value="advanced"
          />
          <RadioField id="plan-pro" label="Pro" name="plan" register={register} value="pro" />
        </FieldGroup>
        {/* TODO: Move actions wrapper elsewhere - maybe slot? */}
        <div className="form-wrapper__actions">
          <Button style="secondary" type="reset">
            Go Back
          </Button>
          <Button style="primary" type="submit">
            Next step
          </Button>
        </div>
      </FormWrapper>
    </StepWrapper>
  );
}

export default SelectPlan;
