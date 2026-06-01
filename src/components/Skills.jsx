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
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Vue', icon: <SiVuedotjs color="#4FC08D" /> },
        { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'Vanilla CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'Java (Learning)', icon: <FaJava color="#007396" /> }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Django', icon: <SiDjango color="#092E20" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'GitHub', icon: <SiGithub color="#181717" /> },
        { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Mattermost', icon: <SiMattermost color="#0058CC" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
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
