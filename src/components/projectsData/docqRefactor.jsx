import React from 'react';
import { 
  SiReact, SiJavascript, SiCss, SiVite, SiThreedotjs
} from 'react-icons/si';

export const docqRefactorSummary = {
  id: 'docq-refactor',
  title: 'DocQ Refactoring',
  description: 'Vue.js 기반의 DocQ 프로젝트를 React와 Vanilla JS로 마이그레이션하며 프레임워크의 본질과 구조적 의존성을 탐구한 개인 실험 프로젝트입니다.',
  tech: ['React', 'JavaScript', 'CSS', 'Zustand', 'Three.js', 'GSAP', 'Vite'],
};

export const docqRefactorDetail = {
  title: 'DocQ Refactoring (Vanilla JS Migration)',
  subtitle: '개인 프로젝트 - 프레임워크 한계 돌파 및 렌더링 본질 탐구',
  period: '2026.02.09 ~ 2026.02.13 (1주, 1인)',
  role: 'Frontend',
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
};