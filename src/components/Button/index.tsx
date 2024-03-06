import './Button.scss';
import { ButtonProps } from "../../types";

function Button({ children, style, type }: ButtonProps) {
  const className = `button button--${style}`

  return (
    <button className={className} type={type}>
      {children}
    </button>    
  );
}

export default Button;
