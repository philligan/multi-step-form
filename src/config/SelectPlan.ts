const SelectPlan = {
  ctaPrimary: 'Next Step',
  ctaSecondary: 'Go Back',
  desc: 'You have the option of monthly or yearly billing.',
  fields: [
    {
      costMonthly: 9,
      costYearly: 90,
      id: 'plan-arcade',
      label: 'Arcade',
      name: 'plan',
      value: 'arcade',
    },
    {
      costMonthly: 12,
      costYearly: 120,
      id: 'plan-advanced',
      label: 'Advanced',
      name: 'plan',
      value: 'advanced',
    },
    {
      costMonthly: 15,
      costYearly: 150,
      id: 'plan-pro',
      label: 'Pro',
      name: 'plan',
      value: 'pro',
    },
  ],
  fieldLegend: 'Plan options',
  title: 'Select your plan',
  toggle: {
    optionOne: {
      label: 'Monthly',
      id: 'toggleMonthly',
      name: 'toggle',
      value: 'monthly',
    },
    optionTwo: {
      label: 'Yearly',
      id: 'toggleYearly',
      name: 'toggle',
      value: 'yearly',
    },
  },
};

export default SelectPlan;
