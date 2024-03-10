import { ReactElement } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface CheckboxProps {
  cost: ReactElement;
  desc: string;
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  value: string;
}

export default CheckboxProps;
