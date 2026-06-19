import { fallbackSkillDetails } from '../../data/skills/details/fallback';
import { resumeSkillDetails } from '../../data/skills/details/resume';
import { skillIcons } from '../../data/skills/icons/skillIcons';

export const getSkillDetail = (skill, category) => ({
  ...skill,
  icon: skill.icon || skillIcons[skill.name],
  category: category.title,
  ...(fallbackSkillDetails[skill.name] || {
    level: 1,
    levelText: '입문',
    description: [category.description]
  }),
  ...(resumeSkillDetails[skill.name] || {})
});
