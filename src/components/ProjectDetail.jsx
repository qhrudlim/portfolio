import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SiReact, SiVuedotjs, SiTypescript, SiTailwindcss, 
  SiThreedotjs, SiBlender, SiUnity, SiVite, SiPinia,
  SiSpringboot, SiSpringsecurity, SiMysql, SiOpenai, SiDocker,
  SiRedis, SiFastapi, SiPython, SiPostgresql, SiApachekafka, SiJenkins,
  SiArduino, SiRaspberrypi, SiNginx,
  SiJavascript, SiHtml5, SiCss, SiGit, SiGithub, SiGithubactions, SiGithubpages, SiGitlab
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
  },
  'docq-refactor': {
    title: 'DocQ Refactoring (Vanilla JS Migration)',
    subtitle: '개인 프로젝트 - 프레임워크 한계 돌파 및 렌더링 본질 탐구',
    period: '2026.02.09 ~ 2026.02.13 (1주, 1인)',
    role: 'Front-End Developer',
    overview: '기존에 Vue.js와 Tailwind CSS로 구축했던 DocQ 프로젝트를 React와 순수 Vanilla JS/CSS로 다운그레이드하며 다시 구현해 본 개인 실험 프로젝트입니다. 프레임워크가 제공하는 추상화의 장막을 걷어내고, DOM 조작과 상태 관리의 근본적인 원리를 직접 부딪히며 체득하는 데 목적을 두었습니다.',
    tech: {
      grouped: [
        {
          category: 'Frontend Core (프레임워크 및 언어)',
          items: [
            { name: 'React', icon: <SiReact color="#61DAFB" /> },
            { name: 'Vanilla JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'Vanilla CSS', icon: <SiCss color="#1572B6" /> },
            { name: 'Vite', icon: <SiVite color="#646CFF" /> }
          ]
        },
        {
          category: 'State & 3D Rendering',
          items: [
            { name: 'Zustand' },
            { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
            { name: 'GSAP' },
            { name: 'WebSocket (STOMP)' }
          ]
        }
      ]
    },
    challenges: [
      {
        goal: '기술 전환을 통한 프레임워크 의존도 점검 및 컴포넌트 생명주기 깊이 이해',
        attempt: '웹 디자인 학습 시절부터 익숙했던 순수 HTML/CSS/JS 환경으로 돌아가, Vue.js로 작성된 로직을 React Hooks와 Vanilla JS의 순수 DOM 이벤트 리스너로 각각 마이그레이션 시도',
        issue: '프레임워크가 알아서 처리해주던 렌더링 최적화와 이벤트 해제(Cleanup)가 Vanilla JS 환경에서는 모두 수동으로 제어되어야 하여 메모리 누수 및 의도치 않은 재렌더링 발생',
        cause: '선언적 UI(Declarative) 환경의 편리함에 익숙해져, 상태 변화에 따른 명령형(Imperative) DOM 제어의 디테일을 간과했던 것이 원인',
        solution: 'Vanilla JS 환경에서 직접 상태(State) 객체를 관리하고, 상태가 변경될 때마다 필요한 DOM 요소만 선택적으로 업데이트하는 렌더링 함수를 모듈화하여 구조를 극도로 단순화',
        reason: '단순히 화면을 똑같이 띄우는 것이 아니라, "프레임워크의 마법 없이도 유지보수 가능한 명확한 구조를 설계할 수 있는가?"를 스스로 점검하기 위함',
        result: '프레임워크의 존재 이유와 그 내부에서 일어나는 가상 DOM(Virtual DOM)의 최적화 과정을 뼈저리게 이해하며 브라우저 렌더링의 본질 체득'
      }
    ],
    contributions: [
      'Vue.js 컴포넌트를 React 및 Vanilla JS 환경으로 1:1 마이그레이션',
      'Tailwind CSS로 작성된 유틸리티 클래스들을 Vanilla CSS 기반의 모듈식 스타일링으로 재작성',
      '의존성 없는 순수 JavaScript 상태 관리 로직 설계 및 테스트'
    ],
    achievements: '프레임워크 종속성 탈피 및 브라우저 렌더링 최적화 원리 완벽 체득',
    retrospective: [
      {
        title: '익숙함으로 돌아가 찾은 본질',
        content: '웹 디자인 시절 가장 편하게 다루었던 Vanilla 환경으로 돌아가 코드를 재작성하며, 프레임워크가 얼마나 많은 복잡성을 숨겨주고 있었는지 깨달았습니다. 동시에 순수 언어만으로 상태 흐름을 제어해보며 코드를 단순하게 유지하는 역량을 길렀습니다.'
      },
      {
        title: '질문하기 전 먼저 탐구하는 습관',
        content: '마이그레이션 중 막히는 부분이 생겨도 곧바로 정답을 찾기보다, "이 프레임워크는 이걸 내부적으로 어떻게 처리하고 있을까?"를 먼저 고민하고 실험(탐구)하며 문제 해결력을 길렀습니다.'
      }
    ]
  },
  'opensource': {
    title: 'First Open Source Contribution (AI Explainer)',
    subtitle: '오픈소스 레포지토리 첫 기여 - 실무형 협업 프로세스 및 Git Flow 체득',
    period: '2026.03.19 ~ 2026.03.25 (1주, 1인)',
    role: 'Open Source Contributor',
    overview: 'AI Explainer 오픈소스 프로젝트를 분석하던 중 발견한 반응형 UI 스크롤 버그를 스스로 원인을 파악하고 해결하여, 생애 첫 PR(Pull Request) 병합을 이끌어낸 오픈소스 기여 경험입니다. 문제를 찾고 수정하는 것을 넘어, Fork부터 Rebase, Force Push에 이르는 실무 Git Flow를 완벽하게 경험했습니다.',
    tech: {
      grouped: [
        {
          category: 'Frontend Core',
          items: [
            { name: 'Vanilla JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
            { name: 'Vanilla CSS', icon: <SiCss color="#1572B6" /> }
          ]
        },
        {
          category: 'Version Control & Deployment',
          items: [
            { name: 'Git', icon: <SiGit color="#F05032" /> },
            { name: 'GitHub Flow', icon: <SiGithub color="#181717" /> },
            { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" /> },
            { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" /> }
          ]
        }
      ]
    },
    challenges: [
      {
        goal: '오픈소스 프로젝트의 이슈(스크롤 오프셋 버그) 분석 및 정확한 원인 규명',
        attempt: '사이트 네비게이션(navbar) 클릭 시 대상 섹션의 상단이 sticky header에 가려지는 현상(Offset 버그)을 발견하고, HTML -> CSS -> JS 순서로 구조 분석 진행',
        issue: '기존 코드는 브라우저 기본 스크롤 동작에 의존하거나 header의 높이를 고정값으로 산정하여, 반응형 환경(모바일 등)에서 스크롤 기준점이 지속적으로 어긋나는 문제 확인',
        cause: '반응형 레이아웃에서 header의 offsetHeight가 동적으로 변한다는 점이 스크롤 로직에 반영되지 않음',
        solution: 'scrollIntoView() 대신 window.scrollTo()를 활용한 커스텀 스크롤 로직으로 변경하고, DOM에서 header의 동적 높이(offsetHeight)를 실시간으로 계산하여 빼주는 방식으로 로직 전면 수정',
        reason: '단순히 CSS의 scroll-padding-top으로 우회하는 꼼수 대신, JS 레벨에서 뷰포트 변화에 완벽히 대응하는 근본적인 구조 개선을 제시하기 위함',
        result: '모든 디바이스 환경에서 섹션 상단이 header 아래에 정확하게 맞춰지는 안정적인 반응형 스크롤 구현 성공'
      },
      {
        goal: '완벽한 형태의 첫 오픈소스 PR(Pull Request) 제출 및 실무 Git 병합 과정 돌파',
        attempt: '로컬에서 코드를 수정하고 원본 레포에 직접 Push를 시도했으나 403 에러 발생. 이후 Fork를 생성하여 첫 PR을 올림',
        issue: 'PR 제출 후 메인 브랜치에 새로운 커밋들이 지속적으로 올라와 PR 브랜치의 코드가 뒤쳐지며 충돌(Conflict) 위험 발생',
        cause: '타인의 레포지토리에 기여하는 오픈소스 생태계의 Fork & Pull Request 메커니즘과, 원본 레포 동기화(Rebase)에 대한 경험 부재',
        solution: '원본(Upstream) 레포지토리의 최신 변경사항을 Pull 받아 내 브랜치에 Rebase하고, git push --force 명령어를 통해 PR 내역을 최신 상태로 깔끔하게 업데이트',
        reason: '단순히 코드를 고치는 것을 넘어, 레포지토리 관리자(Maintainer)가 즉시 Merge할 수 있도록 커밋 히스토리와 브랜치 상태를 최상으로 관리하는 것이 오픈소스 에티켓이기 때문',
        result: '메인테이너의 "LGTM" 코멘트와 함께 성공적인 첫 PR Merge를 이끌어내며 실무 Git Flow 완벽 체득'
      }
    ],
    contributions: [
      '웹사이트 구조(HTML/CSS/JS) 역공학 분석 및 Sticky Header 스크롤 버그 수정',
      '명확한 문제 정의를 위한 다수의 Issue 발행 및 본문 지속적 정제',
      '403 에러 극복 후 Fork 브랜치 생성 및 규격에 맞는 완벽한 PR 작성',
      'Upstream 변경 사항 동기화를 위한 Git Rebase 및 Force Push 성공적 수행'
    ],
    achievements: '첫 오픈소스 기여 완료 및 고급 Git 활용 역량(Rebase, PR 관리) 습득',
    retrospective: [
      {
        title: '끝까지 물고 늘어지는 집요함',
        content: '단순히 "이거 고장 났어요"라고 묻는 대신, 혼자서 며칠간 코드를 뜯어보고 다양한 시도를 반복하며 결국 정답을 찾아낸 과정은 저의 가장 큰 무기인 집요함을 증명해 준 시간이었습니다.'
      },
      {
        title: '진짜 개발자의 소통 방식',
        content: 'Issue와 PR의 본문을 무수히 다듬으며, "내 코드가 왜 필요한가"를 상대방에게 논리적으로 설득하는 글쓰기의 중요성을 배웠습니다.'
      }
    ]
  },
  'portfolio-cicd': {
    title: 'Portfolio Web CI/CD Pipeline',
    subtitle: '개인 프로젝트 - React 포트폴리오 구축 및 자동 배포 인프라 설계',
    period: '2026.05.27 ~ 2026.06.01 (1주, 1인)',
    role: 'Front-End & DevOps',
    overview: '현재 보고 계신 이 포트폴리오 웹사이트의 개발 및 무중단 배포(CI/CD) 환경 구축 프로젝트입니다. 개발 생산성을 높이기 위해 단순히 로컬에서 빌드하는 것에 그치지 않고, GitHub Actions를 활용해 코드를 푸시하면 자동으로 빌드와 배포가 이루어지는 파이프라인을 바닥부터 직접 설계했습니다.',
    tech: {
      grouped: [
        {
          category: 'Frontend',
          items: [
            { name: 'React', icon: <SiReact color="#61DAFB" /> },
            { name: 'Vite', icon: <SiVite color="#646CFF" /> },
            { name: 'CSS', icon: <SiCss color="#1572B6" /> }
          ]
        },
        {
          category: 'DevOps & Infra',
          items: [
            { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" /> },
            { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" /> },
            { name: 'GitLab (Origin Issue Debugging)', icon: <SiGitlab color="#FC6D26" /> }
          ]
        }
      ]
    },
    challenges: [
      {
        goal: '안정적이고 독립적인 포트폴리오 웹사이트 배포 환경 구축',
        attempt: 'gh-pages 브랜치를 활용하여 GitHub Pages에 배포를 시도했으나, 로컬 Git 저장소가 GitLab Origin으로 묶여 있어 엉뚱한 곳으로 배포되는 현상 발생',
        issue: '클론(Clone)부터 다시 진행하여 배포했으나, 레포지토리의 Private 설정 에러 및 Base Path 하위 폴더 라우팅 경로 지정 오류가 연이어 발생하여 페이지가 하얗게 뜨는 문제 직면',
        cause: '기존의 단순 플러그인(gh-pages) 의존적인 배포 방식이 가진 한계와, 정적 자원 라우팅(Vite Base Path)에 대한 인프라적 이해 부족',
        solution: '기존 브랜치 방식의 배포를 전면 폐기하고, GitHub Actions의 YAML 워크플로우를 직접 작성하여 Push 감지 -> 종속성 설치 -> Vite Build -> Pages 배포로 이어지는 완벽한 CI/CD 자동화 파이프라인으로 구조를 재설계',
        reason: '단순히 플러그인에 의존해 일회성으로 구현하기보다, "배포 프로세스 전체의 통제권"을 제가 직접 가져와 유지보수 가능하고 명확한 인프라 구조를 세우고자 함',
        result: '현재는 main 브랜치에 코드가 push 되는 즉시 모든 배포 과정이 전자동으로 이루어지는 안정적인 무중단 CI/CD 인프라 구축 성공'
      }
    ],
    contributions: [
      'React 및 Vite 기반의 반응형 포트폴리오 웹 애플리케이션 개발',
      'Origin 충돌 및 Private 레포지토리 권한 에러 트러블슈팅',
      'Vite 환경의 라우팅 구조 분석 및 Base Path 오류 완전 해결',
      'GitHub Actions(deploy.yml) 기반의 빌드 및 자동 배포 파이프라인(CI/CD) 구축'
    ],
    achievements: '정적 웹사이트 호스팅 원리 이해 및 CI/CD 파이프라인 직접 구축 역량 확보',
    retrospective: [
      {
        title: '문제의 원인을 파고드는 구조화 역량',
        content: '경로 에러가 발생했을 때 웹사이트 배포에 꼭 필요한 파일들만 남기고 과감히 전부 삭제하며 원인을 찾아나가는 "통제 변인 설정"을 진행했습니다. 복잡한 에러 앞에서도 문제를 단순하게 구조화하여 해결하는 저만의 강점을 다시 한번 확인했습니다.'
      },
      {
        title: '구현 그 너머의 인프라적 고민',
        content: '웹사이트 코드를 작성하는 것을 넘어, 로컬 환경의 코드를 실제 운영(Production) 환경으로 내보내는 파이프라인을 견고하게 유지하는 것이 얼마나 중요한지 깨달았습니다. 구조의 단순성과 유지보수성을 프론트엔드뿐만 아니라 배포 파이프라인에도 적용한 값진 경험이었습니다.'
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
                <div key={i} className={['DocQ', 'BioTwin', 'JIPCHAK', 'DocQ Refactoring (Vanilla JS Migration)', 'Open Source Contribution (AI Explainer)', 'Portfolio Web CI/CD Pipeline'].includes(project.title) ? "challenge-card-structured" : "challenge-item"}>
                  {['DocQ', 'BioTwin', 'JIPCHAK', 'DocQ Refactoring (Vanilla JS Migration)', 'Open Source Contribution (AI Explainer)', 'Portfolio Web CI/CD Pipeline'].includes(project.title) ? (
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
