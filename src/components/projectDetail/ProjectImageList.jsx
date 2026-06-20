import ProjectImageCard from './ProjectImageCard';

const ProjectImageList = ({ images }) => (
  <div className="project-image-list">
    {images.map((image) => (
      <ProjectImageCard key={image.src || image.caption} image={image} />
    ))}
  </div>
);

export default ProjectImageList;

