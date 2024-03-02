import '../../styles/_colors.scss';
import '../../styles/_fonts.scss';
import '../../styles/_functions.scss';
import '../../styles/_page.scss';
import '../../styles/_units.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from '../../state';
import PersonalInfo from '../../pages/PersonalInfo';
import SelectPlan from '../../pages/SelectPlan';
// import FormWrapper from '../FormWrapper/FormWrapper';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import Stepper from '../Stepper/Stepper';
// import StepWrapper from '../StepWrapper/StepWrapper';

function App() {
  return (
    <AppProvider>
      <PanelWrapper>
        <Router>        
          <Stepper />
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
          </Routes>
        </Router>
      </PanelWrapper>
      {/* 
      <PanelWrapper>
        <Stepper />
        <StepWrapper title='Select your plan' desc='Please provide your name, email address, and phone number.'>        
          <FormWrapper />        
        </StepWrapper>
      
      <StepWrapper title='Select your plan' desc='You have the option of monthly or yearly billing.'>
      </StepWrapper>
      <StepWrapper title='Pick add-ons' desc='Add-ons help enhance your gaming experience.'>
      </StepWrapper>
      <StepWrapper title='Finishing up' desc='Double-check everything looks OK before confirming.'>
      </StepWrapper> 
      </PanelWrapper>
      */}
    </AppProvider>
  );
}

export default App;
