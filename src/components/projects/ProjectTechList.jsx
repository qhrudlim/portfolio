const ProjectTechList = ({ tech }) => (
  <div className="project-tech-list" aria-label="사용 기술">
    {tech.map((item) => (
      <span key={item} className="project-tech-chip">
        {item}
      </span>
    ))}
  </div>
);

export default ProjectTechList;
