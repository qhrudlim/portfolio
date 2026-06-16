const PreviewSection = ({ images }) => {
  if (!images?.length) return null;

  return (
    <section className="detail-section image-section card">
      <h3 className="section-title">Project Preview</h3>
      <div className="project-image-placeholder">
        <p>이미지 준비 중입니다.</p>
      </div>
    </section>
  );
};

export default PreviewSection;
