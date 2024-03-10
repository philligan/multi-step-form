import './OrderSummary.scss';
import { useAppState } from '../../state';
import { CurrencyFormat } from '../../helpers';
import { AddOnProps, OrderSummaryProps } from '../../types';

function OrderSummary({ addOns, planCost, planLabel, totalLabel }: OrderSummaryProps) {
  const [state]: any = useAppState();

  function totalCost() {
    if (addOns()) {
      return cost(
        planCost +
          addOns()
            .map((val: { cost: number }) => val.cost)
            .reduce((curr: number, acc: number) => curr + acc),
      );
    }
    return cost(planCost);
  }

  function cost(value: number | undefined) {
    if (value) {
      return (
        <span>
          {CurrencyFormat(value)}
          {state.toggle === 'yearly' ? (
            <abbr title="per year">/yr</abbr>
          ) : (
            <abbr title="per month">/mo</abbr>
          )}
        </span>
      );
    }
    return null;
  }

  function addOnList() {
    return (
      <dl className="order-summary__addons">
        {addOns().map((addOn: AddOnProps, index: number) => {
          return (
            <div key={`addOn${index}`} className="order-summary__addon-item">
              <dt className="order-summary__addon-label">{addOn.label}</dt>
              <dd className="order-summary__addon-cost">{cost(addOn.cost)}</dd>
            </div>
          );
        })}
      </dl>
    );
  }

  return (
    <div className="order-summary">
      <div className="order-summary__inner">
        <dl className="order-summary__mast">
          <dt className="order-summary__plan-label">{planLabel}</dt>
          <dd className="order-summary__plan-cost">{cost(planCost)}</dd>
        </dl>
        {addOns() && addOnList()}
      </div>
      <dl className="order-summary__foot">
        <dt className="order-summary__foot-label">{totalLabel}</dt>
        <dd className="order-summary__foot-cost">{totalCost()}</dd>
      </dl>
    </div>
  );
}

export default OrderSummary;
