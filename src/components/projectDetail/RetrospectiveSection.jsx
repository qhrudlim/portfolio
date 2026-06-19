import { FaHistory } from 'react-icons/fa';
import RetrospectiveItem from './RetrospectiveItem';
import SectionTitle from './SectionTitle';

const RetrospectiveSection = ({ retrospective }) => {
  if (!retrospective) return null;

  return (
    <section className="detail-section card">
      <SectionTitle icon={<FaHistory className="title-icon" />}>프로젝트 회고</SectionTitle>
      <div className="retrospective-grid">
        {retrospective.map((item) => (
          <RetrospectiveItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RetrospectiveSection;
