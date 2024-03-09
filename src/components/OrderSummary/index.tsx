import './OrderSummary.scss';
// import { CurrencyFormat } from '../../helpers';

// function cost(value: number | undefined) {
//   if (value) {
//     if (state.toggle === 'yearly') {
//       return (
//         <span>
//           {CurrencyFormat(value)}
//           <abbr title="per year">/yr</abbr>
//         </span>
//       );
//     }
//     return (
//       <span>
//         {CurrencyFormat(value)}
//         <abbr title="per month">/mo</abbr>
//       </span>
//     );
//   }
//   return null;
// }

function OrderSummary({ addOns, planCost, planLabel }: any) {
  console.log(addOns());

  return (
    <dl className="order-summary">
      <div className="order-summary__mast">
        <dt className="order-summary__plan-label">{planLabel}</dt>
        <dd className="order-summary__plan-cost">{planCost}</dd>
      </div>
      {addOns() &&
        addOns().map((addOn: any, index: number) => {
          return (
            <div key={`addOn${index}`} className="order-summary__addon">
              <dt className="order-summary__addon-label">{addOn.label}</dt>
              <dd className="order-summary__addon-cost">{addOn.cost}</dd>
            </div>
          );
        })}
    </dl>
  );
}

export default OrderSummary;
