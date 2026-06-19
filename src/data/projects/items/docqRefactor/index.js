export { docqRefactorSummary } from './summary';
import { docqRefactorBaseDetail } from './base';
import { docqRefactorTech } from './tech';
import { docqRefactorChallenges } from './challenges';
import { docqRefactorContributions } from './contributions';
import { docqRefactorRetrospective } from './retrospective';

export const docqRefactorDetail = {
  ...docqRefactorBaseDetail,
  tech: docqRefactorTech,
  challenges: docqRefactorChallenges,
  contributions: docqRefactorContributions,
  retrospective: docqRefactorRetrospective,
};
