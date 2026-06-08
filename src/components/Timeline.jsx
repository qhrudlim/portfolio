import React, { useState } from 'react';

const Timeline = () => {
  const [filter, setFilter] = useState('All');

  const historyData = [
    {
      date: '2025.07 - 2026.06',
      title: '삼성 청년 SW 아카데미(SSAFY) 14기 수료',
      description: '구미캠퍼스 수료 (AI, FE, BE, 알고리즘 교육 이수)',
      category: 'Education'
    },
    {
      date: '2026.01 - 2026.06',
      title: '삼성 청년 SW 아카데미(SSAFY) 2학기 교육 이수',
      description: '웹 개발 심화 과정 및 실무형 팀 프로젝트 3회 수행',
      category: 'Education'
    },
    {
      date: '2026.04 - 2026.06',
      title: '삼성 청년 SW 아카데미(SSAFY) 자율 프로젝트 - JIPCHAK',
      description: '인형뽑기 확률 계산 AI 오픈소스 프로젝트 (5인 팀)',
      category: 'Project'
    },
    {
      date: '2026.02 - 2026.04',
      title: '삼성 청년 SW 아카데미(SSAFY) 특화 프로젝트 - BioTwin',
      description: '세포 배양 실시간 모니터링 및 시각화 시스템 (6인 팀)',
      category: 'Project'
    },
    {
      date: '2026.01 - 2026.02',
      title: '삼성 청년 SW 아카데미(SSAFY) 공통 프로젝트 - DocQ',
      description: 'PDF 기반 3D 퀴즈 게임 서비스 개발 및 **반 우승** (6인 팀)',
      category: 'Project'
    },
    {
      date: '2025.07 - 2025.12',
      title: '삼성 청년 SW 아카데미(SSAFY) 1학기 교육 이수',
      description: '기초 알고리즘 및 웹 프로그래밍 역량 습득',
      category: 'Education'
    },
    {
      date: '2022.03 - 2025.08',
      title: '충남대학교 평화안보대학원 과학수사학과 석사 졸업',
      description: '과학수사학 전공 석사 학위 취득',
      category: 'Education'
    },
    {
      date: '2025.08',
      title: 'SW역량테스트 IM 등급 취득',
      description: '삼성 SW 역량 테스트 IM 등급 획득',
      category: 'Certification'
    },
    {
      date: '2025.03 - 2025.06',
      title: 'SBS 아카데미 컴퓨터아트학원 웹디자인 과정 수료',
      description: '웹디자인 및 퍼블리싱 기초 학습',
      category: 'Education'
    },
    {
      date: '2023.08',
      title: 'OPIc IM2 취득',
      description: '영어 회화 능력 인증 (현재 만료)',
      category: 'Certification'
    },
    {
      date: '2022.11 - 2023.10',
      title: '와이즈만영재교육 대전도안센터 과학 강사',
      description: '과학 영재 교육 및 강의 진행',
      category: 'Experience'
    },
    {
      date: '2022.11',
      title: '간호조무사 자격 취득',
      description: '보건복지부 발행',
      category: 'Certification'
    },
    {
      date: '2022.08 - 2022.11',
      title: '상아치과의원 재직',
      description: '치과 행정 및 지원 업무 수행',
      category: 'Experience'
    },
    {
      date: '2018.03 - 2022.02',
      title: '계명대학교 화학전공 학사 졸업',
      description: '화학 전공 학사 학위 취득',
      category: 'Education'
    },
    {
      date: '2020.02 - 2022.02',
      title: 'GS25 대구외고점 아르바이트',
      description: '매장 관리 및 고객 서비스 업무',
      category: 'Experience'
    },
    {
      date: '2016.02',
      title: '한국사능력검정시험 2급 취득',
      description: '국사편찬위원회 발행',
      category: 'Certification'
    }
  ];

  const categories = ['All', 'Education', 'Experience', 'Project', 'Certification'];

  const filteredData = filter === 'All' 
    ? historyData 
    : historyData.filter(item => item.category === filter);

  return (
    <div className="timeline-page section animate-reveal">
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="timeline-container">
        {filteredData.map((item, index) => (
          <div key={`${filter}-${index}`} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <span className={`category-badge ${item.category.toLowerCase()}`}>{item.category}</span>
              <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;