export { biotwinSummary } from './summary';
import { biotwinBaseDetail } from './base';
import { biotwinTech } from './tech';
import { biotwinChallenges } from './challenges';
import { biotwinContributions } from './contributions';
import { biotwinRetrospective } from './retrospective';

export const biotwinDetail = {
  ...biotwinBaseDetail,
  tech: biotwinTech,
  challenges: biotwinChallenges,
  contributions: biotwinContributions,
  retrospective: biotwinRetrospective,
};
