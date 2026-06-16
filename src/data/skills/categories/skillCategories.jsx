import {
  SiBlender, SiDjango, SiDocker, SiFigma, SiFramer, SiGit, SiGithub,
  SiGithubactions, SiGithubpages, SiGitlab, SiGooglecolab, SiGreensock,
  SiHtml5, SiJavascript, SiJira, SiJupyter, SiLinux, SiMattermost,
  SiMysql, SiNumpy, SiPandas, SiPinia, SiPostman, SiPython, SiReact,
  SiTailwindcss, SiThreedotjs, SiTypescript, SiUnity, SiVite, SiVuedotjs
} from 'react-icons/si';
import {
  FaAws, FaChartLine, FaCss3Alt, FaCubes, FaExchangeAlt, FaJava, FaMicrochip
} from 'react-icons/fa';

export const skillCategories = [
  {
    title: 'Core Frontend',
    description: '사용자 중심의 UI/UX와 컴포넌트 기반 설계, 모던 빌드 시스템을 활용하여 웹 서비스를 구현합니다.',
    skills: [
      { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
      { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'React', icon: <SiReact color="#61DAFB" /> },
      { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
      { name: 'Vite', icon: <SiVite color="#646CFF" /> },
      { name: 'Figma', icon: <SiFigma color="#F24E1E" /> }
    ]
  },
  {
    title: 'State & Interaction',
    description: '전역 상태 관리부터 3D 렌더링 및 동적 애니메이션까지 차별화된 사용자 경험을 구현합니다.',
    skills: [
      { name: 'Zustand', icon: <FaCubes color="#433928" /> },
      { name: 'Pinia', icon: <SiPinia color="#FFD12F" /> },
      { name: 'Axios', icon: <FaExchangeAlt color="#5A29E4" /> },
      { name: 'Framer Motion', icon: <SiFramer color="#0055FF" /> },
      { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
      { name: 'GSAP', icon: <SiGreensock color="#88CE02" /> },
      { name: 'Recharts', icon: <FaChartLine color="#22B5BF" /> }
    ]
  },
  {
    title: 'Language & AI',
    description: '알고리즘 문제 해결, 타입 기반 설계, 파이썬 데이터 분석 경험을 갖추고 있습니다.',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" /> },
      { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'Pandas', icon: <SiPandas color="#150458" /> },
      { name: 'Numpy', icon: <SiNumpy color="#013243" /> },
      { name: 'Jupyter', icon: <SiJupyter color="#F37626" /> },
      { name: 'Google Colab', icon: <SiGooglecolab color="#F9AB00" /> }
    ]
  },
  {
    title: 'BE & DB & Infra',
    description: '서버 로직, DB 관계 설계, 클라우드 배포, 실물 기기 연동까지 시스템 전반을 구축합니다.',
    skills: [
      { name: 'Django', icon: <SiDjango color="#092E20" /> },
      { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" /> },
      { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" /> },
      { name: 'AWS EC2', icon: <FaAws color="#FF9900" /> },
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
      { name: 'Linux', icon: <SiLinux color="#FCC624" /> }
    ]
  },
  {
    title: 'Tools & Extra',
    description: '효율적인 협업과 형상 관리, 프로젝트 일정 관리를 위해 다양한 도구를 활용합니다.',
    skills: [
      { name: 'Git', icon: <SiGit color="#F05032" /> },
      { name: 'GitHub', icon: <SiGithub color="#181717" /> },
      { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
      { name: 'Jira', icon: <SiJira color="#0052CC" /> },
      { name: 'Mattermost', icon: <SiMattermost color="#0058CC" /> },
      { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
      { name: 'Unity', icon: <SiUnity color="#000000" /> },
      { name: 'Hardware', icon: <FaMicrochip color="#555" /> }
    ]
  }
];
