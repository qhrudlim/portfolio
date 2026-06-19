import ProjectPreviewPlaceholder from './ProjectPreviewPlaceholder';

const ProjectImageGallery = ({ images }) => {
  if (!images?.length) return <ProjectPreviewPlaceholder />;

  return (
    <div className="project-image-placeholder">
      <p>이미지 준비 중입니다.</p>
    </div>
  );
};

export default ProjectImageGallery;

