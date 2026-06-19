const RetrospectiveItem = ({ item }) => (
  <div className="retrospective-item">
    <h4>{item.title}</h4>
    <p>{item.content}</p>
  </div>
);

export default RetrospectiveItem;

