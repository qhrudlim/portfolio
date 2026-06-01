import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page section animate-reveal">
      <h2>Contact Me</h2>
      <div className="contact-card">
        <p className="contact-intro">제 포트폴리오를 읽어주셔서 감사합니다. <br/>편하게 연락주세요!</p>
        <div className="contact-details">
          <div className="contact-item">
            <strong>Email</strong>
            <span>qhrudlim@gmail.com</span>
          </div>
          <div className="contact-item">
            <strong>Social</strong>
            <div className="social-links-page">
              <a href="https://github.com/qhrudlim" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/qhrudlim" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
