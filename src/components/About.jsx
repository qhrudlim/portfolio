import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="section about-hero animate-reveal">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={profileImg} alt="임보경" className="profile-photo" />
        </div>
        <div className="about-text">
          <h1 className="hero-name">임보경</h1>
          <p className="hero-role">Frontend Developer</p>
          <p className="hero-philosophy">
            "논리적 구조로 단단하게, 직관적 흐름으로 유연하게"
          </p>
          <div className="about-bio">
            <p>
              매일 더 나은 코드를 탐구하는 프론트엔드 개발자 임보경입니다.
              문제를 구조화하여 정리하는 것을 즐기며, 구현 후의 리팩토링과 UX 고도화 과정에서 큰 보람을 느낍니다.
              최근에는 오픈소스 생태계와 브라우저 엔진 기여에 깊은 관심을 가지고 공부하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
