import './Hyperlink.scss';
import { Link } from 'react-router-dom';
import { LinkProps } from '../../types';

function Hyperlink({ children, href }: LinkProps) {
  return (
    <Link className="hyperlink" to={href}>
      {children}
    </Link>
  );
}

export default Hyperlink;
