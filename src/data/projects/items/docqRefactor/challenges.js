export const docqRefactorChallenges = [
    {
      goal: '기술 전환을 통한 프레임워크 의존도 점검 및 컴포넌트 생명주기 깊이 이해',
      attempt: '웹 디자인 학습 시절부터 익숙했던 순수 HTML/CSS/JS 환경으로 돌아가, Vue.js로 작성된 로직을 React Hooks와 Vanilla JS의 순수 DOM 이벤트 리스너로 각각 마이그레이션 시도',
      issue: '프레임워크가 알아서 처리해주던 렌더링 최적화와 이벤트 해제(Cleanup)가 Vanilla JS 환경에서는 모두 수동으로 제어되어야 하여 메모리 누수 및 의도치 않은 재렌더링 발생',
      cause: '선언적 UI(Declarative) 환경의 편리함에 익숙해져, 상태 변화에 따른 명령형(Imperative) DOM 제어의 디테일을 간과했던 것이 원인',
      solution: 'Vanilla JS 환경에서 직접 상태(State) 객체를 관리하고, 상태가 변경될 때마다 필요한 DOM 요소만 선택적으로 업데이트하는 렌더링 함수를 모듈화하여 구조를 극도로 단순화',
      reason: '단순히 화면을 똑같이 띄우는 것이 아니라, "프레임워크의 마법 없이도 유지보수 가능한 명확한 구조를 설계할 수 있는가?"를 스스로 점검하기 위함',
      result: '프레임워크의 존재 이유와 그 내부에서 일어나는 가상 DOM(Virtual DOM)의 최적화 과정을 뼈저리게 이해하며 브라우저 렌더링의 본질 체득'
    }
  ];
