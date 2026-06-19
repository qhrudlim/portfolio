import { useEffect, useState } from 'react';
import { skillCategories } from '../data/skills/categories/skillCategories';
import { buildSkillCategories } from '../utils/skills/buildSkillCategories';
import SkillCategory from './skills/SkillCategory';
import SkillModal from './skills/SkillModal';

const displaySkillCategories = buildSkillCategories(skillCategories);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    if (!selectedSkill) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedSkill(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedSkill]);

  return (
    <section id="skills" className="section animate-reveal">
      <p className="skills-hint">Click a skill to view details</p>
      <div className="skills-grid">
        {displaySkillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            category={category}
            onSelectSkill={setSelectedSkill}
          />
        ))}
      </div>

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </section>
  );
};

export default Skills;
