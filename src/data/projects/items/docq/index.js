export { docqSummary } from './summary';
import { docqBaseDetail } from './base';
import { docqTech } from './tech';
import { docqChallenges } from './challenges';
import { docqContributions } from './contributions';
import { docqRetrospective } from './retrospective';

export const docqDetail = {
  ...docqBaseDetail,
  tech: docqTech,
  challenges: docqChallenges,
  contributions: docqContributions,
  retrospective: docqRetrospective,
};
