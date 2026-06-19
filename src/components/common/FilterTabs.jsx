const FilterTabs = ({ items, selected, onSelect, getKey, getLabel, className = '' }) => (
  <div className={`filter-container ${className}`.trim()}>
    {items.map((item) => {
      const key = getKey(item);

      return (
        <button
          key={key}
          className={`filter-btn ${selected === key ? 'active' : ''}`}
          onClick={() => onSelect(key)}
          type="button"
        >
          {getLabel(item)}
        </button>
      );
    })}
  </div>
);

export default FilterTabs;

