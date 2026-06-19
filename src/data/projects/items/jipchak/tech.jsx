import { 
  SiArduino, SiAxios, SiDocker, SiFastapi, SiFramer, SiJenkins,
  SiMysql, SiNginx, SiOpencv, SiPytorch, SiPython, SiRaspberrypi, SiReact,
  SiRedis, SiSpringboot, SiSpringsecurity, SiTailwindcss, SiTypescript, SiVite,
  SiYolo
} from 'react-icons/si';
import { FaChartLine, FaCubes, FaJava } from 'react-icons/fa';

export const jipchakTech = {
    grouped: [
      {
        category: 'Frontend (웹 클라이언트)',
        members: '2 members',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" />, myTech: true },
          { name: 'TypeScript', icon: <SiTypescript color="#3178C6" />, myTech: true },
          { name: 'Vite', icon: <SiVite color="#646CFF" />, myTech: true },
          { name: 'Framer Motion', icon: <SiFramer color="#0055FF" />, myTech: true },
          { name: 'Zustand', icon: <FaCubes color="#433928" /> },
          { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" />, myTech: true },
          { name: 'Recharts', icon: <FaChartLine color="#22B5BF" /> },
          { name: 'Axios', icon: <SiAxios color="#5A29E4" /> }
        ]
      },
      { 
        category: 'Backend (API & 실시간 서버)', 
        members: '1 member',
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
        members: '1 member',
        items: [
          { name: 'Python', icon: <SiPython color="#3776AB" /> },
          { name: 'FastAPI', icon: <SiFastapi color="#05998B" /> },
          { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
          { name: 'OpenCV', icon: <SiOpencv color="#5C3EE8" /> },
          { name: 'YOLOv8 (Seg/Detection)', icon: <SiYolo color="#00FFFF" /> },
          { name: 'MsgPack' }
        ] 
      },
      { 
        category: 'Embedded & Infrastructure', 
        members: '1 member',
        items: [
          { name: 'Arduino', icon: <SiArduino color="#00979D" /> },
          { name: 'Raspberry Pi', icon: <SiRaspberrypi color="#C51A4A" /> },
          { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
          { name: 'Jenkins', icon: <SiJenkins color="#D24939" /> },
          { name: 'Nginx', icon: <SiNginx color="#009639" /> },
          { name: 'Physical Prototyping (Foam Board Engineering)', myTech: true },
          { name: 'Technical Documentation & Archiving', myTech: true }
        ] 
      }
    ]
  };
