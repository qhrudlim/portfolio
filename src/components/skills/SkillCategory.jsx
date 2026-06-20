import SkillCard from './SkillCard';

const SkillCategory = ({ category, onSelectSkill }) => (
  <div className="skill-category selected-skill-category">
    <h3>{category.title}</h3>
    <p className="skill-category-description">{category.description}</p>
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
