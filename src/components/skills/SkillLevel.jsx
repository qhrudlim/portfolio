const SkillLevel = ({ level }) => (
  <div className="skill-level-area" aria-label={`5단계 중 ${level}단계`}>
    <div className="skill-level-boxes">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`skill-level-box ${index < level ? 'filled' : ''}`}
        />
      ))}
    </div>
  </div>
);

export default SkillLevel;
