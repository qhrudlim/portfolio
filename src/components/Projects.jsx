import { useState } from 'react';
import { 
  portfolioSummary, jipchakSummary, firstOpensourceSummary, 
  biotwinSummary, docqRefactorSummary, docqSummary 
} from './projectsData';
import { projectCategories } from '../data/projects/projectCategories';
import ProjectFilters from './projects/ProjectFilters';
import ProjectTimelineItem from './projects/ProjectTimelineItem';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = [
    portfolioSummary,
    jipchakSummary,
    firstOpensourceSummary,
    biotwinSummary,
    docqRefactorSummary,
    docqSummary
  ];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section animate-reveal">
      <ProjectFilters
        categories={projectCategories}
        selected={filter}
        onSelect={setFilter}
      />

      <div className="timeline-container">
        {filteredProjects.map((project) => (
          <ProjectTimelineItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
