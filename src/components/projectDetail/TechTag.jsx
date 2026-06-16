const TechTag = ({ tech }) => (
  <div className="detail-tag">
    {tech.icon && <span className="icon">{tech.icon}</span>}
    <span>{tech.name}</span>
  </div>
);

export default TechTag;
