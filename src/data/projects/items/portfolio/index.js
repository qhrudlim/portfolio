export { portfolioSummary } from './summary';
import { portfolioBaseDetail } from './base';
import { portfolioTech } from './tech';
import { portfolioChallenges } from './challenges';
import { portfolioContributions } from './contributions';
import { portfolioRetrospective } from './retrospective';

export const portfolioDetail = {
  ...portfolioBaseDetail,
  tech: portfolioTech,
  challenges: portfolioChallenges,
  contributions: portfolioContributions,
  retrospective: portfolioRetrospective,
};
