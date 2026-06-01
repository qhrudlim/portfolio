import React from 'react';
import { 
  SiReact, SiVuedotjs, SiHtml5, SiTailwindcss, 
  SiDjango, SiJavascript, SiTypescript, SiPython, 
  SiMysql, SiGit, SiGithub, SiGitlab, SiJira, 
  SiFigma, SiMattermost, SiPostman 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development Core',
      description: '웹 프론트엔드의 핵심 기술 스택입니다.',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Vue', icon: <SiVuedotjs color="#4FC08D" /> },
        { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: 'Extended & Backend',
      description: '더 넓은 시야를 갖추기 위한 언어와 백엔드 지식입니다.',
      skills: [
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'Java (Learning)', icon: <FaJava color="#007396" /> },
        { name: 'Django', icon: <SiDjango color="#092E20" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> }
      ]
    },
    {
      title: 'Collaboration & Productivity',
      description: '효율적인 협업과 생산성을 위한 도구들입니다.',
      skills: [
        { name: 'Git / GitHub', icon: <SiGithub color="#181717" /> },
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
      <h2>Skills</h2>
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
