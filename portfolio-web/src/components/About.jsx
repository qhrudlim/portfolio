import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="section about-hero">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={profileImg} alt="임보경" className="profile-photo" />
        </div>
        <div className="about-text">
          <h1 className="hero-name">임보경</h1>
          <p className="hero-role">Frontend Developer</p>
          <p className="hero-philosophy">
            "사용자 경험 흐름을 설계하고 단순하고 유지보수하기 쉬운 구조를 유지하는 데 중점을 둡니다."
          </p>
          <div className="about-bio">
            <p>
              단순한 기능 구현을 넘어 상태 흐름의 명확성과 유지보수성을 최우선으로 생각하는 프론트엔드 개발자 임보경입니다.
              문제를 구조화하여 정리하는 것을 즐기며, 구현 후의 리팩토링과 UX 고도화 과정에서 큰 보람을 느낍니다.
              질문하기 전 스스로 깊이 있게 탐구하는 과정을 중요하게 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
