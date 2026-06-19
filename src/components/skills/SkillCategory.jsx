import SkillCard from './SkillCard';

const SkillCategory = ({ category, onSelectSkill }) => (
  <div className="skill-category">
    <h3>{category.title}</h3>
    <div className="skill-tags">
      {category.skills.map((skill) => (
        <SkillCard
          key={skill.name}
          skill={skill}
          onSelect={() => onSelectSkill(skill)}
        />
      ))}
    </div>
  </div>
);

export default SkillCategory;
