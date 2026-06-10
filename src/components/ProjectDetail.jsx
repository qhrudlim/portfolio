import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SiReact, SiVuedotjs, SiTypescript, SiTailwindcss, 
  SiThreedotjs, SiBlender, SiUnity, SiVite, SiPinia
} from 'react-icons/si';
import { FaCalendarAlt, FaUserTag, FaRocket, FaLightbulb, FaTools, FaCheckCircle, FaMicrochip, FaChartLine, FaHistory } from 'react-icons/fa';

const projectData = {
  docq: {
    title: 'DocQ',
    subtitle: 'PDF 기반 멀티플레이 3D 퀴즈 게임',
    period: '2026.01.06 ~ 2026.02.13 (6주, 6인 팀)',
    role: '프론트엔드 (3D 게임 화면 및 상태 기반 흐름 설계)',
    overview: 'DocQ(독큐)는 PDF 문서를 활용해 생성된 퀴즈를 3D 보드게임 형태로 즐기는 멀티플레이 퀴즈 서비스입니다. 단순한 학습을 넘어 이미 습득한 지식의 이해도를 검증하고 기억을 환기하는 데 초점을 맞추었으며, 특히 웹 환경에서 3D 기반의 유기적인 게임 흐름을 구현하고 그 가능성을 기술적으로 검증하는 데 중점을 둔 프로젝트입니다.',
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
        goal: 'PDF 기반 퀴즈를 단순 제공이 아닌 보드게임 형태의 상호작용 경험으로 구현',
        attempt: '2D 맵 + 3D 캐릭터 (2.5D 구조) 구성 및 TresCanvas 활용 시도',
        issue: '렌더링 오류 (흰 박스/비정상 출력) 및 캐릭터 비출력 문제 발생',
        cause: 'TresCanvas의 구조적 제약으로 인한 혼합 렌더링(3D+2D) 한계',
        solution: '3D 통합 구조(3D 맵 + 3D 캐릭터)로 방향 재설정 및 구조 단순화',
        reason: '2.5D 구현의 난이도와 시간적 제약을 고려하여 몰입감을 유지하면서도 안정적인 웹 3D 환경을 구축하기 위함',
        result: '웹 브라우저 환경에서 끊김 없는 3D 맵과 캐릭터 렌더링을 성공적으로 구현하여 프로젝트의 핵심인 3D 보드게임 환경 완성'
      },
      {
        goal: '웹 환경에 최적화된 3D 에셋 파이프라인 구축',
        attempt: 'Unity 에셋 및 Mixamo 애니메이션을 FBX 포맷 그대로 활용 시도',
        issue: '긴 로딩 시간 발생 및 Blender 변환 시 캐릭터 주위에 박스 형태 메시 생성',
        cause: '웹 환경에 부적합한 FBX 포맷 크기와 export 옵션 미지정으로 인한 메시 오류',
        solution: 'GLTF/GLB 포맷 전환 및 Blender export 옵션 조정을 통한 메시 최적화',
        reason: '파이프라인을 단순화하고 웹 브라우저에서의 로딩 성능 및 시각적 완성도를 보장하기 위함',
        result: '에셋 로딩 속도를 획기적으로 개선하고 비정상적인 메시 노출을 제거하여 쾌적한 게임 플레이 환경 제공'
      },
      {
        goal: '자연스러운 캐릭터 이동 애니메이션 및 끊김 없는 게임 진행',
        attempt: 'Mixamo 애니메이션을 그대로 사용하고 룰렛 결과와 이동 트리거 연결',
        issue: '이동 시 모션 끊김 현상 및 룰렛 애니메이션과의 트리거 충돌 발생',
        cause: '칸 단위 이동 구조와 애니메이션 타임라인 불일치 및 트리거 실행 시점 중첩',
        solution: 'Blender를 활용한 타임라인 분할 재구성 및 결과 값 확정 기준 트리거 재정의',
        reason: '이동 모션의 부드러움을 확보하고 복잡한 애니메이션 간의 실행 순서를 명확히 관리하기 위함',
        result: '캐릭터 이동 모션의 시각적 자연스러움을 확보하고, 이벤트 간 충돌 없는 매끄러운 게임 플로우(Game Flow) 완성'
      },
      {
        goal: '버튼 개입 없이 자동 진행되는 순환형 게임 로직(문제 → 정답 확인 → 룰렛 → 이동 → 미니게임) 구현',
        attempt: '사용자 입력(버튼 클릭) 또는 파편화된 개별 이벤트 호출에 의존하는 단계 전환 방식 설계',
        issue: '단계마다 수동 조작이 필요하여 흐름이 끊기고, 멀티플레이 환경에서 각 사용자의 진행 상태를 동기화하기 어려운 문제 발생',
        cause: '이벤트 중심(Event-driven) 로직으로 인한 단계 간 높은 의존성 및 상태 전이 조건의 불명확성',
        solution: '상태 기반 흐름 제어(State-driven Flow) 시스템 구축 및 자동 단계 전환 로직 설계',
        reason: '이전 단계가 종료되면 즉시 다음 단계로 자동 진입하게 하여 사용자 개입을 최소화하고, "문제 → 룰렛 → 이동"으로 이어지는 매끄러운 보드게임 루프를 유지하기 위함',
        result: '"문제 → 정답 확인 → 룰렛 → 캐릭터 이동 → 미니게임 → 다음 문제"로 이어지는 자동 순환 루프를 완성하여 몰입감 있는 인터랙티브 보드게임 경험 제공'
      }
    ],
    contributions: [
      'TresJS 기반 3D 게임 화면 설계 및 코드 기반 맵 + Mixamo 캐릭터 MVP 제작',
      '웹 환경 최적화를 위한 GLTF/GLB 에셋 파이프라인 구축 및 캐릭터 애니메이션 재구성',
      '버튼 개입 없이 상태 전이에 따라 자동 진행되는 순환형 게임 루프(문제→룰렛→이동→미니게임) 설계 및 구현',
      '이벤트 중심 로직에서 상태 중심 설계(State-driven)로 구조를 개편하여 단계 간 의존성 최소화 및 동기화 안정성 확보',
      '프로젝트 이후 구조 이해 및 프레임워크 의존도 점검을 위한 Vue → React 전환 및 Vanilla CSS 적용 실험 수행'
    ],
    achievements: '웹 환경 3D 기반 게임 흐름 구현 검증',
    retrospective: [
      {
        title: '실험 기반의 논리적 의사결정',
        content: '2.5D 환경의 기술적 한계를 단순 추측이 아닌 실제 렌더링 실험을 통해 증명하고, 이를 바탕으로 팀원들을 설득하여 3D 통합 구조로 전환한 과정에서 데이터 기반 의사결정의 중요성을 배웠습니다.'
      },
      {
        title: '초기 설계가 전체 공정에 미치는 영향',
        content: '초기 맵 구조와 에셋 포맷 선택이 이후 파이프라인(로딩 속도, 애니메이션 재구성 등) 전체에 미치는 파급력을 경험하며, 프로젝트 시작 단계에서의 면밀한 아키텍처 설계의 중요성을 깊이 체감했습니다.'
      },
      {
        title: '게임 엔진과 웹 3D 환경의 간극 이해',
        content: 'Unity와 같은 완성형 게임 엔진과 웹 브라우저 환경의 차이를 직접 겪으며, 각 플랫폼에 최적화된 에셋(GLTF/GLB)과 상태 제어 방식이 왜 필요한지 기술적으로 깊이 이해하게 되었습니다.'
      },
      {
        title: '사용자 몰입 중심의 기술 적용',
        content: '단순한 기능 구현을 넘어, 룰렛 결과에 따른 자동 트리거와 끊김 없는 모션 재구성 등 사용자가 게임 흐름에만 온전히 집중할 수 있도록 만드는 디테일한 엔지니어링의 가치를 발견했습니다.'
      }
    ]
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
            <div className="challenges-container">
              {project.challenges.map((c, i) => (
                <div key={i} className={project.title === 'DocQ' ? "challenge-card-structured" : "challenge-item"}>
                  {project.title === 'DocQ' ? (
                    <>
                      <div className="challenge-header">
                        <span className="goal-label">Goal</span>
                        <h4>{c.goal}</h4>
                      </div>
                      <div className="challenge-body">
                        <div className="process-step">
                          <div className="step-item">
                            <span className="step-label">초기 시도</span>
                            <p>{c.attempt}</p>
                          </div>
                          <div className="step-arrow">↓</div>
                          <div className="step-item error">
                            <span className="step-label">발생 문제</span>
                            <p>{c.issue}</p>
                          </div>
                          <div className="step-item analysis">
                            <span className="step-label">원인 분석</span>
                            <p>{c.cause}</p>
                          </div>
                        </div>
                        <div className="solution-step">
                          <div className="step-item success">
                            <span className="step-label">해결 방법</span>
                            <p>{c.solution}</p>
                          </div>
                          <div className="step-item reason">
                            <span className="step-label">판단 근거</span>
                            <p>{c.reason}</p>
                          </div>
                          <div className="step-item result">
                            <span className="step-label">결과</span>
                            <p><strong>{c.result}</strong></p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="issue">
                        <span className="label">Problem</span>
                        <p>{c.issue}</p>
                      </div>
                      <div className="solution">
                        <span className="label">Solution</span>
                        <p>{c.solution}</p>
                      </div>
                    </>
                  )}
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

        {project.retrospective && (
          <section className="detail-section card">
            <h3 className="section-title"><FaHistory className="title-icon" /> 프로젝트 회고</h3>
            <div className="retrospective-grid">
              {project.retrospective.map((r, i) => (
                <div key={i} className="retrospective-item">
                  <h4>{r.title}</h4>
                  <p>{r.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.images && project.images.length > 0 && (
          <section className="detail-section image-section card">
            <h3 className="section-title">Project Preview</h3>
            <div className="project-image-placeholder">
              <p>이미지 준비 중입니다.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
