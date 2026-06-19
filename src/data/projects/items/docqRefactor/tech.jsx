import { 
  SiCss, SiGreensock, SiJavascript, SiReact, SiThreedotjs, SiVite
} from 'react-icons/si';
import { FaCubes } from 'react-icons/fa';

export const docqRefactorTech = {
    grouped: [
      {
        category: 'Frontend Core (프레임워크 및 언어)',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" />, myTech: true },
          { name: 'Vanilla JavaScript', icon: <SiJavascript color="#F7DF1E" />, myTech: true },
          { name: 'Vanilla CSS', icon: <SiCss color="#1572B6" />, myTech: true },
          { name: 'Vite', icon: <SiVite color="#646CFF" />, myTech: true }
        ]
      },
      {
        category: 'State & 3D Rendering',
        items: [
          { name: 'Zustand', icon: <FaCubes color="#433928" />, myTech: true },
          { name: 'Three.js', icon: <SiThreedotjs color="#000000" />, myTech: true },
          { name: 'GSAP', icon: <SiGreensock color="#88CE02" />, myTech: true },
          { name: 'WebSocket (STOMP)', myTech: true }
        ]
      }
    ]
  };
