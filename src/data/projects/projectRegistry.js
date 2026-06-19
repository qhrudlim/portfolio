import {
  biotwinDetail,
  biotwinSummary,
  docqDetail,
  docqRefactorDetail,
  docqRefactorSummary,
  docqSummary,
  firstOpensourceDetail,
  firstOpensourceSummary,
  jipchakDetail,
  jipchakSummary,
  portfolioDetail,
  portfolioSummary
} from './index';

export const projectRegistry = [
  { summary: portfolioSummary, detail: portfolioDetail },
  { summary: jipchakSummary, detail: jipchakDetail },
  { summary: firstOpensourceSummary, detail: firstOpensourceDetail },
  { summary: biotwinSummary, detail: biotwinDetail },
  { summary: docqRefactorSummary, detail: docqRefactorDetail },
  { summary: docqSummary, detail: docqDetail }
];

export const projectSummaries = projectRegistry.map(({ summary }) => summary);

