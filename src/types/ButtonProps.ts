import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  style: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset' | undefined;
}

export default ButtonProps;
