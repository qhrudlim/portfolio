import { projectSummaries } from '../data/projects/projectRegistry';
import { projectCategories } from '../data/projects/categories/projectCategories';
import { useFilteredItems } from '../hooks/useFilteredItems';
import ProjectFilters from './projects/ProjectFilters';
import ProjectTimelineItem from './projects/ProjectTimelineItem';

const Projects = () => {
  const { filter, setFilter, filteredItems } = useFilteredItems({
    items: projectSummaries,
    initialFilter: 'all',
    allFilter: 'all',
    getFilterValue: (project) => project.category
  });

  return (
    <section id="projects" className="section animate-reveal">
      <ProjectFilters
        categories={projectCategories}
        selected={filter}
        onSelect={setFilter}
      />

      <div className="timeline-container">
        {filteredItems.map((project) => (
          <ProjectTimelineItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
