import './Button.scss';

function Button({ children, style, type }) {
  const className = `button button--${style}`

  return (
    <button className={className} type={type}>
      {children}
    </button>    
  );
}

export default Button;
