import FilterTabs from '../common/FilterTabs';

const TimelineFilters = ({ categories, selected, onSelect }) => (
  <FilterTabs
    items={categories}
    selected={selected}
    onSelect={onSelect}
    getKey={(category) => category}
    getLabel={(category) => category}
  />
);

export default TimelineFilters;
