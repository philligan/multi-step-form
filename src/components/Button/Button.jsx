import './Button.scss';

function Button({ children, type }) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
    
  );
}

export default Button;
