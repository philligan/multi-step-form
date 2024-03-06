import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import {Button,FieldGroup, FormWrapper,  RadioField, StepWrapper} from '../components';

function SelectPlan() {
  const [state, setState]:any = useAppState();
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
  
  // TODO: Change from 'any' type
  const saveData = (data: any) => {
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
