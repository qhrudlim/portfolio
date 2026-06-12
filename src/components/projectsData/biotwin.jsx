import React from 'react';
import { 
  SiReact, SiTypescript, SiVite, 
  SiSpringboot, SiSpringsecurity, SiPostgresql, SiDocker, SiJenkins,
  SiPython
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const biotwinSummary = {
  id: 'biotwin',
  title: 'BioTwin',
  description: '디지털 트윈 기반 CHO 세포 배양 실시간 모니터링 및 시뮬레이션 플랫폼. AI 예측 데이터의 통합 시각화 인터페이스를 구현했습니다.',
  tech: ['React', 'TypeScript', 'Vite', 'Recharts', 'Zustand', 'Axios'],
};

export const biotwinDetail = {
  title: 'BioTwin',
  subtitle: '디지털 트윈 기반 CHO 세포 배양 공정 실시간 모니터링 및 시뮬레이션 플랫폼',
  period: '2026.02.16 ~ 2026.04.03 (7주, 6인 팀)',
  role: 'Frontend (실시간 시각화 및 시뮬레이션 인터페이스 설계)',
  overview: 'BioTwin은 CHO 세포 배양 공정의 디지털 트윈을 구현하여, 과거 실측 데이터와 AI 예측(GRU, EnKF) 및 물리 모델(ODE) 결과를 통합 시각화하고 가상 시뮬레이션을 제공하는 전문가용 모니터링 플랫폼입니다. 단순히 데이터를 보여주는 것에 그치지 않고, 변 조절에 따른 미래 상태를 시뮬레이션하여 최적의 공정 환경을 도출하는 인터랙티브 환경 구축에 집중했습니다.',
  tech: {
    grouped: [
      {
        category: 'Frontend (UI/UX & Visualization) - 담당 기술',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" /> },
          { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
          { name: 'Vite', icon: <SiVite color="#646CFF" /> },
          { name: 'Recharts' },
          { name: 'Zustand' },
          { name: 'Axios' }
        ]
      },
      { 
        category: 'Backend & Data Stream', 
        items: [
          { name: 'Java', icon: <FaJava color="#007396" /> },
          { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
          { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
          { name: 'PostgreSQL', icon: <SiPostgresql color="#4479A1" /> },
          { name: 'Flyway' }
        ] 
      },
      { 
        category: 'AI Analysis & Simulation',
        items: [
          { name: 'Python', icon: <SiPython color="#3776AB" /> },
          { name: 'MLflow' },
          { name: 'EnKF' },
          { name: 'GRU' },
          { name: 'ODE' }
        ] 
      },
      { 
        category: 'DevOps & Infra',
        items: [
          { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
          { name: 'Jenkins', icon: <SiJenkins color="#D24939" /> }
        ] 
      }
    ]
  },
  challenges: [
    {
      goal: '고주파 실계 시료 데이터와 다중 AI/물리 모델 예측값의 통합 시각화',
      attempt: 'Recharts를 활용해 실측 데이터(History), AI 예측(Forecast), 물리 모델(ODE) 등 다양한 레이어를 단일 차트에 겹쳐서 표현',
      issue: '데이터 포인트가 누적됨에 따라 렌더링 성능이 저하되고 실시간 업데이트 시 UI 응답성 지연 발생',
      cause: '매 초 단위로 수신되는 고주파 데이터 업데이트마다 전체 차트 컴포넌트가 불필요하게 리렌더링되는 구조적 비효율성',
      solution: 'useMemo를 통한 차트 데이터 가공 로직 최적화 및 Recharts 애니메이션 옵션 비활성화를 통해 렌더링 오버헤드 최소화',
      reason: '전문가용 공정 모니터링 시스템에서는 시계열 데이터의 정확성과 빠른 인터페이스 반응 속도가 최우선이기 때문',
      result: '수천 개의 데이터 포인트를 지연 없이 렌더링하여 실시간 공정 상태를 즉각적으로 파악할 수 있는 안정적인 대시보드 완성'
    },
    {
      goal: '인터랙티브 가상 시뮬레이션(Playground) 및 실시간 피드백 루프 구현',
      attempt: '공정 변수 조절 슬라이더와 결과 그래프를 배치하고 실시간 API 요청을 통해 데이터 갱신 시도',
      issue: '변수 조절 시 결과 반영까지의 시간 간극으로 인해 시나리오 테스트의 직관성이 떨어지는 문제 발생',
      cause: '프론트엔드 입력 상태와 시뮬레이션 서버 간의 비동기 동기화 및 즉각적인 상태 반영 아키텍처 부재',
      solution: 'Zustand를 활용한 전역 시뮬레이션 상태 관리 및 슬라이더 조절 시 실시간 API 연동을 통한 예측 곡선 즉각 업데이트 구현',
      reason: '사용자가 "놀이터"에서 실험하듯 변수를 조절하며 최적의 공정 조건을 직관적으로 탐색할 수 있는 경험을 제공하기 위함',
      result: '온도, Feed Rate 등 변수 조절에 따라 예측 곡선이 즉각적으로 변동하는 "Simulation Playground" 기능을 완성하여 의사결정 효율성 극대화'
    }
  ],
  contributions: [
    'Recharts 기반 다중 데이터 소스(실시간 실측/AI 예측/물리 모델) 통합 라이브 차트 컴포넌트 설계 및 구현',
    'Zustand를 활용한 시뮬레이션 파라미터 제어 및 실시간 데이터 동기화 시스템 구축',
    'WebSocket 연동을 통한 공정 이상 징후 실시간 감지 및 다단계(배너/모달/사운드) 알림 시스템 개발',
    'OpenAPI-TypeScript를 활용하여 백엔드 명세 기반의 타입 안전한 API 통신 계층 및 데이터 모델 구축',
    '공정 전문가의 의사결정을 돕는 인사이트 카드 및 개입(Intervention) 로그 관리 시스템 구현'
  ],
  achievements: '실시간 디지털 트윈 인터페이스 및 데이터 정합성 기술 검증',
  retrospective: [
    {
      title: '데이터 시각화의 본질적 가치',
      content: '단순히 데이터를 보여주는 것을 넘어, 전문가가 미래를 예측하고 대응할 수 있게 만드는 시각화가 실제 산업 현장에서 가지는 중요성을 체감했습니다.'
    },
    {
      title: '성능과 안정성의 균형',
      content: '고주파 실시간 데이터를 다루며 렌더링 성능 최적화가 사용자 경험에 미치는 영향과, 엔지니어링적 타협점을 찾는 법을 학습했습니다.'
    },
    {
      title: '전문가 중심의 UX 설계',
      content: '일반 사용자 대상 서비스와 달리, 정보 밀도와 데이터 신뢰성을 최우선으로 하는 전문가용 도구의 UI/UX 설계 원칙을 실전에서 적용해 보았습니다.'
    }
  ]
};