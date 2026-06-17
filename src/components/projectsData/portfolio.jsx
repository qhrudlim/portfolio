import { 
  SiReact, SiVite, SiCss, SiGithubactions, SiGithubpages, SiGitlab
} from 'react-icons/si';

export const portfolioSummary = {
  id: 'portfolio',
  title: 'Portfolio Web & CI/CD',
  category: 'personal',
  categoryLabel: 'Personal',
  period: '2026.05.27 - 2026.06.01',
  members: '1인 프로젝트',
  description: '현재의 포트폴리오 웹사이트 구축 및 GitHub Actions 기반의 무중단 배포(CI/CD) 자동화 파이프라인 구축 프로젝트입니다.',
  tech: ['React', 'Vite', 'CSS', 'GitHub Actions', 'GitHub Pages', 'GitLab'],
};

export const portfolioDetail = {
  title: 'Portfolio Web CI/CD Pipeline',
  subtitle: '개인 프로젝트 - React 포트폴리오 구축 및 자동 배포 인프라 설계',
  period: '2026.05.27 ~ 2026.06.01 (1주, 1인)',
  role: 'Frontend & DevOps',
  overview: '현재 보고 계신 이 포트폴리오 웹사이트의 개발 및 무중단 배포(CI/CD) 환경 구축 프로젝트입니다. 개발 생산성을 높이기 위해 단순히 로컬에서 빌드하는 것에 그치지 않고, GitHub Actions를 활용해 코드를 푸시하면 자동으로 빌드와 배포가 이루어지는 파이프라인을 바닥부터 직접 설계했습니다.',
  tech: {
    grouped: [
      {
        category: 'Frontend',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" />, myTech: true },
          { name: 'Vite', icon: <SiVite color="#646CFF" />, myTech: true },
          { name: 'CSS', icon: <SiCss color="#1572B6" />, myTech: true }
        ]
      },
      {
        category: 'DevOps & Infra',
        items: [
          { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" />, myTech: true },
          { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" />, myTech: true },
          { name: 'GitLab (Origin Issue Debugging)', icon: <SiGitlab color="#FC6D26" />, myTech: true }
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
    },
    {
      goal: 'GitHub Actions 배포 실패 원인을 빌드 단계와 배포 단계로 분리하여 진단',
      attempt: '실패한 workflow run의 job 및 step 상태를 확인하고, GitHub API를 통해 check run annotation 메시지를 분석',
      issue: '의존성 설치, Vite 빌드, Pages artifact 업로드는 모두 성공했지만 deploy-pages 단계에서 github-pages artifact를 찾지 못해 배포 실패 발생',
      cause: '코드나 빌드 산출물 문제가 아니라 GitHub Pages 배포 단계에서 artifact metadata 조회가 일시적으로 실패한 플랫폼 측 동기화 문제',
      solution: '동일 workflow를 re-run하여 정상 배포를 확인하고, 실패 원인이 애플리케이션 코드가 아닌 외부 배포 플랫폼의 일시적 문제임을 구분',
      reason: 'CI/CD 실패 상황에서 무작정 코드를 수정하기보다 어느 단계에서 실패했는지 먼저 분리해야 불필요한 수정과 회귀를 막을 수 있기 때문',
      result: '빌드 오류, artifact 업로드 오류, 배포 플랫폼 오류를 구분해서 판단하는 운영 관점의 CI/CD 트러블슈팅 경험 확보'
    }
  ],
  contributions: [
    'React 및 Vite 기반의 반응형 포트폴리오 웹 애플리케이션 개발',
    'Origin 충돌 및 Private 레포지토리 권한 에러 트러블슈팅',
    'Vite 환경의 라우팅 구조 분석 및 Base Path 오류 완전 해결',
    'GitHub Actions(deploy.yml) 기반의 빌드 및 자동 배포 파이프라인(CI/CD) 구축',
    'Actions run 로그와 annotation 분석을 통한 배포 단계 장애 원인 분리'
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
};
