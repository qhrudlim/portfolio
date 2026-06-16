import { Link } from 'react-router-dom';
import ProjectTechList from './ProjectTechList';

const ProjectTimelineItem = ({ project }) => (
  <div className="timeline-item project-timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-date project-period">{project.period}</div>

    <Link to={`/project/${project.id}`} className="project-card-link">
      <article className="project-card">
        <div className="project-card-header">
          <h3>{project.title}</h3>
          <span className={`project-type-badge ${project.category}`}>
            {project.categoryLabel}
          </span>
        </div>

        <div className="project-card-meta">{project.members}</div>
        <p className="project-desc">{project.description}</p>
        <ProjectTechList tech={project.tech} />
        <span className="click-hint">자세히 보기</span>
      </article>
    </Link>
  </div>
);

export default ProjectTimelineItem;
