import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useAppState } from '../state';

import Button from '../components/Button/Button';
import FormWrapper from '../components/FormWrapper/FormWrapper';
import FieldGroup from '../components/FieldGroup/FieldGroup';
import StepWrapper from '../components/StepWrapper/StepWrapper';
import CheckboxField from '../components/CheckboxField/CheckboxField';

function AddOns() {
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors }
  } = useForm({
    defaultValues: state,
    mode: 'onSubmit',
  });
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate('/summary');
  };
  const resetData = () => {
    // reset();
    navigate('/select-plan');
  };

  return (
    <StepWrapper title="Pick add-ons" desc="Add-ons help enhance your gaming experience.">
      <FormWrapper onSubmit={handleSubmit(saveData)} onReset={resetData}>
        <FieldGroup direction="col" legend="Add-on options">
          <CheckboxField
            id="addons-online-service"
            label="Online Service"
            desc="Access to multiplayer games"
            name="addOns"
            register={register}
            value="onlineService"
          />
          <CheckboxField
            id="addons-larger-storage"
            label="Larger Storage"
            desc="Extra 1TB of cloud save"
            name="addOns"
            register={register}
            value="largerStorage"
          />
          <CheckboxField
            id="addons-customizable-profile"
            label="Customizable Profile"
            desc="Custom theme on your profile"
            name="addOns"
            register={register}
            value="customizableProfile"
          />
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

export default AddOns;
