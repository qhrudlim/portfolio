import React from 'react';
import { 
  SiJavascript, SiHtml5, SiCss, SiGit, SiGithub, SiGithubactions, SiGithubpages
} from 'react-icons/si';

export const firstOpensourceSummary = {
  id: 'first-opensource',
  title: 'First Open Source Contribution',
  description: 'AI Explainer 오픈소스 레포지토리 기여. 반응형 UI의 스크롤 오프셋(Scroll Offset) 버그를 분석하고 수정하여 첫 PR 및 병합(Merge)을 달성한 실무형 협업 경험입니다.',
  tech: ['Vanilla JS', 'HTML/CSS', 'Git', 'GitHub Flow'],
};

export const firstOpensourceDetail = {
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
      attempt: '사이트 네비게이션(navbar) 클릭 시 대상 섹션의 상단이 sticky header에 가려지는 현상(Offset 버그)을 발견하고, 웹 디자인 시절부터 다져온 탄탄한 마크업 지식을 바탕으로 HTML -> CSS -> JS 순서로 렌더링 구조 분석 진행',
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
      title: '기본기의 힘과 끝까지 물고 늘어지는 집요함',
      content: '복잡한 프레임워크가 아닌 순수 HTML/CSS/JS로 이루어진 레포지토리였기에, 제가 가진 웹의 기본기를 100% 발휘하여 원인을 짚어낼 수 있었습니다. 며칠간 코드를 뜯어보고 다양한 시도를 반복하며 결국 정답을 찾아낸 과정은 제 안의 집요함을 증명해 준 시간이었습니다.'
    },
    {
      title: '진짜 개발자의 소통 방식',
      content: 'Issue와 PR의 본문을 무수히 다듬으며, "내 코드가 왜 필요한가"를 상대방에게 논리적으로 설득하는 글쓰기의 중요성을 배웠습니다.'
    }
  ]
};