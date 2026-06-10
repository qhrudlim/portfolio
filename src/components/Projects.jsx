import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'jipchak',
      title: 'JIPCHAK',
      description: '인형뽑기 확률 계산 AI 오픈소스 프로젝트. 메인 페이지 및 가이드 구현.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'IoT'],
    },
    {
      id: 'biotwin',
      title: 'BioTwin',
      description: '세포 배양 상태 실시간 모니터링 및 예측 시스템. 대규모 데이터 시각화가 핵심입니다.',
      tech: ['React', 'TypeScript', 'Vite', 'Recharts'],
    },
    {
      id: 'docq',
      title: 'DocQ',
      description: 'PDF 기반 멀티플레이 3D 퀴즈 게임. 웹 환경에서의 3D 게임 흐름 구현을 기술적으로 검증하고, 보드게임 형식을 통한 몰입형 지식 검증 경험을 제공합니다.',
      tech: ['Vue.js', 'Three.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Pinia', 'Blender', 'Unity'],
    }
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
