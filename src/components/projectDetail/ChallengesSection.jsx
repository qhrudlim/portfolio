import { FaLightbulb } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import SimpleChallenge from './SimpleChallenge';
import StructuredChallenge from './StructuredChallenge';

const ChallengesSection = ({ challenges }) => {
  if (!challenges.length) return null;

  return (
    <section className="detail-section card">
      <SectionTitle icon={<FaLightbulb className="title-icon" />}>기술적 난점 및 해결</SectionTitle>
      <div className="challenges-container">
        {challenges.map((challenge, index) => (
          challenge.goal ? (
            <StructuredChallenge key={challenge.goal} challenge={challenge} />
          ) : (
            <SimpleChallenge key={`${challenge.issue}-${index}`} challenge={challenge} />
          )
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
