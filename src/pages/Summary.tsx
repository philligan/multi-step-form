import { Link } from 'react-router-dom';
import { useAppState } from '../state';
import {
  AddOns as AddOnsConfig,
  SelectPlan as SelectPlanConfig,
  Summary as config,
} from '../config';
import { ActionWrapper, Button, Hyperlink, OrderSummary, StepWrapper } from '../components';
import { FieldProps } from '../types';

function Summary() {
  const [state]: any = useAppState();
  const selectedPlan = SelectPlanConfig.fields.find((field) => field.value === state.plan);
  const planCadence =
    state.toggle === 'monthly'
      ? SelectPlanConfig.toggle.optionOne.label
      : SelectPlanConfig.toggle.optionTwo.label;
  const planLabel = `${selectedPlan?.label} (${planCadence})`;
  let planCost = 0;
  if (selectedPlan) {
    planCost = state.toggle === 'monthly' ? selectedPlan.costMonthly : selectedPlan.costYearly;
  }

  function addOns() {
    if (state.addon.length) {
      return state.addon.map((value: string) => {
        const field = AddOnsConfig.fields.find((field: FieldProps) => field.value === value);
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
      {selectedPlan && (
        <OrderSummary
          addOns={addOns}
          planCost={planCost}
          planLabel={planLabel}
          totalLabel={config.total}
        />
      )}
      <ActionWrapper>
        <Hyperlink href="/add-ons">{config.ctaSecondary}</Hyperlink>
        <Button style="primary" type="button">
          {config.ctaPrimary}
        </Button>
      </ActionWrapper>
    </StepWrapper>
  );
}

export default Summary;
