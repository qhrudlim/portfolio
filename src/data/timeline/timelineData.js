import { timelineCategories } from './categories/timelineCategories';
import { codingCertificationTimeline } from './items/certifications/coding';
import { languageCertificationTimeline } from './items/certifications/language';
import { otherCertificationTimeline } from './items/certifications/other';
import { academyTimeline } from './items/education/academy';
import { schoolTimeline } from './items/education/school';
import { ssafyTimeline } from './items/education/ssafy';
import { partTimeTimeline } from './items/experiences/partTime';
import { regularExperienceTimeline } from './items/experiences/regular';
import { openSourceContributionTimeline } from './items/projects/openSourceContributions';
import { personalProjectTimeline } from './items/projects/personalProjects';
import { teamProjectTimeline } from './items/projects/teamProjects';

const timelineItems = [
  ...ssafyTimeline,
  ...personalProjectTimeline,
  ...teamProjectTimeline,
  ...openSourceContributionTimeline,
  ...schoolTimeline,
  ...academyTimeline,
  ...codingCertificationTimeline,
  ...languageCertificationTimeline,
  ...otherCertificationTimeline,
  ...regularExperienceTimeline,
  ...partTimeTimeline
];

export { timelineCategories };
export const timelineData = [...timelineItems].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
