import SkillCard from './SkillCard';
import { getSkillDetail } from '../../utils/skills/getSkillDetail';

const SkillCategory = ({ category, onSelectSkill }) => (
  <div className="skill-category">
    <h3>{category.title}</h3>
    <div className="skill-tags">
      {category.skills.map((skill) => (
        <SkillCard
          key={skill.name}
          skill={skill}
          onSelect={() => onSelectSkill(getSkillDetail(skill, category))}
        />
      ))}
    </div>
  </div>
);

export default SkillCategory;
