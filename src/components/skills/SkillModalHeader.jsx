const SkillModalHeader = ({ skill }) => (
  <header className="skill-modal-header">
    <span className="skill-modal-icon">{skill.icon}</span>
    <div>
      <p className="skill-modal-category">{skill.category}</p>
      <h3 id="skill-modal-title">{skill.name}</h3>
    </div>
  </header>
);

export default SkillModalHeader;

