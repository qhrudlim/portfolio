import { FaCheckCircle } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const ContributionsSection = ({ contributions }) => (
  <section className="detail-section card">
    <SectionTitle icon={<FaCheckCircle className="title-icon" />}>주요 기여 내용</SectionTitle>
    <ul className="contribution-list">
      {contributions.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </section>
);

export default ContributionsSection;
