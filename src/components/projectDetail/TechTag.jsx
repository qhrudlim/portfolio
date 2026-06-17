import { FaStar } from 'react-icons/fa';

const TechTag = ({ tech }) => (
  <div className={`detail-tag ${tech.myTech ? 'my-tech' : ''}`}>
    {tech.myTech && (
      <span className="my-tech-badge" title="My Tech" aria-label="My Tech">
        <FaStar aria-hidden="true" />
      </span>
    )}
    {tech.icon && <span className="icon">{tech.icon}</span>}
    <span>{tech.name}</span>
  </div>
);

export default TechTag;
