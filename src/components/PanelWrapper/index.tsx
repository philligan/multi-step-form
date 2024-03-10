import './PanelWrapper.scss';

function PanelWrapper({ children }: { children: React.ReactNode }) {
  return <div className="panel-wrapper">{children}</div>;
}

export default PanelWrapper;
