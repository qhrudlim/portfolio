import { 
  SiVuedotjs, SiTypescript, SiVite, SiPinia, 
  SiThreedotjs, SiTailwindcss, SiBlender, SiUnity,
  SiSpringboot, SiSpringsecurity, SiMysql, SiOpenai, SiDocker,
  SiRedis, SiFastapi, SiPython
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

export const docqTech = {
    grouped: [
      {
        category: 'Frontend (웹 클라이언트)',
        members: '3 members',
        items: [
          { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" />, myTech: true },
          { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, myTech: true },
          { name: 'Vite', icon: <SiVite color="#646CFF" />, myTech: true },
          { name: 'Pinia', icon: <SiPinia color="#FFD12F" />, myTech: true },
          { name: 'Three.js', icon: <SiThreedotjs color="#000000" />, myTech: true },
          { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" />, myTech: true },
          { name: 'Blender', icon: <SiBlender color="#F5792A" />, myTech: true },
          { name: 'Unity', icon: <SiUnity color="#000000" />, myTech: true }
        ]
      },
      { 
        category: 'Backend (API & 게임 서버)', 
        members: '1 member',
        items: [
          { name: 'Java', icon: <FaJava color="#007396" /> },
          { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
          { name: 'Spring Security', icon: <SiSpringsecurity color="#6DB33F" /> },
          { name: 'JPA' },
          { name: 'WebSocket (STOMP)' },
          { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
          { name: 'MySQL', icon: <SiMysql color="#4479A1" /> }
        ] 
      },
      { 
        category: 'AI (데이터 처리)', 
        members: '1 member',
        items: [
          { name: 'Python', icon: <SiPython color="#3776AB" /> },
          { name: 'FastAPI', icon: <SiFastapi color="#05998B" /> },
          { name: 'MinerU' },
          { name: 'OpenAI API', icon: <SiOpenai color="#10A37F" /> }
        ] 
      },
      { 
        category: 'Infra & DevOps', 
        members: '1 member',
        items: [
          { name: 'AWS (EC2, RDS)', icon: <FaAws color="#FF9900" /> },
          { name: 'Docker', icon: <SiDocker color="#2496ED" /> }
        ] 
      }
    ]
  };
