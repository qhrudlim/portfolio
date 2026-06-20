import { timelineCategories, timelineData } from '../data/timeline/timelineData';
import { useFilteredItems } from '../hooks/useFilteredItems';
import TimelineFilters from './timeline/TimelineFilters';
import TimelineItem from './timeline/TimelineItem';

const Timeline = () => {
  const { filter, setFilter, filteredItems } = useFilteredItems({
    items: timelineData,
    initialFilter: 'All',
    allFilter: 'All',
    getFilterValue: (item) => item.category
  });

  return (
    <div className="timeline-page section animate-reveal">
      <TimelineFilters
        categories={timelineCategories}
        selected={filter}
        onSelect={setFilter}
      />

      <div className="timeline-container">
        {filteredItems.map((item) => (
          <TimelineItem key={`${item.date}-${item.title}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
