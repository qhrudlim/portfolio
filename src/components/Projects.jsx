import React from 'react';
import { Link } from 'react-router-dom';
import { 
  portfolioSummary, jipchakSummary, firstOpensourceSummary, 
  biotwinSummary, docqRefactorSummary, docqSummary 
} from './projectsData';

const Projects = () => {
  const projects = [
    portfolioSummary,
    jipchakSummary,
    firstOpensourceSummary,
    biotwinSummary,
    docqRefactorSummary,
    docqSummary
  ];

  return (
    <section id="projects" className="section animate-reveal">
      <div className="timeline-container">
        {projects.map((project) => (
          <div key={project.id} className="timeline-item">
            <div className="timeline-dot" style={{ top: '2.5rem' }}></div>
            <Link to={`/project/${project.id}`} className="project-card-link">
              <div className="project-card">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-meta">
                  <div className="tech-stack">
                    <strong>Tech:</strong> {project.tech.join(', ')}
                  </div>
                </div>
                <div className="click-hint">자세히 보기 →</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
