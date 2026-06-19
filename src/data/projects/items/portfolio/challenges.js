export const portfolioChallenges = [
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
  ];
