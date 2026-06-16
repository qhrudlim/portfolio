const Step = ({ className = '', label, children }) => (
  <div className={`step-item ${className}`}>
    <span className="step-label">{label}</span>
    <p>{children}</p>
  </div>
);

const StructuredChallenge = ({ challenge }) => (
  <div className="challenge-card-structured">
    <div className="challenge-header">
      <span className="goal-label">Goal</span>
      <h4>{challenge.goal}</h4>
    </div>
    <div className="challenge-body">
      <div className="process-step">
        <Step label="초기 시도">{challenge.attempt}</Step>
        <div className="step-arrow">↓</div>
        <Step className="error" label="발생 문제">{challenge.issue}</Step>
        <Step className="analysis" label="원인 분석">{challenge.cause}</Step>
      </div>
      <div className="solution-step">
        <Step className="success" label="해결 방법">{challenge.solution}</Step>
        <Step className="reason" label="판단 근거">{challenge.reason}</Step>
        <Step className="result" label="결과"><strong>{challenge.result}</strong></Step>
      </div>
    </div>
  </div>
);

export default StructuredChallenge;
