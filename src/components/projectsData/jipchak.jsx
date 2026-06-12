import React from 'react';
import { 
  SiReact, SiTypescript, SiVite, SiTailwindcss, 
  SiSpringboot, SiSpringsecurity, SiMysql, SiRedis, SiFastapi, SiPython,
  SiArduino, SiRaspberrypi, SiDocker, SiJenkins, SiNginx
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const jipchakSummary = {
  id: 'jipchak',
  title: 'JIPCHAK',
  description: 'AI 기반 인형뽑기 확률 분석 및 키오스크 인터페이스 플랫폼. 메인 페이지 및 가이드 구현과 하드웨어 외관 엔지니어링을 담당했습니다.',
  tech: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Zustand', 'Tailwind CSS', 'Recharts'],
};

export const jipchakDetail = {
  title: 'JIPCHAK',
  subtitle: 'AI 기반 인형뽑기 확률 분석 및 7인치 키오스크 인터페이스 플랫폼',
  period: '2026.04.06 ~ 2026.06.02 (8주, 5인 팀)',
  role: 'Frontend 및 하드웨어 가공 (메인 UI 설계 및 물리적 외관 프레임 제작)',
  overview: 'JIPCHAK은 AI 심층 학습을 통해 인형뽑기의 성공 확률을 계산하여 실시간으로 제공하는 프로젝트입니다. 실제 인형뽑기 기계에 부착된 7인치 터치스크린 환경을 고려하여, 직관적이고 일관된 테마(크레파스 스타일)를 적용한 키오스크 UI를 구현하고 하드웨어와 결합된 통합 시스템을 구축했습니다.',
  tech: {
    grouped: [
      {
        category: 'Frontend (웹 클라이언트) - 담당 기술',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" /> },
          { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
          { name: 'Vite', icon: <SiVite color="#646CFF" /> },
          { name: 'Framer Motion' },
          { name: 'Zustand' },
          { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
          { name: 'Recharts' },
          { name: 'Axios' }
        ]
      },
      { 
        category: 'Backend (API & 실시간 서버)', 
        items: [
          { name: 'Java', icon: <FaJava color="#007396" /> },
          { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
          { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
          { name: 'JPA' },
          { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
          { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
          { name: 'WebSocket (STOMP)' }
        ] 
      },
      { 
        category: 'AI Analysis & CV', 
        items: [
          { name: 'Python', icon: <SiPython color="#3776AB" /> },
          { name: 'FastAPI', icon: <SiFastapi color="#05998B" /> },
          { name: 'PyTorch' },
          { name: 'OpenCV' },
          { name: 'YOLOv8 (Seg/Detection)' },
          { name: 'MsgPack' }
        ] 
      },
      { 
        category: 'Embedded & Infrastructure', 
        items: [
          { name: 'Arduino', icon: <SiArduino color="#00979D" /> },
          { name: 'Raspberry Pi', icon: <SiRaspberrypi color="#C51A4A" /> },
          { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
          { name: 'Jenkins', icon: <SiJenkins color="#D24939" /> },
          { name: 'Nginx', icon: <SiNginx color="#009639" /> },
          { name: 'Physical Prototyping (Foam Board Engineering)' },
          { name: 'Technical Documentation & Archiving' }
        ] 
      }
    ]
  },
  challenges: [
    {
      goal: '인형뽑기 기계에 부착된 7인치 소형 디스플레이 환경에 최적화된 온보딩 화면 설계',
      attempt: '인형뽑기 기계 우측에 장착된 7인치 터치스크린에서 사용자가 기능을 선택할 수 있도록 메인 페이지(Start, Guide) 구성',
      issue: '약 30cm 이상 떨어진 거리에서도 기계를 조작하는 사용자가 작은 버튼과 복잡한 화면 구성을 명확히 인지하고 터치하기 어려운 문제 발생',
      cause: '일반적인 웹 브라우저 기준의 UI 설계를 소형 키오스크 화면에 그대로 적용하여 발생한 시인성 및 조작성 저하',
      solution: '메인 페이지 구성을 극도로 단순화하고, Start 버튼과 Guide 버튼을 화면 중앙에 크게 배치',
      reason: '사용자가 기계에서 멀리 떨어져서도 직관적으로 기능을 인지하고 조작할 수 있도록 하여, 키오스크 환경에서의 접근성과 사용자 경험을 개선하기 위함',
      result: '기계를 조작하는 위치에서도 명확히 인지 가능한 대형 버튼과 단순한 레이아웃으로 구성된 메인 페이지 완성'
    },
    {
      goal: '키오스크 환경에 최적화된 터치 기반 가이드 시스템 구현',
      attempt: 'Framer Motion을 활용하여 여러 장의 이미지가 부드럽게 전환되는 슬라이드 방식의 가이드 모달 제작',
      issue: '고밀도 이미지 로딩 시 애니메이션 끊김 현상이 발생하고, 자동 넘김 기능과 사용자의 수동 조작이 충돌하는 UX 불편함 포착',
      cause: '이미지 최적화 부재 및 슬라이드 전이 로직에서의 인터랙션 상태 관리 미흡',
      solution: '이미지 프리로딩 및 애니메이션 변수(Variants) 최적화, 사용자 개입 시 자동 넘김을 즉시 중단하는 인터랙션 로직 적용',
      reason: '정보 전달이 중요한 가이드 화면에서 시각적 부드러움과 조작의 주도권을 사용자에게 제공하기 위함',
      result: '끊김 없는 스와이프 인터랙션과 직관적인 자동/수동 하이브리드 가이드 모달 완성'
    },
    {
      goal: '프로젝트 아이덴티티를 살린 일관된 UI 테마(크레파스 톤) 적용',
      attempt: '팀원이 제안한 프로젝트 로고(노란색 크레파스 스타일 오리)의 디자인 무드를 메인 화면과 가이드 모달 전체에 반영 시도',
      issue: '기존의 딱딱한 컴포넌트 스타일에 크레파스 질감과 톤을 이질감 없이 녹여내야 하는 과제 발생',
      cause: '웹 기본 UI 요소와 팀의 기획 의도인 핸드드로잉(Hand-drawing) 무드 간의 시각적 불일치',
      solution: 'Tailwind CSS와 글로벌 스타일을 활용해 팀원이 제공한 크레파스 톤 에셋 및 디자인 속성을 메인 페이지 구성 요소(버튼, 배경, 모달 창)에 일관되게 입히는 작업 수행',
      reason: '기계의 물리적 외관과 소프트웨어 인터페이스 간의 시각적 통일성을 주어 사용자에게 친근하고 완성도 높은 브랜드 경험을 제공하기 위함',
      result: '메인 페이지부터 가이드 모달까지 따뜻하고 독특한 크레파스 무드로 통일된 개성 있는 디자인 시스템 구현'
    },
    {
      goal: '내부 정밀 장비 보호 및 AI 분석 정합성을 위한 기계 외관 엔지니어링',
      attempt: '카메라 및 내부 센서를 외부 충격과 오차로부터 보호하기 위한 우드락 소재의 정밀 제단 및 외관 프레임 제작',
      issue: '수작업 제단으로 인해 기계 프레임보다 작게 제작될 경우 고정되지 못하고, 카메라 시야각 방해나 내부 기동 장치와의 간섭으로 이어질 가능성',
      cause: '물리적 장치의 진동과 사용자의 외부 조작에 따른 하우징의 구조적 불안정성',
      solution: '기계의 가동 범위를 실시간으로 측정하며 우드락을 정밀 제단하고, 내구성을 위한 보강 구조를 추가 설계',
      reason: 'AI 분석을 위한 영상 데이터의 일관성을 유지하기 위해서는 하드웨어의 물리적 고정 상태가 필수적이기 때문',
      result: '시각적 완성도와 내부 장비 보호 성능을 동시에 갖춘 기계 시제품 완성'
    }
  ],
  contributions: [
    '7인치 터치스크린 환경(거리 30cm)에 최적화된 메인 페이지 설계 및 대형 버튼 UI 구현',
    '프로젝트 아이덴티티(크레파스 스타일)를 반영한 글로벌 테마 적용 및 가이드 모달 스타일링',
    'Framer Motion을 활용한 단계별 이용 가이드 시스템 구축',
    '기계 보호막 및 외관 하우징(우드락) 정밀 설계 및 제작 참여',
    '프로젝트 전 과정의 기술 문서화 및 히스토리 아카이빙(사진, 영상, 화면 녹화)',
    '최종 시연을 위한 사용자 매뉴얼 제작 및 발표 자료(PPT) 시각화 지원'
  ],
  achievements: '키오스크 최적화 UI/UX 설계 및 하드웨어-소프트웨어 시각적 통합 검증',
  retrospective: [
    {
      title: '포기하지 않는 책임감의 무게',
      content: '프로젝트 초기 건강 문제로 인해 위기를 겪었지만, 나를 믿어준 팀원들에게 끝까지 미안하지 않은 결과를 보여주고 싶었습니다. 중도 포기 대신 제가 할 수 있는 모든 역량을 쏟아붓는 길을 택했고, 이는 기술적 성장 이상의 자산이 되었습니다.'
    },
    {
      title: '팀원이라는 존재의 소중함',
      content: '가장 힘들 때 저를 걱정해 주고 기다려 준 팀원들이 있었기에 다시 일어날 수 있었습니다. 혼자가 아닌 팀으로서 함께 목표를 달성하는 즐거움과 협업의 진정한 가치를 깊이 새겼습니다.'
    },
    {
      title: '환경을 고려한 실전 UI/UX 설계',
      content: '일반적인 웹 화면이 아니라, "기계 우측에 부착된 7인치 화면을 30cm 밖에서 조작한다"는 특수한 물리적 환경을 고려하여 UI를 설계한 경험은 매우 특별했습니다. 사용자의 물리적 거리와 시야를 고려하여 과감히 구성을 단순화하고 버튼 크기를 조절하는 과정에서 실전 UX 디자인의 중요성을 배웠습니다.'
    },
    {
      title: '세밀한 아카이빙이 만드는 프로젝트의 완성도',
      content: '개발뿐만 아니라 제작 과정을 기록하고 문서화하는 것이 프로젝트의 지속 가능성과 팀워크에 얼마나 큰 도움을 주는지 깨달았습니다. 마지막까지 놓치지 않은 상세 문서화와 아카이빙은 우리 팀의 결과물을 더욱 빛나게 했습니다.'
    },
    {
      title: '물리적 세계와 소프트웨어의 연결',
      content: '단순히 화면 안에서의 로직을 넘어 실제 물리적인 버튼과 기계의 움직임이 웹 브라우저와 실시간으로 통신하는 과정을 구현하며, 진정한 의미의 인터랙션 개발을 경험했습니다.'
    }
  ]
};