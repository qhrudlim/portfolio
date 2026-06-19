import FilterTabs from '../common/FilterTabs';

const ProjectFilters = ({ categories, selected, onSelect }) => (
  <FilterTabs
    items={categories}
    selected={selected}
    onSelect={onSelect}
    getKey={(category) => category.id}
    getLabel={(category) => category.label}
    className="project-filter-container"
  />
);

export default ProjectFilters;
