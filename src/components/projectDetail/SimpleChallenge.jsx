const SimpleChallenge = ({ challenge }) => (
  <div className="challenge-item">
    <div className="issue">
      <span className="label">Problem</span>
      <p>{challenge.issue}</p>
    </div>
    <div className="solution">
      <span className="label">Solution</span>
      <p>{challenge.solution}</p>
    </div>
  </div>
);

export default SimpleChallenge;
