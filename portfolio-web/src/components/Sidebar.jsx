import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile-image">
          <div className="img-placeholder">임</div>
        </div>
        <h1 className="name">임보경</h1>
        <p className="role">Frontend Dev</p>
      </div>
      <div className="contact-info">
        <p className="phone">010-3396-6856</p>
        <div className="social-links">
          <a href="https://github.com/qhrudlim" target="_blank" rel="noopener noreferrer">GH</a>
          <a href="https://www.linkedin.com/in/qhrudlim" target="_blank" rel="noopener noreferrer">LI</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
