import { useState } from 'react';
import { projectSummaries } from '../data/projects/projectRegistry';
import { projectCategories } from '../data/projects/categories/projectCategories';
import ProjectFilters from './projects/ProjectFilters';
import ProjectTimelineItem from './projects/ProjectTimelineItem';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all'
    ? projectSummaries
    : projectSummaries.filter((project) => project.category === filter);

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
