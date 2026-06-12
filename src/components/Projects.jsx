import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'portfolio-cicd',
      title: 'Portfolio Web & CI/CD',
      description: '현재의 포트폴리오 웹사이트 구축 및 GitHub Actions 기반의 무중단 배포(CI/CD) 자동화 파이프라인 구축 프로젝트입니다.',
      tech: ['React', 'Vite', 'GitHub Actions', 'GitLab'],
    },
    {
      id: 'jipchak',
      title: 'JIPCHAK',
      description: 'AI 기반 인형뽑기 확률 분석 및 키오스크 인터페이스 플랫폼. 메인 페이지 및 가이드 구현과 하드웨어 외관 엔지니어링을 담당했습니다.',
      tech: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Zustand', 'Tailwind CSS', 'Recharts'],
    },
    {
      id: 'opensource',
      title: 'Open Source Contribution',
      description: 'AI Explainer 오픈소스 레포지토리 기여. 반응형 UI의 스크롤 오프셋(Scroll Offset) 버그를 분석하고 수정하여 첫 PR 및 병합(Merge)을 달성한 실무형 협업 경험입니다.',
      tech: ['Vanilla JS', 'HTML/CSS', 'Git', 'GitHub Flow'],
    },
    {
      id: 'biotwin',
      title: 'BioTwin',
      description: '디지털 트윈 기반 CHO 세포 배양 실시간 모니터링 및 시뮬레이션 플랫폼. AI 예측 데이터의 통합 시각화 인터페이스를 구현했습니다.',
      tech: ['React', 'TypeScript', 'Vite', 'Recharts', 'Zustand', 'Axios'],
    },
    {
      id: 'docq-refactor',
      title: 'DocQ Refactoring',
      description: 'Vue.js 기반의 DocQ 프로젝트를 React와 Vanilla JS로 마이그레이션하며 프레임워크의 본질과 구조적 의존성을 탐구한 개인 실험 프로젝트입니다.',
      tech: ['React', 'JavaScript', 'CSS', 'Zustand', 'Three.js', 'GSAP', 'Vite'],
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
