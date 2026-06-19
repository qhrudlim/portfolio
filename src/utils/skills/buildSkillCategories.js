import { getSkillDetail } from './getSkillDetail';

export const buildSkillCategories = (categories) => categories.map((category) => ({
  ...category,
  skills: category.skills.map((skill) => getSkillDetail(skill, category))
}));

