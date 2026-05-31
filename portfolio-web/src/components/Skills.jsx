import React from 'react';

const Skills = () => {
  const languages = ['React', 'Vue', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  const tools = ['Git', 'Jira', 'Figma', 'Mattermost'];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages & Frameworks</h3>
          <div className="skill-tags">
            {languages.map(skill => <span key={skill} className="tag">{skill}</span>)}
          </div>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-tags">
            {tools.map(tool => <span key={tool} className="tag">{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
