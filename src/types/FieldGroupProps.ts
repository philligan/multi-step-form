import { ReactNode } from 'react';

interface FieldGroupProps {
  children: ReactNode;
  direction: 'col' | 'row';
  legend: string;
}

export default FieldGroupProps;
