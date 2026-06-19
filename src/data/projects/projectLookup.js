import { projectRegistry } from './projectRegistry';

export const projectData = Object.fromEntries(
  projectRegistry.map(({ detail }) => [detail.id, detail])
);
