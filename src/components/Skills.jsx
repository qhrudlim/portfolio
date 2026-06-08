import React from 'react';
import { 
  SiReact, SiVuedotjs, SiHtml5, SiTailwindcss, 
  SiDjango, SiJavascript, SiTypescript, SiPython, 
  SiMysql, SiGit, SiGithub, SiGitlab, SiJira, 
  SiFigma, SiMattermost, SiPostman, SiUnity, SiVite, SiThreedotjs, SiBlender,
  SiPinia
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaChartLine } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development Core',
      description: '웹 표준 및 접근성을 고려한 시맨틱 마크업과 정적 타입을 활용한 안정적인 설계를 지향합니다.',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
        { name: 'Pinia', icon: <SiPinia color="#FFD12F" /> },
        { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: '3D & Data Visualization',
      description: '웹 브라우저 상의 3D 객체 렌더링 및 대규모 데이터의 직관적인 시각화 경험이 있습니다.',
      skills: [
        { name: 'Three.js (TresJS)', icon: <SiThreedotjs color="#000000" /> },
        { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
        { name: 'Unity', icon: <SiUnity color="#000000" /> },
        { name: 'Recharts', icon: <FaChartLine color="#22B5BF" /> }
      ]
    },
    {
      title: 'Extended & Backend',
      description: '알고리즘 문제 해결 능력과 백엔드 MVT 패턴에 대한 이해를 보유하고 있습니다.',
      skills: [
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'Django', icon: <SiDjango color="#092E20" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> },
        { name: 'Java (Learning)', icon: <FaJava color="#007396" /> }
      ]
    },
    {
      title: 'Collaboration & Tools',
      description: '팀 프로젝트 리스크 관리와 효율적인 협업을 위해 문서화와 소통 도구를 적극 활용합니다.',
      skills: [
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'GitHub', icon: <SiGithub color="#181717" /> },
        { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
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
            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1rem' }}>{category.description}</p>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="tag skill-tag-with-icon">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
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
