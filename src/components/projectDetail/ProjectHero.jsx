import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserTag } from 'react-icons/fa';

const ProjectHero = ({ project }) => (
  <header className="project-hero">
    <div className="container">
      <Link to="/projects" className="back-link">← 목록으로 돌아가기</Link>
      <div className="hero-content">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        {project.achievements && (
          <span className="achievement-badge">{project.achievements}</span>
        )}
        <div className="project-info-grid">
          <div className="info-item">
            <FaCalendarAlt className="icon" />
            <span>{project.period}</span>
          </div>
          <div className="info-item">
            <FaUserTag className="icon" />
            <span>{project.role}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default ProjectHero;
