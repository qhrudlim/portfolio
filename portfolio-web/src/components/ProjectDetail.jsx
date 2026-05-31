import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  docq: {
    title: 'DocQ - PDF 기반 멀티플레이 3D 퀴즈 게임',
    period: '2026.01.06 ~ 2026.02.13 (6주)',
    role: '프론트엔드 리드 (3D 게임 화면 및 상태 기반 흐름 설계)',
    overview: 'PDF 문서를 기반으로 퀴즈를 생성하고, 이를 3D 보드게임 형태로 즐기며 이해도를 검증하는 서비스입니다.',
    tech: ['React', 'Three.js', 'React-Three-Fiber', 'Blender', 'GLTF/GLB'],
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
    ]
  },
  biotwin: {
    title: 'BioTwin (특화 프로젝트)',
    period: '진행 예정',
    role: '프론트엔드 개발',
    overview: '특화 프로젝트로 진행된 BioTwin입니다.',
    tech: ['Vue.js'],
    challenges: [],
    contributions: ['프론트엔드 UI/UX 개발']
  },
  jipchak: {
    title: 'JIPCHAK (자율 프로젝트)',
    period: '진행 완료',
    role: '프론트엔드 및 하드웨어 제작 참여',
    overview: 'Main Page 및 GUIDE 구현. 하드웨어 제작 참여. 오픈소스 프로젝트입니다.',
    tech: ['React', 'IoT'],
    challenges: [],
    contributions: ['메인 페이지 UI/UX 구현', '가이드 시스템 설계', '하드웨어 제작 프로세스 참여']
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">← 목록으로 돌아가기</Link>
      <h1>{project.title}</h1>
      <p className="period"><strong>기간:</strong> {project.period}</p>
      <p className="role"><strong>역할:</strong> {project.role}</p>

      <section className="detail-section">
        <h3>프로젝트 개요</h3>
        <p>{project.overview}</p>
      </section>

      <section className="detail-section">
        <h3>사용 기술</h3>
        <div className="skill-tags">
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </section>

      {project.challenges.length > 0 && (
        <section className="detail-section">
          <h3>기술적 난점 및 해결</h3>
          <ul className="challenges-list">
            {project.challenges.map((c, i) => (
              <li key={i}>
                <strong>문제:</strong> {c.issue}<br />
                <strong>해결:</strong> {c.solution}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="detail-section">
        <h3>주요 기여 내용</h3>
        <ul className="contributions-list">
          {project.contributions.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetail;
