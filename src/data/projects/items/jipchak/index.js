export { jipchakSummary } from './summary';
import { jipchakBaseDetail } from './base';
import { jipchakTech } from './tech';
import { jipchakChallenges } from './challenges';
import { jipchakContributions } from './contributions';
import { jipchakRetrospective } from './retrospective';

export const jipchakDetail = {
  ...jipchakBaseDetail,
  tech: jipchakTech,
  challenges: jipchakChallenges,
  contributions: jipchakContributions,
  retrospective: jipchakRetrospective,
};
