import { techIcons } from '../../data/tech/techIcons';

const TechIcon = ({ tech }) => {
  const icon = tech.icon || techIcons[tech.name];

  if (!icon) return null;

  return <span className="icon">{icon}</span>;
};

export default TechIcon;

