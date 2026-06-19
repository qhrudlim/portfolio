import { skillIcons } from '../../data/skills/icons/skillIcons';

const SkillCard = ({ skill, onSelect }) => (
  <button type="button" className="tag skill-tag-with-icon" onClick={onSelect}>
    <span className="skill-icon">{skill.icon || skillIcons[skill.name]}</span>
    <span className="skill-name" title={skill.name}>{skill.name}</span>
  </button>
);

export default SkillCard;
