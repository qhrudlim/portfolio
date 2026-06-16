import { FaRocket } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const OverviewSection = ({ overview }) => (
  <section className="detail-section card">
    <SectionTitle icon={<FaRocket className="title-icon" />}>프로젝트 개요</SectionTitle>
    <p className="overview-text">{overview}</p>
  </section>
);

export default OverviewSection;
