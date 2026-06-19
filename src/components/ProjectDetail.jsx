import { useParams } from 'react-router-dom';
import { projectData } from '../data/projects/projectLookup';
import ChallengesSection from './projectDetail/ChallengesSection';
import ContributionsSection from './projectDetail/ContributionsSection';
import OverviewSection from './projectDetail/OverviewSection';
import PreviewSection from './projectDetail/PreviewSection';
import ProjectHero from './projectDetail/ProjectHero';
import RetrospectiveSection from './projectDetail/RetrospectiveSection';
import TechSection from './projectDetail/TechSection';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="section">프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className="project-detail-page animate-reveal">
      <ProjectHero project={project} />
      <main className="project-main container">
        <OverviewSection overview={project.overview} />
        <TechSection tech={project.tech} />
        <ChallengesSection challenges={project.challenges} />
        <ContributionsSection contributions={project.contributions} />
        <RetrospectiveSection retrospective={project.retrospective} />
        <PreviewSection images={project.images} />
      </main>
    </div>
  );
};

export default ProjectDetail;
