import '../../styles/_colors.scss';
import '../../styles/_fonts.scss';
import '../../styles/_functions.scss';
import '../../styles/_page.scss';
import '../../styles/_units.scss';

import Button from '../Button/Button';
import FieldLabel  from '../FieldLabel/FieldLabel';
import FormWrapper from '../FormWrapper/FormWrapper';
import InputField from '../InputField/InputField';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import Stepper from '../Stepper/Stepper';
import StepWrapper from '../StepWrapper/StepWrapper';

function App() {
  return (
    <>
      <PanelWrapper>
        <Stepper />
        <StepWrapper title='Select your plan' desc='Please provide your name, email address, and phone number.'>        
          <FormWrapper>
            <div>
              <FieldLabel>Name</FieldLabel>
              <InputField />
            </div>
            <div>
              <FieldLabel>Email</FieldLabel>
              <InputField />
            </div>
            <div>
              <FieldLabel>Phone</FieldLabel>
              <InputField />
            </div>
            <div>
              <Button type='submit'>Next step</Button>
            </div>
          </FormWrapper>
        </StepWrapper>
      </PanelWrapper>

      {/* TODO: Hook up other step panels */}
      {/* <PanelWrapper title='Select your plan' desc='You have the option of monthly or yearly billing.'>
      </PanelWrapper>
      <PanelWrapper title='Pick add-ons' desc='Add-ons help enhance your gaming experience.'>
      </PanelWrapper>
      <PanelWrapper title='Finishing up' desc='Double-check everything looks OK before confirming.'>
      </PanelWrapper> */}
    </>
  );
}

export default App;
