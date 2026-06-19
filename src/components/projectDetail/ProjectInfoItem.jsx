const ProjectInfoItem = ({ icon, children }) => (
  <div className="info-item">
    {icon}
    <span>{children}</span>
  </div>
);

export default ProjectInfoItem;

