interface AddOnProps {
  label: string;
  cost: number;
}

interface OrderSummaryProps {
  addOns: () => AddOnProps[];
  planCost: number;
  planLabel: string;
  totalLabel: string;
}

export type { AddOnProps, OrderSummaryProps };
