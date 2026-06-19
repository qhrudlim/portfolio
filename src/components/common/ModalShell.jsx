import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const ModalShell = ({ titleId, closeLabel, onClose, children }) => (
  createPortal((
    <div
      className="skill-modal-backdrop"
      role="presentation"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <article className="skill-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button type="button" className="skill-modal-close" aria-label={closeLabel} onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </article>
    </div>
  ), document.body)
);

export default ModalShell;

