import { projectRegistry } from './projectRegistry';

export const projectData = Object.fromEntries(
  projectRegistry.map(({ summary, detail }) => [
    summary.id,
    { ...detail, id: summary.id }
  ])
);
