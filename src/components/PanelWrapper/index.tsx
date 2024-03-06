import './PanelWrapper.scss';

// TODO: Change from 'any' type
function PanelWrapper({ children }: any) {
  return <div className="panel-wrapper">
    {children}
  </div>;
}

export default PanelWrapper;
