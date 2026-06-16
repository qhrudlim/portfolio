import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  SiReact, SiVuedotjs, SiHtml5, SiTailwindcss, 
  SiDjango, SiJavascript, SiTypescript, SiPython, 
  SiMysql, SiGit, SiGithub, SiGitlab, SiJira, 
  SiFigma, SiMattermost, SiPostman, SiUnity, SiVite, SiThreedotjs, SiBlender,
  SiPinia, SiDocker, SiLinux, SiPandas, SiNumpy, SiJupyter, SiGooglecolab,
  SiFramer, SiGreensock, SiGithubactions, SiGithubpages
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaChartLine, FaMicrochip, FaAws, FaCubes, FaExchangeAlt, FaTimes } from 'react-icons/fa';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    if (!selectedSkill) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedSkill(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedSkill]);

  const skillDetails = {
    JavaScript: {
      level: 4,
      levelText: '상',
      description: [
        'ES6+ 문법 기반 웹 애플리케이션 개발 경험이 있습니다.',
        'DOM 제어 및 이벤트 기반 인터랙션을 구현할 수 있습니다.',
        '비동기 처리(Promise, Async/Await)를 활용한 로직 구현 경험이 있습니다.',
        '공개 저장소의 UI 스크롤 이슈를 분석하고 JavaScript 코드를 수정해 Pull Request에 반영한 경험이 있습니다.'
      ]
    },
    React: {
      level: 4,
      levelText: '상',
      description: [
        'React 기반 SPA 개발 경험을 보유하고 있습니다.',
        '컴포넌트 재사용성을 고려한 UI 설계 및 구현 경험이 있습니다.',
        'Recharts를 활용한 데이터 시각화 대시보드를 개발한 경험이 있습니다.',
        'GitHub Actions 기반 자동 배포와 AWS EC2 기반 프로젝트 배포 및 운영 환경 테스트 경험이 있습니다.'
      ]
    },
    TypeScript: {
      level: 4,
      levelText: '상',
      description: [
        '정적 타입 기반의 안정적인 프론트엔드 아키텍처 설계 경험이 있습니다.',
        'React 및 Vue 환경에서 TypeScript를 적용한 경험이 있습니다.',
        '상태 관리 및 비즈니스 로직 설계 과정에서 타입 안정성을 확보할 수 있습니다.',
        '대규모 컴포넌트 구조에서 유지보수성을 고려해 개발할 수 있습니다.'
      ]
    },
    MySQL: {
      level: 3,
      levelText: '중',
      description: [
        'SQL을 활용한 데이터 조회 및 가공 경험이 있습니다.',
        '데이터베이스 연결 및 CRUD 처리를 구현할 수 있습니다.',
        '데이터 분석을 위한 기본 쿼리 작성이 가능합니다.',
        '1:1, 1:N, N:N 관계 설계와 관계형 데이터베이스 구조를 이해하고 있습니다.'
      ]
    },
    Python: {
      level: 4,
      levelText: '상',
      description: [
        'Python 기반 알고리즘 문제 해결 경험을 보유하고 있습니다.',
        'Django MVT 기반 CRUD 구현 경험을 보유하고 있습니다.',
        '데이터 처리 및 업무 자동화 로직을 구현할 수 있습니다.',
        '문제 해결 중심의 로직 설계 역량을 갖추고 있습니다.'
      ]
    },
    Java: {
      level: 2,
      levelText: '하',
      description: [
        '객체 지향 프로그래밍 개념을 이해하고 있습니다.',
        'Java 기반 알고리즘 구현 경험이 있습니다.',
        '자료구조 및 알고리즘 학습 경험이 있습니다.',
        '백엔드 개발 역량 강화를 위해 지속적으로 학습하고 있습니다.'
      ]
    },
    'AWS EC2': {
      level: 2,
      levelText: '하',
      description: [
        'AWS EC2 환경에서 운영 중인 서비스의 기능 검증 및 테스트 경험이 있습니다.',
        '운영 환경에서 기능 검증 및 배포 테스트를 수행한 경험이 있습니다.',
        '팀 프로젝트의 실제 서비스 배포 및 운영 경험을 보유하고 있습니다.',
        '클라우드 환경 기반 웹 서비스 운영 구조를 이해하고 있습니다.'
      ]
    }
  };

  const fallbackSkillDetails = {
    HTML: { level: 3, levelText: '중', description: ['시맨틱 마크업을 기반으로 웹 페이지 구조를 설계하고 구현할 수 있습니다.'] },
    CSS: { level: 3, levelText: '중', description: ['반응형 레이아웃과 인터랙션 스타일링을 구현할 수 있습니다.'] },
    'Tailwind CSS': { level: 3, levelText: '중', description: ['유틸리티 클래스를 활용해 빠르게 일관된 UI를 구성할 수 있습니다.'] },
    'Vue.js': { level: 3, levelText: '중', description: ['Vue 기반 화면 구성과 컴포넌트 중심 개발을 수행할 수 있습니다.'] },
    Vite: { level: 3, levelText: '중', description: ['모던 프론트엔드 개발 환경을 구성하고 빌드 흐름을 다룰 수 있습니다.'] },
    Figma: { level: 3, levelText: '중', description: ['UI 시안을 이해하고 구현 가능한 화면 구조로 전환할 수 있습니다.'] },
    Zustand: { level: 3, levelText: '중', description: ['가벼운 전역 상태 관리 구조를 설계하고 적용할 수 있습니다.'] },
    Pinia: { level: 3, levelText: '중', description: ['Vue 프로젝트에서 스토어 기반 상태 관리를 적용할 수 있습니다.'] },
    Axios: { level: 3, levelText: '중', description: ['REST API 요청, 응답 처리, 에러 흐름을 프론트엔드에 연결할 수 있습니다.'] },
    'Framer Motion': { level: 2, levelText: '하', description: ['React 화면 전환과 마이크로 인터랙션을 구현할 수 있습니다.'] },
    'Three.js': { level: 3, levelText: '중', description: ['3D 객체 렌더링과 사용자 인터랙션이 포함된 화면을 구현한 경험이 있습니다.'] },
    GSAP: { level: 2, levelText: '하', description: ['스크롤 및 타임라인 기반 애니메이션을 화면 경험에 적용할 수 있습니다.'] },
    Recharts: { level: 3, levelText: '중', description: ['차트 기반 데이터 시각화 대시보드를 구현할 수 있습니다.'] },
    Pandas: { level: 2, levelText: '하', description: ['Python 데이터 처리 과정에서 표 형식 데이터를 다룰 수 있습니다.'] },
    Numpy: { level: 2, levelText: '하', description: ['기초적인 수치 연산과 배열 기반 데이터 처리를 수행할 수 있습니다.'] },
    Jupyter: { level: 2, levelText: '하', description: ['노트북 환경에서 데이터 분석 및 실험 과정을 정리할 수 있습니다.'] },
    'Google Colab': { level: 2, levelText: '하', description: ['Colab 환경에서 Python 기반 실험과 데이터 분석을 수행할 수 있습니다.'] },
    Django: { level: 3, levelText: '중', description: ['Django MVT 구조를 기반으로 CRUD 기능을 구현할 수 있습니다.'] },
    Postman: { level: 3, levelText: '중', description: ['API 요청을 테스트하고 응답을 검증할 수 있습니다.'] },
    'GitHub Actions': { level: 3, levelText: '중', description: ['GitHub Actions를 활용한 자동 배포 흐름을 구성한 경험이 있습니다.'] },
    'GitHub Pages': { level: 3, levelText: '중', description: ['정적 웹 프로젝트를 GitHub Pages에 배포할 수 있습니다.'] },
    Docker: { level: 2, levelText: '하', description: ['컨테이너 기반 개발 및 실행 환경의 기본 구조를 이해하고 있습니다.'] },
    Linux: { level: 2, levelText: '하', description: ['기본 명령어와 서버 환경 작업 흐름을 이해하고 있습니다.'] },
    Git: { level: 3, levelText: '중', description: ['브랜치, 커밋, 병합 흐름을 활용해 형상 관리를 수행할 수 있습니다.'] },
    GitHub: { level: 3, levelText: '중', description: ['이슈, PR, 저장소 기반 협업 흐름을 사용할 수 있습니다.'] },
    GitLab: { level: 2, levelText: '하', description: ['GitLab 저장소 기반 협업과 이슈 관리 흐름을 이해하고 있습니다.'] },
    Jira: { level: 2, levelText: '하', description: ['프로젝트 일정과 작업 단위를 이슈 중심으로 관리할 수 있습니다.'] },
    Mattermost: { level: 2, levelText: '하', description: ['팀 커뮤니케이션과 프로젝트 공유를 위한 협업 도구로 활용할 수 있습니다.'] },
    Blender: { level: 2, levelText: '하', description: ['3D 프로젝트에 필요한 기본 모델링 리소스를 다룰 수 있습니다.'] },
    Unity: { level: 2, levelText: '하', description: ['기초적인 게임 오브젝트 구성과 인터랙션 흐름을 이해하고 있습니다.'] },
    Hardware: { level: 2, levelText: '하', description: ['실물 기기 연동과 기능 검증 중심의 프로젝트 경험이 있습니다.'] }
  };

  const getSkillDetail = (skill, category) => ({
    ...skill,
    category: category.title,
    ...(fallbackSkillDetails[skill.name] || { level: 1, levelText: '입문', description: [category.description] }),
    ...(skillDetails[skill.name] || {})
  });

  const skillCategories = [
    {
      title: 'Core Frontend',
      description: '사용자 중심의 UI/UX와 컴포넌트 기반 설계, 모던 빌드 시스템을 활용하여 웹 서비스를 구현합니다.',
      skills: [
        { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Vue.js', icon: <SiVuedotjs color="#4FC08D" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> }
      ]
      },
      {
      title: 'State & Interaction',
      description: '프로젝트 목적에 맞는 최적의 라이브러리를 도입하여, 전역 상태 관리부터 3D 렌더링 및 동적 애니메이션까지 차별화된 사용자 경험(UX)을 구현합니다.',
      skills: [
        { name: 'Zustand', icon: <FaCubes color="#433928" /> },
        { name: 'Pinia', icon: <SiPinia color="#FFD12F" /> },
        { name: 'Axios', icon: <FaExchangeAlt color="#5A29E4" /> },
        { name: 'Framer Motion', icon: <SiFramer color="#0055FF" /> },
        { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
        { name: 'GSAP', icon: <SiGreensock color="#88CE02" /> },
        { name: 'Recharts', icon: <FaChartLine color="#22B5BF" /> }
      ]
      },
      {
      title: 'Language & AI',
      description: '알고리즘 문제 해결 능력 및 정적 타입을 활용한 설계 역량과 함께, 파이썬 기반의 데이터 분석을 통한 인사이트 도출 경험을 갖추고 있습니다.',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'Pandas', icon: <SiPandas color="#150458" /> },
        { name: 'Numpy', icon: <SiNumpy color="#013243" /> },
        { name: 'Jupyter', icon: <SiJupyter color="#F37626" /> },
        { name: 'Google Colab', icon: <SiGooglecolab color="#F9AB00" /> }
      ]
      },
    {
      title: 'BE & DB & Infra',
      description: '서버 사이드 로직 설계부터 DB 관계 설계, 클라우드 환경 배포 및 실물 기기 연동까지 시스템 전반을 구축합니다.',
      skills: [
        { name: 'Django', icon: <SiDjango color="#092E20" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" /> },
        { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" /> },
        { name: 'AWS EC2', icon: <FaAws color="#FF9900" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
        { name: 'Linux', icon: <SiLinux color="#FCC624" /> }
      ]
    },
    {
      title: 'Tools & Extra',
      description: '효율적인 협업과 형상 관리, 프로젝트 일정 관리를 위해 다양한 도구를 적극 활용합니다.',
      skills: [
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'GitHub', icon: <SiGithub color="#181717" /> },
        { name: 'GitLab', icon: <SiGitlab color="#FC6D26" /> },
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'Mattermost', icon: <SiMattermost color="#0058CC" /> },
        { name: 'Blender', icon: <SiBlender color="#F5792A" /> },
        { name: 'Unity', icon: <SiUnity color="#000000" /> },
        { name: 'Hardware', icon: <FaMicrochip color="#555" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section animate-reveal">
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <button
                  key={sIndex}
                  type="button"
                  className="tag skill-tag-with-icon"
                  onClick={() => setSelectedSkill(getSkillDetail(skill, category))}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name" title={skill.name}>{skill.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSkill && createPortal((
        <div
          className="skill-modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedSkill(null);
            }
          }}
        >
          <article className="skill-modal" role="dialog" aria-modal="true" aria-labelledby="skill-modal-title">
            <button
              type="button"
              className="skill-modal-close"
              aria-label="스킬 상세 닫기"
              onClick={() => setSelectedSkill(null)}
            >
              <FaTimes />
            </button>

            <header className="skill-modal-header">
              <span className="skill-modal-icon">{selectedSkill.icon}</span>
              <div>
                <p className="skill-modal-category">{selectedSkill.category}</p>
                <h3 id="skill-modal-title">{selectedSkill.name}</h3>
              </div>
            </header>

            <div className="skill-level-area" aria-label={`5단계 중 ${selectedSkill.level}단계, ${selectedSkill.levelText}`}>
              <div className="skill-level-boxes">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`skill-level-box ${index < selectedSkill.level ? 'filled' : ''}`}
                  />
                ))}
              </div>
              <span className="skill-level-text">{selectedSkill.levelText}</span>
            </div>

            <ul className="skill-description-list">
              {selectedSkill.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      ), document.body)}
    </section>
  );
};

export default Skills;
