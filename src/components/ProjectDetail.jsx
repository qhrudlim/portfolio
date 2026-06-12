import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  SiReact, SiVuedotjs, SiTypescript, SiTailwindcss, 
  SiThreedotjs, SiBlender, SiUnity, SiVite, SiPinia,
  SiSpringboot, SiSpringsecurity, SiMysql, SiOpenai, SiDocker,
  SiRedis, SiFastapi, SiPython, SiPostgresql, SiApachekafka, SiJenkins,
  SiArduino, SiRaspberrypi, SiNginx,
  SiJavascript, SiHtml5, SiCss, SiGit, SiGithub, SiGithubactions, SiGithubpages, SiGitlab
} from 'react-icons/si';
import { FaCalendarAlt, FaUserTag, FaRocket, FaLightbulb, FaTools, FaCheckCircle, FaMicrochip, FaChartLine, FaHistory, FaJava, FaAws } from 'react-icons/fa';

import { 
  portfolioDetail, jipchakDetail, firstOpensourceDetail, 
  biotwinDetail, docqRefactorDetail, docqDetail 
} from './projectsData';

const projectData = {
  'portfolio': portfolioDetail,
  'jipchak': jipchakDetail,
  'first-opensource': firstOpensourceDetail,
  'biotwin': biotwinDetail,
  'docq-refactor': docqRefactorDetail,
  'docq': docqDetail
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="section">프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="project-detail-page animate-reveal">
      <header className="project-hero">
        <div className="container">
          <Link to="/projects" className="back-link">← 목록으로 돌아가기</Link>
          <div className="hero-content">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            {project.achievements && <span className="achievement-badge">{project.achievements}</span>}
            <div className="project-info-grid">
              <div className="info-item">
                <FaCalendarAlt className="icon" />
                <span>{project.period}</span>
              </div>
              <div className="info-item">
                <FaUserTag className="icon" />
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="project-main container">
        <section className="detail-section card">
          <h3 className="section-title"><FaRocket className="title-icon" /> 프로젝트 개요</h3>
          <p className="overview-text">{project.overview}</p>
        </section>

        <section className="detail-section card">
          <h3 className="section-title"><FaTools className="title-icon" /> 사용 기술</h3>
          {Array.isArray(project.tech) ? (
            <div className="detail-skill-tags">
              {project.tech.map((t, i) => (
                <div key={i} className="detail-tag">
                  <span className="icon">{t.icon}</span>
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="structured-tech-display">
              {project.tech.grouped.map((group, i) => (
                <div key={i} className="tech-subsection" style={{ marginBottom: i !== project.tech.grouped.length - 1 ? '1.5rem' : '0' }}>
                  <h4 className="tech-sub-title" style={{ borderBottom: '2px solid #edf2f7', paddingBottom: '0.5rem', marginBottom: '1.2rem', color: 'var(--primary-color)' }}>
                    {group.category}
                  </h4>
                  <div className="detail-skill-tags">
                    {group.items.map((t, j) => (
                      <div key={j} className="detail-tag">
                        {t.icon && <span className="icon">{t.icon}</span>}
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {project.challenges.length > 0 && (
          <section className="detail-section card">
            <h3 className="section-title"><FaLightbulb className="title-icon" /> 기술적 난점 및 해결</h3>
            <div className="challenges-container">
              {project.challenges.map((c, i) => (
                <div key={i} className={['DocQ', 'BioTwin', 'JIPCHAK', 'DocQ Refactoring (Vanilla JS Migration)', 'Open Source Contribution (AI Explainer)', 'Portfolio Web CI/CD Pipeline'].includes(project.title) ? "challenge-card-structured" : "challenge-item"}>
                  {['DocQ', 'BioTwin', 'JIPCHAK', 'DocQ Refactoring (Vanilla JS Migration)', 'Open Source Contribution (AI Explainer)', 'Portfolio Web CI/CD Pipeline'].includes(project.title) ? (
                    <>
                      <div className="challenge-header">
                        <span className="goal-label">Goal</span>
                        <h4>{c.goal}</h4>
                      </div>
                      <div className="challenge-body">
                        <div className="process-step">
                          <div className="step-item">
                            <span className="step-label">초기 시도</span>
                            <p>{c.attempt}</p>
                          </div>
                          <div className="step-arrow">↓</div>
                          <div className="step-item error">
                            <span className="step-label">발생 문제</span>
                            <p>{c.issue}</p>
                          </div>
                          <div className="step-item analysis">
                            <span className="step-label">원인 분석</span>
                            <p>{c.cause}</p>
                          </div>
                        </div>
                        <div className="solution-step">
                          <div className="step-item success">
                            <span className="step-label">해결 방법</span>
                            <p>{c.solution}</p>
                          </div>
                          <div className="step-item reason">
                            <span className="step-label">판단 근거</span>
                            <p>{c.reason}</p>
                          </div>
                          <div className="step-item result">
                            <span className="step-label">결과</span>
                            <p><strong>{c.result}</strong></p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="issue">
                        <span className="label">Problem</span>
                        <p>{c.issue}</p>
                      </div>
                      <div className="solution">
                        <span className="label">Solution</span>
                        <p>{c.solution}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="detail-section card">
          <h3 className="section-title"><FaCheckCircle className="title-icon" /> 주요 기여 내용</h3>
          <ul className="contribution-list">
            {project.contributions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>

        {project.retrospective && (
          <section className="detail-section card">
            <h3 className="section-title"><FaHistory className="title-icon" /> 프로젝트 회고</h3>
            <div className="retrospective-grid">
              {project.retrospective.map((r, i) => (
                <div key={i} className="retrospective-item">
                  <h4>{r.title}</h4>
                  <p>{r.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.images && project.images.length > 0 && (
          <section className="detail-section image-section card">
            <h3 className="section-title">Project Preview</h3>
            <div className="project-image-placeholder">
              <p>이미지 준비 중입니다.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
