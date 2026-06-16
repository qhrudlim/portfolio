import { fallbackSkillDetails } from '../../data/skills/details/fallbackSkillDetails';
import { resumeSkillDetails } from '../../data/skills/details/resumeSkillDetails';

export const getSkillDetail = (skill, category) => ({
  ...skill,
  category: category.title,
  ...(fallbackSkillDetails[skill.name] || {
    level: 1,
    levelText: '입문',
    description: [category.description]
  }),
  ...(resumeSkillDetails[skill.name] || {})
});
