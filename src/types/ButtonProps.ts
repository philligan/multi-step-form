import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: React.MouseEvent;
  children: ReactNode;
  style: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset' | undefined;
}

export default ButtonProps;
