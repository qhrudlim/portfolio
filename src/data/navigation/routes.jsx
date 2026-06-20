import About from '../../components/About';
import Skills from '../../components/Skills';
import Timeline from '../../components/Timeline';
import Projects from '../../components/Projects';
import ProjectDetail from '../../components/ProjectDetail';
import Contact from '../../components/Contact';

export const routes = [
  { path: '/', label: 'About', element: <About />, showInNav: true },
  { path: '/skills', label: 'Skills', element: <Skills />, showInNav: true },
  { path: '/timeline', label: 'Timeline', element: <Timeline />, showInNav: true },
  { path: '/projects', label: 'Projects', element: <Projects />, showInNav: true },
  { path: '/project/:id', element: <ProjectDetail /> },
  { path: '/contact', label: 'Contact', element: <Contact />, showInNav: true }
];

export const navItems = routes
  .filter((route) => route.showInNav)
  .map(({ path, label }) => ({ to: path, label }));

