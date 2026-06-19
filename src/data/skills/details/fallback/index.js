import { fallbackFrontendDetails } from './frontend';
import { fallbackInteractionDetails } from './interaction';
import { fallbackLanguageAiDetails } from './languageAi';
import { fallbackBackendInfraDetails } from './backendInfra';
import { fallbackToolsExtraDetails } from './toolsExtra';

export const fallbackSkillDetails = {
  ...fallbackFrontendDetails,
  ...fallbackInteractionDetails,
  ...fallbackLanguageAiDetails,
  ...fallbackBackendInfraDetails,
  ...fallbackToolsExtraDetails
};
