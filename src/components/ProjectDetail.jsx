import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SiReact, SiVuedotjs, SiTypescript, SiTailwindcss, 
  SiThreedotjs, SiBlender
} from 'react-icons/si';
import { FaCalendarAlt, FaUserTag, FaRocket, FaLightbulb, FaTools, FaCheckCircle, FaMicrochip } from 'react-icons/fa';

const projectData = {
  docq: {
    title: 'DocQ',
    subtitle: 'PDF 기반 멀티플레이 3D 퀴즈 게임',
    period: '2026.01.06 ~ 2026.02.13 (6주)',
    role: '프론트엔드 (3D 게임 화면 및 상태 기반 흐름 설계)',
    overview: 'PDF 문서를 기반으로 퀴즈를 생성하고, 이를 3D 보드게임 형태로 즐기며 이해도를 검증하는 서비스입니다.',
    tech: [
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Blender', icon: <SiBlender color="#F5792A" /> }
    ],
    challenges: [
      {
        issue: '2.5D(2D 맵 + 3D 캐릭터) 환경의 렌더링 한계',
        solution: 'TresCanvas 환경 제약으로 인한 출력 오류를 해결하기 위해 3D 통합 구조로 방향을 재설정하여 몰입감 있는 환경 구축'
      },
      {
        issue: '웹 환경에서의 FBX 에셋 로딩 시간 문제',
        solution: 'Blender를 활용해 FBX를 GLTF/GLB 포맷으로 변환하고 메시 비도출 옵션을 조정하여 파이프라인 단순화 및 로딩 최적화'
      },
      {
        issue: '캐릭터 이동 애니메이션의 끊김 및 타이포그래피 문제',
        solution: 'Mixamo 애니메이션의 타임라인을 Blender에서 분할하여 이동 애니메이션을 재구성하고, 룰렛 결과에 따른 트리거 타이밍 재정의'
      }
    ],
    contributions: [
      'TresJS/Three.js 기반 3D 게임 환경 및 코드 기반 맵 MVP 제작',
      '상태 전이 기반 자동 진행 구조 설계 (문제 -> 정답 확인 -> 룰렛 -> 이동 -> 미니게임)',
      '멀티플레이 환경에서의 단계 동기화 및 이벤트 중심 로직에서 상태 중심 설계로 구조 정리',
      '컴포넌트 책임 분리 및 UI 흐름/UX 디테일 개선'
    ],
    achievements: '반 우승 수상'
  },
  biotwin: {
    title: 'BioTwin',
    subtitle: '특화 프로젝트 - 생체 데이터 시각화 플랫폼',
    period: '2026.02.16 ~ 2026.04.03',
    role: '프론트엔드 개발',
    overview: '특화 프로젝트로 진행된 BioTwin입니다. 생체 데이터를 실시간으로 모니터링하고 시각화하는 솔루션을 제공합니다.',
    tech: [
      { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> }
    ],
    challenges: [],
    contributions: ['프론트엔드 UI/UX 개발', '데이터 시각화 차트 구현'],
    achievements: null
  },
  jipchak: {
    title: 'JIPCHAK',
    subtitle: '자율 프로젝트 - IoT 기반 스마트 솔루션',
    period: '2026.04.06 ~ 2026.06.02',
    role: '프론트엔드 및 하드웨어 제작 참여',
    overview: 'Main Page 및 GUIDE 구현. 하드웨어 제작 참여. 사용자의 행동을 분석하고 집착할 정도의 편의성을 제공하는 오픈소스 프로젝트입니다.',
    tech: [
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'IoT', icon: <FaMicrochip color="#00AEEF" /> }
    ],
    challenges: [],
    contributions: ['메인 페이지 UI/UX 구현', '가이드 시스템 설계', '하드웨어 제작 프로세스 참여'],
    achievements: null
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="section">프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="project-detail-page animate-reveal">
      <header className="project-hero">
        <div className="container">
          <Link to="/projects" className="back-link">← 목록으로 돌아가기</Link>
          <div className="hero-content">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            {project.achievements && <span className="achievement-badge">{project.achievements}</span>}
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

      <main className="project-main container">
        <section className="detail-section card">
          <h3 className="section-title"><FaRocket className="title-icon" /> 프로젝트 개요</h3>
          <p className="overview-text">{project.overview}</p>
        </section>

        <section className="detail-section card">
          <h3 className="section-title"><FaTools className="title-icon" /> 사용 기술</h3>
          <div className="detail-skill-tags">
            {project.tech.map((t, i) => (
              <div key={i} className="detail-tag">
                <span className="icon">{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {project.challenges.length > 0 && (
          <section className="detail-section card">
            <h3 className="section-title"><FaLightbulb className="title-icon" /> 기술적 난점 및 해결</h3>
            <div className="challenges-grid">
              {project.challenges.map((c, i) => (
                <div key={i} className="challenge-item">
                  <div className="issue">
                    <span className="label">Problem</span>
                    <p>{c.issue}</p>
                  </div>
                  <div className="solution">
                    <span className="label">Solution</span>
                    <p>{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="detail-section card">
          <h3 className="section-title"><FaCheckCircle className="title-icon" /> 주요 기여 내용</h3>
          <ul className="contribution-list">
            {project.contributions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section image-section card">
          <h3 className="section-title">Project Preview</h3>
          <div className="project-image-placeholder">
            <p>이미지 준비 중입니다.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
