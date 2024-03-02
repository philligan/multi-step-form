import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppState } from '../state';

import FormWrapper from '../components/FormWrapper/FormWrapper';
import StepWrapper from '../components/StepWrapper/StepWrapper';
import Button from '../components/Button/Button';

function AddOns() {
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const { 
    // register,
    handleSubmit, 
    // reset,
    // formState: { errors }  
  } = useForm({
    defaultValues: state,
    mode: "onSubmit"
  });
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/summary");
  };
  const resetData = () => {    
    // reset();
    navigate("/select-plan");
  }

  return (
    <StepWrapper
      title='Pick add-ons'
      desc='Add-ons help enhance your gaming experience.'>
        <FormWrapper onSubmit={handleSubmit(saveData)} onReset={resetData}>
          {/* TODO: Move actions wrapper elsewhere - maybe slot? */}
          <div className="form-wrapper__actions">        
            <Button style="secondary" type="reset">Go Back</Button>
            <Button style="primary" type="submit">Next step</Button>
          </div>
        </FormWrapper>
    </StepWrapper>
  )
}

export default AddOns;