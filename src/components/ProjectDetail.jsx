import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SiReact, SiVuedotjs, SiTypescript, SiTailwindcss, 
  SiThreedotjs, SiBlender, SiUnity, SiVite, SiPinia,
  SiSpringboot, SiSpringsecurity, SiMysql, SiOpenai, SiDocker,
  SiRedis, SiFastapi, SiPython, SiPostgresql, SiApachekafka, SiJenkins,
  SiArduino, SiRaspberrypi, SiNginx
} from 'react-icons/si';
import { FaCalendarAlt, FaUserTag, FaRocket, FaLightbulb, FaTools, FaCheckCircle, FaMicrochip, FaChartLine, FaHistory, FaJava, FaAws } from 'react-icons/fa';

const projectData = {
  docq: {
    title: 'DocQ',
    subtitle: 'PDF 기반 멀티플레이 3D 퀴즈 게임',
    period: '2026.01.06 ~ 2026.02.13 (6주, 6인 팀)',
    role: '프론트엔드 (3D 게임 화면 및 상태 기반 흐름 설계)',
    overview: 'DocQ(독큐)는 PDF 문서를 활용해 생성된 퀴즈를 3D 보드게임 형태로 즐기는 멀티플레이 퀴즈 서비스입니다. 단순한 학습을 넘어 이미 습득한 지식의 이해도를 검증하고 기억을 환기하는 데 초점을 맞추었으며, 특히 웹 환경에서 3D 기반의 유기적인 게임 흐름을 구현하고 그 가능성을 기술적으로 검증하는 데 중점을 둔 프로젝트입니다.',
    tech: {
      grouped: [
        {
          category: 'Frontend (웹 클라이언트) - 담당 기술',
          items: [
            { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'Vite', icon: <SiVite color="#646CFF" /> },
            { name: 'Pinia', icon: <SiPinia color="#FFD12F" /> },
            { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
            { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
            { name: 'Unity', icon: <SiUnity color="#000000" /> }
          ]
        },
        { 
          category: 'Backend (API & 게임 서버)', 
          items: [
            { name: 'Java 17', icon: <FaJava color="#007396" /> },
            { name: 'Spring Boot 3.5', icon: <SiSpringboot color="#6DB33F" /> },
            { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
            { name: 'JPA' },
            { name: 'WebSocket (STOMP)' },
            { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
            { name: 'MySQL', icon: <SiMysql color="#4479A1" /> }
          ] 
        },
        { 
          category: 'AI (데이터 처리)', 
          items: [
            { name: 'Python', icon: <SiPython color="#3776AB" /> },
            { name: 'FastAPI', icon: <SiFastapi color="#05998B" /> },
            { name: 'MinerU' },
            { name: 'OpenAI API', icon: <SiOpenai color="#10A37F" /> }
          ] 
        },
        { 
          category: 'Infra & DevOps', 
          items: [
            { name: 'AWS (EC2, RDS)', icon: <FaAws color="#FF9900" /> },
            { name: 'Docker', icon: <SiDocker color="#2496ED" /> }
          ] 
        }
      ]
    },
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
    subtitle: 'AI 기반 인형뽑기 확률 분석 및 키오스크 인터페이스 플랫폼',
    period: '2026.04.06 ~ 2026.06.02 (8주, 5인 팀)',
    role: '프론트엔드 및 하드웨어 가공 (메인 UI 설계 및 물리적 외관 엔지니어링)',
    overview: 'JIPCHAK은 AI 심층 학습을 통해 인형뽑기의 성공 확률을 실시간으로 계산하여 사용자에게 시각적으로 제공하는 자율 프로젝트입니다. 단순히 게임을 즐기는 것을 넘어 데이터 기반의 분석 결과를 키오스크 환경에 최적화된 UI로 전달하며, 실제 물리 기계와 연동되는 통합 시스템을 구축했습니다.',
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
  },
  biotwin: {
    title: 'BioTwin',
    subtitle: '디지털 트윈 기반 CHO 세포 배양 공정 실시간 모니터링 및 시뮬레이션 플랫폼',
    period: '2026.02.16 ~ 2026.04.03 (7주, 6인 팀)',
    role: '프론트엔드 (실시간 시각화 및 시뮬레이션 인터페이스 설계)',
    overview: 'BioTwin은 CHO 세포 배양 공정의 디지털 트윈을 구현하여, 과거 실측 데이터와 AI 예측(GRU, EnKF) 및 물리 모델(ODE) 결과를 통합 시각화하고 가상 시뮬레이션을 제공하는 전문가용 모니터링 플랫폼입니다. 단순히 데이터를 보여주는 것에 그치지 않고, 변수 조절에 따른 미래 상태를 시뮬레이션하여 최적의 공정 환경을 도출하는 인터랙티브 환경 구축에 집중했습니다.',
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
            { name: 'Kafka', icon: <SiApachekafka color="#000000" /> },
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
          {Array.isArray(project.tech) ? (
            <div className="detail-skill-tags">
              {project.tech.map((t, i) => (
                <div key={i} className="detail-tag">
                  <span className="icon">{t.icon}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="structured-tech-display">
              {project.tech.grouped.map((group, i) => (
                <div key={i} className="tech-subsection" style={{ marginBottom: i !== project.tech.grouped.length - 1 ? '1.5rem' : '0' }}>
                  <h4 className="tech-sub-title" style={{ borderBottom: '2px solid #edf2f7', paddingBottom: '0.5rem', marginBottom: '1.2rem', color: 'var(--primary-color)' }}>
                    {group.category}
                  </h4>
                  <div className="detail-skill-tags">
                    {group.items.map((t, j) => (
                      <div key={j} className="detail-tag">
                        {t.icon && <span className="icon">{t.icon}</span>}
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {project.challenges.length > 0 && (
          <section className="detail-section card">
            <h3 className="section-title"><FaLightbulb className="title-icon" /> 기술적 난점 및 해결</h3>
            <div className="challenges-container">
              {project.challenges.map((c, i) => (
                <div key={i} className={['DocQ', 'BioTwin', 'JIPCHAK'].includes(project.title) ? "challenge-card-structured" : "challenge-item"}>
                  {['DocQ', 'BioTwin', 'JIPCHAK'].includes(project.title) ? (
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
