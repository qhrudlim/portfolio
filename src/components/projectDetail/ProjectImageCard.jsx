const ProjectImageCard = ({ image }) => (
  <figure className="project-image-card">
    <img src={image.src} alt={image.alt || image.caption || 'Project preview'} />
    {image.caption && <figcaption>{image.caption}</figcaption>}
  </figure>
);

export default ProjectImageCard;

