import ModalShell from '../common/ModalShell';
import SkillDescriptionList from './SkillDescriptionList';
import SkillLevel from './SkillLevel';
import SkillModalHeader from './SkillModalHeader';

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <ModalShell titleId="skill-modal-title" closeLabel="스킬 상세 닫기" onClose={onClose}>
      <SkillModalHeader skill={skill} />
      <SkillLevel level={skill.level} />
      <SkillDescriptionList items={skill.description} />
    </ModalShell>
  );
};

export default SkillModal;
