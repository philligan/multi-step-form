import '../../styles/_colors.scss';
import '../../styles/_fonts.scss';
import '../../styles/_functions.scss';
import '../../styles/_page.scss';
import '../../styles/_units.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from '../../state';

import AddOns from '../../pages/AddOns';
import PersonalInfo from '../../pages/PersonalInfo';
import SelectPlan from '../../pages/SelectPlan';
import Summary from '../../pages/Summary';

import PanelWrapper from '../PanelWrapper/PanelWrapper';
import Stepper from '../Stepper/Stepper';


function App() {
  return (
    <AppProvider>
      <PanelWrapper>
        <Router>        
          <Stepper />
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </PanelWrapper>
    </AppProvider>
  );
}

export default App;
