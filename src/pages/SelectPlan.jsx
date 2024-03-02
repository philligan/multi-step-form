import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppState } from '../state';

import FormWrapper from '../components/FormWrapper/FormWrapper';
import StepWrapper from '../components/StepWrapper/StepWrapper';
import Button from '../components/Button/Button';

function SelectPlan() {
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
    navigate("/add-ons");
  };
  const resetData = () => {    
    // reset();
    navigate("/");
  }

  return (
    <StepWrapper
      title='Select your plan'
      desc='You have the option of monthly or yearly billing.'>
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

export default SelectPlan;