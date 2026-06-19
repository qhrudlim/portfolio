const ContactItem = ({ label, children }) => (
  <div className="contact-item">
    <strong>{label}</strong>
    {children}
  </div>
);

export default ContactItem;

