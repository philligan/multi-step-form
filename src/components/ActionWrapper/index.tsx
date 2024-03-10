import './ActionWrapper.scss';
import { ReactNode } from 'react';

function ActionWrapper({ children }: { children: ReactNode }) {
  return <div className="action-wrapper">{children}</div>;
}

export default ActionWrapper;
