const TimelineItem = ({ item }) => (
  <div className="timeline-item">
    <div className="timeline-dot" />
    <div className="timeline-date">{item.date}</div>
    <div className="timeline-content">
      <span className={`category-badge ${item.category.toLowerCase()}`}>
        {item.category}
      </span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </div>
);

export default TimelineItem;
