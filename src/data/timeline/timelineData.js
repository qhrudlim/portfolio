import { timelinePastData } from './timelinePastData';
import { timelineRecentData } from './timelineRecentData';

export const timelineCategories = ['All', 'Education', 'Experience', 'Project', 'Certification'];
export const timelineData = [...timelineRecentData, ...timelinePastData];
