import { resumeFrontendDetails } from './frontend';
import { resumeInteractionDetails } from './interaction';
import { resumeLanguageAiDetails } from './languageAi';
import { resumeBackendInfraDetails } from './backendInfra';
import { resumeToolsExtraDetails } from './toolsExtra';

export const resumeSkillDetails = {
  ...resumeFrontendDetails,
  ...resumeInteractionDetails,
  ...resumeLanguageAiDetails,
  ...resumeBackendInfraDetails,
  ...resumeToolsExtraDetails
};
