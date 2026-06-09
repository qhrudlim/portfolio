import React from 'react';
import { 
  SiReact, SiVuedotjs, SiHtml5, SiTailwindcss, 
  SiDjango, SiJavascript, SiTypescript, SiPython, 
  SiMysql, SiGit, SiGithub, SiGitlab, SiJira, 
  SiFigma, SiMattermost, SiPostman, SiUnity, SiVite, SiThreedotjs, SiBlender,
  SiPinia, SiDocker, SiLinux, SiPandas, SiNumpy, SiJupyter, SiGooglecolab
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaChartLine, FaMicrochip, FaAws } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      description: '사용자 중심의 UI/UX와 컴포넌트 기반 설계, 모던 빌드 시스템을 활용하여 웹 서비스를 구현합니다.',
      skills: [
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
        { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> },
        { name: 'Pinia', icon: <SiPinia color="#FFD12F" /> },
        { name: 'Recharts', icon: <FaChartLine color="#22B5BF" /> }
      ]
      },
      {
      title: 'Language',
      description: '알고리즘 문제 해결 능력과 정적 타입을 활용한 안정적인 설계 역량을 보유하고 있습니다.',
      skills: [
        { name: 'JS', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TS', icon: <SiTypescript color="#3178C6" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> }
      ]
      },
      {
      title: 'AI & 3D',
      description: '데이터 분석을 통한 인사이트 도출과 웹 기반 3D 환경 구축을 통해 차별화된 사용자 경험을 제공합니다.',
      skills: [
        { name: 'Pandas', icon: <SiPandas color="#150458" /> },
        { name: 'Numpy', icon: <SiNumpy color="#013243" /> },
        { name: 'Jupyter', icon: <SiJupyter color="#F37626" /> },
        { name: 'Colab', icon: <SiGooglecolab color="#F9AB00" /> },
        { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
        { name: 'Unity', icon: <SiUnity color="#000000" /> },
        { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> }
      ]
      },
    {
      title: 'Backend & Infra',
      description: '서버 사이드 로직 설계부터 DB 관계 설계, 클라우드 환경 배포 및 실물 기기 연동까지 시스템 전반을 구축합니다.',
      skills: [
        { name: 'Django', icon: <SiDjango color="#092E20" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'AWS EC2', icon: <FaAws color="#FF9900" /> },
        { name: 'Hardware', icon: <FaMicrochip color="#555" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
        { name: 'Linux', icon: <SiLinux color="#FCC624" /> }
      ]
    },
    {
      title: 'Tools',
      description: '효율적인 협업과 형상 관리, 프로젝트 일정 관리를 위해 다양한 도구를 적극 활용합니다.',
      skills: [
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'GitHub', icon: <SiGithub color="#181717" /> },
        { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Mattermost', icon: <SiMattermost color="#0058CC" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section animate-reveal">
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem', lineHeight: '1.4' }}>{category.description}</p>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="tag skill-tag-with-icon">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name" title={skill.name}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
