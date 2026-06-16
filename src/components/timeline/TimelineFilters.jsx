const TimelineFilters = ({ categories, selected, onSelect }) => (
  <div className="filter-container">
    {categories.map((category) => (
      <button
        key={category}
        className={`filter-btn ${selected === category ? 'active' : ''}`}
        onClick={() => onSelect(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default TimelineFilters;
