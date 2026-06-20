import ProjectPreviewPlaceholder from './ProjectPreviewPlaceholder';
import ProjectImageList from './ProjectImageList';

const ProjectImageGallery = ({ images }) => {
  if (!images?.length) return <ProjectPreviewPlaceholder />;

  return <ProjectImageList images={images} />;
};

export default ProjectImageGallery;
