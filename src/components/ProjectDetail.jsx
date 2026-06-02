import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SiReact, SiVuedotjs, SiTypescript, SiTailwindcss, 
  SiThreedotjs, SiBlender, SiUnity, SiVite, SiPinia
} from 'react-icons/si';
import { FaCalendarAlt, FaUserTag, FaRocket, FaLightbulb, FaTools, FaCheckCircle, FaMicrochip, FaChartLine } from 'react-icons/fa';

const projectData = {
  docq: {
    title: 'DocQ',
    subtitle: 'PDF 기반 멀티플레이 3D 퀴즈 게임',
    period: '2026.01.06 ~ 2026.02.13 (6주, 6인 팀)',
    role: '프론트엔드 (3D 게임 화면 및 상태 기반 흐름 설계)',
    overview: 'PDF 문서를 기반으로 퀴즈를 생성하고, 이를 3D 보드게임 형태로 즐기며 이해도를 검증하는 서비스입니다.',
    tech: [
      { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'Pinia', icon: <SiPinia color="#FFD12F" /> },
      { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
      { name: 'Unity', icon: <SiUnity color="#000000" /> }
    ],
    challenges: [
      {
        issue: '2.5D(2D 맵 + 3D 캐릭터) 환경의 렌더링 한계',
        solution: 'TresCanvas 환경 제약으로 인한 출력 오류를 해결하기 위해 3D 통합 구조로 방향을 재설정하여 몰입감 있는 환경 구축'
      },
      {
        issue: '웹 환경에서의 FBX 에셋 로딩 시간 문제',
        solution: 'Unity 및 Blender를 활용해 FBX를 GLTF/GLB 포맷으로 변환하고 메시 비도출 옵션을 조정하여 파이프라인 단순화 및 로딩 최적화'
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
    achievements: 'SSAFY 공통 프로젝트 반 우승'
  },
  jipchak: {
    title: 'JIPCHAK',
    subtitle: '자율 프로젝트 - AI 기반 인형뽑기 확률 계산 오픈소스',
    period: '2026.04.06 ~ 2026.06.02 (8주, 5인 팀)',
    role: '프론트엔드 및 하드웨어 제작 참여',
    overview: '인형뽑기 성공 확률을 AI로 계산하여 보여주는 프로젝트로, 7인치 터치스크린에 최적화된 UI를 제공합니다.',
    tech: [
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'IoT', icon: <FaMicrochip color="#00AEEF" /> }
    ],
    challenges: [
      {
        issue: '7인치 터치스크린 환경의 UI 제약',
        solution: '터치 조작에 최적화된 큰 버튼과 직관적인 가이드 슬라이드 설계'
      }
    ],
    contributions: [
      '메인 페이지 및 가이드 모달 UI 구현',
      '7인치 터치스크린 최적화 UI 설계',
      '하드웨어 외관 제작 참여 및 통합 검증'
    ],
    achievements: '팀 프로젝트 리스크 관리 및 문서화 기여'
  },
  biotwin: {
    title: 'BioTwin',
    subtitle: '특화 프로젝트 - 생체 데이터 실시간 예측 시스템',
    period: '2026.02.16 ~ 2026.04.03 (7주, 6인 팀)',
    role: '프론트엔드 UI/UX 개발 및 데이터 시각화 차트 구현',
    overview: '세포 배양 상태 및 약물 생산량을 실시간으로 예측하고 시각화하는 모니터링 시스템입니다.',
    tech: [
      { name: 'React 18', icon: <SiReact color="#61DAFB" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'Recharts', icon: <FaChartLine color="#22B5BF" /> }
    ],
    challenges: [
      {
        issue: '방대한 생체 데이터의 실시간 시각화',
        solution: 'Recharts를 활용하여 핵심 정보를 한눈에 파악할 수 있는 직관적 대시보드 설계'
      }
    ],
    contributions: [
      'Recharts 활용 생체 데이터 실시간 시각화 대시보드 구축',
      '사용자 관점의 직관적 레이아웃 설계 및 UI 개발'
    ],
    achievements: '대규모 데이터 핸들링 역량 확보'
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
