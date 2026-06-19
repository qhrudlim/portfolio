import { FaStar, FaTools } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import TechTag from './TechTag';

const TechGroupTitle = ({ group }) => (
  <h4 className="tech-sub-title">
    <span>{group.category}</span>
    {group.members && <span className="tech-members-badge">{group.members}</span>}
  </h4>
);

const TechSection = ({ tech }) => (
  <section className="detail-section card">
    <div className="detail-section-heading">
      <SectionTitle icon={<FaTools className="title-icon" />}>사용 기술</SectionTitle>
      <div className="my-tech-legend">
        <FaStar aria-hidden="true" />
        <span>My Tech</span>
      </div>
    </div>
    <div className="structured-tech-display">
      {tech.grouped.map((group) => (
        <div key={group.category} className="tech-subsection">
          <TechGroupTitle group={group} />
          <div className="detail-skill-tags">
            {group.items.map((item) => <TechTag key={item.name} tech={item} />)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechSection;
