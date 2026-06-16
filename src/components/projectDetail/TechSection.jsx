import { FaTools } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import TechTag from './TechTag';

const TechSection = ({ tech }) => (
  <section className="detail-section card">
    <SectionTitle icon={<FaTools className="title-icon" />}>사용 기술</SectionTitle>
    {Array.isArray(tech) ? (
      <div className="detail-skill-tags">
        {tech.map((item) => <TechTag key={item.name} tech={item} />)}
      </div>
    ) : (
      <div className="structured-tech-display">
        {tech.grouped.map((group) => (
          <div key={group.category} className="tech-subsection">
            <h4 className="tech-sub-title">{group.category}</h4>
            <div className="detail-skill-tags">
              {group.items.map((item) => <TechTag key={item.name} tech={item} />)}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default TechSection;
