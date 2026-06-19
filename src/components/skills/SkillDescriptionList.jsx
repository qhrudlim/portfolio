const SkillDescriptionList = ({ items }) => (
  <ul className="skill-description-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default SkillDescriptionList;

