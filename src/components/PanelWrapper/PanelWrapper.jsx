import './PanelWrapper.scss';

function PanelWrapper({ children, title, desc }) {
  return <div className="panel-wrapper">
    <h2 className="panel-wrapper__title">{title}</h2>
    <p className="panel-wrapper__desc">{desc}</p>
    {children}
  </div>;
}

export default PanelWrapper;
