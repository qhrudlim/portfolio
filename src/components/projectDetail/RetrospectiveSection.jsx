import { FaHistory } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const RetrospectiveSection = ({ retrospective }) => {
  if (!retrospective) return null;

  return (
    <section className="detail-section card">
      <SectionTitle icon={<FaHistory className="title-icon" />}>프로젝트 회고</SectionTitle>
      <div className="retrospective-grid">
        {retrospective.map((item) => (
          <div key={item.title} className="retrospective-item">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RetrospectiveSection;
