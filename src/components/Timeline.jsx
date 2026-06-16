import { useState } from 'react';
import { timelineCategories, timelineData } from '../data/timeline/timelineData';
import TimelineFilters from './timeline/TimelineFilters';
import TimelineItem from './timeline/TimelineItem';

const Timeline = () => {
  const [filter, setFilter] = useState('All');
  const filteredData = filter === 'All'
    ? timelineData
    : timelineData.filter((item) => item.category === filter);

  return (
    <div className="timeline-page section animate-reveal">
      <TimelineFilters
        categories={timelineCategories}
        selected={filter}
        onSelect={setFilter}
      />

      <div className="timeline-container">
        {filteredData.map((item) => (
          <TimelineItem key={`${item.date}-${item.title}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
