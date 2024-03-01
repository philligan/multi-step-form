import './PanelWrapper.scss';

function PanelWrapper({ children }) {
  return <div className="panel-wrapper">
    {children}
  </div>;
}

export default PanelWrapper;
