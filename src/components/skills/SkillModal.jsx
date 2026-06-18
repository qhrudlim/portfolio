import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import SkillLevel from './SkillLevel';

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  return createPortal((
    <div
      className="skill-modal-backdrop"
      role="presentation"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <article className="skill-modal" role="dialog" aria-modal="true" aria-labelledby="skill-modal-title">
        <button type="button" className="skill-modal-close" aria-label="스킬 상세 닫기" onClick={onClose}>
          <FaTimes />
        </button>

        <header className="skill-modal-header">
          <span className="skill-modal-icon">{skill.icon}</span>
          <div>
            <p className="skill-modal-category">{skill.category}</p>
            <h3 id="skill-modal-title">{skill.name}</h3>
          </div>
        </header>

        <SkillLevel level={skill.level} />

        <ul className="skill-description-list">
          {skill.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  ), document.body);
};

export default SkillModal;
