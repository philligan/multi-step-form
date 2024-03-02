import '../../styles/_colors.scss';
import '../../styles/_fonts.scss';
import '../../styles/_functions.scss';
import '../../styles/_page.scss';
import '../../styles/_units.scss';

import FormWrapper from '../FormWrapper/FormWrapper';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import Stepper from '../Stepper/Stepper';
import StepWrapper from '../StepWrapper/StepWrapper';

function App() {
  return (
    <>
      <PanelWrapper>
        <Stepper />
        <StepWrapper title='Select your plan' desc='Please provide your name, email address, and phone number.'>        
          <FormWrapper />        
        </StepWrapper>
      {/* TODO: Hook up other steps */}
      {/* <StepWrapper title='Select your plan' desc='You have the option of monthly or yearly billing.'>
      </StepWrapper>
      <StepWrapper title='Pick add-ons' desc='Add-ons help enhance your gaming experience.'>
      </StepWrapper>
      <StepWrapper title='Finishing up' desc='Double-check everything looks OK before confirming.'>
      </StepWrapper> */}
      </PanelWrapper>
    </>
  );
}

export default App;
