export { firstOpensourceSummary } from './summary';
import { firstOpensourceBaseDetail } from './base';
import { firstOpensourceTech } from './tech';
import { firstOpensourceChallenges } from './challenges';
import { firstOpensourceContributions } from './contributions';
import { firstOpensourceRetrospective } from './retrospective';

export const firstOpensourceDetail = {
  ...firstOpensourceBaseDetail,
  tech: firstOpensourceTech,
  challenges: firstOpensourceChallenges,
  contributions: firstOpensourceContributions,
  retrospective: firstOpensourceRetrospective,
};
