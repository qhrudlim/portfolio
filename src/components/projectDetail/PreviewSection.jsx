import ProjectImageGallery from './ProjectImageGallery';

const PreviewSection = ({ images }) => {
  if (!images?.length) return null;

  return (
    <section className="detail-section image-section card">
      <h3 className="section-title">Project Preview</h3>
      <ProjectImageGallery images={images} />
    </section>
  );
};

export default PreviewSection;
