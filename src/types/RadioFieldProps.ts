import { ReactElement } from 'react';

interface RadioFieldProps {
  cost: ReactElement;
  icon?: string;
  id: string;
  label: string;
  name: string;
  register: any; // TODO: Change from 'any' type
  value: string;
}

export default RadioFieldProps;
