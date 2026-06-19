import ContactItem from './contact/ContactItem';
import SocialLinks from './contact/SocialLinks';

const Contact = () => {
  return (
    <div className="contact-page section animate-reveal">
      <div className="contact-card">
        <p className="contact-intro">제 포트폴리오를 읽어주셔서 감사합니다. <br/>편하게 연락주세요!</p>
        <div className="contact-details">
          <ContactItem label="Email">
            <span>qhrudlim@gmail.com</span>
          </ContactItem>
          <ContactItem label="Social">
            <SocialLinks />
          </ContactItem>
        </div>
      </div>
    </div>
  );
};

export default Contact;
