import { 
  SiAxios, SiDocker, SiFlyway, SiJenkins, SiMlflow, SiPostgresql, SiPython,
  SiReact, SiSpringboot, SiSpringsecurity, SiTypescript, SiVite
} from 'react-icons/si';
import { FaChartLine, FaCubes, FaJava } from 'react-icons/fa';

export const biotwinTech = {
    grouped: [
      {
        category: 'Frontend (UI/UX & Visualization)',
        members: '2 members',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" />, myTech: true },
          { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, myTech: true },
          { name: 'Vite', icon: <SiVite color="#646CFF" />, myTech: true },
          { name: 'Recharts', icon: <FaChartLine color="#22B5BF" />, myTech: true },
          { name: 'Zustand', icon: <FaCubes color="#433928" />, myTech: true },
          { name: 'Axios', icon: <SiAxios color="#5A29E4" />, myTech: true }
        ]
      },
      { 
        category: 'Backend & Data Stream', 
        members: '2 members',
        items: [
          { name: 'Java', icon: <FaJava color="#007396" /> },
          { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
          { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
          { name: 'PostgreSQL', icon: <SiPostgresql color="#4479A1" /> },
          { name: 'Flyway', icon: <SiFlyway color="#CC0200" /> }
        ] 
      },
      { 
        category: 'AI Analysis & Simulation',
        members: '1 member',
        items: [
          { name: 'Python', icon: <SiPython color="#3776AB" /> },
          { name: 'MLflow', icon: <SiMlflow color="#0194E2" /> },
          { name: 'EnKF' },
          { name: 'GRU' },
          { name: 'ODE' }
        ] 
      },
      { 
        category: 'DevOps & Infra',
        members: '1 member',
        items: [
          { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
          { name: 'Jenkins', icon: <SiJenkins color="#D24939" /> }
        ] 
      }
    ]
  };
