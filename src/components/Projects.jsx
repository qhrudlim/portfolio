import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'docq',
      title: 'DocQ',
      description: 'PDF 기반 멀티플레이 3D 퀴즈 게임. 3D 환경에서의 보드게임 경험을 제공합니다.',
      tech: ['React', 'Three.js', 'TypeScript'],
    },
    {
      id: 'biotwin',
      title: 'BioTwin',
      description: '특화 프로젝트로 진행된 BioTwin입니다.',
      tech: ['Vue.js'],
    },
    {
      id: 'jipchak',
      title: 'JIPCHAK',
      description: 'Main Page 및 GUIDE 구현. 하드웨어 제작 참여. 오픈소스 프로젝트입니다.',
      tech: ['React', 'IoT', 'Tailwind CSS', 'TypeScript'],
    }
  ];

  return (
    <section id="projects" className="section animate-reveal">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="project-card-link">
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
