const SkillLevel = ({ level, levelText }) => (
  <div className="skill-level-area" aria-label={`5단계 중 ${level}단계, ${levelText}`}>
    <div className="skill-level-boxes">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`skill-level-box ${index < level ? 'filled' : ''}`}
        />
      ))}
    </div>
    <span className="skill-level-text">{levelText}</span>
  </div>
);

export default SkillLevel;
