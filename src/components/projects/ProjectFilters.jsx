const ProjectFilters = ({ categories, selected, onSelect }) => (
  <div className="filter-container project-filter-container">
    {categories.map((category) => (
      <button
        key={category.id}
        className={`filter-btn ${selected === category.id ? 'active' : ''}`}
        onClick={() => onSelect(category.id)}
        type="button"
      >
        {category.label}
      </button>
    ))}
  </div>
);

export default ProjectFilters;
