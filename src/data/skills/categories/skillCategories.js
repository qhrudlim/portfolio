export const skillCategories = [
  {
    title: 'FE',
    description: '사용자 화면 구현과 프론트엔드 개발 환경을 구성하는 핵심 기술입니다.',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Vue.js', 'Vite'].map((name) => ({ name }))
  },
  {
    title: 'UI/State',
    description: '상태 관리, API 통신, 동적 인터랙션 구현에 활용한 기술입니다.',
    skills: ['Zustand', 'Pinia', 'Axios', 'Framer Motion', 'GSAP'].map((name) => ({ name }))
  },
  {
    title: 'Visual',
    description: '3D 렌더링, 차트 시각화, 시각 자산 제작에 활용한 기술입니다.',
    skills: ['Three.js', 'Recharts', 'Blender', 'Unity'].map((name) => ({ name }))
  },
  {
    title: 'Lang',
    description: '프로젝트 구현과 알고리즘 문제 해결에 사용한 프로그래밍 언어입니다.',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'].map((name) => ({ name }))
  },
  {
    title: 'BE',
    description: '서버 로직과 API 구현 경험에 연결되는 백엔드 기술입니다.',
    skills: ['Django'].map((name) => ({ name }))
  },
  {
    title: 'DB',
    description: '관계형 데이터베이스 설계와 저장소 구성에 활용한 기술입니다.',
    skills: ['MySQL'].map((name) => ({ name }))
  },
  {
    title: 'AI',
    description: 'AI 실험 환경과 수치 연산, 분석 보조 과정에서 활용한 도구입니다.',
    skills: ['Pandas', 'Numpy', 'Jupyter Notebook', 'Google Colab'].map((name) => ({ name }))
  },
  {
    title: 'Infra',
    description: '배포 자동화, 정적 호스팅, 서버 환경 구성에 사용한 기술입니다.',
    skills: ['GitHub Actions', 'GitHub Pages', 'AWS EC2', 'Docker', 'Linux'].map((name) => ({ name }))
  },
  {
    title: 'Tools',
    description: 'UI 설계와 API 테스트 등 개발 보조 작업에 활용한 도구입니다.',
    skills: ['Figma', 'Postman'].map((name) => ({ name }))
  },
  {
    title: 'Collab',
    description: '버전 관리, 이슈 관리, 문서화 등 팀 협업에 활용한 도구입니다.',
    skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'Mattermost', 'Notion'].map((name) => ({ name }))
  },
  {
    title: 'Extra',
    description: '소프트웨어 외부의 장치 연동과 물리적 구현 경험에 관련된 역량입니다.',
    skills: ['Hardware'].map((name) => ({ name }))
  }
];

