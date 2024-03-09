import { Link } from 'react-router-dom';
import { useAppState } from '../state';
import {
  AddOns as AddOnsConfig,
  SelectPlan as SelectPlanConfig,
  Summary as config,
} from '../config';
import { Button, OrderSummary, StepWrapper } from '../components';

function Summary() {
  const [state, setState]: any = useAppState();

  const selectedPlan = SelectPlanConfig.fields.find((field) => field.value === state.plan);
  const planCadence =
    state.toggle === 'monthly'
      ? SelectPlanConfig.toggle.optionOne.label
      : SelectPlanConfig.toggle.optionTwo.label;
  const planCost: number | undefined =
    state.toggle === 'monthly' ? selectedPlan?.costMonthly : selectedPlan?.costYearly;
  const planLabel = `${selectedPlan?.label} (${planCadence})`;

  function addOns() {
    if (state.addon.length) {
      return state.addon.map((value: any) => {
        const field = AddOnsConfig.fields.find((field) => field.value === value);
        if (field) {
          return {
            label: field.label,
            cost: state.toggle === 'monthly' ? field.costMonthly : field.costYearly,
          };
        }
        return null;
      });
    }
    return null;
  }

  return (
    <StepWrapper title={config.title} desc={config.desc}>
      <OrderSummary addOns={addOns} planCost={planCost} planLabel={planLabel} />
      <div className="form-wrapper__actions">
        <Link to="/add-ons">{config.ctaSecondary}</Link>
        <Button style="primary" type="button">
          {config.ctaPrimary}
        </Button>
      </div>
    </StepWrapper>
  );
}

export default Summary;
