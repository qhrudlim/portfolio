import { useEffect, useState } from 'react';
import { skillCategories } from '../data/skills/categories/skillCategories';
import { buildSkillCategories } from '../utils/skills/buildSkillCategories';
import SkillCategory from './skills/SkillCategory';
import SkillCategoryFilters from './skills/SkillCategoryFilters';
import SkillModal from './skills/SkillModal';

const displaySkillCategories = buildSkillCategories(skillCategories);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(displaySkillCategories[0].title);
  const activeCategory = displaySkillCategories.find(
    (category) => category.title === selectedCategory
  );

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
      <SkillCategoryFilters
        categories={displaySkillCategories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <SkillCategory category={activeCategory} onSelectSkill={setSelectedSkill} />

      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </section>
  );
};

export default Skills;
